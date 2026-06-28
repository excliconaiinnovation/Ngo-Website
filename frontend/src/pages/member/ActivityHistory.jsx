import { useState } from "react";
import {
  Search,
  CalendarDays,
  Award,
  GraduationCap,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

export default function ActivityHistory() {
  const [search, setSearch] = useState("");

  const activities = [
    {
      id: 1,
      type: "Event",
      title: "National Youth Leadership Summit",
      date: "15 July 2026",
      description:
        "Successfully participated in National Leadership Summit.",
      icon: CalendarDays,
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "Training",
      title: "First Aid Training Program",
      date: "10 June 2026",
      description:
        "Completed First Aid & Emergency Response Training.",
      icon: GraduationCap,
      color: "bg-green-500",
    },
    {
      id: 3,
      type: "Certificate",
      title: "Leadership Excellence Certificate",
      date: "20 May 2026",
      description:
        "Awarded Leadership Excellence Certificate.",
      icon: Award,
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "Renewal",
      title: "Membership Renewed",
      date: "01 Jan 2026",
      description:
        "Membership renewed successfully for 2026.",
      icon: RefreshCcw,
      color: "bg-orange-500",
    },
    {
      id: 5,
      type: "Event",
      title: "Tree Plantation Drive",
      date: "15 Dec 2025",
      description:
        "Participated in environmental awareness drive.",
      icon: CalendarDays,
      color: "bg-blue-500",
    },
  ];

  const filteredActivities = activities.filter(
    (activity) =>
      activity.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Activity History
        </h1>

        <p className="text-gray-500 mt-2">
          Track all your participation, training,
          certificates and membership activities.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-4 gap-5">
        <StatCard
          title="Events"
          value="24"
          color="text-blue-600"
        />

        <StatCard
          title="Trainings"
          value="12"
          color="text-green-600"
        />

        <StatCard
          title="Certificates"
          value="8"
          color="text-purple-600"
        />

        <StatCard
          title="Renewals"
          value="4"
          color="text-orange-600"
        />
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
            placeholder="Search activity..."
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

      {/* Timeline */}
      <div className="bg-white rounded-3xl border p-6">
        <h2 className="text-2xl font-bold mb-8">
          Activity Timeline
        </h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200"></div>

          <div className="space-y-8">
            {filteredActivities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.id}
                  className="relative flex gap-5"
                >
                  {/* Icon */}
                  <div
                    className={`
                      w-12 h-12
                      rounded-full
                      ${activity.color}
                      flex
                      items-center
                      justify-center
                      text-white
                      relative
                      z-10
                    `}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Content */}
                  <div
                    className="
                    flex-1
                    border
                    rounded-2xl
                    p-5
                    hover:shadow-md
                    transition
                  "
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg">
                            {activity.title}
                          </h3>

                          <span
                            className="
                            bg-gray-100
                            text-gray-600
                            px-3
                            py-1
                            rounded-full
                            text-xs
                          "
                          >
                            {activity.type}
                          </span>
                        </div>

                        <p className="text-gray-600 mt-2">
                          {activity.description}
                        </p>
                      </div>

                      <div className="text-sm text-gray-500">
                        {activity.date}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-green-600">
                      <CheckCircle2 size={18} />
                      Completed
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Achievement Summary */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl p-6">
        <h2 className="text-2xl font-bold">
          Achievement Summary
        </h2>

        <p className="mt-2 text-blue-100">
          You have actively participated in NGO
          programs, training camps and community
          service activities.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-2xl p-4">
            <h3 className="text-3xl font-bold">
              24
            </h3>

            <p>Events Attended</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <h3 className="text-3xl font-bold">
              12
            </h3>

            <p>Trainings Completed</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <h3 className="text-3xl font-bold">
              8
            </h3>

            <p>Certificates Earned</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-white border rounded-3xl p-6">
      <p className="text-gray-500">
        {title}
      </p>

      <h3
        className={`text-3xl font-bold mt-2 ${color}`}
      >
        {value}
      </h3>
    </div>
  );
}