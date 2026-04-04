"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "INIT", href: "#hero" },
  { label: "CORE", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "VAULT", href: "#projects" },
  { label: "TERMINAL", href: "#contact" },
];

export default function TopNav() {
  const [active, setActive] = useState("INIT");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = navLinks.find(
              (n) => n.href === `#${entry.target.id}`
            )?.label;
            if (label) setActive(label);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 h-20 flex justify-between items-center px-8 transition-all duration-500 ${
          scrolled
            ? "bg-surface-container-lowest/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Brand */}
        <div className="text-xl font-headline font-bold tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(0,210,255,0.5)]">
          WILMARX.SYS
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className={`font-headline text-xs tracking-widest uppercase transition-all duration-300 relative group ${
                active === link.label
                  ? "text-primary"
                  : "text-on-surface/50 hover:text-primary"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary-container transition-all duration-300 ${
                  active === link.label ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}

          <button
            onClick={() => handleNav("TERMINAL", "#contact")}
            className="ml-4 px-5 py-2 border border-primary/30 text-primary font-headline text-xs tracking-widest uppercase hover:bg-primary/10 transition-all duration-300"
          >
            CONNECT
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-on-surface/60 hover:text-primary transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {mobileOpen ? (
              <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            ) : (
              <>
                <rect y="4" width="20" height="1.5" rx="1" />
                <rect y="9.25" width="20" height="1.5" rx="1" />
                <rect y="14.5" width="20" height="1.5" rx="1" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.label, link.href)}
                  className={`px-8 py-4 font-headline text-xs tracking-widest uppercase text-left transition-colors ${
                    active === link.label
                      ? "text-primary bg-primary/5"
                      : "text-on-surface/50 hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
