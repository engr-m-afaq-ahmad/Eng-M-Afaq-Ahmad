import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden grid-bg">
      <div
        className="glow-orb w-[380px] h-[380px] -top-20 right-1/4"
        style={{ background: "rgba(130,69,236,0.18)" }}
      />
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-400 mt-4">
            Have an ERP, SaaS, AI or automation project in mind? Let's build
            it.
          </p>
        </div>

        {sent ? (
          <div className="glass border-[#8245ec] border-2 rounded-2xl p-10 text-center">
            <p className="text-5xl mb-4">✅</p>
            <h3 className="text-xl font-bold text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-400">
              Thanks for reaching out — I'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={() => setSent(true)}
            className="glass border-[#8245ec] border-2 rounded-2xl p-6 sm:p-10 flex flex-col"
          >
            <input
              type="hidden"
              name="access_key"
              value="587ebdde-7315-448b-999e-b12c876a6b5c"
            />

            <label className="text-gray-300 text-sm font-medium">Name</label>
            <input
              className="bg-[#050414] border border-[#8245ec] rounded-lg text-gray-300 p-3 my-2 focus:outline-none focus:border-[#22d3ee] transition-colors"
              type="text"
              name="name"
              required
              placeholder="Your name..."
            />

            <label className="text-gray-300 text-sm font-medium">Email</label>
            <input
              className="bg-[#050414] border border-[#8245ec] rounded-lg text-gray-300 p-3 my-2 focus:outline-none focus:border-[#22d3ee] transition-colors"
              type="email"
              name="email"
              required
              placeholder="you@company.com"
            />

            <label className="text-gray-300 text-sm font-medium">Phone</label>
            <input
              className="bg-[#050414] border border-[#8245ec] rounded-lg text-gray-300 p-3 my-2 focus:outline-none focus:border-[#22d3ee] transition-colors"
              type="tel"
              name="phone"
              placeholder="+92 ..."
            />

            <label className="text-gray-300 text-sm font-medium">Message</label>
            <textarea
              className="bg-[#050414] border border-[#8245ec] rounded-lg text-gray-300 p-3 my-2 h-36 focus:outline-none focus:border-[#22d3ee] transition-colors"
              name="message"
              required
              placeholder="Tell me about your project..."
            ></textarea>

            <button className="mt-6 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8245ec] to-[#22d3ee] hover:shadow-[0_0_30px_rgba(130,69,236,0.55)] transition duration-300 self-center">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;