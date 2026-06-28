import {
  QrCode,
  CalendarDays,
  Award,
  RefreshCcw,
  Bell,
} from "lucide-react";

export default function MemberDashboard() {
  const quickActions = [
    {
      title: "Digital ID",
      icon: QrCode,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Register Event",
      icon: CalendarDays,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Certificates",
      icon: Award,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Renew Now",
      icon: RefreshCcw,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const events = [
    {
      title: "National Youth Leadership Summit",
      date: "15 Jul 2026",
      location: "New Delhi",
    },
    {
      title: "State Chapter Annual Meet",
      date: "03 Aug 2026",
      location: "Mumbai",
    },
    {
      title: "Community Service Drive",
      date: "12 Sep 2026",
      location: "Chennai",
    },
    {
      title: "Digital Skills Bootcamp",
      date: "05 Oct 2026",
      location: "Hyderabad",
    },
  ];

  const notifications = [
    {
      title: "Membership renewal reminder",
      time: "2 hours ago",
      color: "bg-blue-500",
    },
    {
      title: "Certificate issued: Leadership Excellence",
      time: "1 day ago",
      color: "bg-green-500",
    },
    {
      title: "Event registration closes in 3 days",
      time: "1 day ago",
      color: "bg-orange-500",
    },
    {
      title: "New notice from National HQ",
      time: "2 days ago",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Card */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-3xl p-6 md:p-8 text-white">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <p className="text-blue-100 text-sm">
              Welcome back
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              Arjun Sharma
            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                Active Member
              </span>

              <span className="text-blue-100 text-sm">
                NYO-001234
              </span>
            </div>
          </div>

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Member"
            className="w-24 h-24 rounded-full border-4 border-white/30"
          />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
            <p className="text-blue-100 text-sm">
              Member Since
            </p>
            <h3 className="font-bold text-lg">
              Jan 2021
            </h3>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
            <p className="text-blue-100 text-sm">
              Chapter
            </p>
            <h3 className="font-bold text-lg">
              Mumbai West
            </h3>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
            <p className="text-blue-100 text-sm">
              State
            </p>
            <h3 className="font-bold text-lg">
              Maharashtra
            </h3>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
            <p className="text-blue-100 text-sm">
              Renewal Due
            </p>
            <h3 className="font-bold text-lg">
              31 Dec 2026
            </h3>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {quickActions.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="bg-white border rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center ${item.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-5 font-semibold">
                {item.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Events & Notifications */}
      <div className="grid xl:grid-cols-3 gap-6">
        {/* Events */}
        <div className="xl:col-span-2 bg-white rounded-3xl border p-6">
          <h2 className="text-2xl font-bold mb-6">
            Upcoming Events
          </h2>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl hover:bg-slate-50 border"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <CalendarDays
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {event.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {event.date} • {event.location}
                    </p>
                  </div>
                </div>

                <button className="border border-blue-300 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-2xl font-bold mb-6">
            Notifications
          </h2>

          <div className="space-y-4">
            {notifications.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-4"
              >
                <div className="flex gap-3">
                  <span
                    className={`w-2 h-2 rounded-full mt-2 ${item.color}`}
                  />

                  <div>
                    <p className="font-medium text-sm">
                      {item.title}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-5 py-3 border rounded-xl hover:bg-slate-50">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
}