import { useState } from "react";
import {
  Search,
  
  Eye,
  Pencil,
  Trash2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RoleManagement() {
  const [search, setSearch] = useState("");

  const roles = [
    {
      id: 1,
      role: "Super Admin",
      users: 2,
      permissions: 45,
      status: "Active",
      created: "10 Jan 2024",
    },
    {
      id: 2,
      role: "State Admin",
      users: 15,
      permissions: 35,
      status: "Active",
      created: "15 Jan 2024",
    },
    {
      id: 3,
      role: "District Admin",
      users: 52,
      permissions: 28,
      status: "Active",
      created: "22 Jan 2024",
    },
    {
      id: 4,
      role: "Unit Leader",
      users: 120,
      permissions: 18,
      status: "Active",
      created: "01 Feb 2024",
    },
    {
      id: 5,
      role: "Volunteer",
      users: 450,
      permissions: 10,
      status: "Inactive",
      created: "10 Feb 2024",
    },
  ];

  const filteredRoles = roles.filter((item) =>
    item.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Role Management
          </h1>

          <p className="text-slate-500 mt-1">
            Manage user roles and permissions
          </p>
        </div>

        <Link
  to="/admin/roles/add"
  className="
    bg-green-600
    text-white
    px-5 py-3
    rounded-xl
  "
>
  + Add Role
</Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Total Roles</p>
              <h2 className="text-3xl font-bold mt-2">
                {roles.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
              <ShieldCheck className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Active Roles</p>
              <h2 className="text-3xl font-bold mt-2">
                {
                  roles.filter(
                    (role) => role.status === "Active"
                  ).length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
              <Users className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Total Users</p>
              <h2 className="text-3xl font-bold mt-2">
                {roles.reduce(
                  (sum, role) => sum + role.users,
                  0
                )}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
              <Users className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search roles..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b">
              <th className="text-left px-6 py-4">
                Role
              </th>
              <th className="text-left px-6 py-4">
                Users
              </th>
              <th className="text-left px-6 py-4">
                Permissions
              </th>
              <th className="text-left px-6 py-4">
                Status
              </th>
              <th className="text-left px-6 py-4">
                Created
              </th>
              <th className="text-center px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredRoles.map((role) => (
              <tr
                key={role.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-medium">
                  {role.role}
                </td>

                <td className="px-6 py-4">
                  {role.users}
                </td>

                <td className="px-6 py-4">
                  {role.permissions}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      role.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {role.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {role.created}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg">
                      <Eye size={18} />
                    </button>

                    <button className="text-green-600 hover:bg-green-50 p-2 rounded-lg">
                      <Pencil size={18} />
                    </button>

                    <button className="text-red-600 hover:bg-red-50 p-2 rounded-lg">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredRoles.map((role) => (
          <div
            key={role.id}
            className="bg-white rounded-2xl border p-5 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">
                  {role.role}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Created: {role.created}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  role.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {role.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-slate-500 text-sm">
                  Users
                </p>
                <p className="font-semibold">
                  {role.users}
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Permissions
                </p>
                <p className="font-semibold">
                  {role.permissions}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-5">
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg">
                <Eye size={18} className="mx-auto" />
              </button>

              <button className="flex-1 bg-green-50 text-green-600 py-2 rounded-lg">
                <Pencil size={18} className="mx-auto" />
              </button>

              <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg">
                <Trash2 size={18} className="mx-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}