import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import afaq from "../assets/afaq.jpg";

const focusAreas = [
  { title: "AI Engineering", text: "AI-assisted testing, verification gates and intelligent workflows." },
  { title: "Full-Stack Development", text: "Production-grade React, Django, Node.js and PostgreSQL applications." },
  { title: "ERP & Finance", text: "FBR/PRA invoicing, accounting systems and compliance operations." },
  { title: "SaaS Products", text: "End-to-end SaaS delivery, deployment, monitoring and iteration." },
];
const stack = [
  "React", "Next.js", "Node.js", "Express", "JavaScript", "Python", "Django", "Django DRF",
  "FastAPI", "Flask", "Tailwind CSS", "shadcn/ui",
  "PostgreSQL", "MongoDB", "SQLite", "MySQL", "Redis", "SQL",
  "Docker", "Git", "GitHub", "Kubernetes", "CI / CD",
  "Vercel", "Render", "Netlify", "cPanel", "VPS Cloud", "Nginx",
  "LangChain", "LangGraph", "DVC", "MLflow", "Pandas", "NumPy",
];

const About = () => (
  <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]">
    <div className="relative z-10 max-w-[1600px] mx-auto">
      <p className="section-label mb-4">04 / The Engineer</p>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[#111111] leading-[0.95]">ABOUT<br /><span className="text-[#71717A]">THE ENGINEER.</span></h2>
          <p className="mt-6 text-lg sm:text-xl text-[#52525B] leading-relaxed max-w-2xl">
            I'm a Computer Engineer and Full-Stack Developer building enterprise-grade SaaS products, ERP systems, financial automation platforms and AI-assisted quality engineering solutions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://github.com/engr-m-afaq-ahmad" target="_blank" rel="noreferrer" className="btn-outline"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/engmuhammad-afaq-ahmad-684b36354" target="_blank" rel="noreferrer" className="btn-outline"><FaLinkedinIn /> LinkedIn</a>
          </div>
        </div>

        <figure className="lg:col-span-5 relative">
          <img src={afaq} alt="M Afaq Ahmad" className="w-full aspect-[4/5] object-cover object-top rounded-[8px] border border-[#e4e4e7]" />
          <figcaption className="absolute -bottom-4 left-4 right-4 bg-[var(--text)] text-[var(--bg)] rounded-[6px] px-4 py-3 shadow-lg">
            <span className="block font-bold text-sm">M Afaq Ahmad</span>
            <span className="block font-mono-tech text-[9px] uppercase tracking-[0.16em] opacity-75 mt-1">Full-Stack · AI Quality Engineering</span>
          </figcaption>
        </figure>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
        {focusAreas.map((focus) => (
          <div key={focus.title} className="bento p-4 sm:p-5">
            <span className="font-mono-tech text-[10px] text-[#ef4444]">0{focusAreas.indexOf(focus) + 1}</span>
            <h3 className="font-bold text-[#111111] text-sm sm:text-base mt-3">{focus.title}</h3>
            <p className="hidden sm:block text-xs text-[#52525B] leading-relaxed mt-2">{focus.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {stack.map((item) => <span key={item} className="tech-badge">{item}</span>)}
      </div>
    </div>
  </section>
);

export default About;
