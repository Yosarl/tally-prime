import mongoose, { Schema, Types } from "mongoose";

export type VatCategory = "Standard5" | "Zero" | "Exempt" | "OutOfScope" | "ReverseCharge";

export interface LedgerDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  name: string;
  groupId: Types.ObjectId;
  openingBalance: number;
  openingBalanceType: "Debit" | "Credit";
  vatCategory?: VatCategory;
  isCustomer: boolean;
  isSupplier: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ledgerSchema = new Schema<LedgerDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    name: { type: String, required: true },
    groupId: { type: Schema.Types.ObjectId, ref: "LedgerGroup", required: true },
    openingBalance: { type: Number, default: 0 },
    openingBalanceType: { type: String, enum: ["Debit", "Credit"], default: "Debit" },
    vatCategory: {
      type: String,
      enum: ["Standard5", "Zero", "Exempt", "OutOfScope", "ReverseCharge"]
    },
    isCustomer: { type: Boolean, default: false },
    isSupplier: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Ledger = mongoose.model<LedgerDocument>("Ledger", ledgerSchema);
