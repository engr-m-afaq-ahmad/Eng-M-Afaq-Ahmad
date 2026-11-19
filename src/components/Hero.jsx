import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]"
    >
      {/* Visor visual */}
      <div className="visor" aria-hidden="true">
        <div className="visor-scan" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto text-center">
        <h1
          className="mt-4 text-5xl lg:text-7xl font-extrabold tracking-tight rise"
        >
          ENGINEERING DIGITAL SYSTEMS.
        </h1>

        <p
          className="mt-6 text-lg lg:text-xl text-[#52525B] max-w-3xl lg:mx-auto rise rise-1 leading-relaxed"
        >
          I build scalable software products, enterprise platforms,
          financial automation systems, and intelligent quality
          engineering solutions.
        </p>

        <div className="mt-8 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start rise rise-2">
          <Link
            href="#projects"
            className="btn-outline px-6 py-3 rounded-full text-[#111111] hover:text-[#ef4444] transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#expertise"
            className="btn-dark px-6 py-3 rounded-full text-[#111111] hover:bg-[#ef4444] transition-colors"
          >
            Expertise
          </Link>
        </div>

        {/* GitHub profile CTA */}
        <div className="mt-8 text-xs text-[#71717A] rise rise-3">
          GitHub: <a
            href="https://github.com/engr-m-afaq-ahmad"
            target="_blank"
            rel="noreferrer"
            className="text-[#ef4444] hover:underline"
          >
            github.com/engr-m-afaq-ahmad
          </a>
        </div>
      </div>

      {/* Profile photo */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-10 lg:right-20"
      >
        <img
          src="/assets/afaq.jpg"
          alt="M Afaq Ahmad — profile photo"
          className="w-48 h-48 object-cover rounded-full border-2 border-[var(--border)]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;