import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import event3 from "../assets/images/event3.png";
import eventpage from "../assets/images/eventpage.png";


const events = [
  {
    title: "National Scout & Guide Training Camp",
    date: "15 July 2026",
    location: "New Delhi",
    participants: "1,000+",
    image: event1,
  },
  {
    title: "Community Service Project",
    date: "12 August 2026",
    location: "Chandigarh",
    participants: "800+",
    image: event2,
  },
  {
    title: "Environmental Awareness Campaign",
    date: "05 September 2026",
    location: "Jaipur",
    participants: "500+",
    image: event3,
  },
];

export default function EventsPage() {
return (
<>
{/* Hero */}
<section
className="relative h-[550px] flex items-center justify-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80')",
backgroundSize: "cover",
backgroundPosition: "center",
}}
> <div className="absolute inset-0 bg-black/70" />


    <div className="relative text-center text-white px-6">
      <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
        Events & Activities
      </span>

      <h1 className="text-5xl md:text-7xl font-bold mt-6">
        National Events,
        <br />
        Training Camps &
        <br />
        Community Service
      </h1>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
        Explore our upcoming Scout & Guide camps, leadership
        workshops, community service projects and adventure
        activities designed to develop responsible and confident
        young leaders.
      </p>
    </div>
  </section>

  {/* Stats */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-4 gap-6">
      {[
        ["500+", "Training Camps"],
        ["15,000+", "Registered Members"],
        ["100+", "Affiliated Schools"],
        ["25+", "State Units"],
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
        src={eventpage}
        alt="National Leadership Summit"
        className="rounded-3xl shadow-xl"
      />

      <div>
        <span className="text-green-600 font-semibold">
          FEATURED EVENT
        </span>

        <h2 className="text-5xl font-bold mt-4">
          National Scout & Guide Leadership Summit 2026
        </h2>

        <p className="text-gray-600 mt-6 leading-8">
          The National Leadership Summit brings together Scouts,
          Guides, trainers and youth leaders from across India for
          advanced leadership training, teamwork exercises, outdoor
          learning and community service planning.
        </p>

        <p className="text-gray-600 mt-4 leading-8">
          Participants gain practical experience, build confidence
          and develop skills that prepare them for future leadership
          roles while promoting the values of service, discipline
          and national unity.
        </p>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition">
          Register Now
        </button>
      </div>
    </div>
  </section>

  {/* Event Cards */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <div
          key={event.title}
          className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition"
        >
          <img
            src={event.image}
            alt={event.title}
            className="h-64 w-full object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-bold">
              {event.title}
            </h3>

            <div className="space-y-3 mt-5 text-gray-600">
              <p>
                📅 {event.date}
              </p>

              <p>
                📍 {event.location}
              </p>

              <p>
                👥 {event.participants} Participants
              </p>
            </div>

            <button className="mt-6 text-green-600 font-semibold">
              View Details →
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Timeline */}
  <section className="bg-slate-50 py-24">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16">
        Annual Activity Timeline
      </h2>

      <div className="space-y-8">
        {[
          "January - Republic Day Community Service Activities",
          "March - State Level Scout & Guide Camp",
          "June - National Adventure Camp",
          "August - Independence Day Service Project",
          "October - Environmental Awareness Campaign",
          "December - National Leadership Summit",
        ].map((item) => (
          <div
            key={item}
            className="border-l-4 border-green-600 pl-8 py-3 bg-white rounded-r-xl shadow"
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
        Join Our Next Adventure
      </h2>

      <p className="mt-6 text-xl">
        Become part of Hindustan Scouts & Guides Association and
        participate in leadership camps, community service projects
        and adventure programs that inspire personal growth and
        positive social impact.
      </p>

      <button className="mt-10 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
        Join Now
      </button>
    </div>
  </section>
</>

);
}
