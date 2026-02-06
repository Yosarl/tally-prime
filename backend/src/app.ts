import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import ledgerRoutes from "./routes/ledgerRoutes.js";
import voucherRoutes from "./routes/voucherRoutes.js";
import vatRoutes from "./routes/vatRoutes.js";
import costCenterRoutes from "./routes/costCenterRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import bankingRoutes from "./routes/bankingRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/companies/:companyId/ledgers", ledgerRoutes);
app.use("/api/companies/:companyId/vouchers", voucherRoutes);
app.use("/api/companies/:companyId/vat", vatRoutes);
app.use("/api/companies/:companyId/cost-centers", costCenterRoutes);
app.use("/api/companies/:companyId/inventory", inventoryRoutes);
app.use("/api/companies/:companyId/banking", bankingRoutes);
app.use("/api/companies/:companyId/reports", reportRoutes);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;
