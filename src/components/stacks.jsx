import React from "react";

const techGroups = [
  {
    title: "Frontend Engineering",
    color: "#22d3ee",
    accent: "from-[#22d3ee] to-[#1e40af]",
    tags: [
      { name: "React", key: "react" },
      { name: "JavaScript", key: "javascript" },
      { name: "HTML5", key: "html5" },
      { name: "CSS3", key: "css3" },
      { name: "Tailwind CSS", key: "tailwind" },
    ],
  },
  {
    title: "Backend & API Engineering",
    color: "#111111",
    accent: "from-[#111111] to-[#374151]",
    tags: [
      { name: "Node.js", key: "node" },
      { name: "Express.js", key: "express" },
      { name: "Python", key: "python" },
      { name: "Django", key: "django" },
      { name: "FastAPI", key: "fastapi" },
      { name: "REST APIs", key: "rest-apis" },
    ],
  },
  {
    title: "Database & Data Engineering",
    color: "#6366f1",
    accent: "from-[#6366f1] to-[#8b5cf6]",
    tags: [
      { name: "PostgreSQL", key: "postgres" },
      { name: "MongoDB", key: "mongodb" },
      { name: "Redis", key: "redis" },
      { name: "SQLite", key: "sqlite" },
    ],
  },
  {
    title: "AI & Intelligent Systems",
    color: "#ef4444",
    accent: "from-[#ef4444] to-[#f97316]",
    tags: [
      { name: "AI-assisted workflows", key: "ai-wf" },
      { name: "AI integration", key: "ai-integ" },
      { name: "LangChain", key: "langchain" },
      { name: "RAG Pipelines", key: "rag" },
    ],
  },
  {
    title: "Quality & Security Engineering",
    color: "#f97316",
    accent: "from-[#f97316] to-[#ef4444]",
    tags: [
      { name: "Software Testing", key: "testing" },
      { name: "API Testing", key: "api-testing" },
      { name: "Quality Assessment", key: "qa" },
      { name: "Security Assessment", key: "security" },
      { name: "Evidence-based Verification", key: "evidence" },
    ],
  },
  {
    title: "DevOps & Cloud Infrastructure",
    color: "#14b8a6",
    accent: "from-[#14b8a6] to-[#06b5d2]",
    tags: [
      { name: "Docker", key: "docker" },
      { name: "Vercel", key: "vercel" },
      { name: "Render", key: "render" },
      { name: "CI / CD", key: "ci-cd" },
      { name: "Git & GitHub", key: "git" },
    ],
  },
  {
    title: "Enterprise & Architecture",
    color: "#f472b6",
    accent: "from-[#f472b6] to-[#ec4899]",
    tags: [
      { name: "ERP Systems", key: "erp" },
      { name: "MRP Systems", key: "mrp" },
      { name: "CRM", key: "crm" },
      { name: "Microservices", key: "microservices" },
    ],
  },
];

const Stack = () => {
  return (
    <section
      id="stack"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111]"
          >
            Tech Stack
          </h2>
          <div className="section-line mb-6" />
          <p
            className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto"
          >
            Industry-standard software engineering competencies across the full product lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="bento border border-[#e4e4e7] rounded-[6px] overflow-hidden p-6 rise rise-3"
            >
              <div
                className="flex items-center gap-3 mb-4 text-sm"
              >
                <span
                  className="flex items-center gap-1.5"
                  style={{ color: group.color }}
                >
                  {group.title}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag.key}
                    className="text-[10px] px-2.5 py-1 rounded-md border border-[#e4e4e7]/30 bg-[#fafafa] text-[#52525B] hover:border-[#111111] hover:text-[#111111] transition-colors"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;