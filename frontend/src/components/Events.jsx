const events = [
{
date: "15 July 2026",
title: "National Scout & Guide Training Camp",
description:
"A leadership and skill development camp for Scouts and Guides from different states.",
},
{
date: "12 August 2026",
title: "Independence Day Service Project",
description:
"Community service activities, cleanliness drives and patriotic programs across districts.",
},
{
date: "05 September 2026",
title: "First Aid & Disaster Management Workshop",
description:
"Hands-on emergency response and disaster preparedness training for youth members.",
},
{
date: "02 October 2026",
title: "Clean India Awareness Campaign",
description:
"A nationwide cleanliness and environmental awareness initiative inspired by community service values.",
},
{
date: "14 November 2026",
title: "Youth Leadership Development Summit",
description:
"Interactive sessions focused on leadership, teamwork, communication and character building.",
},
];

export default function Events() {
return ( <section className="bg-slate-50 py-24"> <div className="max-w-7xl mx-auto px-6">


    <div className="text-center mb-14">
      <span className="text-green-600 font-semibold uppercase">
        Upcoming Events
      </span>

      <h2 className="text-5xl font-bold mt-4">
        Join Our Activities & Camps
      </h2>

      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Participate in training camps, leadership programs,
        community service projects and outdoor activities designed
        to inspire growth and service.
      </p>
    </div>

    <div className="space-y-6">
      {events.map((event) => (
        <div
          key={event.title}
          className="bg-white p-6 rounded-2xl shadow flex flex-col md:flex-row md:justify-between md:items-center gap-4"
        >
          <div>
            <p className="text-green-600 font-semibold">
              {event.date}
            </p>

            <h3 className="font-bold text-2xl mt-2">
              {event.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {event.description}
            </p>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Register Now
          </button>
        </div>
      ))}
    </div>

  </div>
</section>

);
}
