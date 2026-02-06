import mongoose, { Schema, Types } from "mongoose";

export type StockValuationMethod = "FIFO" | "WeightedAverage";

export interface UnitDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  name: string;
  symbol: string;
}

export interface StockGroupDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  name: string;
  parentGroupId?: Types.ObjectId;
}

export interface WarehouseDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  name: string;
  location?: string;
}

export interface StockItemDocument {
  _id: Types.ObjectId;
  companyId: Types.ObjectId;
  name: string;
  sku: string;
  unitId: Types.ObjectId;
  groupId: Types.ObjectId;
  valuationMethod: StockValuationMethod;
  reorderLevel: number;
  openingQuantity: number;
  openingRate: number;
}

const unitSchema = new Schema<UnitDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true }
  },
  { timestamps: true }
);

const stockGroupSchema = new Schema<StockGroupDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    name: { type: String, required: true },
    parentGroupId: { type: Schema.Types.ObjectId, ref: "StockGroup" }
  },
  { timestamps: true }
);

const warehouseSchema = new Schema<WarehouseDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    name: { type: String, required: true },
    location: { type: String }
  },
  { timestamps: true }
);

const stockItemSchema = new Schema<StockItemDocument>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, index: true },
    name: { type: String, required: true },
    sku: { type: String, required: true },
    unitId: { type: Schema.Types.ObjectId, ref: "Unit", required: true },
    groupId: { type: Schema.Types.ObjectId, ref: "StockGroup", required: true },
    valuationMethod: { type: String, enum: ["FIFO", "WeightedAverage"], default: "FIFO" },
    reorderLevel: { type: Number, default: 0 },
    openingQuantity: { type: Number, default: 0 },
    openingRate: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Unit = mongoose.model<UnitDocument>("Unit", unitSchema);
export const StockGroup = mongoose.model<StockGroupDocument>("StockGroup", stockGroupSchema);
export const Warehouse = mongoose.model<WarehouseDocument>("Warehouse", warehouseSchema);
export const StockItem = mongoose.model<StockItemDocument>("StockItem", stockItemSchema);
