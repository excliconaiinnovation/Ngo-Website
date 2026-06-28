import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Pencil,
  Trash2,
  Users,
  UserCheck,
  UserX,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const users = [
    {
      id: "NYO-001234",
      name: "Arjun Sharma",
      role: "District Leader",
      state: "Maharashtra",
      status: "Active",
      joined: "Jan 2021",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: "NYO-001235",
      name: "Priya Nair",
      role: "Chapter Secretary",
      state: "Kerala",
      status: "Active",
      joined: "Mar 2022",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: "NYO-001236",
      name: "Rahul Gupta",
      role: "Youth Coordinator",
      state: "UP",
      status: "Pending",
      joined: "May 2024",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: "NYO-001237",
      name: "Sneha Reddy",
      role: "Member",
      state: "Telangana",
      status: "Active",
      joined: "Feb 2023",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
      id: "NYO-001238",
      name: "Vikram Singh",
      role: "State President",
      state: "Rajasthan",
      status: "Inactive",
      joined: "Aug 2020",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const activeUsers = users.filter(
    (u) => u.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (u) => u.status === "Inactive"
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            User Management
          </h1>
          <p className="text-slate-500 mt-1">
            Manage all members, leaders and administrators.
          </p>
        </div>

        <Link
          to="/admin/users/add"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium shadow"
        >
          <Plus size={18} />
          Add User
        </Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-3xl border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500 text-sm">
                Total Users
              </p>
              <h2 className="text-3xl font-bold mt-1">
                {users.length}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Users className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500 text-sm">
                Active Users
              </p>
              <h2 className="text-3xl font-bold mt-1">
                {activeUsers}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <UserCheck className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500 text-sm">
                Inactive Users
              </p>
              <h2 className="text-3xl font-bold mt-1">
                {inactiveUsers}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <UserX className="text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-5 rounded-3xl border shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-3.5 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <Filter
              size={18}
              className="absolute left-4 top-3.5 text-slate-400"
            />

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="pl-11 pr-6 py-3 border rounded-xl outline-none bg-white"
            >
              <option>All</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="px-6 py-4 text-left">
                  User
                </th>
                <th className="px-6 py-4 text-left">
                  Role
                </th>
                <th className="px-6 py-4 text-left">
                  State
                </th>
                <th className="px-6 py-4 text-left">
                  Status
                </th>
                <th className="px-6 py-4 text-left">
                  Joined
                </th>
                <th className="px-6 py-4 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-11 h-11 rounded-full"
                      />

                      <div>
                        <h4 className="font-medium">
                          {user.name}
                        </h4>

                        <p className="text-xs text-slate-500">
                          {user.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {user.role}
                  </td>

                  <td className="px-6 py-4">
                    {user.state}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : user.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    {user.joined}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button className="p-2 rounded-lg hover:bg-blue-100 text-blue-600">
                        <Eye size={18} />
                      </button>

                      <button className="p-2 rounded-lg hover:bg-green-100 text-green-600">
                        <Pencil size={18} />
                      </button>

                      <button className="p-2 rounded-lg hover:bg-red-100 text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <Users
                size={40}
                className="mx-auto text-slate-300"
              />

              <p className="mt-3 text-slate-500">
                No users found
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white p-4 rounded-2xl border shadow-sm flex justify-between items-center">
        <span className="text-sm text-slate-500">
          Showing {filteredUsers.length} users
        </span>

        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-slate-50">
            Previous
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            1
          </button>

          <button className="px-4 py-2 border rounded-lg hover:bg-slate-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}