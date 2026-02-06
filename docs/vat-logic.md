# UAE VAT Accounting Logic

This system implements UAE VAT according to the Federal Tax Authority (FTA) guidance. VAT postings are aligned with a Tally-style double-entry model and ensure that VAT is automatically routed to the correct ledgers.

## VAT Categories Supported

- **Standard Rated (5%)**: Default for most taxable supplies.
- **Zero Rated (0%)**: Export goods, certain services.
- **Exempt**: Financial services, residential rent, bare land.
- **Out of Scope**: Outside UAE VAT scope.
- **Reverse Charge (5%)**: Applicable for imports or specific services.

## VAT Ledgers

Recommended ledgers for VAT:

- **Output VAT Payable** (Liability)
- **Input VAT Recoverable** (Asset)
- **Reverse Charge VAT Payable** (Liability)

## VAT Computation Flow

1. **Sales Voucher**
   - VAT is calculated on the taxable base.
   - Debit: Customer Ledger (gross)
   - Credit: Sales Ledger (net)
   - Credit: Output VAT Payable (VAT amount)

2. **Purchase Voucher**
   - VAT is calculated on the taxable base.
   - Debit: Purchases Ledger (net)
   - Debit: Input VAT Recoverable (VAT amount)
   - Credit: Supplier Ledger (gross)

3. **Reverse Charge**
   - Debit: Expense/Asset Ledger (net)
   - Credit: Supplier Ledger (net)
   - Debit: Input VAT Recoverable (VAT amount)
   - Credit: Reverse Charge VAT Payable (VAT amount)

## Inclusive vs Exclusive VAT

The VAT service accepts a flag to indicate whether the amount is VAT-inclusive or exclusive:

- **Inclusive**: Net = Amount / (1 + VAT rate)
- **Exclusive**: VAT = Amount × VAT rate

## Return Summary

The `/api/companies/:companyId/vat/summary` endpoint aggregates:

- Output VAT
- Input VAT
- Reverse charge VAT
- Net payable/receivable

This aligns with the FTA VAT return format (boxes for standard supplies, zero-rated supplies, and net VAT).
