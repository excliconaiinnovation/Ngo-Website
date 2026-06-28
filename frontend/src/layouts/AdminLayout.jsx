import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

export default function AdminLayout() {
  return (
    <div className="h-screen flex bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}