const Topbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 px-8 py-4">
      <div>
        <h2 className="text-lg font-semibold">Welcome back, Amina</h2>
        <p className="text-sm text-slate-400">Desert Bloom Trading LLC · TRN 100123456700003</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200">
          Switch Company
        </button>
        <button className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">
          New Voucher
        </button>
      </div>
    </header>
  );
};

export default Topbar;
