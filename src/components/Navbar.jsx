import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import myLogo from "../assets/myLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
              <img
                src={myLogo}
                alt="Company Logo"
                className="h-8 w-auto object-contain"
              />
              {/* Optional Company Name Text */}
              <span className="ml-2 text-xl font-bold text-gray-900 tracking-tight leading-none flex flex-col">
                <span>Savora</span>
                <span className="text-l font-bold text-blue-600">
                  Restaurant
                </span>
              </span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/booking"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Place your order
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/booking"
                className="w-full text-center bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Book a Table
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
