const Masters = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Masters</h2>
          <p className="text-sm text-slate-400">Groups, ledgers, cost centers, and alias management.</p>
        </div>
        <button className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">Create Master</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Ledger Groups",
            description: "Assets, liabilities, income, expenses, and sub-groups."
          },
          {
            title: "Ledgers",
            description: "Customer, supplier, cash, bank, and tax ledgers."
          },
          {
            title: "Cost Centers",
            description: "Track profitability by department, project, or branch."
          },
          {
            title: "Cost Categories",
            description: "Optional classification layer for multiple cost centers."
          }
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-slate-400">{card.description}</p>
            <button className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200">
              Manage
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masters;
