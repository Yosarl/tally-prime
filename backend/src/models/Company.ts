import mongoose, { Schema, Types } from "mongoose";

export interface VatSetup {
  trn: string;
  returnPeriod: "Quarterly" | "Monthly";
  vatScheme: "Standard" | "Cash";
}

export interface CompanyFeatures {
  enableCostCenters: boolean;
  enableBatches: boolean;
  enableInventory: boolean;
  enableVat: boolean;
  enableAuditTrail: boolean;
}

export interface CompanyConfiguration {
  showLedgerAliases: boolean;
  showGodownInReports: boolean;
  showBatchExpiry: boolean;
}

export interface CompanyDocument {
  _id: Types.ObjectId;
  name: string;
  legalName: string;
  baseCurrency: string;
  financialYearStart: Date;
  booksStart: Date;
  securityControlEnabled: boolean;
  vatSetup: VatSetup;
  features: CompanyFeatures;
  configuration: CompanyConfiguration;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

const vatSetupSchema = new Schema<VatSetup>(
  {
    trn: { type: String, required: true },
    returnPeriod: { type: String, enum: ["Quarterly", "Monthly"], default: "Quarterly" },
    vatScheme: { type: String, enum: ["Standard", "Cash"], default: "Standard" }
  },
  { _id: false }
);

const companySchema = new Schema<CompanyDocument>(
  {
    name: { type: String, required: true },
    legalName: { type: String, required: true },
    baseCurrency: { type: String, default: "AED" },
    financialYearStart: { type: Date, required: true },
    booksStart: { type: Date, required: true },
    securityControlEnabled: { type: Boolean, default: true },
    vatSetup: { type: vatSetupSchema, required: true },
    features: {
      enableCostCenters: { type: Boolean, default: true },
      enableBatches: { type: Boolean, default: true },
      enableInventory: { type: Boolean, default: true },
      enableVat: { type: Boolean, default: true },
      enableAuditTrail: { type: Boolean, default: true }
    },
    configuration: {
      showLedgerAliases: { type: Boolean, default: true },
      showGodownInReports: { type: Boolean, default: true },
      showBatchExpiry: { type: Boolean, default: true }
    },
    address: { type: String, default: "" }
  },
  { timestamps: true }
);

export const Company = mongoose.model<CompanyDocument>("Company", companySchema);
