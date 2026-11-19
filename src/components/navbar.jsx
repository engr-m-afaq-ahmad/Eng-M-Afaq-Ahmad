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

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
    const matches = window.matchMedia("(prefers-color-scheme: dark)");
    if (!stored) setTheme(matches.matches ? "dark" : "light");
    const onChange = (e) => setTheme(e.matches ? "dark" : "light");
    matches.addEventListener("change", onChange);
    return () => matches.removeEventListener("change", onChange);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme };
};

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

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
      className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md transition-shadow ${scrolled ? "border-b border-[#e4e4e7]" : "border-b border-transparent"} ${theme === "dark" ? "bg-[color:var(--surface)]" : "bg-white"}`}
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
            <FaGithub className="text-lg" /> GitHub
          </a>
          <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="btn-dark text-[13px] px-5 py-2.5">
            Let's Connect
          </a>
          <button
            onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
            className="btn-icon"
            aria-label="Toggle dark/light mode"
          >
            {theme === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM5 9v6h14V9H5zm3-2h4v2h4V7z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 3v8l2 2L12 7l-2 2V3L12 3zm5.66 4.33a2.5 2.5 0 1 1-3.53 3.53 2.5 2.5 0 0 1 3.53-3.53zm-9.17 6.63a2.5 2.5 0 1 0 3.53 3.53 2.5 2.5 0 0 0-3.53-3.53zm7.58-11.38a2.5 2.5 0 1 1-3.53 3.53 2.5 2.5 0 0 1 3.53-3.53z" />
              </svg>
            )}
          </button>
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
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 border-t border-[#e4e4e7] bg-white ${navOpen ? "max-h-[440px]" : "max-h-0"} ${theme === "dark" ? "bg-[color:var(--surface)]" : "bg-white"}`}
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
              Let's Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}