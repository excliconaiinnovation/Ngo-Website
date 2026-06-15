export default function AboutPage() {
  const stats = [
    { number: "15,000+", title: "Members" },
    { number: "500+", title: "Projects" },
    { number: "100+", title: "Schools" },
    { number: "25+", title: "States" },
  ];

  const journey = [
    "2015 - NGO Founded",
    "2017 - 5000 Members Joined",
    "2020 - National Expansion",
    "2023 - 100+ Community Projects",
    "2026 - 15000+ Active Members",
  ];

  const values = [
    {
      title: "Our Vision",
      text: "Create a better world through empowerment and sustainable development.",
    },
    {
      title: "Our Mission",
      text: "Support communities through education, healthcare and leadership.",
    },
    {
      title: "Our Values",
      text: "Integrity, Service, Leadership, Inclusion and Innovation.",
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
            About Our NGO
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Creating Positive Change Through Community Action
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-semibold uppercase">
              Who We Are
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6">
              Building Stronger Communities Together
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Our organization works tirelessly to empower individuals
              and communities through education, healthcare,
              environmental sustainability, youth leadership and
              social welfare initiatives.
            </p>

            <p className="text-gray-600 leading-8">
              We believe that every individual deserves access to
              opportunities that help them grow, thrive and contribute
              positively to society.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
              alt="NGO Team"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Vision, Mission & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-green-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((item) => (
              <div key={item.title}>
                <h3 className="text-5xl font-bold">
                  {item.number}
                </h3>

                <p className="mt-3 text-lg">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our Journey
          </h2>

          <div className="space-y-8">
            {journey.map((item, index) => (
              <div
                key={index}
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
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">
            Join Our Mission Today
          </h2>

          <p className="mt-6 text-xl">
            Together we can create a brighter future for communities.
          </p>

          <button className="mt-10 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Become A Volunteer
          </button>
        </div>
      </section>
    </>
  );
}