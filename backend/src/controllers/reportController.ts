import { Response } from "express";
import { AuthRequest } from "../middleware/auth.js";

const ensureAccess = (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    res.status(403).json({ message: "No access to company" });
    return false;
  }
  return true;
};

export const trialBalance = async (req: AuthRequest, res: Response) => {
  if (!ensureAccess(req, res)) return;
  return res.json({ asOf: new Date(), rows: [] });
};

export const profitAndLoss = async (req: AuthRequest, res: Response) => {
  if (!ensureAccess(req, res)) return;
  return res.json({ period: req.query, income: [], expenses: [], netProfit: 0 });
};

export const balanceSheet = async (req: AuthRequest, res: Response) => {
  if (!ensureAccess(req, res)) return;
  return res.json({ period: req.query, assets: [], liabilities: [], equity: [] });
};

export const ledgerStatement = async (req: AuthRequest, res: Response) => {
  if (!ensureAccess(req, res)) return;
  return res.json({ ledgerId: req.params.ledgerId, entries: [] });
};

export const cashBook = async (req: AuthRequest, res: Response) => {
  if (!ensureAccess(req, res)) return;
  return res.json({ entries: [] });
};

export const bankBook = async (req: AuthRequest, res: Response) => {
  if (!ensureAccess(req, res)) return;
  return res.json({ entries: [] });
};

export const dayBook = async (req: AuthRequest, res: Response) => {
  if (!ensureAccess(req, res)) return;
  return res.json({ entries: [] });
};

export const stockSummary = async (req: AuthRequest, res: Response) => {
  if (!ensureAccess(req, res)) return;
  return res.json({ items: [] });
};
