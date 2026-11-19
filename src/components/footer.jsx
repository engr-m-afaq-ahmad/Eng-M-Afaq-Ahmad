import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="border-t border-[#e4e4e7] py-8 relative bg-[#fafafa]"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="text-[#111111]">
            <h2 className="text-xl mb-2 font-bold">
              <span className="text-[#ef4444]">/</span>
              <span className="gradient-text">Afaq Ahmad</span>
              <span className="text-[#ef4444]">.dev</span>
            </h2>
            <p className="text-[#71717A] text-sm">
              AI Engineer & ERP/MRP Solutions Architect — building enterprise
              products that scale.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-[#71717A]">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-[#ef4444] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#ef4444] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className="hover:text-[#ef4444] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#ef4444] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="text-[#71717A]">
            <h3 className="text-lg font-semibold mb-2">Expertise</h3>
            <ul className="space-y-1 text-sm">
              <li>ERP / MRP Systems</li>
              <li>FBR & PRAL Invoicing</li>
              <li>Accounting & HR Software</li>
              <li>AI / LangChain</li>
              <li>MERN + Django Full-Stack</li>
              <li>DevOps: Docker · Vercel</li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-[#71717A]">
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex gap-3 text-lg">
              <a
                href="https://www.linkedin.com/in/engmuhammad-afaq-ahmad-684b36354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ef4444] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/engr-m-afaq-ahmad"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ef4444] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-8 text-center text-sm text-[#71717A] border-t border-[#e4e4e7] pt-4"
        >
          © {new Date().getFullYear()} Afaq Ahmad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;