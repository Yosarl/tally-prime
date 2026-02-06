const Banking = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Banking</h2>
          <p className="text-sm text-slate-400">Bank reconciliation and cash/bank monitoring.</p>
        </div>
        <button className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">New Reconciliation</button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold">Bank Reconciliation Statement (BRS)</h3>
        <p className="text-sm text-slate-400">Match company books with bank statement clearance dates.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-slate-200">
          <div className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-3">Pending Cheques: 4</div>
          <div className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-3">Cleared This Month: 12</div>
          <div className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-3">Balance Difference: AED 0</div>
        </div>
      </div>
    </div>
  );
};

export default Banking;
