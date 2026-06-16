import { useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.jpg";
import image3 from "../assets/gallery/image3.jpg";
import image4 from "../assets/gallery/image4.jpg";
import image5 from "../assets/gallery/image5.jpg";
import image6 from "../assets/gallery/image6.jpeg";



export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
  {
    category: "Scout Camp",
    title: "National Training Camp",
    image: image1,
  },
  {
    category: "Scout Camp",
    title: "Outdoor Leadership Camp",
    image: image2,
  },
  {
    category: "Community Service",
    title: "Cleanliness Drive",
    image: image3,
  },
  {
    category: "Community Service",
    title: "Social Welfare Activity",
    image: image4,
  },
  {
    category: "Environment",
    title: "Tree Plantation Drive",
    image: image5,
  },
  {
    category: "Environment",
    title: "Green Earth Campaign",
    image: image6,
  },
  
];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Our Gallery
          </h1>

          <p className="mt-4 text-xl">
            Capturing Moments of Impact & Change
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["500+", "Events"],
            ["15K+", "Volunteers"],
            ["50K+", "Beneficiaries"],
            ["1000+", "Photos"],
          ].map(([number, title]) => (
            <div
              key={title}
              className="bg-white rounded-3xl shadow-lg p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-green-600">
                {number}
              </h3>

              <p className="text-gray-500 mt-2">
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center">
          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search Gallery..."
            className="w-full p-3 outline-none"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "All",
            "Events",
            "Education",
            "Environment",
            "Camps",
            "Volunteers",
          ].map((item) => (
            <button
              key={item}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-5 overflow-hidden rounded-3xl cursor-pointer group"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt=""
                className="rounded-3xl group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Album */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl overflow-hidden text-white p-12">
          <h2 className="text-5xl font-bold">
            Featured Photo Album
          </h2>

          <p className="mt-6 text-lg max-w-2xl">
            Explore highlights from our latest
            community programs, camps, environmental
            drives and leadership events.
          </p>

          <button className="mt-8 bg-white text-green-600 px-8 py-4 rounded-xl font-bold">
            View Album
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Become Part Of Our Story
          </h2>

          <p className="mt-6 text-xl">
            Join our events and help us create
            unforgettable moments of impact.
          </p>

          <button className="mt-10 bg-green-600 px-8 py-4 rounded-xl">
            Join Us Today
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={40} />
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-h-[90vh] rounded-2xl"
          />
        </div>
      )}
    </>
  );
}