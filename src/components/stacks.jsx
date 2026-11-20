import React from "react";

const techGroups = [
  {
    title: "Frontend Engineering",
    color: "#22d3ee",
    tags: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend & API Engineering",
    color: "#2563eb",
    tags: ["Node.js", "Express", "Python", "FastAPI", "Flask", "Django", "Django DRF", "C#", "ASP.NET", "REST APIs"],
  },
  {
    title: "Database & Data Engineering",
    color: "#6366f1",
    tags: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "Data Processing", "Exploratory Data Analysis", "Pandas", "NumPy"],
  },
  {
    title: "AI & Intelligent Systems",
    color: "#ef4444",
    tags: ["AI Integration", "LangChain", "LangGraph", "DVC", "MLflow", "RAG Pipelines", "Python-based Analysis", "Intelligent Verification"],
  },
  {
    title: "Quality & Security Engineering",
    color: "#f97316",
    tags: ["Software Testing", "API Testing", "Quality Assessment", "Security Assessment", "Static Analysis", "Evidence-based Verification"],
  },
  {
    title: "DevOps & Cloud Infrastructure",
    color: "#14b8a6",
    tags: ["Docker", "Kubernetes", "Git", "GitHub", "Linux", "CI / CD", "Deployment", "Cloud Infrastructure", "Vercel", "Render", "Netlify", "cPanel", "VPS Cloud", "Nginx"],
  },
  {
    title: "Enterprise & Architecture",
    color: "#f472b6",
    tags: ["ERP Systems", "MRP Systems", "CRM", "Microservices", "FBR / PRA Invoicing", "Accounting Automation"],
  },
];

const Stack = () => {
  return (
    <section id="stack" className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">01 / Capability Matrix</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111]">TECH <span className="text-[#71717A]">STACK.</span></h2>
          <p className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto mt-5">Industry-standard tools across the full software lifecycle—from product design to production operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {techGroups.map((group, index) => (
            <article
              key={group.title}
              className="stack-card group relative p-6 sm:p-8 overflow-hidden"
            >
              <span
                className="absolute left-0 top-0 h-full w-1.5 opacity-80"
                style={{ background: group.color }}
              />

              <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-[var(--border)]">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="h-3.5 w-3.5 rounded-[4px] shrink-0"
                    style={{ background: group.color }}
                  />
                  <h3 className="font-bold text-[#111111] text-base sm:text-lg leading-snug">
                    {group.title}
                  </h3>
                </div>
                <span className="font-mono-tech text-xs text-[var(--muted)] shrink-0">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.tags.map((tag) => (
                  <span key={tag} className="tech-badge tech-badge-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
