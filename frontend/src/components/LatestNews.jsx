import { CalendarDays, ArrowRight } from "lucide-react";

export default function LatestNews() {
  const news = [
    {
      title: "NGO Launches New Education Program",
      date: "05 July 2026",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      description:
        "A new initiative has been launched to support children's education and skill development.",
    },
    {
      title: "500 Trees Planted Successfully",
      date: "28 June 2026",
      category: "Environment",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?w=800",
      description:
        "Volunteers joined hands to make the plantation drive successful across rural communities.",
    },
    {
      title: "Free Medical Camp Organized",
      date: "20 June 2026",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
      description:
        "Over 300 people received free health checkups, medicines, and awareness sessions.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm">
            News & Updates
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Latest News
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with our recent activities, community programs,
            success stories, and impact initiatives.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-green-700">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <CalendarDays size={16} />
                  {item.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                <button className="flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}