import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const GITHUB = "https://github.com/engr-m-afaq-ahmad";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Expertise", href: "#expertise" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setNavOpen(false);
    const onHome = location.pathname === "/";
    if (onHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? "border-b border-[#e4e4e7]" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        {/* Pixel wordmark */}
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Afaq Ahmad home">
          <span className="font-pixel text-[15px] tracking-[0.14em] text-[#111111]">AFAQ</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 bg-[#EF4444] rounded-[2px]" />
          <span className="hidden sm:inline font-mono-tech text-[11px] text-[#71717A]">
            .dev
          </span>
        </Link>

        {/* Center links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="text-[14px] font-medium text-[#52525B] hover:text-[#111111] transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[14px] font-medium text-[#52525B] hover:text-[#111111] transition-colors"
            aria-label="GitHub profile"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="btn-dark text-[13px] px-5 py-2.5">
            Let&apos;s Connect
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-2xl text-[#111111]"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
        >
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 border-t border-[#e4e4e7] bg-white ${
          navOpen ? "max-h-[440px]" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="block py-3 text-[15px] font-medium text-[#52525B] border-b border-[#f4f4f5] hover:text-[#111111]"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="pt-4 flex flex-col gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="btn-outline justify-center"
            >
              <FaGithub /> GitHub Profile
            </a>
            <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="btn-dark justify-center">
              Let&apos;s Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
