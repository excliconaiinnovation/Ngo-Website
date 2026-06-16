const programs = [
  {
    title: "Scout Training",
    description:
      "Develop leadership, discipline, teamwork and practical life skills through structured scouting activities.",
  },
  {
    title: "Guide Training",
    description:
      "Empowering young girls with confidence, leadership abilities and community service opportunities.",
  },
  {
    title: "Adventure Camps",
    description:
      "Outdoor learning experiences including camping, trekking and survival skills.",
  },
  {
    title: "Community Service",
    description:
      "Encouraging social responsibility through volunteer and welfare activities.",
  },
  {
    title: "Environmental Protection",
    description:
      "Tree plantation drives, environmental awareness and sustainability programs.",
  },
  {
    title: "First Aid & Disaster Management",
    description:
      "Emergency response and disaster preparedness training for youth.",
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-bold">
                {program.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}