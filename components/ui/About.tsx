"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "JavaScript", color: "#a5e7ff", category: "language" },
  { name: "TypeScript", color: "#edb1ff", category: "language" },
  { name: "Node.js", color: "#ffd79f", category: "runtime" },
  { name: "Express", color: "#a5e7ff", category: "runtime" },
  { name: "Next.js", color: "#edb1ff", category: "runtime" },
  { name: "Expo", color: "#ffd79f", category: "mobile" },
  { name: "Flutter", color: "#a5e7ff", category: "mobile" },
  { name: "Python", color: "#edb1ff", category: "language" },
  { name: "GraphQL", color: "#ffd79f", category: "api" },
  { name: "gRPC", color: "#a5e7ff", category: "api" },
  { name: "Docker", color: "#a5e7ff", category: "infra" },
  { name: "Kubernetes", color: "#edb1ff", category: "infra" },
  { name: "Terraform", color: "#ffd79f", category: "infra" },
  { name: "AWS", color: "#a5e7ff", category: "cloud" },
  { name: "GCP", color: "#edb1ff", category: "cloud" },
];

const focusAreas = [
  {
    id: "01",
    title: "System Design & Architecture",
    desc: "Distributed · Offline-first · Event-driven · HA",
    color: "primary",
  },
  {
    id: "02",
    title: "Engineering Philosophy",
    desc: "Observability-first · DDD · GitOps · Zero Trust",
    color: "secondary",
  },
  {
    id: "03",
    title: "Backend & Platform",
    desc: "SOA · AuthN/Z · Real-time · Data modeling",
    color: "primary",
  },
  {
    id: "04",
    title: "DevOps & Infrastructure",
    desc: "Docker · K8s · CI/CD · Terraform · Multi-region",
    color: "secondary",
  },
  {
    id: "05",
    title: "Data & Systems",
    desc: "PostgreSQL · NoSQL · Redis · Search · Kafka",
    color: "primary",
  },
  {
    id: "06",
    title: "Technology Stack",
    desc: "JS · TS · Node · Express · Next.js · Expo · Flutter · Python",
    color: "secondary",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 md:px-12 bg-background"
    >
      {/* Background grid */}
      <div className="absolute inset-0 digital-grid opacity-30 pointer-events-none" />
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-secondary/8 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
              Stage 01 / Identity Profile
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface">
            ABOUT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              ME
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Bio */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio card */}
            <div className="glass-panel p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[60px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" />
              <div className="font-mono text-primary/50 text-xs mb-4">
                &lt;identity_profile&gt;
              </div>
              <h3 className="text-2xl font-headline font-bold mb-3 text-primary">
                Chief Information Officer | Systems Architec
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-base mb-6">
                I design backend platforms with a focus on stability,
                scalability, and fault tolerance. My work centers on predictable
                behavior under load, resource constraints, and recovery from
                failure.
              </p>
              <p className="text-on-surface-variant/70 leading-relaxed text-sm mb-6">
                I model systems as interacting components with defined
                interfaces, data flows, and operational constraints — keeping
                architecture observable and maintainable as complexity grows.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-lowest/50 border border-white/5">
                  <div className="text-[10px] uppercase text-on-surface-variant/40 mb-1">
                    Status
                  </div>
                  <div className="text-secondary font-mono text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                    AVAILABLE_FOR_NODES
                  </div>
                </div>
                <div className="p-4 bg-surface-container-lowest/50 border border-white/5">
                  <div className="text-[10px] uppercase text-on-surface-variant/40 mb-1">
                    Current Role
                  </div>
                  <div className="text-primary font-mono text-sm">
                    CIO @ STAPPL_INC
                  </div>
                </div>
              </div>
              <div className="mt-4 font-mono text-primary/30 text-xs">
                &lt;/identity_profile&gt;
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-6 border-l-2 border-primary/50">
                <div className="text-3xl font-headline font-bold text-on-surface mb-1">
                  3
                </div>
                <div className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">
                  Production_Systems
                </div>
                <div className="text-xs text-on-surface-variant/50 mt-2">
                  Shipped & maintained at scale
                </div>
              </div>
              <div className="glass-panel p-6 border-l-2 border-secondary/50">
                <div className="text-3xl font-headline font-bold text-on-surface mb-1">
                  99.9%
                </div>
                <div className="text-[10px] font-mono text-secondary/60 uppercase tracking-widest">
                  Uptime_Target
                </div>
                <div className="text-xs text-on-surface-variant/50 mt-2">
                  Reliability-first posture
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 glass-panel overflow-hidden flex flex-col min-h-[400px]"
          >
            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-surface-container-low/30">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                SKILL_NODES
              </span>
              <span className="text-[9px] font-mono text-on-surface-variant/40 uppercase">
                {skills.length} loaded
              </span>
            </div>

            {/* Animated skill grid */}
            <div className="flex-1 p-6 flex flex-wrap gap-2 content-start">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative px-3 py-1.5 border border-outline-variant/30 bg-surface-container-lowest/60 cursor-default"
                  style={{ borderColor: `${skill.color}22` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `${skill.color}08` }}
                  />
                  <span
                    className="font-mono text-[10px] tracking-wide relative z-10"
                    style={{ color: skill.color }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="p-5 border-t border-white/5 bg-surface-container-low/30">
              <div className="font-mono text-[9px] text-on-surface-variant/30 flex justify-between">
                <span>&gt; CAPABILITIES_LOADED</span>
                <span className="text-primary/50 animate-pulse">
                  ACTIVE_SESSION
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Engineering focus areas */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-outline-variant" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-on-surface-variant/50 uppercase">
              Engineering Focus Areas
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.id}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-5 border border-outline-variant/20 bg-surface-container-lowest/30 group hover:border-primary/20 transition-all duration-300"
              >
                <span className="text-3xl font-headline font-black text-white/5 shrink-0 leading-none">
                  {area.id}
                </span>
                <div>
                  <h4 className="font-headline font-bold text-sm tracking-wide mb-1 text-on-surface group-hover:text-primary transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-[10px] font-mono text-on-surface-variant/50">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
