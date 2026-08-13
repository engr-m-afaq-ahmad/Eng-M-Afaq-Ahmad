import React from "react";
import TiltCard from "./TiltCard";

const stacks = [
  {
    name: "React",
    tag: "Frontend Library",
    color: "#22d3ee",
  },
  {
    name: "Redux / Context",
    tag: "State Management",
    color: "#a855f7",
  },
  {
    name: "Node.js + Express",
    tag: "Backend Runtime",
    color: "#84cc16",
  },
  {
    name: "Django",
    tag: "Backend Framework",
    color: "#44b78b",
  },
  {
    name: "Django REST Framework",
    tag: "REST APIs",
    color: "#f43f5e",
  },
  {
    name: "MERN Stack",
    tag: "Full-Stack Suite",
    color: "#38bdf8",
  },
  {
    name: "LangChain",
    tag: "LLM Orchestration",
    color: "#22d3ee",
  },
  {
    name: "PostgreSQL",
    tag: "Relational DB",
    color: "#60a5fa",
  },
  {
    name: "MongoDB",
    tag: "NoSQL DB",
    color: "#47a248",
  },
  {
    name: "SQL",
    tag: "Query Language",
    color: "#fbbf24",
  },
  {
    name: "SQLite3",
    tag: "Embedded DB",
    color: "#94a3b8",
  },
  {
    name: "n8n",
    tag: "Workflow Automation",
    color: "#ea580c",
  },
  {
    name: "Docker",
    tag: "Containerization",
    color: "#2496ed",
  },
  {
    name: "Render",
    tag: "Cloud Hosting",
    color: "#3b82f6",
  },
  {
    name: "cPanel",
    tag: "Shared Hosting",
    color: "#f97316",
  },
  {
    name: "Vercel",
    tag: "Edge Deployment",
    color: "#e2e8f0",
  },
  {
    name: "Git & GitHub",
    tag: "Version Control",
    color: "#f472b6",
  },
  {
    name: "ML Model Dev",
    tag: "Scikit-learn · Pandas",
    color: "#f7c548",
  },
];

const Stack = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div
        className="glow-orb w-[400px] h-[400px] top-1/3 -left-32"
        style={{ background: "rgba(130,69,236,0.16)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            The modern toolchain I rely on across the full product lifecycle —
            from MERN and Django to AI orchestration, automation and DevOps.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {stacks.map((s) => (
            <TiltCard
              key={s.name}
              maxTilt={12}
              zDepth={20}
              className="border-2 rounded-xl glass p-5 text-center hover:shadow-[0_10px_40px_rgba(130,69,236,0.25)]"
            >
              <span
                className="inline-block w-2.5 h-2.5 rounded-full mb-3"
                style={{ background: s.color, boxShadow: `0 0 10px ${s.color}` }}
              />
              <p className="text-sm font-bold text-white leading-tight">
                {s.name}
              </p>
              <p className="text-[11px] text-gray-400 mt-1">{s.tag}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;