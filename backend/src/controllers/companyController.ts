import { Request, Response } from "express";
import { Company } from "../models/Company.js";
import { User } from "../models/User.js";
import { AuthRequest } from "../middleware/auth.js";

export const createCompany = async (req: AuthRequest, res: Response) => {
  const { name, legalName, vatSetup, address, baseCurrency, financialYearStart, booksStart, securityControlEnabled } =
    req.body as {
    name: string;
    legalName: string;
    vatSetup: { trn: string; returnPeriod: "Quarterly" | "Monthly"; vatScheme: "Standard" | "Cash" };
    address?: string;
    baseCurrency?: string;
    financialYearStart: string;
    booksStart: string;
    securityControlEnabled?: boolean;
  };

  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const company = await Company.create({
    name,
    legalName,
    vatSetup,
    address,
    baseCurrency,
    financialYearStart: new Date(financialYearStart),
    booksStart: new Date(booksStart),
    securityControlEnabled
  });

  await User.findByIdAndUpdate(req.user.id, { $addToSet: { companyIds: company._id } });

  return res.status(201).json(company);
};

export const listCompanies = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const companies = await Company.find({ _id: { $in: req.user.companyIds } });
  return res.json(companies);
};

export const updateCompanySettings = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const company = await Company.findByIdAndUpdate(companyId, req.body, { new: true });
  return res.json(company);
};
