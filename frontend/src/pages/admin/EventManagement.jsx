import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Pencil,
  Trash2,
  CalendarDays,
  MapPin,
  Users,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EventManagement() {
  const [search, setSearch] = useState("");

  const events = [
    {
      id: "EVT001",
      title: "Tree Plantation Drive",
      type: "Environment",
      location: "Gurugram",
      date: "15 Aug 2026",
      participants: 120,
      status: "Upcoming",
    },
    {
      id: "EVT002",
      title: "Health Checkup Camp",
      type: "Health",
      location: "Faridabad",
      date: "10 Jul 2026",
      participants: 250,
      status: "Completed",
    },
    {
      id: "EVT003",
      title: "Youth Leadership Workshop",
      type: "Training",
      location: "Jaipur",
      date: "20 Jul 2026",
      participants: 80,
      status: "Ongoing",
    },
    {
      id: "EVT004",
      title: "Women Empowerment Program",
      type: "Social",
      location: "Delhi",
      date: "05 Sep 2026",
      participants: 150,
      status: "Upcoming",
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      event.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      event.id
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Event Management
          </h1>

          <p className="text-slate-500 mt-1">
            Manage NGO events, activities and programs.
          </p>
        </div>

        <Link
  to="/admin/events/create"
  className="
    bg-green-600
    text-white
    px-5 py-3
    rounded-xl
  "
>
  + Create Event
</Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Total Events</p>
              <h2 className="text-3xl font-bold mt-2">48</h2>
            </div>
            <CalendarDays
              className="text-blue-600"
              size={34}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Upcoming</p>
              <h2 className="text-3xl font-bold mt-2">18</h2>
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
              <p className="text-gray-500">Ongoing</p>
              <h2 className="text-3xl font-bold mt-2">6</h2>
            </div>
            <CalendarDays
              className="text-green-600"
              size={34}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">
                Participants
              </p>
              <h2 className="text-3xl font-bold mt-2">
                4,280
              </h2>
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
              placeholder="Search event..."
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
                Event ID
              </th>
              <th className="text-left px-6 py-4">
                Event Name
              </th>
              <th className="text-left px-6 py-4">
                Type
              </th>
              <th className="text-left px-6 py-4">
                Location
              </th>
              <th className="text-left px-6 py-4">
                Date
              </th>
              <th className="text-left px-6 py-4">
                Participants
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
            {filteredEvents.map((event) => (
              <tr
                key={event.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  {event.id}
                </td>

                <td className="px-6 py-4 font-medium">
                  {event.title}
                </td>

                <td className="px-6 py-4">
                  {event.type}
                </td>

                <td className="px-6 py-4">
                  {event.location}
                </td>

                <td className="px-6 py-4">
                  {event.date}
                </td>

                <td className="px-6 py-4">
                  {event.participants}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      event.status === "Upcoming"
                        ? "bg-orange-100 text-orange-700"
                        : event.status === "Ongoing"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {event.status}
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
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white border rounded-2xl p-5 shadow"
          >
            <h3 className="font-bold text-lg">
              {event.title}
            </h3>

            <p className="text-sm text-gray-500">
              {event.id}
            </p>

            <div className="space-y-2 mt-4">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                {event.location}
              </p>

              <p>{event.type}</p>

              <p>{event.date}</p>

              <p>{event.participants} Participants</p>
            </div>

            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  event.status === "Upcoming"
                    ? "bg-orange-100 text-orange-700"
                    : event.status === "Ongoing"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {event.status}
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