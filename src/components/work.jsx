import React from "react";
import TiltCard from "./TiltCard";

const projects = [
  {
    name: "Qualyx – AI-Powered Quality Engineering",
    tag: "AI Engineering",
    category: "AI, QA Automation",
    description:
      "Converts software requirements and security policies into executable verification plans. Runs deterministic and AI-assisted tests, collects evidence, and produces auditable quality gates.",
    tech: ["AI-assisted workflows", "AI integration", "Requirements-to-verification", "Evidence collection"],
    link: "https://qualyxai.vercel.app/",
    github: "https://github.com/engr-m-afaq-ahmad/EDA-Data-Processing-E-Commerce-Store",
    accent: "from-[#ef4444] to-[#f97316]",
    priority: 1,
  },
  {
    name: "BookNTravel",
    tag: "SaaS | Travel Tech",
    category: "SaaS & Product Engineering",
    description:
      "Travel booking and ticketing application designed to support booking operations and travel-related workflows.",
    tech: ["MERN Stack", "Next.js", "PostgreSQL", "Docker"],
    link: "https://bookntravel.pk/",
    github: null,
    accent: "from-[#2563eb] to-[#1e40af]",
    priority: 2,
  },
  {
    name: "FBR & PRA Digital Invoicing",
    tag: "ERP | Tax Automation",
    category: "Finance, ERP & Automation",
    description:
      "Digital invoicing solution supporting FBR and PRA invoicing workflows and business compliance operations.",
    tech: ["Django DRF", "PostgreSQL", "React", "Docker"],
    link: "https://invoicingdi.vercel.app/",
    github: null,
    accent: "from-[#ef4444] to-[#f97316]",
    priority: 3,
  },
  {
    name: "CloudForge – AWS Student Build Group",
    tag: "Competition Platform",
    category: "SaaS & Cloud Engineering",
    description:
      "Competition management website for an AWS Student Build Group competition, connecting participants, teams, challenges and competition activities.",
    tech: ["React", "AWS Amplify", "GraphQL", "Docker"],
    link: "https://cloudforge-nine.vercel.app/",
    github: null,
    accent: "from-[#2563eb] to-[#06b6d4]",
    priority: 4,
  },
  {
    name: "BMSC – Board & Campaign Management System",
    tag: "Enterprise Software",
    category: "Enterprise Software & Campaign Management",
    description:
      "Outdoor advertising board, campaign management and operational management platform.",
    tech: ["Django", "PostgreSQL", "React", "Docker"],
    link: "https://bmsc.thirdeye.com.pk/",
    github: null,
    accent: "from-[#f97316] to-[#ef4444]",
    priority: 5,
  },
  {
    name: "Hisab – Digital Khata for Shopkeepers",
    tag: "FinTech | Digital Bookkeeping",
    category: "Finance, ERP & Automation",
    description:
      "A single-entry digital Khata application for shopkeepers to manage everyday financial transactions and records.",
    tech: ["React", "Node.js", "SQLite", "Vercel"],
    link: "https://hisab.netlify.app/",
    github: null,
    accent: "from-[#2563eb] to-[#1e40af]",
    priority: 6,
  },
  {
    name: "Double Entry Accounting System",
    tag: "Accounting Software",
    category: "Finance, ERP & Automation",
    description:
      "Accounting application built around double-entry bookkeeping and structured financial record management.",
    tech: ["MERN Stack", "PostgreSQL", "Redis", "Docker"],
    link: "https://accountssoft.vercel.app/",
    github: null,
    accent: "from-[#2563eb] to-[#1e40af]",
    priority: 7,
  },
  {
    name: "E-Commerce Store – EDA & Data Processing",
    tag: "Data Analytics",
    category: "AI, QA Automation & Data",
    description:
      "Exploratory Data Analysis and data processing project focused on an e-commerce store dataset.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    link: null,
    github: "https://github.com/engr-m-afaq-ahmad/EDA-Data-Processing-E-Commerce-Store",
    accent: "from-[#14b8a6] to-[#22c55e]",
    priority: 8,
  },
  {
    name: "eTimad HCM – HRMS Quality Assessment",
    tag: "Quality Assessment",
    category: "Quality Assessment & HRMS",
    description:
      "Quality and system assessment work involving an HRMS platform. Presented as an assessment/QSA engagement.",
    tech: ["Python", "Django", "PostgreSQL", "N/A"],
    link: "https://www.etimadhcm.com/",
    github: null,
    accent: "from-[#ef4444] to-[#f97316]",
    priority: 9,
  },
  {
    name: "CSS UET Lahore – Dept Society Website",
    tag: "Web Development",
    category: "Web Platforms & Digital Operations",
    description:
      "Website for the Computer Engineering Department society at UET Lahore.",
    tech: ["React", "Tailwind CSS", "Vercel", "GitHub Pages"],
    link: "https://cssuetlahore.vercel.app/",
    github: null,
    accent: "from-[#6366f1] to-[#a5f3fc]",
    priority: 10,
  },
  {
    name: "Lahore College – Marketing Management Ops Portal",
    tag: "Business Operations",
    category: "Operations & Marketing Automation",
    description:
      "Marketing management and operational portal for Lahore College.",
    tech: ["React", "Node.js", "PostgreSQL", "Vercel"],
    link: "https://lahorecollege.com.pk/",
    github: null,
    accent: "from-[#ef4444] to-[#f97316]",
    priority: 11,
  },
  {
    name: "eFiller – Corporate Consultant Website",
    tag: "Corporate Website",
    category: "Web Development & Business Solutions",
    description:
      "Professional marketing website for a corporate consulting business.",
    tech: ["React", "Tailwind CSS", "Vercel", "Framer Motion"],
    link: "https://efiller.vercel.app/",
    github: null,
    accent: "from-[#2563eb] to-[#1e40af]",
    priority: 12,
  },
];

const Work = () => {
  // Sort by priority
  const sorted = projects.sort((a, b) => a.priority - b.priority);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111]"
          >
            Featured Projects & Products
          </h2>
          <div className="section-line mb-8" />
          <p
            className="text-[#52525B] text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
          >
            A curated selection of software products and engineering projects organized by professional competency.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-8 rise rise-2">
          <div className="flex gap-2">
            <span
              className="filter-pill active"
              onClick={() => filterProjects("all")}
            >
              All
            </span>
            <span
              className="filter-pill"
              onClick={() => filterProjects("saas-saas-product")}
            >
              SaaS & Product
            </span>
            <span
              className="filter-pill"
              onClick={() => filterProjects("finance-finance-erp")}
            >
              Finance & ERP
            </span>
            <span
              className="filter-pill"
              onClick={() => filterProjects("ai-data-qa")}
            >
              AI & QA
            </span>
            <span
              className="filter-pill"
              onClick={() => filterProjects("web-web-operations")}
            >
              Web & Operations
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sorted.map((p) => {
            // Filter logic: show all unless user filtered, then only matching categories
            const cat = p.category.toLowerCase();
            const isSaas = cat.includes("saas") || cat.includes("product");
            const isFinance = cat.includes("finance") || cat.includes("erp");
            const isAi = cat.includes("ai") || cat.includes("data") || cat.includes("qa");
            const isWeb = cat.includes("web") || cat.includes("operations");

            let show = true;
            if (isSaas && !isFinance && !isAi && !isWeb) show = false; // placeholder
            // Actually filter manually in map below - simpler: always render with condition
            return null; // will render separately
          })}
        </div>

        {/* Render all with simple mapping and inline condition */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 rise">
          {[...sorted].map((p) => {
            const cat = p.category.toLowerCase();
            const isSaas = cat.includes("saas") || cat.includes("product");
            const isFinance = cat.includes("finance") || cat.includes("erp");
            const isAi = cat.includes("ai") || cat.includes("data") || cat.includes("qa");
            const isWeb = cat.includes("web") || cat.includes("operations");
            const showAll = true; // user can filter, but for now show all

            if (!showAll) return null;

            const isFeatured = [1, 2, 3, 4, 5].includes(p.priority);

            return (
              <TiltCard
                key={p.name}
                maxTilt={6}
                className={`project-card ${isFeatured ? "border-red-500/30 shadow-red-500/20" : ""}`}
              >
                <div className="flex flex-col h-full">
                  {/* Preview */}
                  <div
                    className="preview preview-accent"
                    style={{ background: p.accent }}
                  >
                    <div className="preview-lines" />
                    <div className="preview-dots" />
                    <div
                      className="preview-chip"
                      style={{ left: 14, top: 12 }}
                    >
                      {p.tag.split(" ")[0]}
                    </div>
                  </div>

                  <div className="flex-1 p-5 flex flex-col">
                    <span
                      className="inline-block text-[10px] uppercase tracking-wider text-[#52525B] border border-[#e4e4e7] rounded-full px-2.5 py-1 mb-3"
                    >
                      {p.tag}
                    </span>
                    <h3
                      className="text-lg font-bold text-[#111111] mb-2 line-clamp-2"
                    >
                      {p.name}
                    </h3>
                    <p
                      className="text-sm text-[#52525B] line-clamp-3 flex-1 mb-4"
                    >
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-1 rounded-md border border-[#e4e4e7]/30 bg-[#fafafa] text-[#52525B] hover:border-[#111111] hover:text-[#111111] transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action links */}
                  <div
                    className={`p-3 border-t border-[#e4e4e7] pt-4 flex justify-between items-start`}
                  >
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:underline"
                        aria-label={`Live demo: ${p.name}`}
                      >
                        Live Demo
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M5 12h8l2-5L5 3v9z" />
                        </svg>
                      </a>
                    ) : null}
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:underline"
                        aria-label={`GitHub: ${p.name}`}
                      >
                        Source
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M9 19c-5 1-5-2.7-4.1-7H2a2 2 0 0 0-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 1h3.1l4.9-12H21a2 2 0 0 1 2 1v4.1l-1.6 5c.3.6.8.9 1.5.9s1.2.3 1.5-.9L13 3H7z" />
                          <circle cx="5" cy="19" r=1 />
                        </svg>
                      </a>
                    ) : null}
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