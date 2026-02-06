const VatReport = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">VAT Center</h2>
          <p className="text-sm text-slate-400">FTA-aligned VAT reporting with quarterly filing.</p>
        </div>
        <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200">Export Return</button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Output VAT</p>
          <p className="mt-2 text-2xl font-semibold text-white">AED 35,700</p>
          <p className="text-sm text-slate-400">Sales VAT collected</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Input VAT</p>
          <p className="mt-2 text-2xl font-semibold text-white">AED 12,160</p>
          <p className="text-sm text-slate-400">Recoverable purchases VAT</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Net VAT</p>
          <p className="mt-2 text-2xl font-semibold text-white">AED 23,540</p>
          <p className="text-sm text-slate-400">Payable to FTA</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold">FTA Return Preview (Quarterly)</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Box 1 - Standard Rated Supplies</p>
            <p className="mt-2 text-lg text-white">AED 714,000</p>
            <p className="text-sm text-slate-400">VAT AED 35,700</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Box 9 - Recoverable Input VAT</p>
            <p className="mt-2 text-lg text-white">AED 243,200</p>
            <p className="text-sm text-slate-400">VAT AED 12,160</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Box 3 - Zero Rated Supplies</p>
            <p className="mt-2 text-lg text-white">AED 89,000</p>
            <p className="text-sm text-slate-400">VAT AED 0</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Box 11 - Net VAT Payable</p>
            <p className="mt-2 text-lg text-white">AED 23,540</p>
            <p className="text-sm text-slate-400">After input VAT offset</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VatReport;
