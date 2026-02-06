import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import StatCard from "../components/StatCard";

const chartData = [
  { month: "Jan", vat: 12000 },
  { month: "Feb", vat: 14250 },
  { month: "Mar", vat: 9800 },
  { month: "Apr", vat: 15500 },
  { month: "May", vat: 13120 },
  { month: "Jun", vat: 17000 }
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Cash & Bank" value="AED 245,300" change="+4.5% vs last month" icon={"💳"} />
        <StatCard title="Receivables" value="AED 98,450" change="+2.1% this quarter" icon={"📥"} />
        <StatCard title="Payables" value="AED 55,200" change="-1.2% this month" icon={"📤"} />
        <StatCard title="Net VAT" value="AED 23,540" change="Quarter-to-date" icon={"🧾"} />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">VAT Trend</h3>
              <p className="text-sm text-slate-400">Output VAT collected vs reported months</p>
            </div>
            <button className="rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-200">Export</button>
          </div>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #1e293b" }} />
                <Line type="monotone" dataKey="vat" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <p className="text-sm text-slate-400">Faster entry aligned with Tally-style workflows.</p>
          <div className="mt-6 space-y-3">
            {[
              "Create Sales Voucher",
              "Record Purchase Invoice",
              "Post Journal Adjustment",
              "Generate VAT Return"
            ].map((item) => (
              <button key={item} className="w-full rounded-lg border border-slate-700 px-4 py-3 text-left text-sm">
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
