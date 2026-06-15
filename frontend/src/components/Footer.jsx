import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* About */}
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Scouts NGO
            </h2>

            <p className="text-gray-400 leading-7">
              Empowering youth through leadership,
              education, community service and
              sustainable development initiatives.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-green-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-green-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/programs"
                  className="hover:text-green-400"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="hover:text-green-400"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-green-400"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className="hover:text-green-400"
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Our Programs
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Education Support</li>
              <li>Healthcare Initiative</li>
              <li>Women Empowerment</li>
              <li>Youth Leadership</li>
              <li>Environment Protection</li>
              <li>Community Welfare</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  New Delhi, India
                </span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <span>
                  +91 9876543210
                </span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>
                  info@scoutsngo.org
                </span>
              </div>

            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">
                Subscribe Newsletter
              </h4>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    flex-1
                    px-4
                    py-3
                    rounded-l-xl
                    bg-slate-800
                    border
                    border-slate-700
                    outline-none
                  "
                />

                <button
                  className="
                    bg-green-600
                    hover:bg-green-700
                    px-5
                    rounded-r-xl
                    transition
                  "
                >
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          py-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
        "
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Scouts NGO.
            All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="
              bg-green-600
              hover:bg-green-700
              p-3
              rounded-full
              transition
            "
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}