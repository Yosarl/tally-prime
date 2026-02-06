import { Router } from "express";
import { createLedger, listLedgers } from "../controllers/ledgerController.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router({ mergeParams: true });

router.use(authenticate);

router.post("/", authorize(["Admin", "Accountant"]), asyncHandler(createLedger));
router.get("/", asyncHandler(listLedgers));

export default router;
