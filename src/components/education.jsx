import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[color:var(--bg)]"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111]"
          >
            Education & <span className="gradient-text">Journey</span>
          </h2>
          <div className="section-line mb-8" />
          <p
            className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto"
          >
            Foundational training in computer engineering underpinning my
            enterprise and AI work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="glass border border-[#e4e4e7] rounded-[6px] p-6 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-[6px] bg-[#fafafa] flex items-center justify-center flex-shrink-0">
                <span
                  className="font-mono-tech text-[12px] font-bold text-[#111111]"
                >
                  B.Sc.
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#111111]">B.Sc. Computer Engineering</h3>
                <p className="text-[#52525B] text-sm">
                  UET Lahore | 2024 – Present
                </p>
                <p className="mt-1 text-[#52525B] text-sm">
                  Focused on machine learning, data structures, algorithms, software
                  engineering, database systems and digital design — the foundations
                  behind my enterprise and AI work.
                </p>
              </div>
            </div>
          </div>

          <div
            className="glass border border-[#e4e4e7] rounded-[6px] p-6 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-[6px] bg-[#fafafa] flex items-center justify-center flex-shrink-0">
                <span
                  className="font-mono-tech text-[12px] font-bold text-[#111111]"
                >
                  Dip.
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#111111]">Intermediate</h3>
                <p className="text-[#52525B] text-sm">
                  Punjab Group of Colleges, LHR | 2022 – 2024
                </p>
                <p className="mt-1 text-[#52525B] text-sm">
                  Computer science track with C programming, mathematics and digital
                  design fundamentals.
                </p>
              </div>
            </div>
          </div>

          <div
            className="glass border border-[#e4e4e7] rounded-[6px] p-6 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-[6px] bg-[#fafafa] flex items-center justify-center flex-shrink-0">
                <span
                  className="font-mono-tech text-[12px] font-bold text-[#111111]"
                >
                  Matric.
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#111111]">Matriculation</h3>
                <p className="text-[#52525B] text-sm">
                  New Cantt Public School System, LHR | 2021 – 2022
                </p>
                <p className="mt-1 text-[#52525B] text-sm">
                  Foundation in mathematics, computer science and analytical thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;