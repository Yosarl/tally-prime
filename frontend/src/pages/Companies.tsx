const companies = [
  {
    name: "Desert Bloom Trading",
    legalName: "Desert Bloom Trading LLC",
    trn: "100123456700003",
    returnPeriod: "Quarterly",
    currency: "AED"
  },
  {
    name: "Pearl Coast Logistics",
    legalName: "Pearl Coast Logistics FZ-LLC",
    trn: "100987654300009",
    returnPeriod: "Quarterly",
    currency: "AED"
  }
];

const Companies = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Companies</h2>
          <p className="text-sm text-slate-400">Multi-company separation with per-company VAT setup.</p>
        </div>
        <button className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">Add Company</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {companies.map((company) => (
          <div key={company.trn} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold">{company.name}</h3>
            <p className="text-sm text-slate-400">{company.legalName}</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-slate-500">TRN</p>
                <p>{company.trn}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Return Period</p>
                <p>{company.returnPeriod}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Currency</p>
                <p>{company.currency}</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200">
              Manage Company
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
