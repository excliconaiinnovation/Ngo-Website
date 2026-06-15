const events = [
  {
    date: "25 Aug",
    title: "Education For All Campaign",
  },
  {
    date: "12 Sep",
    title: "Health Awareness Camp",
  },
  {
    date: "20 Oct",
    title: "Tree Plantation Drive",
  },
];

export default function Events() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Upcoming Events
        </h2>

        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white p-6 rounded-2xl shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-xl">
                  {event.title}
                </h3>

                <p className="text-gray-500">
                  {event.date}
                </p>
              </div>

              <button className="bg-green-600 text-white px-5 py-3 rounded-lg">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}