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
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden grid-bg">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Languages, frameworks and platforms I use to design, build and
            deploy enterprise-grade AI and SaaS solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <TiltCard
              key={group.title}
              maxTilt={7}
              zDepth={24}
              className="border-2 border-[#8245ec]/50 rounded-2xl glass p-6 hover:border-[#22d3ee]/60"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#8245ec]/40 text-gray-300 bg-[#8245ec]/10 hover:bg-[#8245ec]/30 hover:text-white transition duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;