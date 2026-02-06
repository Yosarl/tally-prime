# Feature Coverage Matrix (Tally Prime UAE)

This matrix maps the requested Tally-style workflows to the current backend + frontend coverage in this repo.

## Module 1: Company & Setup

- **Company creation**: Supported via `/api/companies` with financial year start, books start, base currency, security control flag, and VAT setup.
- **F11 Features vs F12 Configuration**: Stored at company level (features/configuration) and editable via `/api/companies/:companyId/settings`.

## Module 2: Accounting Masters

- **Groups & hierarchy**: Ledger groups supported in `LedgerGroup` model (Assets, Liabilities, Income, Expenses).
- **Ledger creation**: Supported via `/api/companies/:companyId/ledgers` with opening balances and VAT category.
- **Cost centers**: Cost categories and cost centers available via `/api/companies/:companyId/cost-centers`.

## Module 3: Voucher Types

- **Contra/Payment/Receipt/Journal/Sales/Purchase**: Supported in `Voucher` model and API. Double-entry validation enforced.
- **Validation**: Debit/credit totals must match for every voucher.

## Module 4: Inventory Management

- **Units, stock groups, stock items**: Supported via `/api/companies/:companyId/inventory`.
- **Godowns/Warehouses**: Supported via `/api/companies/:companyId/inventory/warehouses`.
- **Batch-wise details**: Supported via `/api/companies/:companyId/inventory/batches` with expiry date.

## Module 5: Banking

- **Bank Reconciliation Statement (BRS)**: Supported via `/api/companies/:companyId/banking/reconciliations`.

## Module 6: Taxation (UAE VAT)

- **Output/Input VAT**: Computed via VAT service and aggregated in `/api/companies/:companyId/vat/summary`.
- **Reverse charge**: Included via `ReverseCharge` VAT category and summarized in VAT report.

## Module 7: Reports & MIS

- **Trial Balance, P&L, Balance Sheet, Ledger Statement, Cash/Bank/Day Book, Stock Summary**:
  - REST endpoints created under `/api/companies/:companyId/reports/*` for future aggregation logic.

## Module 8: Advanced Utilities

- **Backup & Restore**: Documented in operational guidance (future scripting required).
- **Export (PDF/Excel/XML)**: Planned enhancements (documented in README).
