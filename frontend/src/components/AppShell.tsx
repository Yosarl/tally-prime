import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AppShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <main className="px-8 pb-12 pt-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AppShell;
