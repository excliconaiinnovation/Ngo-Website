import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Pencil,
  Trash2,
  Users,
  UserCheck,
  Clock3,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function VolunteerManagement() {
  const [search, setSearch] = useState("");

  const volunteers = [
    {
      id: "VOL001",
      name: "Arjun Sharma",
      unit: "Gurugram City Unit",
      skill: "Event Management",
      joinDate: "12 Jan 2024",
      status: "Active",
    },
    {
      id: "VOL002",
      name: "Priya Nair",
      unit: "Jaipur North Unit",
      skill: "Training",
      joinDate: "20 Feb 2024",
      status: "Pending",
    },
    {
      id: "VOL003",
      name: "Rahul Gupta",
      unit: "Delhi Central Unit",
      skill: "Medical Support",
      joinDate: "05 Mar 2024",
      status: "Active",
    },
    {
      id: "VOL004",
      name: "Sneha Reddy",
      unit: "Hyderabad Unit",
      skill: "Social Media",
      joinDate: "15 Apr 2024",
      status: "Inactive",
    },
  ];

  const filteredVolunteers = volunteers.filter(
    (volunteer) =>
      volunteer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      volunteer.id
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Volunteer Management
          </h1>

          <p className="text-slate-500 mt-1">
            Manage volunteers, assignments and activities.
          </p>
        </div>

        <Link
  to="/admin/volunteers/add"
  className="
    bg-green-600
    text-white
    px-5 py-3
    rounded-xl
  "
>
  + Add Volunteer
</Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Total Volunteers</p>
              <h2 className="text-3xl font-bold mt-2">540</h2>
            </div>
            <Users className="text-blue-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Active</p>
              <h2 className="text-3xl font-bold mt-2">420</h2>
            </div>
            <UserCheck className="text-green-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Pending</p>
              <h2 className="text-3xl font-bold mt-2">80</h2>
            </div>
            <Clock3 className="text-orange-500" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Projects</p>
              <h2 className="text-3xl font-bold mt-2">32</h2>
            </div>
            <HeartHandshake
              className="text-purple-600"
              size={34}
            />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-5 shadow border mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search volunteer..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
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
              <th className="text-left px-6 py-4">
                Volunteer ID
              </th>
              <th className="text-left px-6 py-4">
                Name
              </th>
              <th className="text-left px-6 py-4">
                Unit
              </th>
              <th className="text-left px-6 py-4">
                Skill
              </th>
              <th className="text-left px-6 py-4">
                Join Date
              </th>
              <th className="text-left px-6 py-4">
                Status
              </th>
              <th className="text-center px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredVolunteers.map((volunteer) => (
              <tr
                key={volunteer.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  {volunteer.id}
                </td>

                <td className="px-6 py-4 font-medium">
                  {volunteer.name}
                </td>

                <td className="px-6 py-4">
                  {volunteer.unit}
                </td>

                <td className="px-6 py-4">
                  {volunteer.skill}
                </td>

                <td className="px-6 py-4">
                  {volunteer.joinDate}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      volunteer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : volunteer.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {volunteer.status}
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

                    <button className="text-red-600">
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
        {filteredVolunteers.map((volunteer) => (
          <div
            key={volunteer.id}
            className="bg-white border rounded-2xl p-5 shadow"
          >
            <h3 className="font-bold text-lg">
              {volunteer.name}
            </h3>

            <p className="text-sm text-gray-500">
              {volunteer.id}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-500 text-sm">
                  Unit
                </p>
                <p>{volunteer.unit}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Skill
                </p>
                <p>{volunteer.skill}</p>
              </div>
            </div>

            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  volunteer.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : volunteer.status === "Pending"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {volunteer.status}
              </span>
            </div>

            <div className="flex gap-2 mt-5">
              <button className="flex-1 bg-blue-50 py-2 rounded-lg">
                <Eye
                  size={18}
                  className="mx-auto text-blue-600"
                />
              </button>

              <button className="flex-1 bg-green-50 py-2 rounded-lg">
                <Pencil
                  size={18}
                  className="mx-auto text-green-600"
                />
              </button>

              <button className="flex-1 bg-red-50 py-2 rounded-lg">
                <Trash2
                  size={18}
                  className="mx-auto text-red-600"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}