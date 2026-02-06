import { Response } from "express";
import { AuthRequest } from "../middleware/auth.js";
import { BankReconciliation } from "../models/BankReconciliation.js";

export const createBankReconciliation = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { bankLedgerId, voucherId, voucherDate, bankDate, amount, status } = req.body as {
    bankLedgerId: string;
    voucherId: string;
    voucherDate: string;
    bankDate?: string;
    amount: number;
    status?: "Pending" | "Cleared";
  };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const reconciliation = await BankReconciliation.create({
    companyId,
    bankLedgerId,
    voucherId,
    voucherDate: new Date(voucherDate),
    bankDate: bankDate ? new Date(bankDate) : undefined,
    amount,
    status
  });

  return res.status(201).json(reconciliation);
};

export const listBankReconciliations = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const reconciliations = await BankReconciliation.find({ companyId });
  return res.json(reconciliations);
};
