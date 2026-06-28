import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  QrCode,
  RefreshCcw,
  CalendarDays,
  Award,
  History,
  Bell,
  Search,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function MemberSidebar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState("");

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/member",
    },
    {
      name: "My Profile",
      icon: User,
      path: "/member/profile",
    },
    {
      name: "Digital ID Card",
      icon: QrCode,
      path: "/member/id-card",
    },
    {
      name: "Membership Renewal",
      icon: RefreshCcw,
      path: "/member/renewal",
    },
    {
      name: "Event Registration",
      icon: CalendarDays,
      path: "/member/events",
      badge: 3,
    },
    {
      name: "Certificates",
      icon: Award,
      path: "/member/certificates",
    },
    {
      name: "Activity History",
      icon: History,
      path: "/member/history",
    },

    // Extra items for testing scroll
    // {
    //   name: "Training Programs",
    //   icon: Award,
    //   path: "/member/training",
    // },
    // {
    //   name: "Volunteer Activities",
    //   icon: User,
    //   path: "/member/volunteer",
    // },
    // {
    //   name: "Achievements",
    //   icon: Award,
    //   path: "/member/achievements",
    // },
    // {
    //   name: "Notifications",
    //   icon: Bell,
    //   path: "/member/notifications",
    // },
    // {
    //   name: "Support",
    //   icon: User,
    //   path: "/member/support",
    // },
  ];

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden h-16 bg-white border-b flex items-center justify-between px-4">
        <h2 className="font-bold text-slate-800">
          Member Portal
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg hover:bg-slate-100"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative
          top-0 left-0
          h-screen
          flex flex-col
          bg-white
          border-r
          border-slate-200
          shadow-xl
          z-50
          transition-all
          duration-300
          ${collapsed ? "w-20" : "w-72"}
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Header */}
        <div className="h-20 shrink-0 border-b px-4 flex items-center justify-between">
          {!collapsed && (
            <div>
              <h2 className="font-bold text-slate-800">
                Member Portal
              </h2>

              <p className="text-xs text-slate-500">
                Hindustan Scouts & Guides
              </p>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-2 rounded-lg hover:bg-slate-100"
          >
            {collapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile */}
        {!collapsed && (
          <div className="shrink-0 p-4 border-b">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Member"
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="font-semibold text-slate-800">
                  Rahul Sharma
                </h3>

                <p className="text-xs text-slate-500">
                  Member ID: HSG-1024
                </p>
              </div>
            </div>

            {/* Membership Status */}
            <div className="mt-4 p-3 rounded-xl bg-green-50 border border-green-100">
              <div className="flex justify-between items-center">
                <span className="text-xs text-green-700">
                  Membership Active
                </span>

                <span className="px-2 py-1 text-[10px] rounded-full bg-green-600 text-white">
                  ACTIVE
                </span>
              </div>

              <div className="mt-2 h-2 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-green-600 rounded-full" />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Expires: Dec 2026
              </p>
            </div>
          </div>
        )}

        {/* Search */}
        {!collapsed && (
          <div className="shrink-0 p-4 border-b">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-3 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search menu..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        )}

        {/* Scrollable Menu */}
        <div className="flex-1 overflow-y-auto min-h-0 px-3 py-3">
          {filteredMenu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3
                  px-4 py-3
                  rounded-xl
                  mb-1
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100"
                  }
                `
                }
              >
                <Icon size={20} />

                {!collapsed && (
                  <>
                    <span className="flex-1 text-sm font-medium">
                      {item.name}
                    </span>

                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t p-4 bg-white">
          {!collapsed && (
            <button className="w-full flex items-center justify-center gap-2 mb-3 py-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
              <Bell size={18} />
              Notifications
            </button>
          )}

          <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition">
            <LogOut size={18} />
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
}