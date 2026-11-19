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
        <div className="text-center mb-14">
          <p className="section-label mb-4">01 / Capability Matrix</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111]">TECH <span className="text-[#71717A]">STACK.</span></h2>
          <p className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto mt-5">Industry-standard tools across the full software lifecycle—from product design to production operations.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {techGroups.map((group, index) => (
            <article key={group.title} className="bento p-5 sm:p-6 min-h-48">
              <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-3 mb-4">
                <h3 className="font-bold text-[#111111] text-sm sm:text-base">{group.title}</h3>
                <span className="font-mono-tech text-[10px] text-[var(--muted)]">0{index + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => <span key={tag} className="tech-badge">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
