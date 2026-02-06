const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Reports & MIS</h2>
          <p className="text-sm text-slate-400">Drill down from financial statements to vouchers.</p>
        </div>
        <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200">Export</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          "Trial Balance",
          "Profit & Loss",
          "Balance Sheet",
          "Ledger Statement",
          "Cash Book",
          "Bank Book",
          "Day Book",
          "Stock Summary",
          "Receivables Ageing"
        ].map((report) => (
          <div key={report} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold">{report}</h3>
            <p className="text-sm text-slate-400">Filter by period, ledger, or cost center.</p>
            <button className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200">
              View Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
