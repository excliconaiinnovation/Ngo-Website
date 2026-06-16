import About from "../assets/images/About.png";

export default function AboutPage() {
  const stats = [
    { number: "15,000+", title: "Registered Members" },
    { number: "500+", title: "Training Camps" },
    { number: "100+", title: "Affiliated Schools" },
    { number: "25+", title: "State Units" },
  ];

  const journey = [
    "2015 - Hindustan Scouts & Guides Association Established",
    "2017 - 5,000+ Members Joined the Movement",
    "2020 - Expansion Across Multiple States",
    "2023 - 100+ Community Service Projects Completed",
    "2026 - 15,000+ Active Scouts & Guides",
  ];

  const values = [
    {
      title: "Our Vision",
      text: "To build a better society by developing responsible, disciplined and service-oriented young citizens through the principles of Scouting and Guiding.",
    },
    {
      title: "Our Mission",
      text: "To empower children and youth through leadership training, character building, community service and outdoor education that inspires lifelong learning and responsible citizenship.",
    },
    {
      title: "Our Values",
      text: "Service, Discipline, Leadership, Integrity, Teamwork, Respect and National Unity form the foundation of all our activities and programs.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            About Hindustan Scouts & Guides Association
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Empowering Youth Through Leadership, Service, Discipline and
            Character Development
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              Who We Are
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6">
              Building Future Leaders Through Scouting & Guiding
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Hindustan Scouts & Guides Association is a national youth
              development organization dedicated to nurturing leadership,
              character, discipline and a spirit of service among young
              people. Through scouting and guiding activities, we provide
              opportunities for children and youth to develop confidence,
              practical skills and a strong sense of social responsibility.
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              Our programs focus on leadership development, adventure
              activities, environmental awareness, community service,
              first-aid training and personality development. We believe
              that every young person has the potential to become a
              positive force for change and contribute meaningfully to
              society and nation-building.
            </p>

            <p className="text-gray-600 leading-8">
              By working closely with schools, educational institutions
              and local communities, we create learning experiences that
              encourage teamwork, self-reliance, patriotism and respect
              for others. Our goal is to prepare future leaders who are
              committed to serving humanity and creating a better world.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
  <img
    src={About}
    alt="Hindustan Scouts & Guides Association"
    className="w-full h-auto object-contain rounded-3xl shadow-2xl"
  />

  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
    <h3 className="text-white text-2xl font-bold">
      Building Future Leaders
    </h3>

    <p className="text-gray-200 mt-2">
      Leadership • Service • Discipline • Character
    </p>
  </div>
</div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              Our Foundation
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Vision, Mission & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-green-700">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-green-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((item) => (
              <div key={item.title}>
                <h3 className="text-5xl font-bold">{item.number}</h3>

                <p className="mt-3 text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              Our Objectives
            </span>

            <h2 className="text-5xl font-bold mt-4">
              What We Aim To Achieve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Character Development",
              "Leadership Training",
              "Community Service",
              "Environmental Awareness",
              "Adventure & Outdoor Education",
              "National Integration",
              "Disaster Preparedness",
              "Health & Hygiene Education",
              "Youth Empowerment",
            ].map((objective) => (
              <div
                key={objective}
                className="bg-slate-50 p-6 rounded-2xl shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {objective}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              Our Journey
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Milestones & Growth
            </h2>
          </div>

          <div className="space-y-8">
            {journey.map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-green-600 pl-8 py-3 bg-white rounded-r-xl shadow"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-500 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">
            Join the Scouting Movement Today
          </h2>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Become a part of Hindustan Scouts & Guides Association and
            discover opportunities for leadership, adventure, community
            service and personal growth. Together, we can inspire
            positive change and build a stronger future for our nation.
          </p>

          <button className="mt-10 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300">
            Join Now
          </button>
        </div>
      </section>
    </>
  );
}