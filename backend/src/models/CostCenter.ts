import mongoose, { Schema, Types } from "mongoose";

export interface CostCategoryDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CostCenterDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  name: string;
  categoryId?: Types.ObjectId;
  parentId?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const costCategorySchema = new Schema<CostCategoryDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    name: { type: String, required: true }
  },
  { timestamps: true }
);

const costCenterSchema = new Schema<CostCenterDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    name: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "CostCategory" },
    parentId: { type: Schema.Types.ObjectId, ref: "CostCenter" }
  },
  { timestamps: true }
);

export const CostCategory = mongoose.model<CostCategoryDocument>("CostCategory", costCategorySchema);
export const CostCenter = mongoose.model<CostCenterDocument>("CostCenter", costCenterSchema);
