import {
  BadgeCheck,
  CalendarDays,
  CreditCard,
  Clock,
  Download,
} from "lucide-react";

export default function MembershipRenewal() {
  const renewalHistory = [
    {
      year: "2025",
      amount: "₹500",
      status: "Paid",
      date: "12 Jan 2025",
    },
    {
      year: "2024",
      amount: "₹500",
      status: "Paid",
      date: "15 Jan 2024",
    },
    {
      year: "2023",
      amount: "₹500",
      status: "Paid",
      date: "10 Jan 2023",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Membership Renewal
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your membership renewal and payment history.
        </p>
      </div>

      {/* Membership Status */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl p-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <BadgeCheck size={22} />

              <span className="font-medium">
                Active Membership
              </span>
            </div>

            <h2 className="text-4xl font-bold mt-3">
              HSGA-2026-001234
            </h2>

            <p className="mt-2 text-blue-100">
              Hindustan Scouts & Guides Association
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-5">
            <p className="text-sm text-blue-100">
              Membership Valid Till
            </p>

            <h3 className="text-2xl font-bold mt-2">
              31 Dec 2026
            </h3>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl border p-6">
          <CalendarDays
            className="text-blue-600 mb-3"
            size={30}
          />

          <p className="text-gray-500">
            Renewal Date
          </p>

          <h3 className="text-xl font-bold mt-2">
            01 Jan 2027
          </h3>
        </div>

        <div className="bg-white rounded-3xl border p-6">
          <CreditCard
            className="text-green-600 mb-3"
            size={30}
          />

          <p className="text-gray-500">
            Renewal Fee
          </p>

          <h3 className="text-xl font-bold mt-2">
            ₹500
          </h3>
        </div>

        <div className="bg-white rounded-3xl border p-6">
          <Clock
            className="text-orange-500 mb-3"
            size={30}
          />

          <p className="text-gray-500">
            Days Remaining
          </p>

          <h3 className="text-xl font-bold mt-2">
            165 Days
          </h3>
        </div>
      </div>

      {/* Membership Details */}
      <div className="bg-white rounded-3xl border p-6">
        <h2 className="text-2xl font-bold mb-6">
          Membership Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <InfoRow
            label="Member Name"
            value="Arjun Sharma"
          />

          <InfoRow
            label="Membership ID"
            value="HSGA-2026-001234"
          />

          <InfoRow
            label="Membership Type"
            value="District Leader"
          />

          <InfoRow
            label="State"
            value="Maharashtra"
          />

          <InfoRow
            label="Chapter"
            value="Mumbai West"
          />

          <InfoRow
            label="Current Status"
            value="Active"
          />
        </div>
      </div>

      {/* Renewal Action */}
      <div className="bg-green-50 border border-green-200 rounded-3xl p-6">
        <h3 className="text-xl font-bold text-green-700">
          Renew Your Membership
        </h3>

        <p className="text-gray-600 mt-2">
          Renew your membership before expiry to
          continue enjoying member benefits and
          participate in events.
        </p>

        <button
          className="
          mt-5
          bg-green-600
          hover:bg-green-700
          text-white
          px-6 py-3
          rounded-xl
          font-medium
        "
        >
          Renew Membership Now
        </button>
      </div>

      {/* Renewal History */}
      <div className="bg-white rounded-3xl border p-6 overflow-x-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Renewal History
          </h2>

          <button className="flex items-center gap-2 border px-4 py-2 rounded-xl">
            <Download size={18} />
            Download
          </button>
        </div>

        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Year
              </th>

              <th className="text-left py-3">
                Amount
              </th>

              <th className="text-left py-3">
                Status
              </th>

              <th className="text-left py-3">
                Payment Date
              </th>
            </tr>
          </thead>

          <tbody>
            {renewalHistory.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4">
                  {item.year}
                </td>

                <td>{item.amount}</td>

                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>

                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="border rounded-2xl p-4">
      <p className="text-gray-500 text-sm">
        {label}
      </p>

      <h3 className="font-semibold mt-1">
        {value}
      </h3>
    </div>
  );
}