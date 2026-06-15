import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TeamPage() {
  const leadership = [
    {
      name: "Rajesh Kumar",
      role: "Founder & President",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
      bio: "20+ years of social leadership experience.",
    },
    {
      name: "Priya Sharma",
      role: "Executive Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
      bio: "Leading education and youth development programs.",
    },
    {
      name: "Amit Verma",
      role: "Program Coordinator",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
      bio: "Managing nationwide community initiatives.",
    },
    {
      name: "Neha Gupta",
      role: "Volunteer Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
      bio: "Building strong volunteer networks.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-500 text-white py-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-white/20 px-5 py-2 rounded-full">
            Our Team
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Meet Our Leadership Team
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-xl">
            Passionate leaders dedicated to creating
            positive change through education,
            community service and youth empowerment.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "150+", label: "Volunteers" },
            { value: "25+", label: "Programs" },
            { value: "10+", label: "States" },
            { value: "50K+", label: "Lives Impacted" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-3xl shadow-lg p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-green-600">
                {item.value}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold">
            LEADERSHIP TEAM
          </span>

          <h2 className="text-5xl font-bold mt-4">
            The People Behind Our Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((member) => (
            <div
              key={member.name}
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
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-80
                    object-cover
                    hover:scale-110
                    transition
                    duration-500
                  "
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-green-600 font-medium mt-2">
                  {member.role}
                </p>

                <p className="text-gray-500 mt-4">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-3 mt-6">
                  <a className="bg-green-600 text-white p-3 rounded-full">
                    <FaFacebookF />
                  </a>

                  <a className="bg-green-600 text-white p-3 rounded-full">
                    <FaInstagram />
                  </a>

                  <a className="bg-green-600 text-white p-3 rounded-full">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Advisory Board
            </h2>

            <p className="text-gray-500 mt-4">
              Experts guiding our vision and strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Education Expert", "Social Activist", "Youth Mentor"].map(
              (advisor) => (
                <div
                  key={advisor}
                  className="bg-white rounded-3xl p-8 shadow-lg text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-green-100 mx-auto mb-5"></div>

                  <h3 className="text-2xl font-bold">
                    {advisor}
                  </h3>

                  <p className="text-gray-500 mt-3">
                    Supporting sustainable development
                    and community growth.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Volunteer Team */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold">
            VOLUNTEERS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Dedicated Volunteers
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <img
              key={item}
              src={`https://randomuser.me/api/portraits/${
                item % 2 ? "women" : "men"
              }/${item + 20}.jpg`}
              alt=""
              className="rounded-3xl h-80 w-full object-cover shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Join Our Amazing Team
          </h2>

          <p className="mt-6 text-xl">
            Become a volunteer and help us create
            meaningful impact in communities.
          </p>

          <button className="mt-10 bg-white text-green-600 px-8 py-4 rounded-xl font-bold">
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
}