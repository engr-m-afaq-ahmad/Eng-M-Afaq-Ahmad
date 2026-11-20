import React, { useState } from "react";
import { FiMail, FiPhone, FiGithub, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const contactItems = [
  {
    label: "Email",
    value: "m.afaqpak@gmail.com",
    href: "mailto:m.afaqpak@gmail.com",
    icon: FiMail,
    color: "#ef4444",
  },
  {
    label: "Phone",
    value: "+92-309-7876497",
    href: "tel:+923097876497",
    icon: FiPhone,
    color: "#2563eb",
  },
  {
    label: "Github",
    value: "github.com/engr-m-afaq-ahmad",
    href: "https://github.com/engr-m-afaq-ahmad",
    icon: FiGithub,
    color: "#6366f1",
  },
];

const inputClass =
  "w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3.5 text-base text-[color:var(--text)] placeholder:text-[color:var(--muted)] outline-none transition-all duration-200 focus:border-[color:var(--red)] focus:bg-[color:var(--bg)] focus:ring-4 focus:ring-[color:var(--red)]/10";

const labelClass =
  "block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-2)] mb-2";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 15% 80%, rgba(239,68,68,0.10) 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(37,99,235,0.10) 0%, transparent 45%)",
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <p className="section-label mb-4">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[color:var(--text)] leading-[1.05] mb-6">
              Let's <span className="gradient-text">Collaborate</span>
            </h2>
            <p className="text-[color:var(--text-2)] text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
              Have an ERP, SaaS, AI or automation project in mind? Let's build
              something reliable, scalable and production-ready together.
            </p>

            <div className="space-y-3 max-w-md">
              {contactItems.map(({ label, value, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/70 p-4 transition-all duration-200 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--bg)] hover:shadow-[0_18px_40px_-32px_rgba(17,17,17,0.45)]"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: `${color}14`, color }}
                  >
                    {React.createElement(Icon, { size: 20 })}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                      {label}
                    </span>
                    <span className="block truncate text-[color:var(--text)] text-sm sm:text-base font-medium">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal-scale">
            {sent ? (
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] p-10 sm:p-14 text-center shadow-[0_30px_70px_-50px_rgba(17,17,17,0.5)]">
                <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--red)]/10 text-[color:var(--red)]">
                  <FiCheckCircle size={34} />
                </span>
                <h3 className="text-2xl font-bold text-[color:var(--text)] mb-2">
                  Message Sent
                </h3>
                <p className="text-[color:var(--text-2)] text-sm sm:text-base max-w-sm mx-auto">
                  Thanks for reaching out — I'll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm font-semibold text-[color:var(--text)] underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] p-6 sm:p-9 shadow-[0_30px_70px_-50px_rgba(17,17,17,0.5)]"
              >
                <div className="mb-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-[color:var(--text)]">
                    Start a project
                  </h3>
                  <p className="text-[color:var(--muted)] text-sm mt-1.5">
                    Tell me a little about what you need.
                  </p>
                </div>

                <input
                  type="hidden"
                  name="access_key"
                  value="587ebdde-7315-448b-999e-b12c876a6b5c"
                />

                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      className={inputClass}
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      className={inputClass}
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className={labelClass}>
                      Phone <span className="text-[color:var(--muted)] normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      className={inputClass}
                      type="tel"
                      name="phone"
                      placeholder="+92 ..."
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      className={`${inputClass} resize-none`}
                      name="message"
                      required
                      placeholder="Tell me about your project..."
                      rows="5"
                    ></textarea>
                  </div>
                </div>

                <button
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ef4444] to-[#f97316] px-6 py-4 text-base font-semibold text-white shadow-[0_16px_35px_-18px_rgba(239,68,68,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_45px_-18px_rgba(239,68,68,0.85)] focus:outline-none focus:ring-4 focus:ring-[color:var(--red)]/25"
                  type="submit"
                >
                  Send Message
                  <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
