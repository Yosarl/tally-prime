import { Response } from "express";
import { AuthRequest } from "../middleware/auth.js";
import { StockBatch } from "../models/StockBatch.js";
import { StockGroup, StockItem, Unit, Warehouse } from "../models/Inventory.js";

export const createUnit = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { name, symbol } = req.body as { name: string; symbol: string };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const unit = await Unit.create({ companyId, name, symbol });
  return res.status(201).json(unit);
};

export const listUnits = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const units = await Unit.find({ companyId });
  return res.json(units);
};

export const createStockGroup = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { name, parentGroupId } = req.body as { name: string; parentGroupId?: string };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const group = await StockGroup.create({ companyId, name, parentGroupId });
  return res.status(201).json(group);
};

export const listStockGroups = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const groups = await StockGroup.find({ companyId });
  return res.json(groups);
};

export const createWarehouse = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { name, location } = req.body as { name: string; location?: string };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const warehouse = await Warehouse.create({ companyId, name, location });
  return res.status(201).json(warehouse);
};

export const listWarehouses = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const warehouses = await Warehouse.find({ companyId });
  return res.json(warehouses);
};

export const createStockItem = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { name, sku, unitId, groupId, valuationMethod, reorderLevel, openingQuantity, openingRate } = req.body as {
    name: string;
    sku: string;
    unitId: string;
    groupId: string;
    valuationMethod?: "FIFO" | "WeightedAverage";
    reorderLevel?: number;
    openingQuantity?: number;
    openingRate?: number;
  };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const item = await StockItem.create({
    companyId,
    name,
    sku,
    unitId,
    groupId,
    valuationMethod,
    reorderLevel,
    openingQuantity,
    openingRate
  });

  return res.status(201).json(item);
};

export const listStockItems = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const items = await StockItem.find({ companyId });
  return res.json(items);
};

export const createStockBatch = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  const { stockItemId, warehouseId, batchNumber, expiryDate, quantity, rate } = req.body as {
    stockItemId: string;
    warehouseId?: string;
    batchNumber: string;
    expiryDate?: string;
    quantity?: number;
    rate?: number;
  };

  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const batch = await StockBatch.create({
    companyId,
    stockItemId,
    warehouseId,
    batchNumber,
    expiryDate: expiryDate ? new Date(expiryDate) : undefined,
    quantity,
    rate
  });

  return res.status(201).json(batch);
};

export const listStockBatches = async (req: AuthRequest, res: Response) => {
  const { companyId } = req.params;
  if (!req.user?.companyIds.includes(companyId)) {
    return res.status(403).json({ message: "No access to company" });
  }

  const batches = await StockBatch.find({ companyId });
  return res.json(batches);
};
