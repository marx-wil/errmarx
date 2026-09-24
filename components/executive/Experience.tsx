"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const roles = [
  {
    title: "Chief Information Officer",
    organization: "Stappl Inc.",
    context: "Executive leadership",
    scope:
      "Defines technology strategy, architecture standards, governance, vendor decisions, and delivery for a TypeScript-based pet health platform.",
  },
  {
    title: "Founder",
    organization: "San Sasakay",
    context: "Venture leadership",
    scope:
      "Leads product and technology direction for a civic transit platform that turns crowdsourced commuter reports into useful network intelligence.",
  },
  {
    title: "Co-Founder",
    organization: "Licensd",
    context: "Venture leadership",
    scope:
      "Owns product architecture, the AI-assisted study-material pipeline, cloud delivery, and platform security for a licensure exam review product.",
  },
  {
    title: "Tech Lead / Senior Software Engineer",
    organization: "Pawdel",
    context: "Platform leadership",
    scope:
      "Owns the technical lifecycle of Pawdel products, including the Pawnec multi-clinic platform, from architecture and full-stack delivery through infrastructure, code governance, and production releases.",
  },
  {
    title: "Tech Lead / Cybersecurity Specialist / Software Engineer",
    organization: "Duon Technologies",
    context: "Product and security leadership",
    scope:
      "Built the indoor navigation platform across mobile, API, CMS, and cloud delivery while leading cybersecurity, release operations, and 3D mapping research.",
  },
  {
    title: "IT Leader",
    organization: "Asia Scopro Optics Co., Inc.",
    context: "Previous role",
    scope:
      "Managed servers, networks, Fortinet firewalls, access controls, backups, IT policy, equipment, and end-user support.",
  },
  {
    title: "IT Lead",
    organization: "Healthier Fit Co. Ltd.",
    context: "Previous role",
    scope:
      "Led day-to-day IT operations across networks, systems, workstations, user security training, troubleshooting, and resource planning.",
  },
  {
    title: "IT Assistant",
    organization: "TESDA PTC-LLDA",
    context: "Early career",
    scope:
      "Supported data operations, process documentation, hardware and software installation, network troubleshooting, and user requests.",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12%" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-title"
      className="border-b border-border bg-surface px-page py-section"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-7xl"
      >
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Experience
          </p>
          <h2
            id="experience-title"
            className="mt-5 font-headline text-title font-semibold text-foreground"
          >
            Leadership grounded in technical practice.
          </h2>
        </header>

        <ol className="mt-14 border-t border-border">
          {roles.map((role, index) => (
            <li
              key={`${role.title}-${role.organization}`}
              className="grid gap-5 border-b border-border py-8 sm:grid-cols-[3rem_0.85fr_1.15fr] sm:gap-8 lg:py-10"
            >
              <span className="text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  {role.context}
                </p>
                <h3 className="mt-3 font-headline text-2xl font-semibold text-foreground">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-accent">{role.organization}</p>
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted">
                {role.scope}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
