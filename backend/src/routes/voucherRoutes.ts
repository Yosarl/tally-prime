import { Router } from "express";
import { createVoucher, listVouchers, voucherSummary } from "../controllers/voucherController.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router({ mergeParams: true });

router.use(authenticate);

router.post("/", authorize(["Admin", "Accountant"]), asyncHandler(createVoucher));
router.get("/", asyncHandler(listVouchers));
router.get("/summary", asyncHandler(voucherSummary));

export default router;
