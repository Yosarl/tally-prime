const ledgers = [
  { name: "Cash", group: "Current Assets", opening: "Dr 25,000", vat: "-" },
  { name: "Accounts Receivable", group: "Current Assets", opening: "Dr 0", vat: "Standard 5%" },
  { name: "Output VAT Payable", group: "Current Liabilities", opening: "Cr 0", vat: "Standard 5%" },
  { name: "Sales Revenue", group: "Income", opening: "Cr 0", vat: "Standard 5%" }
];

const Ledgers = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Ledgers</h2>
          <p className="text-sm text-slate-400">Chart of accounts aligned with UAE VAT tracking.</p>
        </div>
        <button className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">New Ledger</button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-800">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-slate-900/80 text-left text-xs uppercase tracking-[0.2em] text-slate-400">
            <tr>
              <th className="px-4 py-3">Ledger</th>
              <th className="px-4 py-3">Group</th>
              <th className="px-4 py-3">Opening Balance</th>
              <th className="px-4 py-3">VAT Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-950">
            {ledgers.map((ledger) => (
              <tr key={ledger.name}>
                <td className="px-4 py-3 font-medium text-white">{ledger.name}</td>
                <td className="px-4 py-3 text-slate-300">{ledger.group}</td>
                <td className="px-4 py-3 text-slate-300">{ledger.opening}</td>
                <td className="px-4 py-3 text-slate-300">{ledger.vat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ledgers;
