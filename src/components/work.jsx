import React, { useState } from "react";
import TiltCard from "./TiltCard";

const GITHUB = "https://github.com/engr-m-afaq-ahmad";

const projects = [
  { name: "Qualyx – AI-Powered Quality Engineering", tag: "AI Engineering", category: "ai", description: "Converts software requirements and security policies into executable verification plans. Runs deterministic and AI-assisted tests, collects evidence, and produces auditable quality gates.", tech: ["AI-assisted workflows", "AI integration", "Requirements-to-verification", "Evidence collection"], link: "https://qualyxai.vercel.app/", accent: "linear-gradient(135deg,#ef4444,#f97316)", priority: 1 },
  { name: "BookNTravel", tag: "SaaS | Travel Tech", category: "saas", description: "Travel booking and ticketing application designed to support booking operations and travel-related workflows.", tech: ["MERN Stack", "Next.js", "PostgreSQL", "Docker"], link: "https://bookntravel.pk/", accent: "linear-gradient(135deg,#2563eb,#1e40af)", priority: 2 },
  { name: "FBR & PRA Digital Invoicing", tag: "ERP | Tax Automation", category: "finance", description: "Digital invoicing solution supporting FBR and PRA invoicing workflows and business compliance operations.", tech: ["Django DRF", "PostgreSQL", "React", "Docker"], link: "https://invoicingdi.vercel.app/", accent: "linear-gradient(135deg,#ef4444,#f97316)", priority: 3 },
  { name: "CloudForge – AWS Student Build Group", tag: "Competition Platform", category: "saas", description: "Competition management website for an AWS Student Build Group competition, connecting participants, teams, challenges and competition activities.", tech: ["React", "AWS Amplify", "GraphQL", "Docker"], link: "https://cloudforge-nine.vercel.app/", accent: "linear-gradient(135deg,#2563eb,#06b6d4)", priority: 4 },
  { name: "BMSC – Board & Campaign Management System", tag: "Enterprise Software", category: "saas", description: "Outdoor advertising board, campaign management and operational management platform.", tech: ["Django", "PostgreSQL", "React", "Docker"], link: "https://bmsc.thirdeye.com.pk/", accent: "linear-gradient(135deg,#f97316,#ef4444)", priority: 5 },
  { name: "Hisab – Digital Khata for Shopkeepers", tag: "FinTech | Digital Bookkeeping", category: "finance", description: "A single-entry digital Khata application for shopkeepers to manage everyday financial transactions and records.", tech: ["React", "Node.js", "SQLite", "Vercel"], link: "https://hisab.netlify.app/", accent: "linear-gradient(135deg,#2563eb,#1e40af)", priority: 6 },
  { name: "Double Entry Accounting System", tag: "Accounting Software", category: "finance", description: "Accounting application built around double-entry bookkeeping and structured financial record management.", tech: ["MERN Stack", "PostgreSQL", "Redis", "Docker"], link: "https://accountssoft.vercel.app/", accent: "linear-gradient(135deg,#2563eb,#1e40af)", priority: 7 },
  { name: "E-Commerce Store – EDA & Data Processing", tag: "Data Analytics", category: "ai", description: "Exploratory Data Analysis and data processing project focused on an e-commerce store dataset.", tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"], link: null, github: `${GITHUB}/EDA-Data-Processing-E-Commerce-Store`, accent: "linear-gradient(135deg,#14b8a6,#06b5d2)", priority: 8 },
  { name: "eTimad HCM – HRMS Quality Assessment", tag: "Quality Assessment", category: "ai", description: "Quality and system assessment work involving an HRMS platform. Presented as an assessment/QSA engagement.", tech: ["Quality Assessment", "HRMS", "Enterprise Systems"], link: "https://www.etimadhcm.com/", accent: "linear-gradient(135deg,#ef4444,#f97316)", priority: 9 },
  { name: "CSS UET Lahore – Dept Society Website", tag: "Web Development", category: "web", description: "Website for the Computer Engineering Department society at UET Lahore.", tech: ["React", "Tailwind CSS", "Vercel"], link: "https://cssuetlahore.vercel.app/", accent: "linear-gradient(135deg,#6366f1,#14b8a6)", priority: 10 },
  { name: "Lahore College – Marketing Management Ops Portal", tag: "Business Operations", category: "web", description: "Marketing management and operational portal for Lahore College.", tech: ["React", "Node.js", "PostgreSQL", "Vercel"], link: "https://lahorecollege.com.pk/", accent: "linear-gradient(135deg,#ef4444,#f97316)", priority: 11 },
  { name: "eFiller – Corporate Consultant Website", tag: "Corporate Website", category: "web", description: "Professional marketing website for a corporate consulting business.", tech: ["React", "Tailwind CSS", "Vercel", "Framer Motion"], link: "https://efiller.vercel.app/", accent: "linear-gradient(135deg,#2563eb,#1e40af)", priority: 12 },
];

const filters = [
  { id: "all", label: "All Systems" },
  { id: "saas", label: "SaaS & Product" },
  { id: "finance", label: "Finance & ERP" },
  { id: "ai", label: "AI & QA" },
  { id: "web", label: "Web & Ops" },
];

const sorted = [...projects].sort((a, b) => a.priority - b.priority);

const Work = () => {
  const [active, setActive] = useState("all");
  const visible = sorted.filter((p) => active === "all" || p.category === active);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-4">02 / Selected Work</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111]">
            Featured Projects
            <br />
            <span className="text-[#71717A]">& Products.</span>
          </h2>
          <div className="section-line mb-8" />
          <p className="text-[#52525B] text-base sm:text-lg max-w-xl mx-auto">
            Enterprise products, SaaS builds and AI systems — organized by competency, shipped to production.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2 justify-center rise rise-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`filter-pill ${active === f.id ? "active" : ""}`}
              aria-pressed={active === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 rise rise-3">
          {visible.map((p) => {
            const isFeatured = [1, 2, 3, 4, 5].includes(p.priority);
            return (
              <TiltCard
                key={p.name}
                maxTilt={6}
                className={`project-card ${isFeatured ? "ring-1 ring-[#ef4444]/40" : ""}`}
              >
                <div className="flex flex-col h-full">
                  {/* CSS technical preview */}
                  <div
                    className="preview"
                    style={{ background: p.accent }}
                    aria-hidden="true"
                  >
                    <div className="preview-lines" style={{ opacity: 0.35 }} />
                    <div
                      className="preview-chip"
                      style={{ left: 14, top: 14, background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
                    >
                      {p.tag.split(" ")[0]}
                    </div>
                    {/* Stylized code block */}
                    <div style={{ position: "absolute", left: 14, right: 14, top: 54, display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={{ height: 6, width: "70%", background: "rgba(255,255,255,0.85)", borderRadius: 3 }} />
                      <div style={{ height: 6, width: "45%", background: "rgba(255,255,255,0.45)", borderRadius: 3 }} />
                      <div style={{ height: 6, width: "82%", background: "rgba(255,255,255,0.25)", borderRadius: 3 }} />
                    </div>
                    {isFeatured && (
                      <span style={{ position: "absolute", bottom: 12, right: 14, fontFamily: "JetBrains Mono", fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.8)", textTransform: "uppercase" }}>
                        ◆ Featured
                      </span>
                    )}
                  </div>

                  <div className="flex-1 p-5 flex flex-col">
                    <span className="inline-block text-[10px] uppercase tracking-wider text-[#52525B] border border-[#e4e4e7] rounded-full px-2.5 py-1 mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[#111111] mb-2 leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-sm text-[#52525B] flex-1 mb-4 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-1 rounded-md border border-[#e4e4e7] bg-[#fafafa] text-[#52525B]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto pt-3 border-t border-[#e4e4e7]">
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:text-[#2563eb]"
                          aria-label={`Live site: ${p.name}`}
                        >
                          Live Demo
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:text-[#2563eb]"
                          aria-label={`GitHub repository: ${p.name}`}
                        >
                          Source
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.808 1.304 3.495.997.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.467-2.382 1.233-3.223-.124-.303-.535-1.524.116-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.046.138 3.006.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.243 2.873.119 3.176.768.84 1.232 1.913 1.232 3.223 0 4.61-2.805 5.627-5.475 5.922.43.37.816 1.102.816 2.222 0 1.606-.014 2.898-.014 3.294 0 .322.194.694.8.576C20.565 21.797 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
