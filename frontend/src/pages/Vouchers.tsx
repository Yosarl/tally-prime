const vouchers = [
  {
    number: "SV-0009",
    type: "Sales",
    date: "2024-07-01",
    total: "AED 18,500",
    status: "Posted"
  },
  {
    number: "PV-0005",
    type: "Purchase",
    date: "2024-07-02",
    total: "AED 7,200",
    status: "Posted"
  },
  {
    number: "JV-0003",
    type: "Journal",
    date: "2024-07-04",
    total: "AED 3,500",
    status: "Review"
  }
];

const Vouchers = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Vouchers</h2>
          <p className="text-sm text-slate-400">Keyboard-friendly entry with double-entry validation.</p>
        </div>
        <button className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">Create Voucher</button>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {vouchers.map((voucher) => (
          <div key={voucher.number} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{voucher.type}</p>
                <h3 className="text-lg font-semibold text-white">{voucher.number}</h3>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
                {voucher.status}
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-300">Date: {voucher.date}</p>
            <p className="text-sm text-slate-300">Total: {voucher.total}</p>
            <button className="mt-4 w-full rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vouchers;
