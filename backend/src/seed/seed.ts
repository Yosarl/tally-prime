import bcrypt from "bcryptjs";
import { connectDb } from "../config/db.js";
import { Company } from "../models/Company.js";
import { User } from "../models/User.js";
import { LedgerGroup } from "../models/LedgerGroup.js";
import { Ledger } from "../models/Ledger.js";

const seed = async () => {
  await connectDb();

  await Promise.all([
    User.deleteMany({}),
    Company.deleteMany({}),
    LedgerGroup.deleteMany({}),
    Ledger.deleteMany({})
  ]);

  const company = await Company.create({
    name: "Desert Bloom Trading",
    legalName: "Desert Bloom Trading LLC",
    baseCurrency: "AED",
    financialYearStart: new Date("2024-01-01"),
    booksStart: new Date("2024-08-01"),
    securityControlEnabled: true,
    vatSetup: {
      trn: "100123456700003",
      returnPeriod: "Quarterly",
      vatScheme: "Standard"
    },
    address: "Dubai, UAE"
  });

  const passwordHash = await bcrypt.hash("Admin@123", 12);
  const user = await User.create({
    name: "Amina Kareem",
    email: "amina@desertbloom.ae",
    passwordHash,
    roles: ["Admin"],
    companyIds: [company._id]
  });

  const assetsGroup = await LedgerGroup.create({
    companyId: company._id,
    name: "Current Assets",
    groupType: "Assets"
  });

  const liabilitiesGroup = await LedgerGroup.create({
    companyId: company._id,
    name: "Current Liabilities",
    groupType: "Liabilities"
  });

  await Ledger.create({
    companyId: company._id,
    name: "Cash",
    groupId: assetsGroup._id,
    openingBalance: 25000,
    openingBalanceType: "Debit"
  });

  await Ledger.create({
    companyId: company._id,
    name: "Output VAT Payable",
    groupId: liabilitiesGroup._id,
    openingBalance: 0,
    openingBalanceType: "Credit",
    vatCategory: "Standard5"
  });

  console.log("Seeded UAE sample data", { companyId: company._id, userId: user._id });
  process.exit(0);
};

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
