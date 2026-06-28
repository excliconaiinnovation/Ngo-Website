import { useState } from "react";
import {
  Award,
  Search,
  Download,
  Eye,
  BadgeCheck,
} from "lucide-react";

export default function Certificates() {
  const [search, setSearch] = useState("");

  const certificates = [
    {
      id: "CERT-001",
      title: "Leadership Excellence Program",
      issueDate: "15 March 2026",
      status: "Verified",
      organization: "HSGA National HQ",
    },
    {
      id: "CERT-002",
      title: "First Aid Training",
      issueDate: "20 January 2026",
      status: "Verified",
      organization: "HSGA Training Wing",
    },
    {
      id: "CERT-003",
      title: "Community Service Excellence",
      issueDate: "05 December 2025",
      status: "Verified",
      organization: "HSGA State Chapter",
    },
    {
      id: "CERT-004",
      title: "Disaster Management Workshop",
      issueDate: "12 August 2025",
      status: "Pending Verification",
      organization: "HSGA National HQ",
    },
  ];

  const filteredCertificates = certificates.filter(
    (certificate) =>
      certificate.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          My Certificates
        </h1>

        <p className="text-gray-500 mt-2">
          View, verify and download your earned
          certificates.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-white border rounded-3xl p-6">
          <Award
            className="text-blue-600 mb-3"
            size={30}
          />

          <p className="text-gray-500">
            Total Certificates
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12
          </h3>
        </div>

        <div className="bg-white border rounded-3xl p-6">
          <BadgeCheck
            className="text-green-600 mb-3"
            size={30}
          />

          <p className="text-gray-500">
            Verified
          </p>

          <h3 className="text-3xl font-bold mt-2">
            11
          </h3>
        </div>

        <div className="bg-white border rounded-3xl p-6">
          <Award
            className="text-orange-500 mb-3"
            size={30}
          />

          <p className="text-gray-500">
            Pending Verification
          </p>

          <h3 className="text-3xl font-bold mt-2">
            1
          </h3>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white border rounded-3xl p-5">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              border
              rounded-xl
              py-3
              pl-12
              pr-4
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredCertificates.map((certificate) => (
          <div
            key={certificate.id}
            className="
              bg-white
              border
              rounded-3xl
              p-6
              shadow-sm
              hover:shadow-lg
              transition
            "
          >
            <div className="flex justify-between items-start">
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    certificate.status === "Verified"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {certificate.status}
                </span>

                <h3 className="text-xl font-bold mt-4">
                  {certificate.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {certificate.organization}
                </p>
              </div>

              <Award
                size={40}
                className="text-blue-600"
              />
            </div>

            <div className="mt-5 space-y-2">
              <p className="text-sm text-gray-600">
                <strong>Certificate ID:</strong>{" "}
                {certificate.id}
              </p>

              <p className="text-sm text-gray-600">
                <strong>Issue Date:</strong>{" "}
                {certificate.issueDate}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                className="
                flex items-center gap-2
                px-4 py-2
                border
                rounded-xl
                hover:bg-gray-50
              "
              >
                <Eye size={16} />
                View
              </button>

              <button
                className="
                flex items-center gap-2
                px-4 py-2
                bg-blue-600
                hover:bg-blue-700
                text-white
                rounded-xl
              "
              >
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Verification */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl p-6">
        <h2 className="text-2xl font-bold">
          Certificate Verification
        </h2>

        <p className="mt-2 text-blue-100">
          All certificates issued by HSGA contain
          unique IDs and QR verification codes for
          authenticity.
        </p>

        <button
          className="
          mt-5
          bg-white
          text-blue-700
          px-5 py-3
          rounded-xl
          font-medium
        "
        >
          Verify Certificate
        </button>
      </div>
    </div>
  );
}