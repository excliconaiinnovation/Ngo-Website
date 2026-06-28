import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Pencil,
  Trash2,
  GraduationCap,
  Users,
  Clock3,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TrainingManagement() {
  const [search, setSearch] = useState("");

  const trainings = [
    {
      id: "TRN001",
      title: "Basic Scout Training",
      trainer: "Rajesh Kumar",
      duration: "5 Days",
      participants: 45,
      startDate: "15 Jul 2026",
      status: "Upcoming",
    },
    {
      id: "TRN002",
      title: "Leadership Development",
      trainer: "Priya Sharma",
      duration: "3 Days",
      participants: 32,
      startDate: "10 Jun 2026",
      status: "Completed",
    },
    {
      id: "TRN003",
      title: "Disaster Management",
      trainer: "Amit Verma",
      duration: "7 Days",
      participants: 60,
      startDate: "20 Jul 2026",
      status: "Ongoing",
    },
    {
      id: "TRN004",
      title: "First Aid Training",
      trainer: "Neha Singh",
      duration: "2 Days",
      participants: 28,
      startDate: "05 Aug 2026",
      status: "Upcoming",
    },
  ];

  const filteredTrainings = trainings.filter(
    (training) =>
      training.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      training.id
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Training Management
          </h1>

          <p className="text-slate-500 mt-1">
            Manage training programs and participant records.
          </p>
        </div>

        <Link
  to="/admin/training/add"
  className="
    bg-green-600
    text-white
    px-5 py-3
    rounded-xl
  "
>
  + Add Training
</Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Total Trainings</p>
              <h2 className="text-3xl font-bold mt-2">32</h2>
            </div>
            <GraduationCap
              className="text-blue-600"
              size={34}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Upcoming</p>
              <h2 className="text-3xl font-bold mt-2">12</h2>
            </div>
            <Clock3
              className="text-orange-500"
              size={34}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Completed</p>
              <h2 className="text-3xl font-bold mt-2">15</h2>
            </div>
            <BookOpen
              className="text-green-600"
              size={34}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Participants</p>
              <h2 className="text-3xl font-bold mt-2">820</h2>
            </div>
            <Users
              className="text-purple-600"
              size={34}
            />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-5 border shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search training..."
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
      <div className="hidden lg:block bg-white rounded-2xl border shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-6 py-4">
                Training ID
              </th>
              <th className="text-left px-6 py-4">
                Training Name
              </th>
              <th className="text-left px-6 py-4">
                Trainer
              </th>
              <th className="text-left px-6 py-4">
                Duration
              </th>
              <th className="text-left px-6 py-4">
                Participants
              </th>
              <th className="text-left px-6 py-4">
                Start Date
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
            {filteredTrainings.map((training) => (
              <tr
                key={training.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  {training.id}
                </td>

                <td className="px-6 py-4 font-medium">
                  {training.title}
                </td>

                <td className="px-6 py-4">
                  {training.trainer}
                </td>

                <td className="px-6 py-4">
                  {training.duration}
                </td>

                <td className="px-6 py-4">
                  {training.participants}
                </td>

                <td className="px-6 py-4">
                  {training.startDate}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      training.status === "Upcoming"
                        ? "bg-orange-100 text-orange-700"
                        : training.status === "Ongoing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {training.status}
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
        {filteredTrainings.map((training) => (
          <div
            key={training.id}
            className="bg-white border rounded-2xl p-5 shadow"
          >
            <h3 className="font-bold text-lg">
              {training.title}
            </h3>

            <p className="text-sm text-gray-500">
              {training.id}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-500 text-sm">
                  Trainer
                </p>
                <p>{training.trainer}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Duration
                </p>
                <p>{training.duration}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Participants
                </p>
                <p>{training.participants}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Start Date
                </p>
                <p>{training.startDate}</p>
              </div>
            </div>

            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  training.status === "Upcoming"
                    ? "bg-orange-100 text-orange-700"
                    : training.status === "Ongoing"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {training.status}
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