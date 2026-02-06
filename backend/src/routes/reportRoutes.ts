import { Router } from "express";
import {
  balanceSheet,
  bankBook,
  cashBook,
  dayBook,
  ledgerStatement,
  profitAndLoss,
  stockSummary,
  trialBalance
} from "../controllers/reportController.js";
import { authenticate } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router({ mergeParams: true });

router.use(authenticate);

router.get("/trial-balance", asyncHandler(trialBalance));
router.get("/profit-loss", asyncHandler(profitAndLoss));
router.get("/balance-sheet", asyncHandler(balanceSheet));
router.get("/ledgers/:ledgerId", asyncHandler(ledgerStatement));
router.get("/cash-book", asyncHandler(cashBook));
router.get("/bank-book", asyncHandler(bankBook));
router.get("/day-book", asyncHandler(dayBook));
router.get("/stock-summary", asyncHandler(stockSummary));

export default router;
