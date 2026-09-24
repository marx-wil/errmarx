"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
      className="border-b border-border bg-background px-page py-section"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(16rem,0.75fr)_minmax(0,1.25fr)] lg:gap-20"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            About
          </p>
          <h2
            id="about-title"
            className="mt-5 max-w-lg font-headline text-title font-semibold text-foreground"
          >
            Building clarity into complex systems.
          </h2>
        </div>

        <div className="max-w-3xl border-l border-border pl-6 sm:pl-10">
          <p className="text-lg leading-8 text-foreground md:text-xl md:leading-9">
            I’m a systems architect and Chief Information Officer at Stappl
            Inc. I design backend platforms around clear responsibilities,
            dependable behavior, and the realities of operating software over
            time.
          </p>

          <p className="mt-7 text-base leading-7 text-muted md:text-lg md:leading-8">
            My work focuses on systems that need to stay predictable under
            load, resource constraints, and failure. I make interfaces, data
            flows, and operational boundaries explicit so teams can understand
            how a platform behaves and change it safely.
          </p>

          <p className="mt-7 text-base leading-7 text-muted md:text-lg md:leading-8">
            Systems thinking shapes every decision. Reliability, observability,
            and fault tolerance are treated as design inputs from the start—not
            repairs added after complexity has already taken hold.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
