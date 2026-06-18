import React from "react";
import { Link } from "react-router-dom";
// 1. Removed Facebook, Instagram, and Twitter from here to fix the error
import { Phone, MapPin, Clock, Mail } from "lucide-react"; 
import myLogo from "../assets/MyLogo.png";

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & About */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={myLogo} alt="Savora Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            <span className="text-xl font-bold text-white tracking-tight">Savora</span>
          </Link>
          <p className="text-sm text-gray-400">
            Crafting memorable culinary experiences with fresh, locally-sourced ingredients. Join us for an unforgettable meal.
          </p>
          
          {/* 2. Replaced with pure inline SVGs (Guaranteed to render without errors!) */}
          <div className="flex space-x-4 pt-2">
            {/* Facebook */}
            <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.81.058 1.026.048 1.6.219 1.974.364.496.193.863.433 1.233.803.37.37.61.737.803 1.233.145.374.316.948.364 1.974.047 1.026.058 1.38.058 3.81 0 2.43-.01 2.784-.058 3.81-.048 1.026-.219 1.6-.364 1.974a3.26 3.26 0 01-.803 1.233c-.37.37-.737.61-1.233.803-.374.145-.948.316-1.974.364-1.026.047-1.38.058-3.81.058-2.43 0-2.784-.01-3.81-.058-1.026-.048-1.6-.219-1.974-.364a3.26 3.26 0 01-1.233-.803 3.26 3.26 0 01-.803-1.233c-.145-.374-.316-.948-.364-1.974-.047-1.026-.058-1.38-.058-3.81 0-2.43.01-2.784.058-3.81.048-1.026.219-1.6.364-1.974.193-.496.433-.863.803-1.233.37-.37.737-.61 1.233-.803.374-.145.948-.316 1.974-.364C9.53 2.01 9.884 2 12.315 2m0-2h-.015C9.74 0 9.4.01 8.36.058c-1.035.048-1.74.212-2.36.453a5.26 5.26 0 00-1.905 1.24A5.26 5.26 0 002.85 3.656c-.242.62-.405 1.324-.453 2.36C2.34 7.05 2.33 7.39 2.33 9.985c0 2.596.01 2.933.058 3.97.048 1.035.212 1.74.453 2.36a5.26 5.26 0 001.24 1.905 5.26 5.26 0 001.751 1.24c.62.242 1.324.405 2.36.453 1.036.048 1.375.058 3.97.058 2.595 0 2.933-.01 3.97-.058 1.035-.048 1.74-.212 2.36-.453a5.26 5.26 0 001.905-1.24 5.26 5.26 0 001.24-1.751c.242-.62.405-1.324.453-2.36 1.036-1.036 1.058-1.375 1.058-3.97 0-2.595-.01-2.933-.058-3.97-.048-1.035-.212-1.74-.453-2.36a5.26 5.26 0 00-1.24-1.905 5.26 5.26 0 00-1.751-1.24c-.62-.242-1.324-.405-2.36-.453C15.21 0 14.87 0 12.285 0h.03z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12.315 4.856a5.13 5.13 0 100 10.26 5.13 5.13 0 000-10.26zm0 8.26a3.13 3.13 0 110-6.26 3.13 3.13 0 010 6.26z" clipRule="evenodd" />
                <path d="M17.65 5.67a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-white transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/booking" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                Book a Table
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Hours of Operation */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Our Hours</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <Clock size={16} className="text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-gray-300">Monday - Friday</p>
                <p>11:00 AM - 10:00 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-gray-300">Saturday - Sunday</p>
                <p>10:00 AM - 11:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Location */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-500 shrink-0" />
              <span>Plot 27 East-West Road, Rumuodara Port Harcourt</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-blue-500 shrink-0" />
              <span>+234 816492206</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blue-500 shrink-0" />
              <span>jattobatholomew@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800 bg-gray-950 py-6 text-center text-xs text-gray-500">
        <p>© 2026 Savora Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}