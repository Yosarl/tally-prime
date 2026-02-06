import mongoose, { Schema, Types } from "mongoose";

export interface BankReconciliationDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  bankLedgerId: Types.ObjectId;
  voucherId: Types.ObjectId;
  voucherDate: Date;
  bankDate?: Date;
  amount: number;
  status: "Pending" | "Cleared";
  createdAt: Date;
  updatedAt: Date;
}

const bankReconciliationSchema = new Schema<BankReconciliationDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    bankLedgerId: { type: Schema.Types.ObjectId, ref: "Ledger", required: true },
    voucherId: { type: Schema.Types.ObjectId, ref: "Voucher", required: true },
    voucherDate: { type: Date, required: true },
    bankDate: { type: Date },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Cleared"], default: "Pending" }
  },
  { timestamps: true }
);

export const BankReconciliation = mongoose.model<BankReconciliationDocument>(
  "BankReconciliation",
  bankReconciliationSchema
);
