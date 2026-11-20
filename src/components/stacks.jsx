import React from "react";
import { techGroups } from "../data/techGroups";

const Stack = () => {
  return (
    <section id="stack" className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">01 / Capability Matrix</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[color:var(--text)]">TECH <span className="text-[color:var(--muted)]">STACK.</span></h2>
          <p className="text-[color:var(--text-2)] text-base sm:text-lg max-w-2xl mx-auto mt-5">Industry-standard tools across the full software lifecycle—from product design to production operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {techGroups.map((group, index) => (
            <article
              key={group.title}
              className="stack-card group relative p-6 sm:p-8 overflow-hidden reveal-scale"
              style={{ "--reveal-delay": `${(index % 3) * 80}ms` }}
            >
              <span
                className="absolute left-0 top-0 h-full w-1.5 opacity-80"
                style={{ background: group.color }}
              />

              <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-[var(--border)]">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="h-3.5 w-3.5 rounded-[4px] shrink-0"
                    style={{ background: group.color }}
                  />
                  <h3 className="font-bold text-[color:var(--text)] text-base sm:text-lg leading-snug">
                    {group.title}
                  </h3>
                </div>
                <span className="font-mono-tech text-xs text-[var(--muted)] shrink-0">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.tags.map((tag) => (
                  <span key={tag} className="tech-badge tech-badge-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
