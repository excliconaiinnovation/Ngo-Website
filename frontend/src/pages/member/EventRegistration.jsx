import { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  Search,
  CheckCircle,
} from "lucide-react";

export default function EventRegistration() {
  const [search, setSearch] = useState("");

  const upcomingEvents = [
    {
      id: 1,
      title: "National Youth Leadership Summit",
      date: "15 July 2026",
      location: "New Delhi",
      category: "Leadership",
      participants: 250,
      status: "Open",
    },
    {
      id: 2,
      title: "Tree Plantation Drive",
      date: "22 July 2026",
      location: "Gurugram",
      category: "Environment",
      participants: 500,
      status: "Open",
    },
    {
      id: 3,
      title: "First Aid Training Camp",
      date: "05 August 2026",
      location: "Jaipur",
      category: "Training",
      participants: 120,
      status: "Open",
    },
  ];

  const registeredEvents = [
    {
      title: "State Scout Camp",
      date: "10 June 2026",
      status: "Registered",
    },
    {
      title: "Community Service Drive",
      date: "25 May 2026",
      status: "Attended",
    },
  ];

  const filteredEvents = upcomingEvents.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Event Registration
        </h1>

        <p className="text-gray-500 mt-2">
          Register for upcoming NGO activities,
          training camps and leadership programs.
        </p>
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
            placeholder="Search events..."
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

      {/* Upcoming Events */}
      <div>
        <h2 className="text-2xl font-bold mb-5">
          Upcoming Events
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
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
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {event.category}
                  </span>

                  <h3 className="text-xl font-bold mt-3">
                    {event.title}
                  </h3>
                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {event.status}
                </span>
              </div>

              <div className="space-y-3 mt-5">
                <div className="flex items-center gap-3 text-gray-600">
                  <CalendarDays size={18} />
                  {event.date}
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={18} />
                  {event.location}
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Users size={18} />
                  {event.participants} Participants
                </div>
              </div>

              <button
                className="
                  w-full
                  mt-6
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  rounded-xl
                  font-medium
                "
              >
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Registered Events */}
      <div className="bg-white border rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          My Registered Events
        </h2>

        <div className="space-y-4">
          {registeredEvents.map((event, index) => (
            <div
              key={index}
              className="
                border
                rounded-2xl
                p-4
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-3
              "
            >
              <div>
                <h3 className="font-semibold">
                  {event.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {event.date}
                </p>
              </div>

              <div className="flex items-center gap-2 text-green-600 font-medium">
                <CheckCircle size={18} />
                {event.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <CategoryCard
          title="Leadership"
          count="12 Events"
        />

        <CategoryCard
          title="Training"
          count="18 Events"
        />

        <CategoryCard
          title="Environment"
          count="9 Events"
        />

        <CategoryCard
          title="Community Service"
          count="15 Events"
        />
      </div>
    </div>
  );
}

function CategoryCard({ title, count }) {
  return (
    <div className="bg-white border rounded-2xl p-5 text-center hover:shadow-md transition">
      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {count}
      </p>
    </div>
  );
}