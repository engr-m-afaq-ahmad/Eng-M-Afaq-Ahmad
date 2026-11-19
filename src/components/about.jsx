import React from "react";
import { Link } from "react-router-dom";
import TiltCard from "./TiltCard";
import {
  FaReact,
  FaPython,
  FaSass,
  FaDesktop,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";
import { SiDjango, SiMongodb, SiPostgresql, SiDocker, SiLangchain } from "react-icons/si";

const focusAreas = [
  {
    icon: <FaFileInvoiceDollar />,
    title: "FBR / PRAL Digital Invoicing",
    text: "Compliance-driven digital invoicing systems designed for the FBR & PRAL ecosystem.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "High-Scale Accounting",
    text: "Enterprise accounting software built for volume, accuracy and multi-entity operations.",
  },
  {
    icon: <FaUsers />,
    title: "Industry HR Platforms",
    text: "High-scale, industry-based HR management systems with payroll, attendance & analytics.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111]"
          >
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line mb-6" />
          <p
            className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto"
          >
            I'm a Computer Engineer and Full-Stack Developer building enterprise-grade
            SaaS products, ERP systems, financial automation platforms and AI-assisted
            quality engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Focus areas */}
          <div className="rise rise-2">
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4"
            >
              Product Focus
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {focusAreas.map((f) => (
                <TiltCard
                  key={f.title}
                  maxTilt={6}
                  className="border border-[#e4e4e7] rounded-[6px] glass p-5 text-center"
                >
                  <div className="text-3xl gradient-text mb-2">{f.icon}</div>
                  <h4
                    className="text-sm font-semibold text-[#111111] mb-1"
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-sm text-[#52525B]"
                  >
                    {f.text}
                  </p>
                </TiltCard>
              ))}
            </div>
            <Link
              to="#contact"
              className="inline-block mt-6 px-6 py-3 rounded-full border border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-[#111111] font-semibold transition-all"
            >
              Let's Work Together
            </Link>
          </div>

          {/* Professional timeline */}
          <div className="rise rise-3 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ef4444] flex items-center justify-center flex-shrink-0">
                <span
                  className="font-mono-tech text-[11px] font-bold text-white"
                >
                  2021
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#111111]">Full-Stack Product Engineering</h3>
                <p className="text-[#52525B] text-sm">
                  Built four enterprise-grade products serving regulated industries,
                  handling thousands of daily transactions and compliance workflows.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[6px] bg-[#111111] flex items-center justify-center flex-shrink-0">
                <span
                  className="font-mono-tech text-[11px] font-bold text-white"
                >
                  2022
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#111111]">ERP & Financial Automation</h3>
                <p className="text-[#52525B] text-sm">
                  Designed FBR/PRA digital invoicing, large-scale accounting and HR
                  platforms with multi-entity support and role-based access.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#14b8a6] flex items-center justify-center flex-shrink-0">
                <span
                  className="font-mono-tech text-[11px] font-bold text-white"
                >
                  2023
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#111111]">AI & Quality Engineering</h3>
                <p className="text-[#52525B] text-sm">
                  Integrated LangChain pipelines, AI-assisted verification and
                  evidence-based quality gates into production systems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[6px] bg-[#7c3aed] flex items-center justify-center flex-shrink-0">
                <span
                  className="font-mono-tech text-[11px] font-bold text-white"
                >
                  2024
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#111111]">SaaS & Enterprise Scale</h3>
                <p className="text-[#52525B] text-sm">
                  Delivering production-grade platforms on Vercel and Docker with
                  CI/CD, monitoring and maintainable architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;