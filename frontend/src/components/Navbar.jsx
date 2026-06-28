import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Events", path: "/events" },
    { name: "Units", path: "/unit" },
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
  className="flex items-center gap-3 group"
>
  <img
    src={logo}
    alt="HSGA Logo"
    className="
      w-14 h-14
      object-contain
      rounded-full
      bg-white
      p-1
      shadow-lg
      group-hover:scale-105
      transition
    "
  />

  <div className="leading-tight">
    <h2 className="text-white font-bold text-lg md:text-xl">
      Hindustan Scouts
    </h2>

    <p className="text-green-400 text-sm">
      & Guides Association
    </p>
  </div>
</Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition duration-300 hover:text-green-400 ${
                    isActive ? "text-green-400" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Login */}
            <Link
              to="/login"
              className="
                border
                border-white
                px-5
                py-2
                rounded-full
                text-white
                hover:bg-white
                hover:text-slate-900
                transition
              "
            >
              Login
            </Link>

            {/* Join Now */}
            <Link to="/join_now">
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
                Join Now
              </button>
            </Link>
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

      {/* Mobile Overlay */}
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
        onClick={() => setIsOpen(false)}
      >
        {/* Sidebar */}
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
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              <X size={30} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-5 mt-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition ${
                    isActive
                      ? "text-green-400"
                      : "text-white hover:text-green-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Login */}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="
                mt-4
                border
                border-white
                py-3
                rounded-xl
                text-center
                text-white
                hover:bg-white
                hover:text-slate-900
                transition
              "
            >
              Login
            </Link>

            {/* Join Now */}
            <Link
              to="/join_now"
              onClick={() => setIsOpen(false)}
            >
              <button
                className="
                  w-full
                  bg-green-600
                  hover:bg-green-700
                  py-3
                  rounded-xl
                  text-white
                  font-semibold
                  transition
                "
              >
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}