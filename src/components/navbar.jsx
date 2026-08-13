import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Education", to: "/education" },
  { name: "Skills", to: "/skills" },
  { name: "Tech Stack", to: "/stack" },
  { name: "Products", to: "/work" },
  { name: "Services", to: "/service" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => window.innerWidth >= 1024 && setNavOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-[#050414]/90 backdrop-blur-md text-gray-300 border-b border-[#8245ec] fixed w-full z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Brand */}
        <span className="text-[1.25rem] font-bold whitespace-nowrap">
          <Link to="/" className="font-bold">
            <span className="text-[#8245ec]">/</span>
            <span className="gradient-text">Afaq Ahmad</span>
            <span className="text-[#8245ec]">.dev</span>
          </Link>
        </span>

        {/* Hamburger */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation menu"
        >
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Menu */}
        <ul
          className={`fixed lg:static z-40 flex-col lg:flex-row items-center w-full lg:w-auto left-0 top-16 lg:top-auto bg-[#050414]/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none px-6 lg:px-0 py-6 lg:py-0 border-b lg:border-0 border-[#8245ec] transition-all duration-300 ${
            navOpen ? "flex" : "hidden lg:flex"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.to} className="w-full lg:w-auto">
              <Link
                to={item.to}
                className={`block px-4 py-2.5 lg:py-1 text-center lg:text-[15px] text-[17px] rounded-lg hover:text-[#8245ec] transition-colors duration-200 ${
                  location.pathname === item.to ? "text-[#a78bfa] font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/engmuhammad-afaq-ahmad-684b36354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#a78bfa] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Afaqhions"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#a78bfa] transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}