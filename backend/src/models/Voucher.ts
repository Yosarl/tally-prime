import mongoose, { Schema, Types } from "mongoose";
import { VatCategory } from "./Ledger.js";

export type VoucherType =
  | "Payment"
  | "Receipt"
  | "Contra"
  | "Journal"
  | "Sales"
  | "Purchase";

export interface VoucherEntry {
  ledgerId: Types.ObjectId;
  debit: number;
  credit: number;
  narration?: string;
  vatCategory?: VatCategory;
  vatRate?: number;
  vatAmount?: number;
}

export interface VoucherDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  voucherType: VoucherType;
  voucherNumber: string;
  voucherDate: Date;
  entries: VoucherEntry[];
  totalDebit: number;
  totalCredit: number;
  narration?: string;
  createdAt: Date;
  updatedAt: Date;
}

const voucherEntrySchema = new Schema<VoucherEntry>(
  {
    ledgerId: { type: Schema.Types.ObjectId, ref: "Ledger", required: true },
    debit: { type: Number, default: 0 },
    credit: { type: Number, default: 0 },
    narration: { type: String },
    vatCategory: {
      type: String,
      enum: ["Standard5", "Zero", "Exempt", "OutOfScope", "ReverseCharge"]
    },
    vatRate: { type: Number },
    vatAmount: { type: Number }
  },
  { _id: false }
);

const voucherSchema = new Schema<VoucherDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    voucherType: {
      type: String,
      enum: ["Payment", "Receipt", "Contra", "Journal", "Sales", "Purchase"],
      required: true
    },
    voucherNumber: { type: String, required: true },
    voucherDate: { type: Date, required: true },
    entries: { type: [voucherEntrySchema], required: true },
    totalDebit: { type: Number, required: true },
    totalCredit: { type: Number, required: true },
    narration: { type: String }
  },
  { timestamps: true }
);

export const Voucher = mongoose.model<VoucherDocument>("Voucher", voucherSchema);
