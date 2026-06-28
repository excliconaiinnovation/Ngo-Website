import { Outlet } from "react-router-dom";
import MemberSidebar from "../components/member/MemberSidebar";

export default function MemberLayout() {
  return (
    <div className="h-screen flex bg-slate-100 overflow-hidden">
      <MemberSidebar />

      <main className="flex-1  h-screen overflow-y-auto">
        <div className="p-4 lg:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}