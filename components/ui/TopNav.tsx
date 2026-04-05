"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "INIT", href: "#hero" },
  { label: "CORE", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "VAULT", href: "#projects" },
  { label: "TERMINAL", href: "#contact" },
];

export default function TopNav() {
  const [active, setActive] = useState("INIT");
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

      </nav>
    </>
  );
}
