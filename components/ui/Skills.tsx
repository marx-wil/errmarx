"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, useInView } from "framer-motion";

const SkillNodes = dynamic(() => import("@/components/3d/SkillNodes"), {
  ssr: false,
  loading: () => null,
});

const SKILL_GRAPH_NODE_COUNT = 10;

/* ─── Condensed stack (section 6) — tooling only ─────── */
const stackChips = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "Next.js",
  "Expo",
  "Flutter",
  "Python",
  "GraphQL",
  "gRPC",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "GCP",
];

/* ─── Principles & domains (sections 1–5) ────────────── */
const principleDomains = [
  {
    name: "01_SYSTEM_DESIGN",
    label: "System Design & Architecture",
    subtitle: "Core identity",
    color: "#a5e7ff",
    items: [
      "Distributed systems design",
      "Offline-first architecture",
      "Event-driven systems",
      "Microservices & modular monoliths",
      "API design (REST, GraphQL, gRPC)",
      "Scalability & high availability",
      "Failure-resilient system design",
    ],
  },
  {
    name: "02_ENGINEERING_PHILOSOPHY",
    label: "Engineering Philosophy & Methodologies",
    subtitle: "How work gets done",
    color: "#edb1ff",
    items: [
      "Observability-first engineering",
      "Infrastructure as Code (IaC) mindset",
      "GitOps & continuous delivery",
      "Domain-Driven Design (DDD)",
      "Resilience over perfection",
      "Security by design (Zero Trust)",
      "Performance & cost tradeoff optimization",
    ],
  },
  {
    name: "03_BACKEND_PLATFORM",
    label: "Backend & Platform Engineering",
    subtitle: "Services & runtime",
    color: "#ffd79f",
    items: [
      "Service-oriented architecture",
      "Authentication & authorization systems",
      "Real-time systems & messaging",
      "Data modeling & storage strategy",
      "Caching & performance optimization",
    ],
  },
  {
    name: "04_DEVOPS_INFRA",
    label: "DevOps & Infrastructure",
    subtitle: "Delivery & operations",
    color: "#a5e7ff",
    items: [
      "Containerization (Docker)",
      "Orchestration (Kubernetes)",
      "CI/CD pipeline design",
      "Infrastructure as Code (Terraform)",
      "Monitoring & logging systems",
      "Cloud architecture (multi-region, failover)",
    ],
    footer: "Cloud platforms: Amazon Web Services · Google Cloud Platform",
  },
  {
    name: "05_DATA_SYSTEMS",
    label: "Data & Systems",
    subtitle: "Persistence & movement",
    color: "#edb1ff",
    items: [
      "Relational databases (PostgreSQL)",
      "NoSQL systems",
      "Caching layers (Redis)",
      "Search systems",
      "Event streaming (Kafka)",
    ],
  },
];

/* ─── Fallback for reduced-motion ────────────────────── */
function StaticSkillFallback() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 p-6">
      {stackChips.map((s) => (
        <div
          key={s}
          className="px-2 py-1.5 border border-primary/20 bg-surface-container-lowest/60 text-center font-mono text-[9px] text-primary/70 uppercase tracking-widest"
        >
          {s}
        </div>
      ))}
    </div>
  );
}

function SkillCanvas({ reducedMotion }: { reducedMotion: boolean }) {
  if (reducedMotion) return <StaticSkillFallback />;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 52 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <SkillNodes />
    </Canvas>
  );
}

function PrincipleCard({
  domain,
  isInView,
  index,
}: {
  domain: (typeof principleDomains)[0];
  isInView: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.06 * index, duration: 0.55 }}
      className="glass-panel p-5 md:p-6 h-full flex flex-col border border-white/[0.06]"
    >
      <span
        className="font-mono text-[8px] tracking-[0.2em] uppercase"
        style={{ color: `${domain.color}99` }}
      >
        {domain.name}
      </span>
      <h3 className="font-headline font-bold text-base text-on-surface mt-1.5 leading-snug">
        {domain.label}
      </h3>
      <p className="font-mono text-[9px] text-on-surface-variant/45 uppercase tracking-wide mt-1 mb-3">
        {domain.subtitle}
      </p>
      <ul className="space-y-2 flex-1">
        {domain.items.map((item) => (
          <li
            key={item}
            className="text-[11px] md:text-xs text-on-surface-variant/85 leading-relaxed pl-3 border-l-2 border-white/[0.08]"
            style={{ borderLeftColor: `${domain.color}35` }}
          >
            {item}
          </li>
        ))}
      </ul>
      {domain.footer ? (
        <p className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[9px] text-on-surface-variant/50 leading-relaxed">
          {domain.footer}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });

  const reducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 px-6 md:px-12 bg-surface-container-lowest"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
              Stage 02 / Core Module
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface">
            SKILL_
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              NODES
            </span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm max-w-2xl leading-relaxed">
            Principles and system thinking first—architecture, methodologies,
            and platform craft. The graph reflects a{" "}
            <span className="text-on-surface-variant/90">
              JavaScript-first web stack
            </span>{" "}
            (Node.js, Express, Next.js), Expo for React Native, Flutter, and
            delivery infra—not the whole story, but the tool spine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="lg:col-span-7 glass-panel overflow-hidden"
            style={{ height: "480px" }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-surface-container-low/30">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
              </div>
              <span className="font-mono text-[9px] text-on-surface-variant/40 uppercase tracking-widest">
                stack_graph.viz — condensed
              </span>
              <span className="font-mono text-[9px] text-primary/40">
                {SKILL_GRAPH_NODE_COUNT} NODES
              </span>
            </div>
            <div className="relative" style={{ height: "calc(100% - 2.5rem)" }}>
              <SkillCanvas reducedMotion={reducedMotion} />
              <div className="absolute bottom-3 right-3 font-mono text-[8px] text-on-surface-variant/20 uppercase tracking-widest pointer-events-none">
                HOVER NODES · DRAG TO INSPECT
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="glass-panel p-6"
            >
              <div className="font-mono text-[9px] text-primary/60 uppercase tracking-widest mb-1">
                TECHNOLOGY_STACK
              </div>
              <p className="font-mono text-[8px] text-on-surface-variant/35 uppercase tracking-wider mb-4">
                Section 06 · condensed — don&apos;t overflex
              </p>
              <div className="flex flex-wrap gap-2">
                {stackChips.map((chip, i) => (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.25 + 0.025 * i }}
                    className="px-2.5 py-1 bg-primary/5 border border-primary/15 font-mono text-[9px] text-primary/65 uppercase tracking-wide"
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.32, duration: 0.55 }}
              className="glass-panel p-6 border border-secondary/10"
            >
              <div className="font-mono text-[9px] text-secondary/60 uppercase tracking-widest mb-3">
                PRINCIPLES_AT_A_GLANCE
              </div>
              <p className="text-[11px] text-on-surface-variant/75 leading-relaxed">
                I build systems by principles, not by tools. My work is guided by how systems should behave—resilient, observable, scalable, and humane—rather than what stack happens to be popular. System design, engineering philosophy, backend platforms, DevOps, and data systems all follow this foundation. Tooling is chosen to serve these principles, never to define them.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-12 bg-secondary" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-secondary uppercase">
              Principles & Methodologies
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {principleDomains.map((domain, i) => (
              <PrincipleCard
                key={domain.name}
                domain={domain}
                isInView={isInView}
                index={i}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
