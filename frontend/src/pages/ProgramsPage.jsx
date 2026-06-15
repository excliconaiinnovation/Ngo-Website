import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Education Support",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      impact: "12,000+ Students",
      progress: 90,
    },
    {
      title: "Healthcare Initiative",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      impact: "8,500+ Families",
      progress: 80,
    },
    {
      title: "Women Empowerment",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      impact: "5,000+ Women",
      progress: 75,
    },
    {
      title: "Youth Leadership",
      image:
        "https://images.unsplash.com/photo-1522202176988",
      impact: "3,200+ Youth",
      progress: 88,
    },
    {
      title: "Environmental Protection",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
      impact: "50,000+ Trees",
      progress: 95,
    },
    {
      title: "Community Welfare",
      image:
        "https://images.unsplash.com/photo-1488521787991",
      impact: "20,000+ People",
      progress: 85,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-emerald-500 text-white py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
            Transforming Lives Through Action
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Our Programs
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl">
            Empowering communities through education,
            healthcare, environment, leadership and
            social development initiatives.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col md:flex-row gap-4">
          <div className="flex items-center border rounded-xl px-4 flex-1">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search Programs..."
              className="w-full p-3 outline-none"
            />
          </div>

          <button className="bg-green-600 text-white px-8 py-3 rounded-xl">
            Search
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["25+", "Programs"],
            ["50K+", "Beneficiaries"],
            ["500+", "Volunteers"],
            ["15+", "States"],
          ].map(([num, title]) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-8 shadow-lg text-center"
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

      {/* Featured Program */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            alt=""
            className="rounded-3xl shadow-xl"
          />

          <div>
            <span className="text-green-600 font-semibold">
              FEATURED PROGRAM
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Education For Every Child
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Our flagship initiative provides access
              to quality education, scholarships,
              digital learning resources and mentorship
              programs for underprivileged children.
            </p>

            <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:-translate-y-3
              transition
              duration-300
              "
            >
              <img
                src={program.image}
                alt=""
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {program.title}
                </h3>

                <p className="text-green-600 mt-2 font-medium">
                  {program.impact}
                </p>

                <p className="text-gray-600 mt-4">
                  Empowering communities through
                  sustainable and impactful programs.
                </p>

                {/* Progress */}
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <span>Goal Progress</span>
                    <span>{program.progress}%</span>
                  </div>

                  <div className="h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-3 bg-green-600 rounded-full"
                      style={{
                        width: `${program.progress}%`,
                      }}
                    />
                  </div>
                </div>

                <button className="mt-6 flex items-center gap-2 text-green-600 font-semibold">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Help Us Expand Our Impact
          </h2>

          <p className="mt-6 text-xl">
            Join as a volunteer, partner or donor and
            support meaningful community development.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold">
              Become Volunteer
            </button>

            <button className="border border-white px-8 py-4 rounded-xl">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}