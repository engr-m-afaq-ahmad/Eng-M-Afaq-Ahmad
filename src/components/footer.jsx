import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#8245ec] py-10 relative overflow-hidden">
      <div className="glow-orb w-[300px] h-[300px] -bottom-40 left-1/3" style={{ background: "rgba(130,69,236,0.14)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="text-gray-300">
            <h2 className="text-xl mb-2 font-bold">
              <span className="text-[#8245ec]">/</span>
              <span className="gradient-text">Afaq Ahmad</span>
              <span className="text-[#8245ec]">.dev</span>
            </h2>
            <p className="text-sm text-gray-400">
              AI Engineer & ERP/MRP Solutions Architect — building enterprise
              products that scale.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-gray-300">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-[#a78bfa]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#a78bfa]">About</Link></li>
              <li><Link to="/work" className="hover:text-[#a78bfa]">Products</Link></li>
              <li><Link to="/service" className="hover:text-[#a78bfa]">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#a78bfa]">Contact</Link></li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="text-gray-300">
            <h3 className="text-lg font-semibold mb-2">Expertise</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>ERP / MRP Systems</li>
              <li>FBR & PRAL Invoicing</li>
              <li>Accounting & HR Software</li>
              <li>AI / ML & LangChain</li>
              <li>MERN + Django Full-Stack</li>
              <li>DevOps: Docker · Render · Vercel</li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-gray-300">
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/engmuhammad-afaq-ahmad-684b36354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#a78bfa] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Afaqhions"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#a78bfa] transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/muhammadafaqpoet?igsh=dnAzcWprd3E1YTJq"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#a78bfa] transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#8245ec] pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Afaq Ahmad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;