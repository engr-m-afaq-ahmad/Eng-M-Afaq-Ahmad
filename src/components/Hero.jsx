import React from "react";
import { FaGithub } from "react-icons/fa";
import afaq from "../assets/afaq.jpg";

const GITHUB = "https://github.com/engr-m-afaq-ahmad";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden bg-[color:var(--bg)] tech-grid">
      <div className="orb w-[380px] h-[380px] -top-24 -left-24" style={{ background: "rgba(239,68,68,0.15)" }} />
      <div className="orb w-[440px] h-[440px] top-1/3 -right-28" style={{ background: "rgba(37,99,235,0.13)", animationDelay: "-5s" }} />
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex items-center justify-between gap-4 mb-8 rise">
          <span className="section-label">00 / Portfolio — Lahore, PK</span>
          <span className="inline-flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[color:var(--text-2)] border border-[color:var(--border)] rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" /> Available for work
          </span>
        </div>

        <h1 className="text-[clamp(3.25rem,12vw,9rem)] leading-[0.92] font-extrabold tracking-[-0.055em] text-[color:var(--text)]">
          <span className="block rise rise-1">ENGINEERING</span>
          <span className="gradient-display block rise rise-2">DIGITAL SYSTEMS.</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-8 lg:mt-10 items-end">
          <div className="lg:col-span-7 max-w-2xl">
            <p className="text-lg sm:text-xl lg:text-2xl text-[color:var(--text-2)] leading-snug rise rise-3">
              I build scalable software products, enterprise platforms, financial automation systems, and intelligent quality engineering solutions.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3 rise rise-4">
              <a href="#projects" className="btn-dark">View Projects <span aria-hidden="true">↗</span></a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="btn-outline"><FaGithub /> GitHub Profile <span aria-hidden="true">↗</span></a>
            </div>

            <p className="mt-6 font-mono-tech text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[color:var(--muted)] rise rise-5">
              Computer Engineer · Full-Stack Developer · AI & Quality Engineering
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start sm:items-center lg:items-end gap-4">
            <figure className="relative w-full max-w-[420px] aspect-[16/11] overflow-hidden rounded-[8px] border border-[color:var(--border)] bg-[#171717] shadow-[0_22px_70px_-28px_rgba(239,68,68,0.38)]">
              <img src={afaq} alt="M Afaq Ahmad" className="absolute inset-0 h-full w-full object-cover opacity-78 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/20 via-[#f97316]/25 to-[#2563eb]/25" />
              <div className="absolute inset-x-[13%] top-[34%] h-[20%] rounded-full bg-gradient-to-r from-transparent via-white/80 to-blue-500/75 blur-[1px]" />
              <div className="visor-scan" />
              <span className="visor-tag">SYS.VISION // AFAQ-01</span>
            </figure>
          </div>
        </div>
      </div>

      <a href="#expertise" className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors" aria-label="Scroll to expertise">
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <svg className="arrow-bounce w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 5v14" />
          <path d="M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
