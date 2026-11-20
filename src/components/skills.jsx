import React from "react";
import TiltCard from "./TiltCard";

const skillGroups = [
  {
    title: "Languages",
    icon: "💬",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "React",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "Sass",
      "Responsive UI",
      "Framer Motion",
      "3D / CSS3D FX",
    ],
  },
  {
    title: "Backend & API",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "JWT Auth",
      "MERN Stack",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLite3",
      "Redis",
      "Data Modeling",
      "Query Optimization",
      "Migrations",
    ],
  },
  {
    title: "AI / ML Engineering",
    icon: "🤖",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "LangChain",
      "LLM Applications",
      "RAG Pipelines",
      "Scikit-learn",
      "Pandas / NumPy",
      "Data Analysis",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "Docker",
      "Render",
      "cPanel",
      "Vercel",
      "CI / CD",
      "Linux",
      "NGINX",
      "Monitoring",
    ],
  },
  {
    title: "Enterprise & Architecture",
    icon: "🏛️",
    skills: [
      "ERP Systems",
      "MRP Systems",
      "CRM",
      "Invoicing (FBR/PRAL)",
      "Accounting Software",
      "HR Software",
      "Microservices",
      "System Design",
    ],
  },
  {
    title: "Automation & Tools",
    icon: "🔗",
    skills: [
      "n8n Workflows",
      "Webhook Integration",
      "n8n Automation",
      "Git & GitHub",
      "Postman",
      "Figma",
      "Agile / Scrum",
      "Technical Docs",
    ],
  },
];

const Skills = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden tech-grid bg-[color:var(--bg)]">
      <div className="orb w-[320px] h-[320px] -top-20 -left-24" style={{ background: "rgba(239,68,68,0.16)" }} />
      <div className="orb w-[360px] h-[360px] bottom-0 -right-24" style={{ background: "rgba(37,99,235,0.14)", animationDelay: "-6s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="section-label mb-4">Skills Matrix</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[color:var(--text)]">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-[color:var(--text-2)] mt-4 max-w-2xl mx-auto">
            Languages, frameworks and platforms I use to design, build and
            deploy enterprise-grade AI and SaaS solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="reveal-scale"
              style={{ "--reveal-delay": `${(index % 4) * 80}ms` }}
            >
              <TiltCard
                maxTilt={7}
                zDepth={24}
                className="stack-card p-6 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{group.icon}</span>
                  <h3 className="text-lg font-bold text-[color:var(--text)]">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full border border-[color:var(--border)] text-[color:var(--text-2)] bg-[color:var(--surface)] hover:border-[color:var(--text)] hover:text-[color:var(--text)] transition duration-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
