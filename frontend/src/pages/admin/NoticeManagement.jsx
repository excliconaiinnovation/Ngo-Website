import { useState } from "react";
import {
  Search,
  Filter,
  
  Eye,
  Pencil,
  Trash2,
  Bell,
  FileText,
  Clock3,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function NoticeManagement() {
  const [search, setSearch] = useState("");

  const notices = [
    {
      id: "NOT001",
      title: "State Level Training Camp",
      category: "Training",
      publishDate: "01 Jul 2026",
      expiryDate: "31 Jul 2026",
      priority: "High",
      status: "Published",
    },
    {
      id: "NOT002",
      title: "Volunteer Registration Open",
      category: "Volunteer",
      publishDate: "05 Jul 2026",
      expiryDate: "05 Aug 2026",
      priority: "Medium",
      status: "Published",
    },
    {
      id: "NOT003",
      title: "District Meeting Schedule",
      category: "Meeting",
      publishDate: "10 Jul 2026",
      expiryDate: "20 Jul 2026",
      priority: "Low",
      status: "Draft",
    },
    {
      id: "NOT004",
      title: "Annual Camp Registration",
      category: "Event",
      publishDate: "15 Jun 2026",
      expiryDate: "30 Jun 2026",
      priority: "High",
      status: "Expired",
    },
  ];

  const filteredNotices = notices.filter(
    (notice) =>
      notice.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      notice.id
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-700";
      case "Draft":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Notice Management
          </h1>

          <p className="text-slate-500 mt-1">
            Create, publish and manage notices.
          </p>
        </div>

        <Link
  to="/admin/notices/add"
  className="
    bg-green-600
    text-white
    px-5 py-3
    rounded-xl
  "
>
  + Create Notice
</Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Total Notices</p>
              <h2 className="text-3xl font-bold mt-2">84</h2>
            </div>
            <Bell className="text-blue-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Published</p>
              <h2 className="text-3xl font-bold mt-2">52</h2>
            </div>
            <FileText className="text-green-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Draft</p>
              <h2 className="text-3xl font-bold mt-2">18</h2>
            </div>
            <Clock3 className="text-orange-500" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Expired</p>
              <h2 className="text-3xl font-bold mt-2">14</h2>
            </div>
            <AlertTriangle
              className="text-red-600"
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
              placeholder="Search notices..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
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
              <th className="text-left px-6 py-4">Notice ID</th>
              <th className="text-left px-6 py-4">Title</th>
              <th className="text-left px-6 py-4">Category</th>
              <th className="text-left px-6 py-4">Publish Date</th>
              <th className="text-left px-6 py-4">Expiry Date</th>
              <th className="text-left px-6 py-4">Priority</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredNotices.map((notice) => (
              <tr
                key={notice.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">{notice.id}</td>
                <td className="px-6 py-4 font-medium">
                  {notice.title}
                </td>
                <td className="px-6 py-4">
                  {notice.category}
                </td>
                <td className="px-6 py-4">
                  {notice.publishDate}
                </td>
                <td className="px-6 py-4">
                  {notice.expiryDate}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(
                      notice.priority
                    )}`}
                  >
                    {notice.priority}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      notice.status
                    )}`}
                  >
                    {notice.status}
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
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white border rounded-2xl p-5 shadow"
          >
            <h3 className="font-bold text-lg">
              {notice.title}
            </h3>

            <p className="text-sm text-gray-500">
              {notice.id}
            </p>

            <div className="mt-4 space-y-2">
              <p>
                <strong>Category:</strong>{" "}
                {notice.category}
              </p>

              <p>
                <strong>Publish:</strong>{" "}
                {notice.publishDate}
              </p>

              <p>
                <strong>Expiry:</strong>{" "}
                {notice.expiryDate}
              </p>
            </div>

            <div className="flex gap-2 mt-4 flex-wrap">
              <span
                className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(
                  notice.priority
                )}`}
              >
                {notice.priority}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                  notice.status
                )}`}
              >
                {notice.status}
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