import React, { useState } from "react";
import TiltCard from "./TiltCard";

const GITHUB = "https://github.com/engr-m-afaq-ahmad";

const projects = [
  {
    name: "Qualyx – AI-Powered Quality Engineering",
    tag: "AI Engineering",
    category: "ai",
    description:
      "Converts software requirements and security policies into executable verification plans. Runs deterministic and AI-assisted tests, collects evidence, and produces auditable quality gates.",
    tech: ["AI-assisted workflows", "AI integration", "Requirements-to-verification", "Evidence collection"],
    link: "https://qualyxai.vercel.app/",
    accent: "linear-gradient(135deg,#ef4444,#f97316)",
    priority: 1,
    featured: true,
  },
  {
    name: "BookNTravel",
    tag: "SaaS | Travel Tech",
    category: "saas",
    description:
      "Travel booking and ticketing application designed to support booking operations and travel-related workflows.",
    tech: ["Django DRF", "Next.js", "PostgreSQL", "Docker", "VPS Cloud", "Nginx"],
    link: "https://bookntravel.pk/",
    accent: "linear-gradient(135deg,#2563eb,#1e40af)",
    priority: 2,
    featured: true,
  },
  {
    name: "FBR & PRA Digital Invoicing",
    tag: "ERP | Tax Automation",
    category: "finance",
    description:
      "Digital invoicing solution supporting FBR and PRA invoicing workflows and business compliance operations.",
    tech: ["MERN Stack", "React"],
    link: "https://invoicingdi.vercel.app/",
    accent: "linear-gradient(135deg,#ef4444,#f97316)",
    priority: 3,
    featured: true,
  },
  {
    name: "CloudForge – AWS Student Build Group",
    tag: "Competition Platform",
    category: "saas",
    description:
      "Competition website for an AWS Student Build Group competition, connecting participants, teams, challenges and competition activities.",
    tech: ["React", "Docker"],
    link: "https://cloudforge-nine.vercel.app/",
    accent: "linear-gradient(135deg,#2563eb,#06b6d4)",
    priority: 4,
    featured: true,
  },
  {
    name: "BMSC – Board & Campaign Management System",
    tag: "Enterprise Software",
    category: "saas",
    description:
      "Outdoor advertising board, campaign management and operational management platform.",
    tech: ["MERN Stack", "React", "Docker"],
    link: "https://bmsc.thirdeye.com.pk/",
    accent: "linear-gradient(135deg,#f97316,#ef4444)",
    priority: 5,
    featured: true,
  },
  {
    name: "Hisab – Digital Khata for Shopkeepers",
    tag: "FinTech | Digital Bookkeeping",
    category: "finance",
    description:
      "A single-entry digital Khata application for shopkeepers to manage everyday financial transactions and records.",
    tech: ["React", "Node.js", "Firebase", "Vercel"],
    link: "https://hisab.netlify.app/",
    accent: "linear-gradient(135deg,#2563eb,#1e40af)",
    priority: 6,
    featured: false,
  },
  {
    name: "Double Entry Accounting System",
    tag: "Accounting Software",
    category: "finance",
    description:
      "Accounting application built around double-entry bookkeeping and structured financial record management.",
    tech: ["Django DRF", "PostgreSQL", "Redis", "Docker"],
    link: "https://accountssoft.vercel.app/",
    accent: "linear-gradient(135deg,#2563eb,#1e40af)",
    priority: 7,
    featured: false,
  },
  {
    name: "E-Commerce Store – EDA & Data Processing",
    tag: "Data Analytics",
    category: "ai",
    description:
      "Exploratory Data Analysis and data processing project focused on an e-commerce store dataset.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    link: null,
    github: `${GITHUB}/EDA-Data-Processing-E-Commerce-Store`,
    accent: "linear-gradient(135deg,#14b8a6,#06b5d2)",
    priority: 8,
    featured: false,
  },
  {
    name: "eTimad HCM – HRMS Quality Assessment",
    tag: "Quality Assessment",
    category: "ai",
    description:
      "Quality and system assessment work involving an HRMS platform. Presented as an assessment/QSA engagement.",
    tech: ["Quality Assessment", "HRMS", "Enterprise Systems"],
    link: "https://www.etimadhcm.com/",
    accent: "linear-gradient(135deg,#ef4444,#f97316)",
    priority: 9,
    featured: false,
  },
  {
    name: "CSS UET Lahore – Dept Society Website",
    tag: "Web Development",
    category: "web",
    description:
      "Website for the Computer Engineering Department society at UET Lahore.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://cssuetlahore.vercel.app/",
    accent: "linear-gradient(135deg,#6366f1,#14b8a6)",
    priority: 10,
    featured: false,
  },
  {
    name: "Lahore College – Marketing Management Ops Portal",
    tag: "Business Operations",
    category: "web",
    description:
      "Marketing management and operational portal for Lahore College.",
    tech: ["React", "MERN Stack", "Vercel"],
    link: "https://lahorecollege.com.pk/",
    accent: "linear-gradient(135deg,#ef4444,#f97316)",
    priority: 11,
    featured: false,
  },
  {
    name: "eFiller – Corporate Consultant Website",
    tag: "Corporate Website",
    category: "web",
    description:
      "Professional marketing website for a corporate consulting business.",
    tech: ["React", "Tailwind CSS", "Vercel", "Framer Motion"],
    link: "https://efiller.vercel.app/",
    accent: "linear-gradient(135deg,#2563eb,#1e40af)",
    priority: 12,
    featured: false,
  },
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
        <div className="text-center mb-12 reveal">
          <p className="section-label mb-4">02 / Selected Work</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[color:var(--text)]">
            Featured Projects
            <br />
            <span className="text-[color:var(--muted)]">& Products.</span>
          </h2>
          <div className="section-line mb-8" />
          <p className="text-[color:var(--text-2)] text-base sm:text-lg max-w-xl mx-auto">
            Enterprise products, SaaS builds and AI systems — organized by competency, shipped to production.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2 justify-center reveal">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, index) => {
            const isFeatured = [1, 2, 3, 4, 5].includes(p.priority);
            return (
              <div
                key={p.name}
                className="reveal-scale"
                style={{ "--reveal-delay": `${(index % 3) * 80}ms` }}
              >
              <TiltCard
                maxTilt={6}
                className={`project-card h-full ${isFeatured ? "ring-1 ring-[color:var(--red)]/40" : ""}`}
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
                      style={{
                        left: 14,
                        top: 14,
                        background: "rgba(255,255,255,0.12)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      {p.tag.split(" ")[0]}
                    </div>
                    {/* Stylized code block */}
                    <div
                      style={{
                        position: "absolute",
                        left: 14,
                        right: 14,
                        top: 54,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div style={{ height: 6, width: "70%", background: "rgba(255,255,255,0.85)", borderRadius: 3 }} />
                      <div style={{ height: 6, width: "45%", background: "rgba(255,255,255,0.45)", borderRadius: 3 }} />
      <div style={{ height: 6, width: "82%", background: "rgba(255,255,255,0.25)", borderRadius: 3 }} />
                    </div>
                    {isFeatured && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 12,
                          right: 14,
                          fontFamily: "JetBrains Mono",
                          fontSize: 9,
                          letterSpacing: "0.18em",
                          color: "rgba(255,255,255,0.8)",
                          textTransform: "uppercase",
                        }}
                      >
                        ◆ Featured
                      </span>
                    )}
                  </div>

                  <div className="flex-1 p-5 flex flex-col">
                    <span className="inline-block text-[10px] uppercase tracking-wider text-[color:var(--text-2)] border border-[color:var(--border)] rounded-full px-2.5 py-1 mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[color:var(--text)] mb-2 leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-sm text-[color:var(--text-2)] flex-1 mb-4 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md border border-[color:var(--border)]/30 bg-[color:var(--surface)] text-[color:var(--text-2)] hover:border-[color:var(--text)] hover:text-[color:var(--text)] transition-colors text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.link && (
                      <div className="mt-auto">
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[color:var(--blue)] text-sm font-medium hover:underline transition-colors"
                        >
                          Live Demo
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    )}

                    {p.github && (
                      <div>
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[color:var(--text-2)] text-sm font-medium hover:text-[color:var(--text)] transition-colors"
                        >
                          Source
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;