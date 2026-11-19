import React from "react";
import { Link } from "react-router-dom";
import TiltCard from "./TiltCard";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Abstract technical visual */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 80%, rgba(248,113,113,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.08) 0%, transparent 50%)" }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-[#52525B] text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              I'm a Computer Engineer and Full-Stack Developer building enterprise-grade
              SaaS products, ERP systems, financial automation platforms and AI-assisted
              quality engineering solutions. I specialize in building scalable software
              products, enterprise platforms, financial automation systems, and
              intelligent quality engineering solutions.
            </p>
          </div>

          {/* Profile card */}
          <div className="relative">
            <img
              src="/assets/afaq.jpg"
              alt="M Afaq Ahmad — profile photo"
              className="w-full h-[400px] object-cover rounded-2xl border-2 border-[var(--border)] lg:h-auto sm:h-[300px]"
              loading="lazy"
            />
            <div
              className="absolute -bottom-6 -right-6 lg:bottom-0 lg:right-0 bg-[#0a0a0c] border border-[#27272a] rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-[#111111] mb-2">M Afaq Ahmad</h3>
              <p className="text-[#52525B] text-sm"><strong className="text-[#111111]">Role:</strong> Computer Engineer & Full-Stack Developer</p>
              <p className="text-[#52525B] text-sm"><strong className="text-[#111111]">Location:</strong> Lahore, Pakistan</p>
              <div className="mt-4 space-y-2">
                <a
                  href="https://github.com/engr-m-afaq-ahmad"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#ef4444]/30 text-[#ef4444] text-sm font-medium hover:border-[#ef4444] hover:text-[#111111] transition-colors"
                >
                  Github
                </a>
                <a
                  href="https://linkedin.com/in/engr-m-afaq-ahmad"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#2563eb]/30 text-[#2563eb] text-sm font-medium hover:border-[#2563eb] hover:text-[#111111] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats / Competencies */}
        <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-6">
          {/* Skills */}
          <div className="rise rise-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6">Core Competencies</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#0a0a0c] border border-[#27272a] rounded-lg p-4">
                <h4 className="text-lg font-bold text-[#111111] mb-3">AI Engineering</h4>
                <div className="h-2 bg-red-600 rounded-full" style={{ width: "75%" }} aria-hidden="true" />
                <p className="text-[#52525B] text-xs mt-2">Quality engineering, AI-assisted testing, verification gates</p>
              </div>
              <div className="bg-[#0a0a0c] border border-[#27272a] rounded-lg p-4">
                <h4 className="text-lg font-bold text-[#111111] mb-3">Full-Stack Development</h4>
                <div className="h-2 bg-[#111111] rounded-full" style={{ width: "90%" }} aria-hidden="true" />
                <p className="text-[#52525B] text-xs mt-2">MERN, Django, React, Vue, production deployment</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0a0a0c] border border-[#27272a] rounded-lg p-4">
                <h4 className="text-lg font-bold text-[#111111] mb-3">ERP & Financial Systems</h4>
                <div className="h-2 bg-[#ef4444] rounded-full" style={{ width: "70%" }} aria-hidden="true" />
                <p className="text-[#52525B] text-xs mt-2">FBR/PRA invoicing, accounting, compliance platforms</p>
              </div>
              <div className="bg-[#0a0a0c] border border-[#27272a] rounded-lg p-4">
                <h4 className="text-lg font-bold text-[#111111] mb-3">SaaS & Product</h4>
                <div className="h-2 bg-[#14b8a6] rounded-full" style={{ width: "80%" }} aria-hidden="true" />
                <p className="text-[#52525B] text-xs mt-2">SaaS products, VPS/cloud deployment, Docker</p>
              </div>
            </div>
            <div className="bg-[#0a0a0c] border border-[#27272a] rounded-lg p-4">
              <h4 className="text-lg font-bold text-[#111111] mb-3">Web & Operations</h4>
              <div className="h-2 bg-[#2563eb] rounded-full" style={{ width: "75%" }} aria-hidden="true" />
              <p className="text-[#52525B] text-xs mt-2">Web development, Vercel, CI/CD, system operations</p>
            </div>
          </div>

          {/* Tools */}
          <div className="rise rise-3 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">Development Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-md border border-[#e4e4e7]/30 text-[#52525B] text-xs font-medium">React</span>
              <span className="px-3 py-1.5 rounded-md border border-[#e4e4e7]/30 text-[#52525B] text-xs font-medium">Node.js</span>
              <span className="px-3 py-1.5 rounded-md border border-[#e4e4e7]/30 text-[#52525B] text-xs font-medium">Django</span>
              <span className="px-3 py-1.5 rounded-md border border-[#e4e4e7]/30 text-[#52525B] text-xs font-medium">Python</span>
              <span className="px-3 py-1.5 rounded-md border border-[#e4e4e7]/30 text-[#52525B] text-xs font-medium">Docker</span>
              <span className="px-3 py-1.5 rounded-md border border-[#e4e4e7]/30 text-[#52525B] text-xs font-medium">Vercel</span>
              <span className="px-3 py-1.5 rounded-md border border-[#e4e4e7]/30 text-[#52525B] text-xs font-medium">Tailwind CSS</span>
              <span className="px-3 py-1.5 rounded-md border border-[#e4e4e7]/30 text-[#52525B] text-xs font-medium">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;