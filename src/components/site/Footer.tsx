'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { MarsSigmaMark } from "./Logo";

const COLUMNS = [
  {
    title: "Services",
    links: ["ISO 9001 QMS", "AS9100 Aerospace", "IATF 16949 Automotive", "Lean Six Sigma", "Supplier Development", "Third-Party Inspection"],
  },
  {
    title: "Industries",
    links: ["Aerospace", "Automotive", "Manufacturing", "Medical Devices", "Engineering", "Electronics"],
  },
  {
    title: "Resources",
    links: ["Knowledge Center", "Case Studies", "Whitepapers", "Certification Guides", "Templates", "Industry Updates"],
  },
  {
    title: "Training",
    links: ["Lead Auditor", "Lean Six Sigma", "Operational Excellence", "Quality Systems", "Industry Programs", "Corporate Training"],
  },
  {
    title: "Company",
    links: ["About", "Our Approach", "Founder", "Careers", "Contact", "Get in Touch"],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <footer id="footer" className="relative overflow-hidden bg-mars-navy-night border-t border-white/8">
      <div className="absolute inset-0 bg-blueprint-grid opacity-20" aria-hidden />

      {/* Top: brand + contact CTA */}
      <div className="container-mars relative pt-20 pb-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <MarsSigmaMark size={40} className="text-white" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-600 tracking-[0.04em] uppercase text-white">
                  Mars Sigma
                </span>
                <span className="font-mono-tech text-[0.55rem] tracking-[0.42em] uppercase text-white/45">
                  Solutions
                </span>
              </span>
            </div>
            <p className="mt-8 font-display text-2xl font-600 uppercase leading-tight tracking-tight text-white md:text-3xl">
              Operational Excellence.
              <span className="block text-mars-red">Global Impact.</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Turning global standards into operational advantage — across
              aerospace, automotive, manufacturing, and beyond.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              {submitted ? (
                <p className="font-mono-tech text-[0.6rem] uppercase tracking-[0.2em] text-mars-cyan">
                  ✓ Thank you — we&rsquo;ll be in touch.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex max-w-sm items-center gap-2 border-b border-white/15 pb-2 focus-within:border-mars-red transition-colors">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email for insights"
                    aria-label="Email address"
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                  />
                  <button type="submit" className="group flex items-center gap-1 text-xs font-medium uppercase tracking-[0.12em] text-white/70 hover:text-white">
                    Subscribe
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
              {COLUMNS.map((col) => (
                <div key={col.title}>
                  <h3 className="font-mono-tech text-[0.55rem] uppercase tracking-[0.24em] text-white/40">
                    {col.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="link-underline text-sm text-white/65 transition-colors duration-300 hover:text-white"
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Locations row */}
        <div className="mt-16 grid gap-6 border-t border-white/8 pt-10 md:grid-cols-3">
          <div>
            <h4 className="font-mono-tech text-[0.55rem] uppercase tracking-[0.24em] text-mars-red">
              / India Operations
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Serving aerospace, automotive, and manufacturing clients across
              the Indian industrial corridor.
            </p>
          </div>
          <div>
            <h4 className="font-mono-tech text-[0.55rem] uppercase tracking-[0.24em] text-mars-red">
              / Bahrain Office
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Regional hub supporting GCC industrial and regulatory engagement
              across the Middle East.
            </p>
          </div>
          <div>
            <h4 className="font-mono-tech text-[0.55rem] uppercase tracking-[0.24em] text-mars-red">
              / Global Delivery
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Engagement models for multi-site, cross-border operational
              excellence programs.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 bg-mars-navy-deep/40">
        <div className="container-mars flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="font-mono-tech text-[0.55rem] uppercase tracking-[0.2em] text-white/40">
            © {new Date().getFullYear()} Mars Sigma Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono-tech text-[0.55rem] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="font-mono-tech text-[0.55rem] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white">
              Terms
            </a>
            <div className="flex items-center gap-3">
              {["LI", "X", "in", "Yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-7 w-7 place-items-center rounded-full border border-white/12 text-[0.55rem] text-white/45 transition-colors hover:border-white/40 hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
