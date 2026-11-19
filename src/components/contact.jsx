import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Subtle abstract visual */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ background: "radial-gradient(circle at 20% 80%, rgba(248,113,113,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.08) 0%, transparent 50%)" }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight mb-6">
              Let's <span className="gradient-text">Collaborate</span>
            </h2>
            <p className="text-[#52525B] text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              Have an ERP, SaaS, AI or automation project in mind? Let's build
              it together.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M9 10h6" />
                  <path d="M9 14h6" />
                </svg>
                <span className="text-[#52525B] text-sm">
                  <strong className="text-[#111111]">Email:</strong> m.afaqpak@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13L3 10" />
                  <path d="M21 6L9 18l-9-4 9-4z" />
                </svg>
                <span className="text-[#52525B] text-sm">
                  <strong className="text-[#111111]">Phone:</strong> +92-309-7876497
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#111111] flex-shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13L3 10" />
                  <path d="M21 6L9 18l-9-4 9-4z" />
                  <path d="M13 10v6" />
                  <path d="M3 10l9 6" />
                </svg>
                <span className="text-[#52525B] text-sm">
                  <strong className="text-[#111111]">Github:</strong> github.com/engr-m-afaq-ahmad
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form
              onSubmit={() => setSent(true)}
              className="glass border border-[#e4e4e7] rounded-2xl p-6 sm:p-10"
            >
              <input
                type="hidden"
                name="access_key"
                value="587ebdde-7315-448b-999e-b12c876a6b5c"
              />

              <label className="text-[#52525B] text-sm font-medium uppercase tracking-wider mb-2 block">Name</label>
              <input
                className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-lg text-[#f4f4f5] p-3 my-2 focus:outline-none focus:border-[#ef4444] transition-colors"
                type="text"
                name="name"
                required
                placeholder="Your name"
              />

              <label className="text-[#52525B] text-sm font-medium uppercase tracking-wider mb-2 block">Email</label>
              <input
                className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-lg text-[#f4f4f5] p-3 my-2 focus:outline-none focus:border-[#ef4444] transition-colors"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
              />

              <label className="text-[#52525B] text-sm font-medium uppercase tracking-wider mb-2 block">Phone</label>
              <input
                className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-lg text-[#f4f4f5] p-3 my-2 focus:outline-none focus:border-[#ef4444] transition-colors"
                type="tel"
                name="phone"
                placeholder="+92 ..."
              />

              <label className="text-[#52525B] text-sm font-medium uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-lg text-[#f4f4f5] p-3 my-2 resize-h focus:outline-none focus:border-[#ef4444] transition-colors"
                name="message"
                required
                placeholder="Tell me about your project..."
                rows="4"
              ></textarea>

              <button
                className="w-full bg-gradient-to-r from-[#ef4444] to-[#f97316] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                type="submit"
              >
                Send Message
              </button>
            </form>

            {sent ? (
              <div className="mt-6 text-center">
                <p className="text-[#ef4444] text-lg font-medium">✅ Message Sent!</p>
                <p className="text-[#52525B] text-sm mt-1">Thanks for reaching out — I'll get back to you shortly.</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;