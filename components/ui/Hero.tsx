"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const translateY = useTransform(scrollY, [0, 500], [0, -60]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: 16, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        ".hero-name",
        { opacity: 0, y: 50, skewX: -3 },
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".hero-rule",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, delay: 0.85, ease: "power2.inOut" }
      );
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.95, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-desc",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.15, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-ctas",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.35, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-scroll",
        { opacity: 0 },
        { opacity: 0.5, duration: 0.6, delay: 1.9 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () =>
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-surface-container-lowest"
    >
      {/* 3D canvas — full background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Lightweight vignette — text relies on its own glow/shadow for contrast;
          background stays clearly visible */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 48% 42% at 50% 48%, rgba(14,14,14,0.38) 0%, transparent 70%)",
            "linear-gradient(to bottom, rgba(14,14,14,0.35) 0%, transparent 14%, transparent 86%, rgba(14,14,14,0.45) 100%)",
          ].join(", "),
        }}
      />

      {/* ── Centered hero content         ── */}
      <motion.div
        style={{ opacity, y: translateY }}
        className="relative z-20 h-full flex items-center justify-center"
      >
        <div className="max-w-2xl w-full px-6 text-center pointer-events-none">
          {/* Status badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 mb-10 px-4 py-2 border border-primary/15 bg-surface-container-lowest/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400 shadow-[0_0_8px_#4ade80]" />
            </span>
            <span className="font-mono text-[10px] text-primary/90 tracking-[0.22em] uppercase">
              SYSTEM_ACTIVE // CIO @ STAPPL INC.
            </span>
          </div>

          {/* Name — dot is accent-colored for visual punch */}
          <div className="hero-name mb-5">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-headline tracking-[-0.04em] leading-none">
              <span className="text-on-surface text-glow">ERR</span>
              <span className="text-primary-container inline-block mx-0.5 md:mx-1.5 drop-shadow-[0_0_14px_rgba(0,210,255,0.6)]">
                .
              </span>
              <span className="text-on-surface text-glow">MARX</span>
            </h1>
          </div>

          {/* Gradient rule */}
          <div className="hero-rule mx-auto mb-5 h-px w-40 bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center" />

          {/* Role */}
          <div className="hero-title mb-8">
            <p className="font-headline text-[11px] md:text-xs tracking-[0.32em] uppercase text-on-surface-variant/70">
              SYSTEMS ARCHITECT &nbsp;&middot;&nbsp; RELIABILITY ENGINEER
            </p>
          </div>

          {/* Description */}
          <p className="hero-desc text-on-surface-variant/60 font-body text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed">
            I design backend platforms with a focus on stability, scalability,
            and failure recovery. Every system is a set of interacting components
            with clear boundaries.
          </p>

          {/* CTA buttons */}
          <div className="hero-ctas pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToProjects}
              className="group relative px-10 py-3.5 border border-primary/30 bg-primary/[0.06] text-primary font-headline font-bold tracking-widest uppercase text-sm hover:bg-primary/[0.14] hover:border-primary/60 hover:shadow-[0_0_24px_rgba(0,210,255,0.12)] transition-all duration-500"
            >
              <span className="relative z-10">VIEW_SYSTEMS</span>
            </button>
            <button
              onClick={scrollToContact}
              className="px-10 py-3.5 text-on-surface/50 font-headline tracking-widest uppercase text-sm border border-white/[0.06] hover:border-primary/30 hover:text-primary transition-all duration-300"
            >
              OPEN_TERMINAL
            </button>
          </div>
        </div>
      </motion.div>

      {/* Side decorative text — left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-2 opacity-20 pointer-events-none">
        <div
          className="text-[9px] font-mono tracking-[0.4em] text-primary uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          BACKEND_SYSTEMS / RELIABILITY / DISTRIBUTED
        </div>
      </div>

      {/* Side decorative text — right */}
      <div className="absolute right-8 bottom-10 z-20 hidden md:flex flex-col items-center gap-2 opacity-30 pointer-events-none">
        <div
          className="text-[8px] font-mono tracking-[0.35em] text-primary uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          SYS · OBSERVE · MONITOR
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 hover:opacity-100 transition-opacity cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[9px] tracking-[0.5em] uppercase text-on-surface-variant/50 group-hover:text-primary transition-colors">
          SCROLL TO ENTER
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </button>
    </section>
  );
}
