const Inventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Inventory</h2>
          <p className="text-sm text-slate-400">Units, stock items, godowns, and batch-wise tracking.</p>
        </div>
        <button className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">Add Stock Item</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          { title: "Units", detail: "Nos, Kg, Box" },
          { title: "Stock Groups", detail: "Electronics, FMCG" },
          { title: "Godowns", detail: "Warehouse A, Dubai Main" },
          { title: "Batch & Expiry", detail: "Track batch numbers and expiry dates" }
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-slate-400">{card.detail}</p>
            <button className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
