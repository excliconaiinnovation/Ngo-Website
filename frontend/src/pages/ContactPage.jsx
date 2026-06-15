import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-emerald-500 py-40 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-white/20 px-5 py-2 rounded-full backdrop-blur-md">
            Contact & Support
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Get In Touch
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-xl">
            We'd love to hear from you. Reach out to our
            team for volunteering, partnerships,
            donations, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <Phone
              className="mx-auto text-green-600"
              size={40}
            />

            <h3 className="text-xl font-bold mt-4">
              Call Us
            </h3>

            <p className="text-gray-500 mt-2">
              +91 9876543210
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <Mail
              className="mx-auto text-green-600"
              size={40}
            />

            <h3 className="text-xl font-bold mt-4">
              Email Us
            </h3>

            <p className="text-gray-500 mt-2">
              info@ngo.org
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <MapPin
              className="mx-auto text-green-600"
              size={40}
            />

            <h3 className="text-xl font-bold mt-4">
              Visit Us
            </h3>

            <p className="text-gray-500 mt-2">
              NGO Headquarters, India
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <span className="text-green-600 font-semibold">
              CONTACT INFORMATION
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">
              Let's Make An Impact Together
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Whether you're interested in
              volunteering, partnerships,
              sponsorship opportunities, or learning
              more about our initiatives, our team is
              ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Clock className="text-green-600" />

                <div>
                  <h4 className="font-bold">
                    Office Hours
                  </h4>

                  <p className="text-gray-500">
                    Mon - Sat : 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-green-600" />

                <div>
                  <h4 className="font-bold">
                    Address
                  </h4>

                  <p className="text-gray-500">
                    NGO Headquarters,
                    <br />
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              <a
                href="#"
                className="
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  p-4
                  rounded-full
                  transition
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  p-4
                  rounded-full
                  transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  p-4
                  rounded-full
                  transition
                "
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4 outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 outline-none focus:border-green-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4 outline-none focus:border-green-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 outline-none focus:border-green-600"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4 outline-none focus:border-green-600"
              />

              <button
                className="
                  w-full
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold text-xl">
                How can I become a volunteer?
              </h3>

              <p className="text-gray-600 mt-3">
                Fill out our volunteer application
                form and our team will contact you.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold text-xl">
                Can I donate online?
              </h3>

              <p className="text-gray-600 mt-3">
                Yes, secure online donation options
                are available through our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[500px]">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
        />
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Join Our Mission
          </h2>

          <p className="mt-6 text-xl">
            Together we can create meaningful change
            and build stronger communities.
          </p>

          <button className="mt-10 bg-white text-green-600 px-8 py-4 rounded-xl font-bold">
            Become A Volunteer
          </button>
        </div>
      </section>
    </>
  );
}