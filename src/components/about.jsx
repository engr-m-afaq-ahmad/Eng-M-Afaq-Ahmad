import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import afaq from "../assets/afaq.jpg";
import { techGroups } from "../data/techGroups";

const focusAreas = [
  { title: "AI Engineering", text: "AI-assisted testing, verification gates and intelligent workflows." },
  { title: "Full-Stack Development", text: "Production-grade React, Django, Node.js and PostgreSQL applications." },
  { title: "ERP & Finance", text: "FBR/PRA invoicing, accounting systems and compliance operations." },
  { title: "SaaS Products", text: "End-to-end SaaS delivery, deployment, monitoring and iteration." },
];

const About = () => (
  <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]">
    <div className="relative z-10 max-w-[1600px] mx-auto">
      <p className="section-label mb-4 reveal">04 / The Engineer</p>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-center reveal">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[color:var(--text)] leading-[0.95]">ABOUT<br /><span className="text-[color:var(--muted)]">THE ENGINEER.</span></h2>
          <p className="mt-6 text-lg sm:text-xl text-[color:var(--text-2)] leading-relaxed max-w-2xl">
            I'm a Computer Engineer and AI Engineer building enterprise-grade SaaS products, ERP systems, financial automation platforms and AI-assisted quality engineering solutions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://github.com/engr-m-afaq-ahmad" target="_blank" rel="noreferrer" className="btn-outline"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/engmuhammad-afaq-ahmad-684b36354" target="_blank" rel="noreferrer" className="btn-outline"><FaLinkedinIn /> LinkedIn</a>
          </div>
        </div>

        <figure className="lg:col-span-5 relative reveal-scale">
          <img src={afaq} alt="M Afaq Ahmad" className="w-full aspect-[4/5] object-cover object-top rounded-[8px] border border-[color:var(--border)]" />
          <figcaption className="absolute -bottom-4 left-4 right-4 bg-[var(--text)] text-[var(--bg)] rounded-[6px] px-4 py-3 shadow-lg">
            <span className="block font-bold text-sm">M Afaq Ahmad</span>
            <span className="block font-mono-tech text-[9px] uppercase tracking-[0.16em] opacity-75 mt-1">Full-Stack AI Engineering · AI Quality Engineering</span>
          </figcaption>
        </figure>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
        {focusAreas.map((focus) => (
          <div key={focus.title} className="bento p-4 sm:p-5 reveal-scale" style={{ "--reveal-delay": `${focusAreas.indexOf(focus) * 70}ms` }}>
            <span className="font-mono-tech text-[10px] text-[color:var(--red)]">0{focusAreas.indexOf(focus) + 1}</span>
            <h3 className="font-bold text-[color:var(--text)] text-sm sm:text-base mt-3">{focus.title}</h3>
            <p className="hidden sm:block text-xs text-[color:var(--text-2)] leading-relaxed mt-2">{focus.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 reveal">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
          <div>
            <p className="section-label mb-2">Technical Stack</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)]">
              Tools I engineer with.
            </h3>
          </div>
          <span className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
            07 Domains
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {techGroups.map((group, index) => (
            <article
              key={group.title}
              className="stack-card p-5 sm:p-6 reveal-scale"
              style={{ "--reveal-delay": `${(index % 3) * 70}ms` }}
            >
              <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-[color:var(--border)]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className="h-2.5 w-2.5 rounded-[3px] shrink-0"
                    style={{ background: group.color }}
                  />
                  <h4 className="font-bold text-[color:var(--text)] text-sm sm:text-base truncate">
                    {group.title}
                  </h4>
                </div>
                <span className="font-mono-tech text-[11px] text-[color:var(--muted)] shrink-0">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <span key={tag} className="tech-badge text-[0.78rem] px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
