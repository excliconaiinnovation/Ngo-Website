import { CalendarDays, MapPin } from "lucide-react";

export default function Calendar() {
  const upcomingEvents = [
    {
      date: "10",
      month: "JUL",
      title: "Tree Plantation Drive",
      location: "Community Park",
    },
    {
      date: "15",
      month: "JUL",
      title: "Women Empowerment Workshop",
      location: "NGO Training Center",
    },
    {
      date: "22",
      month: "JUL",
      title: "Health Checkup Camp",
      location: "Village Health Center",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            Upcoming Events
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Event Calendar
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay connected with our upcoming activities, workshops,
            community drives, and awareness programs.
          </p>
        </div>

        {/* Calendar Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-6 flex items-center gap-3">
            <CalendarDays size={28} />
            <h3 className="text-2xl font-semibold">
              July 2026 Events
            </h3>
          </div>

          {/* Events */}
          <div className="p-6 space-y-5">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Date Box */}
                <div className="min-w-[80px] h-[80px] rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex flex-col items-center justify-center shadow-md">
                  <span className="text-2xl font-bold">
                    {event.date}
                  </span>
                  <span className="text-xs tracking-wider">
                    {event.month}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition">
                    {event.title}
                  </h4>

                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Button */}
                <button className="hidden md:block px-5 py-2 rounded-full bg-green-50 text-green-700 font-medium hover:bg-green-600 hover:text-white transition">
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}