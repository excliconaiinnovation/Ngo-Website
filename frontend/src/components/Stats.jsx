const stats = [
  {
    value: "12,540",
    title: "Lives Impacted",
  },
  {
    value: "320+",
    title: "Projects Completed",
  },
  {
    value: "25+",
    title: "Countries Reached",
  },
  {
    value: "8,450+",
    title: "Volunteers",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm text-center"
            >
              <h3 className="text-4xl font-bold text-green-600">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}