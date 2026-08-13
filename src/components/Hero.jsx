import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import {
  SiDjango,
  SiDocker,
  SiLangchain,
  SiSap,
} from "react-icons/si";

const roles = [
  "AI Engineer",
  "ERP / MRP Solutions Architect",
  "Full-Stack Developer (MERN + Django)",
  "ML Model Developer",
  "SaaS & Enterprise Product Builder",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 75;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <h2 className="mt-4 text-xl sm:text-2xl text-gray-300 font-medium min-h-[2rem]">
      {text}
      <span className="caret" />
    </h2>
  );
};

const stats = [
  { value: "4+", label: "Flagship Products" },
  { value: "15+", label: "Years-Tech Coverage" },
  { value: "30+", label: "Technologies" },
  { value: "100%", label: "Enterprise Focus" },
];

const Hero = () => {
  return (
    <section className="relative grid-bg pt-32 pb-16 px-4 sm:px-6 lg:px-20 overflow-hidden">
      {/* Ambient glows */}
      <div
        className="glow-orb w-[420px] h-[420px] -top-24 -left-24"
        style={{ background: "rgba(130,69,236,0.28)" }}
      />
      <div
        className="glow-orb w-[360px] h-[360px] top-24 -right-24"
        style={{ background: "rgba(34,211,238,0.18)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* ---------------- Content ---------------- */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 border border-[#8245ec]/50 text-[#a78bfa] text-sm px-4 py-1.5 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Enterprise Projects
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text animate-gradient">M Afaq Ahmad</span>
          </h1>

          <Typewriter />

          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            I architect and build high-scale digital products — Web, SaaS,
            Desktop & Mobile apps, ERP / MRP systems, CRM and AI-powered
            solutions. From FBR & PRAL digital invoicing to enterprise
            accounting and HR platforms, I deliver systems that scale.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8245ec] to-[#22d3ee] hover:shadow-[0_0_30px_rgba(130,69,236,0.55)] transition duration-300"
            >
              Hire Me
            </Link>
            <Link
              to="/work"
              className="px-8 py-3 rounded-full border border-[#8245ec] text-[#a78bfa] hover:bg-white hover:text-[#8245ec] font-semibold transition duration-300"
            >
              View My Work
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl px-4 py-3 text-center hover:border-[#22d3ee]/60 transition duration-300"
              >
                <p className="text-2xl font-bold gradient-text">{s.value}</p>
                <p className="text-xs text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- 3D Scene ---------------- */}
        <div className="flex-1 flex items-center justify-center scene-3d h-[420px] sm:h-[480px]">
          <div className="relative preserve-3d animate-float-big w-[320px] h-[320px]">
            {/* rotating ring (vertical) */}
            <div
              className="ring-3d top-[38px] left-[38px] w-[244px] h-[244px]"
              style={{ animationDuration: "14s" }}
            />
            {/* flat spinning ring */}
            <div
              className="ring-3d-flat top-[86px] left-[86px] w-[148px] h-[148px]"
              style={{ animationDuration: "20s" }}
            />

            {/* Core cube */}
            <div className="absolute top-[115px] left-[115px] preserve-3d">
              <div className="cube">
                <div className="cube-face front">🤖</div>
                <div className="cube-face back">⚡</div>
                <div className="cube-face right">🧩</div>
                <div className="cube-face left">📊</div>
                <div className="cube-face top">⚙️</div>
                <div className="cube-face bottom">🧠</div>
              </div>
            </div>

            {/* Floating chrome shapes */}
            <div className="absolute -top-2 right-8 w-9 h-9 shape-diamond bg-gradient-to-br from-[#8245ec] to-[#22d3ee] animate-float" />
            <div className="absolute top-[58px] -left-3 w-4 h-4 shape-dot bg-cyan-300 animate-float" />
            <div className="absolute bottom-10 left-6 w-6 h-6 shape-diamond bg-[#8245ec]/60 animate-float" />
            <div className="absolute -bottom-2 right-16 w-4 h-4 shape-dot bg-[#a78bfa] animate-float" />
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="relative z-10 max-w-7xl mx-auto mt-14">
        <div className="flex flex-wrap items-center justify-center gap-3 text-2xl opacity-70">
          <FaReact className="text-[#22d3ee]" title="React" />
          <SiDjango className="text-[#44b78b]" title="Django" />
          <FaPython className="text-[#f7c548]" title="Python" />
          <FaDatabase className="text-[#a78bfa]" title="Databases" />
          <FaServer className="text-gray-300" title="Backend" />
          <SiDocker className="text-[#2496ed]" title="Docker" />
          <SiLangchain className="text-[#22d3ee]" title="LangChain" />
          <SiSap className="text-[#0faa b9]" title="ERP / MRP" />
        </div>
      </div>
    </section>
  );
};

export default Hero;