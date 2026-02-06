import { Router } from "express";
import {
  createCostCategory,
  createCostCenter,
  listCostCategories,
  listCostCenters
} from "../controllers/costCenterController.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router({ mergeParams: true });

router.use(authenticate);

router.post("/categories", authorize(["Admin", "Accountant"]), asyncHandler(createCostCategory));
router.get("/categories", asyncHandler(listCostCategories));
router.post("/centers", authorize(["Admin", "Accountant"]), asyncHandler(createCostCenter));
router.get("/centers", asyncHandler(listCostCenters));

export default router;
