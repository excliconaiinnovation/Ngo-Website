import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-lg
        bg-slate-900/80
        border-b
        border-white/10
      "
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white"
          >
            Scouts NGO
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition duration-300 hover:text-green-400 ${
                    isActive
                      ? "text-green-400"
                      : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* CTA */}
            <button
              className="
              bg-green-600
              hover:bg-green-700
              px-6
              py-3
              rounded-full
              text-white
              font-semibold
              transition
            "
            >
              Donate Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`
        fixed inset-0 z-[100]
        transition-all duration-300
        ${
          isOpen
            ? "visible bg-black/60"
            : "invisible bg-transparent"
        }
      `}
      >
        <div
          className={`
          absolute right-0 top-0
          h-full
          w-80
          bg-slate-900
          p-8
          transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
        >
          {/* Close */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              <X size={30} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-6 mt-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive
                      ? "text-green-400"
                      : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              className="
              mt-6
              bg-green-600
              hover:bg-green-700
              py-3
              rounded-xl
              text-white
              font-semibold
            "
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Navbar Spacer */}
      <div className="h-20"></div>
    </>
  );
}