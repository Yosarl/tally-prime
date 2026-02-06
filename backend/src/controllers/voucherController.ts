import { Response } from "express";
import { AuthRequest } from "../middleware/auth.js";
import { Voucher } from "../models/Voucher.js";
import { calculateTotals, validateDoubleEntry } from "../services/accountingService.js";
import { computeVat } from "../services/vatService.js";

interface VoucherEntryInput {
  ledgerId: string;
  debit: number;
  credit: number;
  narration?: string;
  vatCategory?: "Standard5" | "Zero" | "Exempt" | "OutOfScope" | "ReverseCharge";
  vatInclusive?: boolean;
}

export const createVoucher = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { voucherType, voucherNumber, voucherDate, entries, narration } = req.body as {
    voucherType: string;
    voucherNumber: string;
    voucherDate: string;
    entries: VoucherEntryInput[];
    narration?: string;
  };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const enrichedEntries = entries.map((entry) => {
    if (entry.vatCategory) {
      const taxableAmount = entry.debit + entry.credit;
      const vatResult = computeVat({
        taxableAmount,
        vatCategory: entry.vatCategory,
        vatInclusive: entry.vatInclusive ?? false
      });
      return {
        ...entry,
        vatRate: vatResult.vatRate,
        vatAmount: vatResult.vatAmount
      };
    }
    return entry;
  });

  const { totalDebit, totalCredit } = validateDoubleEntry(
    enrichedEntries.map((entry) => ({
      ledgerId: entry.ledgerId as unknown as never,
      debit: entry.debit,
      credit: entry.credit,
      narration: entry.narration,
      vatCategory: entry.vatCategory,
      vatRate: entry.vatRate,
      vatAmount: entry.vatAmount
    }))
  );

  const voucher = await Voucher.create({
    companyId,
    voucherType,
    voucherNumber,
    voucherDate,
    entries: enrichedEntries,
    totalDebit,
    totalCredit,
    narration
  });

  return res.status(201).json(voucher);
};

export const listVouchers = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const vouchers = await Voucher.find({ companyId }).sort({ voucherDate: -1 });
  return res.json(vouchers);
};

export const voucherSummary = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const vouchers = await Voucher.find({ companyId });
  const totals = vouchers.reduce(
    (acc, voucher) => {
      acc.totalDebit += voucher.totalDebit;
      acc.totalCredit += voucher.totalCredit;
      return acc;
    },
    { totalDebit: 0, totalCredit: 0 }
  );

  return res.json({ count: vouchers.length, ...totals });
};
