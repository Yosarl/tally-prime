import { Router } from "express";
import { vatSummary } from "../controllers/vatController.js";
import { authenticate } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router({ mergeParams: true });

router.use(authenticate);

router.get("/summary", asyncHandler(vatSummary));

export default router;
