import { Response } from "express";
import { AuthRequest } from "../middleware/auth.js";
import { CostCategory, CostCenter } from "../models/CostCenter.js";

export const createCostCategory = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { name } = req.body as { name: string };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const category = await CostCategory.create({ companyId, name });
  return res.status(201).json(category);
};

export const listCostCategories = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const categories = await CostCategory.find({ companyId });
  return res.json(categories);
};

export const createCostCenter = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { name, categoryId, parentId } = req.body as {
    name: string;
    categoryId?: string;
    parentId?: string;
  };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const center = await CostCenter.create({ companyId, name, categoryId, parentId });
  return res.status(201).json(center);
};

export const listCostCenters = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const centers = await CostCenter.find({ companyId });
  return res.json(centers);
};
