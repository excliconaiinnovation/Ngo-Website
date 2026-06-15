import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      title: "Youth Leadership Camp",
      date: "25 Aug 2026",
      location: "New Delhi",
      participants: "500+",
      image:
        "https://images.unsplash.com/photo-1522202176988",
    },
    {
      title: "Health Awareness Drive",
      date: "12 Sep 2026",
      location: "Mumbai",
      participants: "800+",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    },
    {
      title: "Tree Plantation Event",
      date: "20 Oct 2026",
      location: "Jaipur",
      participants: "1200+",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="relative h-[550px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white px-6">
          <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
            Events & Activities
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Upcoming Events
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg">
            Join our community events and make a
            positive impact together.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["250+", "Events Conducted"],
            ["50K+", "Participants"],
            ["100+", "Cities"],
            ["500+", "Volunteers"],
          ].map(([num, title]) => (
            <div
              key={title}
              className="bg-white p-8 rounded-3xl shadow-lg text-center"
            >
              <h3 className="text-4xl font-bold text-green-600">
                {num}
              </h3>

              <p className="text-gray-500 mt-2">
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Event */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988"
            alt=""
            className="rounded-3xl shadow-xl"
          />

          <div>
            <span className="text-green-600 font-semibold">
              FEATURED EVENT
            </span>

            <h2 className="text-5xl font-bold mt-4">
              National Youth Leadership Summit
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Bringing together future leaders from
              across the country to inspire innovation,
              collaboration and social impact.
            </p>

            <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-xl">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:-translate-y-3
                transition
              "
            >
              <img
                src={event.image}
                alt=""
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {event.title}
                </h3>

                <div className="space-y-3 mt-5 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {event.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    {event.participants}
                  </div>
                </div>

                <button className="mt-6 flex items-center gap-2 text-green-600 font-semibold">
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Event Timeline
          </h2>

          <div className="space-y-8">
            {[
              "January - Community Awareness Campaign",
              "March - Healthcare Camp",
              "June - Leadership Training",
              "September - Education Summit",
              "December - Annual Celebration",
            ].map((item) => (
              <div
                key={item}
                className="border-l-4 border-green-600 pl-8 py-2"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Join Our Upcoming Events
          </h2>

          <p className="mt-6 text-xl">
            Become part of meaningful initiatives and
            help create lasting impact.
          </p>

          <button className="mt-10 bg-white text-green-600 px-8 py-4 rounded-xl font-bold">
            Register Today
          </button>
        </div>
      </section>
    </>
  );
}