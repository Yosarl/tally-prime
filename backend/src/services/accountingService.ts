import { VoucherEntry } from "../models/Voucher.js";

export const calculateTotals = (entries: VoucherEntry[]) => {
  const totalDebit = entries.reduce((sum, entry) => sum + entry.debit, 0);
  const totalCredit = entries.reduce((sum, entry) => sum + entry.credit, 0);
  return { totalDebit, totalCredit };
};

export const validateDoubleEntry = (entries: VoucherEntry[]) => {
  const { totalDebit, totalCredit } = calculateTotals(entries);
  if (totalDebit !== totalCredit) {
    throw new Error("Total debit must equal total credit for double-entry compliance.");
  }
  return { totalDebit, totalCredit };
};
