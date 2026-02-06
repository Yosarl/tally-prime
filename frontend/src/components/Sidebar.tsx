import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/setup", label: "Company Setup" },
  { to: "/companies", label: "Companies" },
  { to: "/masters", label: "Masters" },
  { to: "/ledgers", label: "Ledgers" },
  { to: "/vouchers", label: "Vouchers" },
  { to: "/inventory", label: "Inventory" },
  { to: "/banking", label: "Banking" },
  { to: "/vat", label: "VAT Center" },
  { to: "/reports", label: "Reports" }
];

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-64 bg-slate-900/80 px-6 py-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">UAE VAT Ready</p>
        <h1 className="text-2xl font-semibold text-white">Tally Prime UAE</h1>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive ? "bg-primary-700 text-white" : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
