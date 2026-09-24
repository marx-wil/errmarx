"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "System Architecture",
    description:
      "I design distributed, offline-first, and event-driven systems with explicit boundaries, resilient APIs, and a clear path to scale and high availability.",
  },
  {
    title: "Backend & Platform Engineering",
    description:
      "I build service-oriented platforms across Node.js, Express, Next.js, and Python, covering authentication, real-time messaging, API design, and performance.",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "I shape delivery and operations with Docker, Kubernetes, Terraform, CI/CD, monitoring, and resilient AWS and Google Cloud architecture.",
  },
  {
    title: "Data Systems",
    description:
      "I choose and model PostgreSQL, NoSQL, Redis, search, and Kafka-based systems around consistency, access patterns, and operational cost.",
  },
];

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12%" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="expertise"
      ref={sectionRef}
      aria-labelledby="expertise-title"
      className="border-b border-border bg-background px-page py-section"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-5 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Expertise
            </p>
            <h2
              id="expertise-title"
              className="mt-5 font-headline text-title font-semibold text-foreground"
            >
              Technical depth in service of dependable outcomes.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
            Architecture, delivery, and operations considered as one connected
            system rather than separate engineering concerns.
          </p>
        </motion.header>

        <ol className="mt-14 grid border-t border-l border-border md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <motion.li
              key={capability.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.06,
                ease: "easeOut",
              }}
              className="border-r border-b border-border p-6 sm:p-8 lg:p-10"
            >
              <span className="text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-headline text-2xl font-semibold text-foreground">
                {capability.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {capability.description}
              </p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.25 }}
          className="mt-10 grid gap-4 border-l-2 border-accent pl-6 lg:grid-cols-[12rem_1fr]"
        >
          <p className="text-sm font-medium text-foreground">
            Working principles
          </p>
          <p className="max-w-4xl text-sm leading-6 text-muted">
            Observability-first engineering, domain-driven design, GitOps,
            continuous delivery, infrastructure as code, security by design,
            and deliberate performance and cost trade-offs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
