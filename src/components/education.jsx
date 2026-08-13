import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Education & <span className="gradient-text">Journey</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="space-y-8">
          <div className="glass border-[#8245ec] border-2 rounded-2xl p-6 hover:shadow-[0_10px_40px_rgba(130,69,236,0.2)] transition duration-300 flex gap-5">
            <FaGraduationCap className="text-3xl text-[#a78bfa] shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white">
                B.Sc. Computer Engineering
              </h3>
              <p className="text-sm text-gray-400">UET Lahore | 2024 – Present</p>
              <p className="mt-2 text-gray-400 text-sm">
                Focused on machine learning, data structures, algorithms,
                software engineering, database systems and digital design —
                the foundations behind my enterprise and AI work.
              </p>
            </div>
          </div>

          <div className="glass border-[#8245ec] border-2 rounded-2xl p-6 hover:shadow-[0_10px_40px_rgba(130,69,236,0.2)] transition duration-300 flex gap-5">
            <FaGraduationCap className="text-3xl text-[#a78bfa] shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white">Intermediate</h3>
              <p className="text-sm text-gray-400">
                Punjab Group of Colleges, LHR | 2022 – 2024
              </p>
              <p className="mt-2 text-gray-400 text-sm">
                Computer science track with C programming, mathematics and
                digital design fundamentals.
              </p>
            </div>
          </div>

          <div className="glass border-[#8245ec] border-2 rounded-2xl p-6 hover:shadow-[0_10px_40px_rgba(130,69,236,0.2)] transition duration-300 flex gap-5">
            <FaGraduationCap className="text-3xl text-[#a78bfa] shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white">Matriculation</h3>
              <p className="text-sm text-gray-400">
                New Cantt Public School System, LHR | 2021 – 2022
              </p>
              <p className="mt-2 text-gray-400 text-sm">
                Foundation in mathematics, computer science and analytical
                thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;