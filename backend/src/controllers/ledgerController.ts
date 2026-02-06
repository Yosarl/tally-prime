import { Response } from "express";
import { Ledger } from "../models/Ledger.js";
import { AuthRequest } from "../middleware/auth.js";

export const createLedger = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { name, groupId, openingBalance, openingBalanceType, vatCategory, isCustomer, isSupplier } = req.body;

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const ledger = await Ledger.create({
    companyId,
    name,
    groupId,
    openingBalance,
    openingBalanceType,
    vatCategory,
    isCustomer,
    isSupplier
  });

  return res.status(201).json(ledger);
};

export const listLedgers = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const ledgers = await Ledger.find({ companyId });
  return res.json(ledgers);
};
