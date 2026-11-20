import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../hooks/useTheme";

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
  const { theme, toggleTheme } = useTheme();

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
      window.location.assign(`/${href}`);
    }
  };

  return (
    <nav className={`navbar-shell fixed top-0 w-full z-50 backdrop-blur-md ${scrolled ? "scrolled" : ""}`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Afaq Ahmad home">
          <span className="nav-logo font-pixel text-[15px] tracking-[0.14em] text-[color:var(--text)]">AFAQ</span>
          <span className="w-1.5 h-1.5 bg-[color:var(--red)] rounded-[2px]" />
          <span className="hidden sm:inline font-mono-tech text-[11px] text-[color:var(--muted)]">.dev</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={(e) => handleNav(e, item.href)} className="group relative text-[14px] font-medium text-[color:var(--text-2)] hover:text-[color:var(--text)] transition-colors">
                {item.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--red)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-[13px] font-medium text-[color:var(--text-2)] hover:text-[color:var(--text)] transition-colors" aria-label="GitHub profile">
            <FaGithub className="text-lg" /> GitHub
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-icon theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <span className={`theme-toggle-icon ${theme === "dark" ? "is-dark" : ""}`}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </span>
          </button>
          <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="btn-dark hidden lg:inline-flex text-[13px] px-5 py-2.5">Let's Connect</a>
          <button className="lg:hidden text-2xl text-[color:var(--text)]" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation menu" aria-expanded={navOpen}>
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-[max-height] duration-300 border-t border-[color:var(--border)] bg-[color:var(--bg)] ${navOpen ? "max-h-[460px]" : "max-h-0"}`}>
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={(e) => handleNav(e, item.href)} className="block py-3 text-[15px] font-medium text-[color:var(--text-2)] border-b border-[color:var(--border)] hover:text-[color:var(--text)]">
                {item.name}
              </a>
            </li>
          ))}
          <li className="pt-4 flex flex-col gap-3">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="btn-outline justify-center"><FaGithub /> GitHub Profile</a>
            <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="btn-dark justify-center">Let's Connect</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
