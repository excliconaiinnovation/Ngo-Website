const programs = [
  "Education",
  "Healthcare",
  "Environment",
  "Women Empowerment",
  "Youth Development",
  "Community Support",
];

export default function Programs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program}
              className="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-bold">
                {program}
              </h3>

              <p className="mt-4 text-gray-600">
                Supporting communities through
                impactful initiatives.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}