import {
  Users,
  UserCheck,
  CalendarDays,
  HeartHandshake,
  Download,
  FileSpreadsheet,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function ReportsAnalytics() {
  const membershipData = [
    { month: "Jan", members: 120 },
    { month: "Feb", members: 180 },
    { month: "Mar", members: 250 },
    { month: "Apr", members: 320 },
    { month: "May", members: 410 },
    { month: "Jun", members: 520 },
  ];

  const donationData = [
    { month: "Jan", amount: 15000 },
    { month: "Feb", amount: 25000 },
    { month: "Mar", amount: 35000 },
    { month: "Apr", amount: 45000 },
    { month: "May", amount: 55000 },
    { month: "Jun", amount: 70000 },
  ];

  const recentReports = [
    {
      title: "June Membership Report",
      date: "10 Jul 2026",
      type: "Membership",
    },
    {
      title: "Volunteer Activity Report",
      date: "08 Jul 2026",
      type: "Volunteer",
    },
    {
      title: "Donation Summary",
      date: "05 Jul 2026",
      type: "Finance",
    },
    {
      title: "Event Participation Report",
      date: "01 Jul 2026",
      type: "Events",
    },
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Reports & Analytics
          </h1>

          <p className="text-gray-500 mt-1">
            Monitor NGO performance and growth.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl">
            <Download size={18} />
            Export PDF
          </button>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
            <FileSpreadsheet size={18} />
            Export Excel
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">
                Total Members
              </p>

              <h2 className="text-3xl font-bold mt-2">
                5,280
              </h2>
            </div>

            <Users
              size={34}
              className="text-blue-600"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">
                Volunteers
              </p>

              <h2 className="text-3xl font-bold mt-2">
                1,280
              </h2>
            </div>

            <UserCheck
              size={34}
              className="text-green-600"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">
                Total Events
              </p>

              <h2 className="text-3xl font-bold mt-2">
                154
              </h2>
            </div>

            <CalendarDays
              size={34}
              className="text-orange-600"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">
                Donations
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ₹12.5L
              </h2>
            </div>

            <HeartHandshake
              size={34}
              className="text-purple-600"
            />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid xl:grid-cols-2 gap-6">
        {/* Membership Growth */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-5">
            Membership Growth
          </h3>

          <div className="h-80">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart data={membershipData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="members"
                  fill="#2563eb"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donation Growth */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-5">
            Donation Growth
          </h3>

          <div className="h-80">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart data={donationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#16a34a"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-2xl border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="font-semibold text-lg">
            Recent Reports
          </h3>
        </div>

        <div className="divide-y">
          {recentReports.map((report, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between p-5"
            >
              <div>
                <h4 className="font-medium">
                  {report.title}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {report.date}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-3 md:mt-0">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {report.type}
                </span>

                <button className="text-blue-600 font-medium">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-2">
          Organization Performance
        </h2>

        <p className="text-blue-100 mb-6">
          Membership increased by 28% and
          donations increased by 35% compared to
          the previous quarter.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <h3 className="text-3xl font-bold">
              +28%
            </h3>
            <p className="text-blue-100">
              Membership Growth
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">
              +35%
            </h3>
            <p className="text-blue-100">
              Donation Growth
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">
              +18%
            </h3>
            <p className="text-blue-100">
              Event Participation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}