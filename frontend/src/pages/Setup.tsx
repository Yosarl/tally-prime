const Setup = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Company Setup</h2>
          <p className="text-sm text-slate-400">Financial year, books start, security control, and VAT registration settings.</p>
        </div>
        <button className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">Edit Settings</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-lg font-semibold">Financial Year</h3>
          <p className="text-sm text-slate-400">FY start and books start for accurate reporting.</p>
          <div className="mt-4 space-y-2 text-sm text-slate-200">
            <p>FY Beginning: 01 Jan 2024</p>
            <p>Books Beginning: 01 Aug 2024</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-lg font-semibold">Security Control</h3>
          <p className="text-sm text-slate-400">Admin approval and audit trail readiness.</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Enabled
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold">F11 Features & F12 Configuration</h3>
        <p className="text-sm text-slate-400">
          Toggle company-wide features (cost centers, inventory, VAT) and screen-level preferences.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
          {[
            "Enable Cost Centers",
            "Enable Inventory",
            "Enable Batches & Expiry",
            "Enable VAT",
            "Show Ledger Aliases",
            "Show Godown in Reports"
          ].map((item) => (
            <div key={item} className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-3">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setup;
