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
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div
        className="glow-orb w-[380px] h-[380px] top-10 -right-24"
        style={{ background: "rgba(34,211,238,0.14)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <TiltCard className="md:w-[40%] w-full max-w-sm border-2 border-[#8245ec] rounded-2xl overflow-hidden glass">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHfblsCn4oBJw/profile-displayphoto-shrink_200_200/B4DZb6jU4RHEAY-/0/1747960290876?e=2147483647&v=beta&t=oKhv_j3bHtHy_H5ffGqH62PzwjD1oIHE_M0V_9Wg3KE"
              alt="M Afaq Ahmad"
              className="w-full h-auto rounded-2xl"
            />
          </TiltCard>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              AI Engineer & ERP/MRP Solutions Architect
            </h3>
            <p className="text-gray-400 mb-4">
              I design and ship high-scale digital products end-to-end — from
              clean frontends to hardened backends, from database modeling to
              deployment. My work spans Web apps, SaaS platforms, Mobile and
              Desktop applications, CRM, and full ERP / MRP solutions serving
              regulated industries.
            </p>
            <p className="text-gray-400 mb-6">
              I'm the designer behind four enterprise-grade products: FBR &
              PRAL digital invoicing, large-scale accounting software,
              industry-based HR management, and AI-integrated automation. I
              build with the MERN stack, Django & Django REST Framework,
              LangChain, PostgreSQL, MongoDB and SQL, automate pipelines with
              n8n, and deploy through Docker, Render, cPanel and Vercel.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {focusAreas.map((f) => (
                <TiltCard
                  key={f.title}
                  maxTilt={6}
                  className="border border-[#8245ec]/50 rounded-xl glass p-4 text-center"
                >
                  <div className="text-3xl gradient-text mb-2">{f.icon}</div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {f.title}
                  </h4>
                  <p className="text-xs text-gray-400">{f.text}</p>
                </TiltCard>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-3xl text-gray-300 mb-8">
              <FaReact className="text-[#22d3ee]" title="React" />
              <SiDjango className="text-[#44b78b]" title="Django" />
              <FaPython className="text-[#f7c548]" title="Python" />
              <SiMongodb className="text-[#47a248]" title="MongoDB" />
              <SiPostgresql className="text-[#336791]" title="PostgreSQL" />
              <FaSass title="Sass / CSS" />
              <SiDocker className="text-[#2496ed]" title="Docker" />
              <SiLangchain className="text-[#22d3ee]" title="LangChain" />
              <FaDesktop title="Desktop Apps" />
            </div>

            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full border border-[#8245ec] text-[#a78bfa] hover:bg-white hover:text-[#8245ec] font-semibold transition duration-300"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;