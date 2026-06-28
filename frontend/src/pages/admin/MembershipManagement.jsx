import { useState } from "react";
import {
  Search,
  Filter,
  
  Eye,
  Pencil,
  CheckCircle,
  Users,
  UserCheck,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MembershipManagement() {
  const [search, setSearch] = useState("");

  const members = [
    {
      id: "MEM001",
      name: "Arjun Sharma",
      membership: "Life Member",
      state: "Maharashtra",
      joinDate: "12 Jan 2023",
      status: "Active",
    },
    {
      id: "MEM002",
      name: "Priya Nair",
      membership: "Annual Member",
      state: "Kerala",
      joinDate: "05 Mar 2024",
      status: "Pending",
    },
    {
      id: "MEM003",
      name: "Rahul Gupta",
      membership: "Volunteer",
      state: "UP",
      joinDate: "18 Aug 2022",
      status: "Active",
    },
    {
      id: "MEM004",
      name: "Sneha Reddy",
      membership: "Annual Member",
      state: "Telangana",
      joinDate: "20 Apr 2021",
      status: "Expired",
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Membership Management
          </h1>

          <p className="text-slate-500 mt-1">
            Manage membership registrations, approvals and renewals.
          </p>
        </div>

        <Link
  to="/admin/memberships/add"
  className="
    bg-green-600
    text-white
    px-5 py-3
    rounded-xl
  "
>
  + New Membership
</Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Total Members</p>
              <h2 className="text-3xl font-bold mt-2">1250</h2>
            </div>
            <Users className="text-blue-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Active</p>
              <h2 className="text-3xl font-bold mt-2">980</h2>
            </div>
            <UserCheck className="text-green-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Pending</p>
              <h2 className="text-3xl font-bold mt-2">180</h2>
            </div>
            <Clock3 className="text-orange-500" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Expired</p>
              <h2 className="text-3xl font-bold mt-2">90</h2>
            </div>
            <Clock3 className="text-red-500" size={34} />
          </div>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="bg-white rounded-2xl p-5 shadow border mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search member..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="flex items-center justify-center gap-2 px-5 py-3 border rounded-xl">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-2xl shadow border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-6 py-4">Member ID</th>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Membership</th>
              <th className="text-left px-6 py-4">State</th>
              <th className="text-left px-6 py-4">Join Date</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredMembers.map((member) => (
              <tr
                key={member.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">{member.id}</td>
                <td className="px-6 py-4 font-medium">
                  {member.name}
                </td>
                <td className="px-6 py-4">
                  {member.membership}
                </td>
                <td className="px-6 py-4">{member.state}</td>
                <td className="px-6 py-4">
                  {member.joinDate}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      member.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : member.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600">
                      <Eye size={18} />
                    </button>

                    <button className="text-green-600">
                      <Pencil size={18} />
                    </button>

                    <button className="text-purple-600">
                      <CheckCircle size={18} />
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
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border rounded-2xl p-5 shadow"
          >
            <h3 className="font-bold text-lg">
              {member.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {member.id}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-500 text-sm">
                  Membership
                </p>
                <p>{member.membership}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  State
                </p>
                <p>{member.state}</p>
              </div>
            </div>

            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  member.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : member.status === "Pending"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {member.status}
              </span>
            </div>

            <div className="flex gap-2 mt-5">
              <button className="flex-1 bg-blue-50 py-2 rounded-lg">
                <Eye size={18} className="mx-auto text-blue-600" />
              </button>

              <button className="flex-1 bg-green-50 py-2 rounded-lg">
                <Pencil size={18} className="mx-auto text-green-600" />
              </button>

              <button className="flex-1 bg-purple-50 py-2 rounded-lg">
                <CheckCircle
                  size={18}
                  className="mx-auto text-purple-600"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}