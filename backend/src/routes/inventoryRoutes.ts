import { Router } from "express";
import {
  createStockBatch,
  createStockGroup,
  createStockItem,
  createUnit,
  createWarehouse,
  listStockBatches,
  listStockGroups,
  listStockItems,
  listUnits,
  listWarehouses
} from "../controllers/inventoryController.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router({ mergeParams: true });

router.use(authenticate);

router.post("/units", authorize(["Admin", "Accountant"]), asyncHandler(createUnit));
router.get("/units", asyncHandler(listUnits));

router.post("/groups", authorize(["Admin", "Accountant"]), asyncHandler(createStockGroup));
router.get("/groups", asyncHandler(listStockGroups));

router.post("/warehouses", authorize(["Admin", "Accountant"]), asyncHandler(createWarehouse));
router.get("/warehouses", asyncHandler(listWarehouses));

router.post("/items", authorize(["Admin", "Accountant"]), asyncHandler(createStockItem));
router.get("/items", asyncHandler(listStockItems));

router.post("/batches", authorize(["Admin", "Accountant"]), asyncHandler(createStockBatch));
router.get("/batches", asyncHandler(listStockBatches));

export default router;
