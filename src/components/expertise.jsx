import React from "react";
import { FaGraduationCap, FaLanguages, FaCog, FaServer, FaCloudUpload, FaUserCheck, FaShieldAlt, FaChartColumn } from "react-icons/fa";

const competencies = [
  { title: "01", label: "Full-Stack Software Engineering", desc: "Architect and deliver production-grade web, SaaS, desktop and mobile applications using MERN, Django, and modern tooling.", icon: <FaServer className="text-[22px] text-[#22d3ee]" /> },
  { title: "02", label: "SaaS & Enterprise Application Development", desc: "Full lifecycle product engineering — from UI/UX design to cloud deployment, maintenance and scaling of enterprise SaaS platforms.", icon: <FaCloudUpload className="text-[22px] text-[#6366f1]" /> },
  { title: "03", label: "ERP & Financial Automation", desc: "Build scalable ERP, MRP, accounting and invoicing systems aligned with FBR, PRAL and tax compliance requirements.", icon: <FaChartColumn className="text-[22px] text-[#f97316]" /> },
  { title: "04", label: "AI Engineering & Intelligent Systems", desc: "Integrate LLM pipelines with LangChain, RAG, and AI-assisted verification into production software. Build intelligent systems that add real utility.", icon: <FaLanguages className="text-[22px] text-[#7c3aed]" /> },
  { title: "05", label: "Software Quality & Security Assessment", desc: "Design deterministic and AI-assisted testing workflows. Convert requirements into verifiable plans. Produce auditable quality gates and evidence.", icon: <FaShieldAlt className="text-[22px] text-[#ef4444]" /> },
  { title: "06", label: "Data Processing & Analytics", desc: "Exploratory Data Analysis, Python pipelines, data modeling, database optimization and insight generation from enterprise datasets.", icon: <FaLanguage className="text-[22px] text-[#14b8a6]" /> },
  { title: "07", label: "API Integration & System Architecture", desc: "Design REST and GraphQL APIs, system integration patterns, webhooks and n8n-powered workflow automations between systems.", icon: <FaCog className="text-[22px] text-[#111111]" /> },
  { title: "08", label: "Deployment & DevOps Fundamentals", desc: "Docker containerization, CI/CD pipelines, cloud deployment (Vercel, Render) and production monitoring for reliable shipments.", icon: <FaUserCheck className="text-[22px] text-[#111111]" /> },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111]"
          >
            Professional Expertise
          </h2>
          <div className="section-line mb-6" />
          <p
            className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto"
          >
            Engineering-focused competencies built from real product experience and system design work.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {competencies.map((c) => (
            <div
              key={c.title}
              className="bento border border-[#e4e4e7] rounded-[6px] overflow-hidden p-6 text-left rise rise-4"
            >
              <div className="flex items-center gap-3 mb-4">
                {c.icon}
                <span className="text-[12px] font-semibold text-[#111111]">{c.title}</span>
              </div>
              <p
                className="text-[#52525B] text-sm leading-relaxed"
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;