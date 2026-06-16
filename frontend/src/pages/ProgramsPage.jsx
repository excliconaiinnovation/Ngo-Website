import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import program1 from "../assets/images/program1.png";
import program2 from "../assets/images/program2.png";
import program3 from "../assets/images/program3.png";
import program4 from "../assets/images/program4.png";
import program5 from "../assets/images/program5.png";
import program6 from "../assets/images/program6.png";
import ProgramsPages from "../assets/images/Programpages.png"



export default function ProgramsPage() {
  const programs = [
  {
    title: "Scout Training Program",
    image: program1,
    impact: "8,000+ Scouts",
    progress: 95,
    description:
      "Leadership development, discipline, teamwork and outdoor skills through structured Scout training.",
  },
  {
    title: "Guide Training Program",
    image: program2,
    impact: "5,000+ Guides",
    progress: 90,
    description:
      "Empowering young girls through leadership and community engagement.",
  },
  {
    title: "Adventure & Camping",
    image: program3,
    impact: "2,500+ Participants",
    progress: 88,
    description:
      "Camping, trekking, hiking and survival activities.",
  },
  {
    title: "Community Service",
    image: program4,
    impact: "20,000+ Citizens Served",
    progress: 92,
    description:
      "Volunteer service projects and awareness campaigns.",
  },
  {
    title: "Environmental Protection",
    image: program5,
    impact: "50,000+ Trees Planted",
    progress: 97,
    description:
      "Tree plantation drives and sustainability initiatives.",
  },
  {
    title: "First Aid & Disaster Management",
    image: program6,
    impact: "3,000+ Trainees",
    progress: 85,
    description:
      "Emergency response and disaster preparedness workshops.",
  },
];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-emerald-500 text-white py-40">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium">
            National Youth Development Programs
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-8 leading-tight">
            Programs That Build
            <br />
            Future Leaders
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-green-100">
            Our programs are designed to develop leadership,
            discipline, character and service-minded citizens through
            scouting, guiding, adventure learning and community
            engagement.
          </p>
        </div>
      </section>

      {/* Search */}
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

          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition">
            Search
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["15,000+", "Registered Members"],
            ["500+", "Training Camps"],
            ["100+", "Affiliated Schools"],
            ["25+", "State Units"],
          ].map(([num, title]) => (
            <div
              key={title}
              className="
                bg-white/80
                backdrop-blur-lg
                border
                border-gray-100
                rounded-3xl
                p-8
                shadow-xl
                hover:scale-105
                transition
                text-center
              "
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
            src={ProgramsPages}
            alt="Leadership Program"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <span className="text-green-600 font-semibold">
              FEATURED PROGRAM
            </span>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              National Scout & Guide Leadership Development Program
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Our flagship leadership program equips young people with
              essential life skills, teamwork, communication abilities
              and a commitment to community service.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              Through camps, workshops and outdoor learning
              experiences, participants develop confidence,
              resilience and leadership qualities that prepare them
              for future challenges.
            </p>

            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            Our Programs
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Explore Our Activities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
              "
            >
              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="
                    h-64
                    w-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />
              </div>

              <div className="p-8">
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Active Program
                </span>

                <h3 className="text-2xl font-bold mt-4">
                  {program.title}
                </h3>

                <p className="text-green-600 mt-2 font-semibold">
                  {program.impact}
                </p>

                <p className="text-gray-600 mt-4 leading-7">
                  {program.description}
                </p>

                <div className="mt-6">
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Program Progress</span>
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

                <button className="mt-6 flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all">
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
            Join The Movement
          </h2>

          <p className="mt-6 text-xl text-green-100">
            Become a Scout, Guide, Volunteer or Partner and help us
            create a generation of responsible, confident and
            service-oriented young leaders.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
              Join Now
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white px-8 py-4 rounded-xl hover:bg-white/20 transition">
              Become Volunteer
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white px-8 py-4 rounded-xl hover:bg-white/20 transition">
              View Membership
            </button>
          </div>
        </div>
      </section>
    </>
  );
}