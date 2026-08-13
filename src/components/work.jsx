import React from "react";
import TiltCard from "./TiltCard";

const projects = [
  {
    name: "FBR & PRAL Digital Invoicing",
    tag: "Flagship Product",
    description:
      "A compliance-first digital invoicing platform aligned with FBR & PRAL requirements — real-time tax invoice generation, integration-ready APIs and secure audit trails.",
    tech: ["Django DRF", "PostgreSQL", "React", "Docker"],
    accent: "from-[#8245ec] to-[#22d3ee]",
  },
  {
    name: "Enterprise Accounting Software",
    tag: "Flagship Product",
    description:
      "High-scale accounting system handling multi-entity ledgers, receivables/payables, chart of accounts, financial reporting and role-based access for large organizations.",
    tech: ["MERN Stack", "PostgreSQL", "Redis", "Docker"],
    accent: "from-[#22d3ee] to-[#38bdf8]",
  },
  {
    name: "Industry-Based HR Software",
    tag: "Flagship Product",
    description:
      "High-scale HR management platform built for industries — payroll, attendance, leave management, workforce analytics and configurable workflows per industry vertical.",
    tech: ["React", "Django DRF", "PostgreSQL", "n8n"],
    accent: "from-[#a855f7] to-[#8245ec]",
  },
  {
    name: "AI-Powered Assistant — SARA-AI",
    tag: "AI Engineering",
    description:
      "A full-stack AI chatbot for Study, Coding, Health and general use, powered by Django, LangChain and database-backed knowledge with auth and an admin panel.",
    tech: ["Python", "LangChain", "Django", "SQLite3"],
    accent: "from-[#f7c548] to-[#f97316]",
  },
  {
    name: "SaaS Platforms & Web Apps",
    tag: "Web · SaaS · Desktop · Mobile",
    description:
      "End-to-end build and launch of SaaS products, web applications, desktop and mobile solutions — from UI/UX design to cloud deployment and maintenance.",
    tech: ["MERN", "Next.js", "Electron", "Vercel"],
    accent: "from-[#84cc16] to-[#22d3ee]",
  },
  {
    name: "Spam Detection ML Model",
    tag: "ML Model Development",
    description:
      "A machine learning pipeline using Scikit-learn and Python that classifies emails and messages as spam or legitimate from dataset features with high accuracy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    accent: "from-[#60a5fa] to-[#a855f7]",
  },
];

const Work = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden grid-bg">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured <span className="gradient-text">Products & Projects</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Enterprise products and AI-driven systems I have designed and
            delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p) => (
            <TiltCard
              key={p.name}
              maxTilt={8}
              zDepth={26}
              className="rounded-2xl overflow-hidden glass border border-[#8245ec]/40 hover:border-[#22d3ee]/50"
            >
              <div
                className={`h-2 bg-gradient-to-r ${p.accent}`}
              />
              <div className="p-6">
                <span className="inline-block text-[11px] uppercase tracking-wider text-[#a78bfa] border border-[#8245ec]/50 rounded-full px-3 py-1 mb-3">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-[#8245ec]/15 text-gray-300 border border-[#8245ec]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;