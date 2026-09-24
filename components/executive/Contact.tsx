"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wilmarx-cayabyab/",
  },
  {
    label: "GitHub",
    href: "https://github.com/marx-wil",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
      className="border-b border-border bg-background px-page py-section"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-5 max-w-3xl font-headline text-title font-semibold text-foreground"
          >
            Let’s discuss what the technology needs to make possible.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
            I’m available for conversations about technology leadership,
            platform architecture, reliability, and security.
          </p>
        </div>

        <div className="border-l border-border pl-6 sm:pl-10">
          <p className="text-sm text-muted">Email</p>
          <a
            href="mailto:wilmarx@stapplinc.com"
            className="mt-3 inline-block break-all font-headline text-2xl text-foreground transition-colors duration-200 hover:text-accent sm:text-3xl"
          >
            wilmarx@stapplinc.com
          </a>

          <a
            href="mailto:wilmarx@stapplinc.com?subject=Portfolio%20inquiry"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-card bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors duration-200 hover:bg-accent-hover"
          >
            Start a conversation
          </a>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
              Other inboxes
            </p>
            <div className="mt-3 flex flex-col items-start gap-2 text-sm">
              <a
                href="mailto:wilmarx@sansasakay.com"
                className="text-muted transition-colors duration-200 hover:text-foreground"
              >
                wilmarx@sansasakay.com
              </a>
              <a
                href="mailto:wilmarx.cayabyab@gmail.com"
                className="text-muted transition-colors duration-200 hover:text-foreground"
              >
                wilmarx.cayabyab@gmail.com
              </a>
            </div>
          </div>

          <nav aria-label="Professional profiles" className="mt-10">
            <ul className="flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-border pb-1 text-sm text-muted transition-colors duration-200 hover:border-accent hover:text-foreground"
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>
    </section>
  );
}
