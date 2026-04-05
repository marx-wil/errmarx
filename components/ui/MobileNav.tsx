"use client";

import { useState, useEffect } from "react";

const items = [
  {
    label: "INIT",
    href: "#hero",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zM6 10l2 2-2 2 1.4 1.4L11 12 7.4 8.6 6 10zm5 4h6v-1.5h-6V14z" />
      </svg>
    ),
  },
  {
    label: "CORE",
    href: "#about",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
  },
  {
    label: "VAULT",
    href: "#projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
      </svg>
    ),
  },
  {
    label: "SIGNAL",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 12c0-3.31-2.69-6-6-6v2c2.21 0 4 1.79 4 4s-1.79 4-4 4v2c3.31 0 6-2.69 6-6zm5.66-6.72l-1.41 1.41C17.98 7.93 19 9.84 19 12s-1.02 4.07-2.76 5.31l1.41 1.41C19.83 17.13 21 14.69 21 12s-1.17-5.13-3.34-6.72z" />
      </svg>
    ),
  },
];

export default function MobileNav() {
  const [active, setActive] = useState("INIT");

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = items.find(
              (n) => n.href === `#${entry.target.id}`
            )?.label;
            if (label) setActive(label);
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
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
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/95 backdrop-blur-xl border-t border-white/5 flex justify-around items-center h-16 px-4 z-50">
      {items.map((item) => {
        const isActive = active === item.label;
        return (
          <button
            key={item.label}
            onClick={() => handleNav(item.label, item.href)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? "text-primary" : "text-on-surface/40"
            }`}
          >
            {item.icon}
            <span className="text-[9px] font-mono tracking-widest">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
