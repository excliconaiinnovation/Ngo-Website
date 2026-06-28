
import {
  Users,
  Building2,
  Calendar,
  HeartHandshake,
  UserPlus,
  Bell,
  ArrowUpRight,
  Award,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Members",
      value: "12,450",
      growth: "+12%",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Units",
      value: "420",
      growth: "+8%",
      icon: Building2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Events",
      value: "125",
      growth: "+15%",
      icon: Calendar,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Donations",
      value: "₹8.5L",
      growth: "+22%",
      icon: HeartHandshake,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const recentMembers = [
    {
      name: "Rahul Sharma",
      unit: "Gurugram",
      date: "Today",
    },
    {
      name: "Priya Verma",
      unit: "Delhi",
      date: "Yesterday",
    },
    {
      name: "Amit Singh",
      unit: "Jaipur",
      date: "2 Days Ago",
    },
  ];

  const notices = [
    "National Camp Registration Open",
    "State Conference on July 15",
    "Membership Renewal Deadline Extended",
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold">
          Welcome Back, Admin 👋
        </h1>

        <p className="mt-2 text-blue-100">
          Here's what's happening in your organization today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-6 shadow-sm border hover:shadow-lg transition"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500 text-sm">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>

                  <span className="text-green-600 text-sm flex items-center gap-1 mt-2">
                    <ArrowUpRight size={14} />
                    {item.growth}
                  </span>
                </div>

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
                >
                  <Icon size={26} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4">
        <button className="bg-white p-5 rounded-2xl shadow border hover:border-blue-500 transition">
          <UserPlus className="mx-auto mb-2" />
          Add Member
        </button>

        <button className="bg-white p-5 rounded-2xl shadow border hover:border-blue-500 transition">
          <Calendar className="mx-auto mb-2" />
          Create Event
        </button>

        <button className="bg-white p-5 rounded-2xl shadow border hover:border-blue-500 transition">
          <Award className="mx-auto mb-2" />
          Certificates
        </button>

        <button className="bg-white p-5 rounded-2xl shadow border hover:border-blue-500 transition">
          <Bell className="mx-auto mb-2" />
          Publish Notice
        </button>
      </div>

      {/* Activity + Events */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow border">
          <h2 className="font-bold text-xl mb-5">
            Recent Activities
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              New Unit added in Gurugram
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              35 new members registered
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              Tree Plantation Event created
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              Donation of ₹50,000 received
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow border">
          <h2 className="font-bold text-xl mb-5">
            Upcoming Events
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-50">
              National Leadership Camp
            </div>

            <div className="p-4 rounded-xl bg-green-50">
              Blood Donation Drive
            </div>

            <div className="p-4 rounded-xl bg-orange-50">
              Youth Training Workshop
            </div>
          </div>
        </div>
      </div>

      {/* Recent Members */}
      <div className="bg-white rounded-3xl p-6 shadow border">
        <h2 className="font-bold text-xl mb-5">
          Recent Members
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Name</th>
                <th className="text-left py-3">Unit</th>
                <th className="text-left py-3">Joined</th>
              </tr>
            </thead>

            <tbody>
              {recentMembers.map((member, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4">{member.name}</td>
                  <td>{member.unit}</td>
                  <td>{member.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notices */}
      <div className="bg-white rounded-3xl p-6 shadow border">
        <h2 className="font-bold text-xl mb-5">
          Latest Notices
        </h2>

        <div className="space-y-3">
          {notices.map((notice, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition"
            >
              {notice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

