import { Router } from "express";
import { createBankReconciliation, listBankReconciliations } from "../controllers/bankingController.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router({ mergeParams: true });

router.use(authenticate);

router.post("/reconciliations", authorize(["Admin", "Accountant"]), asyncHandler(createBankReconciliation));
router.get("/reconciliations", asyncHandler(listBankReconciliations));

export default router;
