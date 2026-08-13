import React from "react";
import TiltCard from "./TiltCard";
import {
  FaGlobe,
  FaCloud,
  FaMobileAlt,
  FaDesktop,
  FaBuilding,
  FaUsers,
  FaRobot,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe />,
    title: "Web & SaaS Development",
    text: "Production-grade web applications and SaaS platforms built on MERN and Django — responsive, secure and ready to scale.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    text: "Cross-platform mobile applications with clean architecture, API integration, offline support and app-store readiness.",
  },
  {
    icon: <FaDesktop />,
    title: "Desktop Applications",
    text: "Native-feel desktop software for Windows and Linux — inventory, invoicing, reporting and business tools.",
  },
  {
    icon: <FaBuilding />,
    title: "ERP / MRP Solutions",
    text: "End-to-end ERP and MRP systems: inventory, production planning, procurement, BOM and multi-branch operations.",
  },
  {
    icon: <FaUsers />,
    title: "CRM Platforms",
    text: "Custom CRM solutions for sales pipelines, customer history, lead scoring, analytics and team collaboration.",
  },
  {
    icon: <FaRobot />,
    title: "AI & ML Solutions",
    text: "Machine learning models, LLM applications with LangChain, RAG pipelines and intelligent automation for business process.",
  },
  {
    icon: <FaCogs />,
    title: "Workflow Automation",
    text: "n8n-powered automations connecting your apps — invoicing, HR and accounting workflows that run themselves.",
  },
  {
    icon: <FaCloud />,
    title: "DevOps & Deployment",
    text: "Docker containerization plus deployment on Render, cPanel and Vercel with CI/CD, monitoring and maintenance.",
  },
];

const Service = () => {
  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div
        className="glow-orb w-[400px] h-[400px] top-10 -right-32"
        style={{ background: "rgba(130,69,236,0.15)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          What I <span className="gradient-text">Deliver</span>
        </h2>
        <div className="section-line" />
        <p className="text-gray-400 mt-4 mb-14 max-w-2xl mx-auto">
          Services I provide as an AI Engineer & ERP/MRP Solutions Architect —
          from a single module to a complete enterprise product.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {services.map((s) => (
            <TiltCard
              key={s.title}
              maxTilt={9}
              zDepth={24}
              className="border-2 border-[#8245ec]/50 rounded-2xl glass p-6 hover:border-[#22d3ee]/60 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)]"
            >
              <div className="text-4xl gradient-text mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.text}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;