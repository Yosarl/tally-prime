import { Router } from "express";
import { createCompany, listCompanies, updateCompanySettings } from "../controllers/companyController.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.use(authenticate);

router.post("/", authorize(["Admin", "Accountant"]), asyncHandler(createCompany));
router.get("/", asyncHandler(listCompanies));
router.put("/:companyId/settings", authorize(["Admin", "Accountant"]), asyncHandler(updateCompanySettings));

export default router;
