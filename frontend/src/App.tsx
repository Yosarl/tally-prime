import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Ledgers from "./pages/Ledgers";
import Vouchers from "./pages/Vouchers";
import VatReport from "./pages/VatReport";
import Setup from "./pages/Setup";
import Masters from "./pages/Masters";
import Inventory from "./pages/Inventory";
import Banking from "./pages/Banking";
import Reports from "./pages/Reports";
import AppShell from "./components/AppShell";

const App = () => {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/ledgers" element={<Ledgers />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/vat" element={<VatReport />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </AppShell>
  );
};

export default App;
