import mongoose, { Schema, Types } from "mongoose";

export interface StockBatchDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  stockItemId: Types.ObjectId;
  warehouseId?: Types.ObjectId;
  batchNumber: string;
  expiryDate?: Date;
  quantity: number;
  rate: number;
  createdAt: Date;
  updatedAt: Date;
}

const stockBatchSchema = new Schema<StockBatchDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    stockItemId: { type: Schema.Types.ObjectId, ref: "StockItem", required: true },
    warehouseId: { type: Schema.Types.ObjectId, ref: "Warehouse" },
    batchNumber: { type: String, required: true },
    expiryDate: { type: Date },
    quantity: { type: Number, default: 0 },
    rate: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const StockBatch = mongoose.model<StockBatchDocument>("StockBatch", stockBatchSchema);
