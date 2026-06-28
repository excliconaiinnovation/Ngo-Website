import { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Pencil,
  Download,
  Award,
  FileCheck,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function CertificateManagement() {
  const [search, setSearch] = useState("");

  const certificates = [
    {
      id: "CERT001",
      member: "Arjun Sharma",
      program: "Basic Scout Training",
      issueDate: "15 Jul 2026",
      status: "Issued",
    },
    {
      id: "CERT002",
      member: "Priya Nair",
      program: "Leadership Workshop",
      issueDate: "20 Jul 2026",
      status: "Verified",
    },
    {
      id: "CERT003",
      member: "Rahul Gupta",
      program: "Disaster Management",
      issueDate: "25 Jul 2026",
      status: "Pending",
    },
    {
      id: "CERT004",
      member: "Sneha Reddy",
      program: "First Aid Training",
      issueDate: "30 Jul 2026",
      status: "Issued",
    },
  ];

  const filteredCertificates = certificates.filter(
    (certificate) =>
      certificate.member
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      certificate.id
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Certificate Management
          </h1>

          <p className="text-slate-500 mt-1">
            Generate, verify and manage certificates.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
          <Plus size={18} />
          Issue Certificate
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">
                Total Certificates
              </p>
              <h2 className="text-3xl font-bold mt-2">
                1,250
              </h2>
            </div>

            <Award
              className="text-blue-600"
              size={34}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Issued</p>
              <h2 className="text-3xl font-bold mt-2">
                980
              </h2>
            </div>

            <FileCheck
              className="text-green-600"
              size={34}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Pending</p>
              <h2 className="text-3xl font-bold mt-2">
                180
              </h2>
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
              <p className="text-gray-500">Verified</p>
              <h2 className="text-3xl font-bold mt-2">
                90
              </h2>
            </div>

            <ShieldCheck
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
              placeholder="Search certificate..."
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
              <th className="text-left px-6 py-4">
                Certificate No
              </th>
              <th className="text-left px-6 py-4">
                Member Name
              </th>
              <th className="text-left px-6 py-4">
                Training/Event
              </th>
              <th className="text-left px-6 py-4">
                Issue Date
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
            {filteredCertificates.map((certificate) => (
              <tr
                key={certificate.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  {certificate.id}
                </td>

                <td className="px-6 py-4 font-medium">
                  {certificate.member}
                </td>

                <td className="px-6 py-4">
                  {certificate.program}
                </td>

                <td className="px-6 py-4">
                  {certificate.issueDate}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      certificate.status === "Issued"
                        ? "bg-green-100 text-green-700"
                        : certificate.status === "Verified"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {certificate.status}
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
                      <Download size={18} />
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
        {filteredCertificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-white border rounded-2xl p-5 shadow"
          >
            <h3 className="font-bold text-lg">
              {certificate.member}
            </h3>

            <p className="text-sm text-gray-500">
              {certificate.id}
            </p>

            <div className="mt-4 space-y-2">
              <p>{certificate.program}</p>
              <p>{certificate.issueDate}</p>
            </div>

            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  certificate.status === "Issued"
                    ? "bg-green-100 text-green-700"
                    : certificate.status === "Verified"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {certificate.status}
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

              <button className="flex-1 bg-purple-50 py-2 rounded-lg">
                <Download
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