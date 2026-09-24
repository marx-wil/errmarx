"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Selected work", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen flex-col overflow-hidden border-b border-border bg-background px-page"
    >
      <header className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between border-b border-border">
        <a href="#hero" aria-label="Stappl, home" className="inline-flex items-center">
          <img
            src="/stappl-logo.png"
            alt="Stappl"
            className="h-8 w-auto"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden border-b border-accent pb-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent md:inline-block"
          >
            Get in touch
          </a>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm font-medium text-foreground md:hidden"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-x-0 top-20 z-30 border-b border-border bg-background/95 px-page py-6 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <li key={item.href} className="border-b border-border">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-14 items-center justify-between text-base text-foreground"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-muted">
                      ↓
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-6">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-12 items-center justify-center rounded-card bg-accent px-6 py-3 text-sm font-semibold text-background"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 py-section lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="max-w-4xl">
          <motion.p
            {...entrance(0.05)}
            className="mb-6 text-sm font-medium tracking-[0.08em] text-accent"
          >
            Chief Information Officer at Stappl Inc.
          </motion.p>

          <motion.h1
            id="hero-title"
            {...entrance(0.12)}
            className="font-headline text-display font-semibold text-foreground"
          >
            Wilmarx
          </motion.h1>

          <motion.p
            {...entrance(0.2)}
            className="mt-8 max-w-3xl text-lead text-foreground"
          >
            Systems architect focused on backend platforms that remain stable,
            scalable, and recoverable as complexity grows.
          </motion.p>

          <motion.p
            {...entrance(0.28)}
            className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8"
          >
            I define clear boundaries, data flows, and operational constraints
            so teams can build with confidence and systems can behave
            predictably under pressure.
          </motion.p>

          <motion.div
            {...entrance(0.36)}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-card bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors duration-200 hover:bg-accent-hover"
            >
              View selected work
            </a>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center px-2 py-3 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              Learn more about my approach
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </a>
          </motion.div>
        </div>

        <motion.aside
          {...entrance(0.32)}
          aria-label="Professional focus"
          className="self-end border-l border-border pb-1 pl-6 lg:self-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Core focus
          </p>
          <p className="mt-4 font-headline text-2xl leading-snug text-foreground">
            Reliability by design, not as an afterthought.
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Systems architecture · Backend platforms · Fault tolerance
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
