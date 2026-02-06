import { Response } from "express";
import { AuthRequest } from "../middleware/auth.js";
import { Voucher } from "../models/Voucher.js";

export const vatSummary = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { from, to } = req.query as { from?: string; to?: string };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const dateFilter: Record<string, unknown> = {};
  if (from || to) {
    dateFilter.$gte = from ? new Date(from) : undefined;
    dateFilter.$lte = to ? new Date(to) : undefined;
  }

  const vouchers = await Voucher.find({
    companyId,
    ...(from || to ? { voucherDate: dateFilter } : {})
  });

  const summary = vouchers.reduce(
    (acc, voucher) => {
      const vatAmount = voucher.entries.reduce((sum, entry) => sum + (entry.vatAmount ?? 0), 0);

      if (voucher.voucherType === "Sales") {
        acc.outputVat += vatAmount;
      }

      if (voucher.voucherType === "Purchase") {
        acc.inputVat += vatAmount;
      }

      if (voucher.voucherType === "Journal" && voucher.entries.some((entry) => entry.vatCategory === "ReverseCharge")) {
        acc.reverseChargeVat += vatAmount;
      }

      return acc;
    },
    { outputVat: 0, inputVat: 0, reverseChargeVat: 0 }
  );

  const netVat = summary.outputVat - summary.inputVat + summary.reverseChargeVat;

  return res.json({
    ...summary,
    netVatPayable: Math.max(netVat, 0),
    netVatReceivable: Math.max(-netVat, 0)
  });
};
