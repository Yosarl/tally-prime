import mongoose, { Schema, Types } from "mongoose";

export type LedgerGroupType = "Assets" | "Liabilities" | "Income" | "Expenses";

export interface LedgerGroupDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  name: string;
  groupType: LedgerGroupType;
  parentGroupId?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ledgerGroupSchema = new Schema<LedgerGroupDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    name: { type: String, required: true },
    groupType: { type: String, enum: ["Assets", "Liabilities", "Income", "Expenses"], required: true },
    parentGroupId: { type: Schema.Types.ObjectId, ref: "LedgerGroup" }
  },
  { timestamps: true }
);

export const LedgerGroup = mongoose.model<LedgerGroupDocument>("LedgerGroup", ledgerGroupSchema);
