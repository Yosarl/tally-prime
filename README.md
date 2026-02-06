# Tally Prime UAE - Accounting & Inventory Management System

A production-grade MERN stack foundation for UAE-compliant accounting, inventory, and VAT reporting. This project mirrors the workflow familiarity of Tally Prime while modernizing the experience for UAE SMEs.

## Features

- **Double-entry accounting** with voucher validation.
- **UAE VAT compliance** (TRN, standard/zero/exempt/RC VAT handling).
- **Multi-company data separation** and role-based access control.
- **Inventory management** with valuation methods (FIFO/Weighted Average).
- **Modern UI** built with React, Tailwind CSS, and Recharts.

## Monorepo Structure

```
/backend   Express + TypeScript + MongoDB
/frontend  React (Vite) + TypeScript + Tailwind CSS
/docs      Accounting & VAT documentation
```

## Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Required Environment Variables

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/tally_prime_uae
JWT_SECRET=replace-me
JWT_EXPIRES_IN=8h
```

### Seed Sample UAE Data

```bash
npm run seed
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Key API Endpoints (REST)

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/companies` | Create company |
| GET | `/api/companies` | List companies |
| POST | `/api/companies/:companyId/ledgers` | Create ledger |
| GET | `/api/companies/:companyId/ledgers` | List ledgers |
| POST | `/api/companies/:companyId/vouchers` | Create voucher |
| GET | `/api/companies/:companyId/vouchers` | List vouchers |
| GET | `/api/companies/:companyId/vat/summary` | VAT summary report |
| PUT | `/api/companies/:companyId/settings` | Update company features/config |
| GET | `/api/companies/:companyId/cost-centers/centers` | List cost centers |
| GET | `/api/companies/:companyId/inventory/items` | List stock items |
| GET | `/api/companies/:companyId/banking/reconciliations` | List bank reconciliations |
| GET | `/api/companies/:companyId/reports/trial-balance` | Trial balance |

## VAT Logic

See [docs/vat-logic.md](docs/vat-logic.md) for detailed UAE VAT calculations and posting logic.

## Feature Coverage Matrix

See [docs/feature-coverage.md](docs/feature-coverage.md) for a detailed mapping of Tally Prime workflows to modules in this repository.

## Future Enhancements

- PDF/Excel VAT returns.
- Audit log trail for voucher edits.
- Keyboard-first voucher entry shortcuts.
- Role-specific report access.
