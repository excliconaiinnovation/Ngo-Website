
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  UserCheck,
  HeartHandshake,
  CalendarDays,
  BookOpen,
  Award,
  Bell,
  Newspaper,
  Image,
  IndianRupee,
  BarChart3,
  Settings,
  Search,
  Menu,
  X,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState("");

  const menuItems = [
    {
      title: "MAIN",
      items: [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          path: "/admin",
        },
      ],
    },
    {
      title: "MANAGEMENT",
      items: [
        {
          name: "Users",
          icon: Users,
          path: "/admin/users",
        },
        {
          name: "Roles",
          icon: ShieldCheck,
          path: "/admin/roles",
        },
        {
          name: "Memberships",
          icon: UserCheck,
          path: "/admin/memberships",
        },
        {
          name: "Volunteers",
          icon: HeartHandshake,
          path: "/admin/volunteers",
        },
        {
          name: "Events",
          icon: CalendarDays,
          path: "/admin/events",
        },
        {
          name: "Training",
          icon: BookOpen,
          path: "/admin/training",
        },
        {
          name: "Certificates",
          icon: Award,
          path: "/admin/certificates",
        },
      ],
    },
    {
      title: "CONTENT",
      items: [
        {
          name: "Notices",
          icon: Bell,
          path: "/admin/notices",
          badge: 5,
        },
        {
          name: "News",
          icon: Newspaper,
          path: "/admin/news",
        },
        {
          name: "Gallery",
          icon: Image,
          path: "/admin/gallery",
        },
      ],
    },
    {
      title: "REPORTS",
      items: [
        {
          name: "Donations",
          icon: IndianRupee,
          path: "/admin/donations",
        },
        {
          name: "Analytics",
          icon: BarChart3,
          path: "/admin/reports",
        },
        {
          name: "Settings",
          icon: Settings,
          path: "/admin/settings",
        },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-blue-600 text-white shadow-lg"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:relative
          top-0 left-0
          h-screen
          bg-white
          border-r
          border-slate-200
          shadow-xl
          z-50
          transition-all
          duration-300
          ${collapsed ? "w-20" : "w-72"}
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="h-20 border-b px-4 flex items-center justify-between">
          {!collapsed && (
            <div>
              <h2 className="font-bold text-lg text-slate-800">
                NGO Admin
              </h2>
              <p className="text-xs text-slate-500">
                Management Portal
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

        {/* Search */}
        {!collapsed && (
          <div className="p-4">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-3 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search menu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        )}

        {/* Menu */}
        <div className="overflow-y-auto h-[calc(100vh-220px)] px-3">
          {menuItems.map((section) => (
            <div key={section.title} className="mb-6">
              {!collapsed && (
                <h4 className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {section.title}
                </h4>
              )}

              {section.items
                .filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        `
                          flex items-center
                          gap-3
                          px-4 py-3
                          rounded-xl
                          mb-1
                          transition-all
                          duration-200
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
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full border-t bg-white p-4">
          {!collapsed && (
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div>
                <h4 className="font-medium text-sm">
                  Super Admin
                </h4>
                <p className="text-xs text-slate-500">
                  admin@ngo.org
                </p>
              </div>
            </div>
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

