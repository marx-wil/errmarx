"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { code } from "framer-motion/client";

const projects = [
  {
    id: "ARCH_01",
    codename: "PAWNEC",
    title: "Veterinary Management Platform",
    category: "DEV OPS/ SOFTWARE ENGINEER / TECHNICAL SPEARHEAD",
    status: "DEPLOYED",
    isReal: true,
    description:
      "A comprehensive veterinary practice management system. Handles patient records, appointment scheduling, billing, and pharmacy inventory with queue-based workflows and real-time updates.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "BullMQ"],
    color: "#a5e7ff",
    metrics: { latency: "~12ms", uptime: "99.9%", scale: "Multi-clinic" },
    projectLink: "https://pawnec.com",
  },
  {
    id: "ARCH_02",
    codename: "VETSCRIBE",
    title: "Veterinary Clinic Dashboard",
    category: "DATA_VIZ / DASHBOARD",
    status: "DEPLOYED",
    isReal: true,
    description:
      "An analytics and reporting dashboard for veterinary clinics. Surfaces operational metrics, patient trends, and revenue data through an interactive visualization layer.",
    stack: ["React", "TypeScript", "ApexCharts", "FastAPI"],
    color: "#edb1ff",
    metrics: { latency: "~8ms", uptime: "99.8%", scale: "Single-clinic" },
    projectLink: "https://ph.pawnec.com/pages/vetscribe",
  },
  {
    id: "ARCH_03",
    codename: "CEREVIUM",
    title: "Practice Examination Platform",
    category: "ARITIFICIAL_INTELLIGENCE / EDUCATION",
    status: "DEPLOYED",
    isReal: true,
    description:
      "A practice examination platform with real-time scoring, adaptive question delivery, and performance analytics. Built for high-concurrency with strict session integrity.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    color: "#ffd79f",
    metrics: { latency: "~20ms", uptime: "99.7%", scale: "Multi-user" },
    projectLink: "https://cerevium.com/",
  },
  {
    id: "ARCH_04",
    codename: "DUON",
    title: "Indoor Wayfinding",
    category: "MOBILE / LOCATION_BASED",
    status: "DEPLOYED",
    isReal: true,
    description:
      "An indoor wayfinding system for large and complex venues. Uses BLE beacons to provide real-time navigation and location-based services.",
    stack: ["Flutter", "Situm SDK", "Cloud SQL", "Firebase", "Cloud Run"],
    color: "#4ade80",
    metrics: { latency: "~15ms", uptime: "99.5%", scale: "Venue-wide" },
    projectLink: "https://duon.ph/",
  },
  {
    id: "ARCH_05",
    codename: "DentalCare",
    title: "Dental Clinic Management",
    category: "DEV OPS/ SOFTWARE ENGINEER",
    status: "PROTOTYPE",
    isReal: true,
    description:
      "A dental clinic management system with patient records, appointment scheduling, billing, and inventory management. Built with a modular architecture for easy extension.",
    stack: ["Next.js", "Node.js", "MongoDB", "Redis"],
    color: "#ff7e5f",
    metrics: { latency: "~10ms", uptime: "99.9%", scale: "Single-clinic" },
    projectLink: "https://dental-management-system-ruby.vercel.app/",
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Stagger: offset every other card in each row for depth
  const staggerOffset =
    index % 2 === 1 ? "3rem" : index % 3 === 2 ? "-1rem" : 0;

  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      style={{ marginTop: staggerOffset }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          rotateY: hovered ? 3 : 0,
          rotateX: hovered ? -2 : 0,
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
          borderLeftColor: project.color,
          borderLeftWidth: "3px",
          borderLeftStyle: "solid",
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${project.color}22`
            : "0 20px 50px rgba(0,0,0,0.5)",
        }}
        className="relative bg-surface-container-high/40 backdrop-blur-2xl overflow-hidden"
      >
        {/* Card header */}
        <div className="relative h-56 overflow-hidden bg-surface-container-lowest flex items-center justify-center">
          {/* Abstract background pattern */}
          <div className="absolute inset-0 digital-grid opacity-40" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, ${project.color}10 0%, transparent 70%)`,
            }}
          />
          {/* Codename watermark */}
          <div
            className="font-headline font-black text-6xl tracking-tighter select-none"
            style={{ color: `${project.color}15` }}
          >
            {project.codename}
          </div>
          {/* Status badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 bg-surface-container-lowest/80 border border-outline-variant/20">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background:
                  project.status === "DEPLOYED"
                    ? "#4ade80"
                    : project.status === "PROTOTYPE"
                      ? "#ffd79f"
                      : "#edb1ff",
                boxShadow:
                  project.status === "DEPLOYED" ? "0 0 6px #4ade80" : "none",
              }}
            />
            <span className="font-mono text-[8px] text-on-surface-variant/60 uppercase tracking-widest">
              {project.status}
            </span>
          </div>
          {/* Concept badge for non-real projects */}
          {"isReal" in project && !project.isReal ? (
            <div className="absolute top-4 left-4 px-2 py-1 bg-surface-container-lowest/80 border border-outline-variant/20">
              <span className="font-mono text-[8px] text-on-surface-variant/40 uppercase tracking-widest">
                ARCHITECTURE_CONCEPT
              </span>
            </div>
          ) : 
          <div className="absolute top-4 left-4 px-2 py-1 bg-surface-container-lowest/80 border border-outline-variant/20">
              <span className="font-mono text-[8px] text-on-surface-variant/40 uppercase tracking-widest">
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer"> VIEW_PROJECT</a>
              </span>
            </div>
          }
          {/* Overlay info */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent">
            <div
              className="font-mono text-[9px] tracking-widest uppercase mb-1"
              style={{ color: project.color }}
            >
              {project.id} / {project.category}
            </div>
            <h3 className="font-headline text-lg font-bold tracking-tight text-on-surface">
              {project.codename}
            </h3>
          </div>
        </div>

        {/* Card body */}
        <div className="p-6">
          <p className="text-sm text-on-surface-variant/80 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] font-mono border border-outline-variant/30 bg-surface-container-lowest/60"
                style={{ color: project.color }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expand button */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors"
            style={{ color: `${project.color}80` }}
          >
            <span>{expanded ? "COLLAPSE_INFO" : "EXPAND_INFO"}</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </button>

          {/* Expanded metrics */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-outline-variant/20 grid grid-cols-3 gap-3">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    <div key={key} className="text-center">
                      <div
                        className="text-base font-headline font-bold"
                        style={{ color: project.color }}
                      >
                        {val}
                      </div>
                      <div className="text-[9px] font-mono text-on-surface-variant/40 uppercase">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 px-6 md:px-12 bg-surface-dim"
    >
      {/* Background */}
      <div className="absolute inset-0 digital-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="font-headline font-black text-[20vw] leading-none text-white/[0.015] tracking-tighter -rotate-3">
          VAULT
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
              Stage 03 / The Vault
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface">
              SYSTEMS_VAULT
            </h2>
            <div className="flex gap-3">
              <div className="glass-panel px-4 py-2">
                <span className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                  TOTAL_ENTITIES: {projects.length}
                </span>
              </div>
              <div className="glass-panel px-4 py-2">
                <span className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                  DEPLOYED:{" "}
                  {projects.filter((p) => p.status === "DEPLOYED").length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Terminal logger */}
        <motion.div
          variants={cardVariants}
          className="mt-16 glass-panel-dark p-6 border border-outline-variant/20 font-mono text-[10px]"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-error/50" />
            <div className="w-2 h-2 rounded-full bg-tertiary-container/50" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <span className="ml-2 text-on-surface-variant/30 uppercase tracking-widest">
              VAULT_LOGGER.LOG
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-primary">&gt; INITIALIZING VAULT_STAGE_03...</p>
            <p className="text-on-surface-variant/40">STATUS: ASSETS_LOADED</p>
            <p className="text-on-surface-variant/40">
              ENTITIES_LOADED: {projects.length}/{projects.length}
            </p>
            <p className="text-secondary">&gt; DEPLOYING SPATIAL_GRID</p>
            <p className="text-on-surface-variant/40">RENDER_LATENCY: 4.2ms</p>
            <p className="text-primary animate-pulse">
              &gt; WAITING_FOR_INPUT_
              <span className="blinking-cursor ml-1" />
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
