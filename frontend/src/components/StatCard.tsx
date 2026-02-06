import { ReactNode } from "react";

const StatCard = ({ title, value, change, icon }: { title: string; value: string; change: string; icon: ReactNode }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
        </div>
        <div className="rounded-full bg-primary-500/20 p-3 text-primary-500">{icon}</div>
      </div>
      <p className="mt-3 text-xs text-emerald-400">{change}</p>
    </div>
  );
};

export default StatCard;
