import About from "../assets/images/About.png";

export default function Aboutus() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Image Section */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <img
              src={About}
              alt="Hindustan Scouts & Guides Association"
              className="w-full h-auto max-h-[500px] md:max-h-[600px] object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
                Building Future Leaders
              </h3>

              <p className="text-gray-200 mt-2 text-sm sm:text-base lg:text-lg">
                Leadership • Service • Discipline • Character
              </p>
            </div>
          </div>

          {/* Responsive Floating Stats Card */}
          <div
            className="
              relative
              lg:absolute
              lg:-bottom-8
              lg:right-6
              mt-4
              lg:mt-0
              bg-white
              rounded-2xl
              shadow-2xl
              p-4
              sm:p-6
              w-full
              max-w-[280px]
              mx-auto
              lg:mx-0
            "
          >
            <h4 className="text-3xl lg:text-4xl font-bold text-green-600">
              15,000+
            </h4>

            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Active Scouts & Guides Across India
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <span className="inline-block text-green-600 font-semibold uppercase tracking-widest text-sm">
            About Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Building Future Leaders Through
            <span className="text-green-600">
              {" "}
              Scouting & Guiding
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-7 lg:leading-8 text-base lg:text-lg">
            Hindustan Scouts & Guides Association is a national youth
            development organization committed to nurturing leadership,
            character, discipline and social responsibility among
            children and young people.
          </p>

          <p className="mt-4 text-gray-600 leading-7 lg:leading-8">
            Through innovative scouting and guiding programs, we
            provide opportunities for personal growth, skill
            development, adventure learning and community engagement.
            Our mission is to inspire youth to become responsible
            citizens who serve society and contribute to nation
            building.
          </p>

          <p className="mt-4 text-gray-600 leading-7 lg:leading-8">
            We believe every young person has the potential to become
            a positive force for change. Through leadership training,
            community service projects and outdoor learning
            experiences, we prepare future leaders for a better
            tomorrow.
          </p>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
              <h4 className="font-bold text-lg sm:text-xl mb-3 text-green-700">
                Our Mission
              </h4>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                To empower youth through leadership development,
                character building, community service and practical
                learning experiences that inspire lifelong growth and
                responsible citizenship.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg sm:text-xl mb-3 text-green-700">
                Our Vision
              </h4>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                To create a better world by developing confident,
                disciplined and service-oriented young leaders
                dedicated to national development and global harmony.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {[
              "Leadership Development",
              "Community Service",
              "Adventure Activities",
              "Character Building",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"
              >
                <div className="w-3 h-3 rounded-full bg-green-600 flex-shrink-0" />

                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}