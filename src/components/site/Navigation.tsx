'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MarsSigmaMark } from "./Logo";

const NAV_LINKS = [
  { label: "Industries", href: "#industries" },
  { label: "Standards", href: "#constellation" },
  { label: "About", href: "#founder" },
  { label: "Approach", href: "#engine" },
  { label: "Impact", href: "#stories" },
  { label: "Knowledge", href: "#knowledge" },
  { label: "Contact", href: "#footer" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY < 200) {
        setActive("");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-mars-navy-night/80 backdrop-blur-xl border-b border-white/8"
            : "bg-transparent"
        )}
      >
        <nav className="container-mars flex h-[68px] items-center justify-between md:h-[76px]">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5" aria-label="Mars Sigma Solutions home">
            <MarsSigmaMark size={34} className="text-white" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[0.92rem] font-600 tracking-[0.04em] uppercase text-white">
                Mars Sigma
              </span>
              <span className="font-mono-tech text-[0.5rem] tracking-[0.42em] uppercase text-white/45">
                Solutions
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "link-underline relative px-2.5 py-2 text-[0.76rem] font-medium uppercase tracking-[0.1em] transition-colors duration-300 xl:px-3.5 xl:text-[0.8rem] xl:tracking-[0.14em]",
                    active === link.href ? "text-white" : "text-white/55 hover:text-white"
                  )}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-2.5 xl:left-3.5 h-px w-4 bg-mars-red"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right CTA + region */}
          <div className="hidden lg:flex items-center gap-5">
            <span className="font-mono-tech text-[0.6rem] uppercase tracking-[0.3em] text-white/35">
              IN · BH
            </span>
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-mars-navy-night transition-colors duration-300 hover:bg-mars-red hover:text-white"
            >
              Get in Touch
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden group flex flex-col items-end gap-[5px] py-3"
            aria-label="Open menu"
          >
            <span className="block h-px w-7 bg-white/80 transition-all duration-300" />
            <span className="block h-px w-5 bg-white/80 transition-all duration-300" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-mars-navy-night/95 backdrop-blur-2xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-white/10 bg-mars-navy-night flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[68px] border-b border-white/8">
                <MarsSigmaMark size={30} className="text-white" />
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white"
                  aria-label="Close menu"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto custom-scroll">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-baseline justify-between border-b border-white/8 py-4 text-white"
                  >
                    <span className="font-display text-2xl font-500 uppercase tracking-tight">
                      {link.label}
                    </span>
                    <span className="font-mono-tech text-[0.6rem] text-white/30">
                      0{i + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>
              <div className="px-6 py-6 border-t border-white/8 space-y-4">
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-mars-red px-5 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white"
                >
                  Get in Touch →
                </a>
                <p className="font-mono-tech text-[0.6rem] uppercase tracking-[0.28em] text-white/35 text-center">
                  India · Bahrain · Global
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
