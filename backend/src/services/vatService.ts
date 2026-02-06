import { VatCategory } from "../models/Ledger.js";

export interface VatComputationInput {
  taxableAmount: number;
  vatCategory: VatCategory;
  vatInclusive: boolean;
}

export interface VatComputationResult {
  vatRate: number;
  netAmount: number;
  vatAmount: number;
  grossAmount: number;
}

const VAT_RATES: Record<VatCategory, number> = {
  Standard5: 0.05,
  Zero: 0,
  Exempt: 0,
  OutOfScope: 0,
  ReverseCharge: 0.05
};

export const computeVat = ({ taxableAmount, vatCategory, vatInclusive }: VatComputationInput): VatComputationResult => {
  const vatRate = VAT_RATES[vatCategory];

  if (vatRate === 0) {
    return {
      vatRate,
      netAmount: taxableAmount,
      vatAmount: 0,
      grossAmount: taxableAmount
    };
  }

  if (vatInclusive) {
    const netAmount = taxableAmount / (1 + vatRate);
    const vatAmount = taxableAmount - netAmount;
    return {
      vatRate,
      netAmount,
      vatAmount,
      grossAmount: taxableAmount
    };
  }

  const vatAmount = taxableAmount * vatRate;
  return {
    vatRate,
    netAmount: taxableAmount,
    vatAmount,
    grossAmount: taxableAmount + vatAmount
  };
};
