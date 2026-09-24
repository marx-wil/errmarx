"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "San Sasakay",
    title: "Real-time Filipino transit intelligence",
    role: "Founder · Mobile · Civic technology",
    description:
      "Maps Metro Manila’s informal transit network by corroborating and weighting commuter reports into a live ground-truth dataset for commuters and public agencies.",
    stack: ["React Native", "Fastify", "PostgreSQL/PostGIS", "WebSockets"],
    scope: "Metro Manila transit network",
    href: "https://sansasakay.com",
  },
  {
    name: "Licensd",
    title: "AI-powered licensure review platform",
    role: "Co-founder · Product and technology",
    description:
      "Transforms uploaded study materials into board-style practice questions with progress tracking and performance analytics for Filipino licensure exam candidates.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    scope: "Licensure exam preparation",
    href: "https://licensd.app/",
  },
  {
    name: "Pawnec",
    title: "For vets. For pets. For a future that’s covered.",
    role: "DevOps · Software engineering · Technical lead",
    description:
      "Turns every clinic visit into confident care and real-time health intelligence—care without the clutter, with more care where it counts.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "BullMQ"],
    scope: "Connected veterinary care",
    href: "https://pawnec.com",
  },
  {
    name: "Vetscribe",
    title: "Continuity of Care—powered by Allied AI Veterinary Assistants",
    role: "Platform leadership · Veterinary technology",
    description:
      "An AI-powered team of allied veterinary professionals that documents care, monitors patients, and escalates urgent changes so clinics run smoothly and care stays consistent.",
    stack: ["React", "TypeScript", "ApexCharts", "FastAPI"],
    scope: "Clinical documentation and monitoring",
    href: "https://ph.pawnec.com/pages/vetscribe",
  },
  {
    name: "Pet Pulse",
    title: "Every clinical datapoint counts with Pet Pulse",
    role: "Platform leadership · Clinical intelligence",
    description:
      "A real-time, vet-verified clinical insights dashboard that brings veterinary care and public health records together to surface actionable trends.",
    stack: ["Real-time data", "Clinical analytics", "Privacy by design"],
    scope: "Veterinary and public health intelligence",
    href: "https://ph.pawnec.com/pages/pet-pulse",
  },
  {
    name: "Duon",
    title: "Indoor wayfinding",
    role: "Tech lead · Cybersecurity specialist · Software engineer",
    description:
      "An indoor navigation platform spanning a Flutter mobile app, centralized API, CMS, cloud delivery, and 3D mapping research; I lead its engineering and cybersecurity.",
    stack: ["Flutter", "Situm SDK", "Cloud SQL", "Firebase", "Cloud Run"],
    scope: "Venue-wide navigation",
    href: "https://duon.ph/",
  },
];

const prototypeProjects = [
  {
    name: "Sentry",
    title: "Offline-first disaster response app",
    role: "Mobile · Social impact",
    description:
      "A prototype for communication, resource tracking, and volunteer coordination in connectivity-challenged environments.",
    stack: ["React Native", "SQLite", "Redux Offline", "Node.js"],
    scope: "Community-wide coordination",
    href: undefined,
  },
  {
    name: "Proxima",
    title: "Peer-to-peer offline sync SDK",
    role: "SDK · Offline-first",
    description:
      "Keeps devices in sync over LAN, BLE, or Wi-Fi Direct while offline, then reconciles with an authoritative server when connectivity returns.",
    stack: ["TypeScript", "Node.js", "Vector Clocks", "UDP + TCP"],
    scope: "Cross-platform SDK",
    href: "https://proxima-sync.vercel.app/",
  },
];

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="work-title"
      className="border-b border-border bg-surface px-page py-section"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Selected work
            </p>
            <h2
              id="work-title"
              className="mt-5 font-headline text-title font-semibold text-foreground"
            >
              Systems built for real operating conditions.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
            Platforms spanning healthcare operations, education, mobility, and
            offline-first infrastructure.
          </p>
        </motion.header>

        <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : 0.05 * index,
                ease: "easeOut",
              }}
              className="flex min-h-[27rem] flex-col bg-background p-6 transition-colors duration-200 hover:bg-surface-bright sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
                    {project.role}
                  </p>
                  <h3 className="mt-4 font-headline text-3xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.title}</p>
                </div>
                <span className="font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-8 text-base leading-7 text-muted">
                {project.description}
              </p>

              <p className="mt-7 border-y border-border py-4 text-sm text-foreground">
                <span className="text-muted">Scope:</span> {project.scope}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[0.68rem] text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.name} project`}
                className="mt-auto self-start border-b border-accent pt-8 pb-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
              >
                Visit project <span aria-hidden="true">↗</span>
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Prototypes
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {prototypeProjects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : 0.25 + index * 0.06,
                }}
                className="rounded-card border border-border bg-background p-6 sm:p-8"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
                  {project.role}
                </p>
                <h3 className="mt-4 font-headline text-3xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.title}</p>
                <p className="mt-6 text-base leading-7 text-muted">
                  {project.description}
                </p>
                <p className="mt-4 text-sm text-foreground">{project.scope}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[0.68rem] text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-block border-b border-accent pb-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
                  >
                    View prototype <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
