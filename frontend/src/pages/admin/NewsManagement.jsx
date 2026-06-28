import { useState } from "react";
import {
  Search,
  Filter,
  
  Eye,
  Pencil,
  Trash2,
  Newspaper,
  FileText,
  Star,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function NewsManagement() {
  const [search, setSearch] = useState("");

  const newsList = [
    {
      id: "NEWS001",
      title: "Tree Plantation Drive Successfully Completed",
      category: "Environment",
      author: "Admin",
      publishDate: "10 Jul 2026",
      featured: true,
      status: "Published",
    },
    {
      id: "NEWS002",
      title: "State Training Camp Registration Open",
      category: "Training",
      author: "Rajesh Kumar",
      publishDate: "08 Jul 2026",
      featured: false,
      status: "Published",
    },
    {
      id: "NEWS003",
      title: "National Scout Conference Announcement",
      category: "Events",
      author: "Priya Sharma",
      publishDate: "05 Jul 2026",
      featured: true,
      status: "Draft",
    },
    {
      id: "NEWS004",
      title: "Volunteer Recruitment Program",
      category: "Volunteer",
      author: "Admin",
      publishDate: "02 Jul 2026",
      featured: false,
      status: "Archived",
    },
  ];

  const filteredNews = newsList.filter(
    (news) =>
      news.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      news.id
        .toLowerCase()
        .includes(search.toLowerCase())
  );

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
            News Management
          </h1>

          <p className="text-slate-500 mt-1">
            Create and manage website news articles.
          </p>
        </div>

        <Link
  to="/admin/news/add"
  className="
    bg-green-600
    text-white
    px-5 py-3
    rounded-xl
  "
>
  + Add News
</Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Total News</p>
              <h2 className="text-3xl font-bold mt-2">128</h2>
            </div>
            <Newspaper
              size={34}
              className="text-blue-600"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Published</p>
              <h2 className="text-3xl font-bold mt-2">84</h2>
            </div>
            <FileText
              size={34}
              className="text-green-600"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Featured</p>
              <h2 className="text-3xl font-bold mt-2">18</h2>
            </div>
            <Star
              size={34}
              className="text-yellow-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Drafts</p>
              <h2 className="text-3xl font-bold mt-2">26</h2>
            </div>
            <CalendarDays
              size={34}
              className="text-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl border shadow-sm p-5 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button className="flex items-center gap-2 px-5 py-3 border rounded-xl">
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
              <th className="text-left px-6 py-4">ID</th>
              <th className="text-left px-6 py-4">Title</th>
              <th className="text-left px-6 py-4">Category</th>
              <th className="text-left px-6 py-4">Author</th>
              <th className="text-left px-6 py-4">Date</th>
              <th className="text-left px-6 py-4">Featured</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredNews.map((news) => (
              <tr
                key={news.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">{news.id}</td>

                <td className="px-6 py-4 font-medium">
                  {news.title}
                </td>

                <td className="px-6 py-4">
                  {news.category}
                </td>

                <td className="px-6 py-4">
                  {news.author}
                </td>

                <td className="px-6 py-4">
                  {news.publishDate}
                </td>

                <td className="px-6 py-4">
                  {news.featured ? (
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      Featured
                    </span>
                  ) : (
                    "-"
                  )}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      news.status
                    )}`}
                  >
                    {news.status}
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
        {filteredNews.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl border p-5 shadow-sm"
          >
            <h3 className="font-bold text-lg">
              {news.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {news.id}
            </p>

            <div className="mt-4 space-y-2">
              <p>
                <strong>Category:</strong>{" "}
                {news.category}
              </p>

              <p>
                <strong>Author:</strong>{" "}
                {news.author}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {news.publishDate}
              </p>
            </div>

            <div className="flex gap-2 mt-4 flex-wrap">
              {news.featured && (
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Featured
                </span>
              )}

              <span
                className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                  news.status
                )}`}
              >
                {news.status}
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