"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Dynamic import prevents SSR issues with WebGL
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  // Fade the hero out as user scrolls down
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const translateY = useTransform(scrollY, [0, 500], [0, -60]);

  // GSAP text entrance
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-name",
        { opacity: 0, y: 60, skewX: -5 },
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
        ".hero-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-desc",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.1, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-ctas",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.3, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-scroll",
        { opacity: 0 },
        { opacity: 0.5, duration: 0.6, delay: 1.8 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-surface-container-lowest"
    >
      {/* 3D canvas — full background so particles span the whole hero */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Mobile vignette: radial, protects centered text */}
      <div
        className="absolute inset-0 z-10 pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,14,14,0.65) 0%, transparent 32%, transparent 62%, rgba(14,14,14,0.82) 100%), radial-gradient(ellipse 85% 65% at 50% 48%, transparent 28%, rgba(14,14,14,0.9) 88%)",
        }}
      />

      {/* Desktop split vignette: heavy on left (text), clear on right (network) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,14,14,0.52) 0%, transparent 28%, transparent 72%, rgba(14,14,14,0.72) 100%), linear-gradient(to right, rgba(14,14,14,0.97) 0%, rgba(14,14,14,0.82) 26%, rgba(14,14,14,0.18) 52%, transparent 68%)",
        }}
      />

      {/* Hero content: flex row, text takes left half on desktop */}
      <motion.div
        style={{ opacity, y: translateY }}
        className="relative z-20 h-full flex items-center"
      >
        <div className="w-full md:w-[52%] px-6 md:pl-16 lg:pl-24 xl:pl-32 md:pr-6 text-center md:text-left pointer-events-none">
          {/* System badge */}
          <div className="hero-badge inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-primary/20 bg-primary/5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
            <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase">
              SYSTEM_ACTIVE // CIO @ STAPPL INC.
            </span>
          </div>

          {/* Main name */}
          <div className="hero-name mb-4 overflow-hidden">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-headline tracking-[-0.04em] leading-none text-glow">
              ERR.MARX
            </h1>
          </div>

          {/* Role */}
          <div className="hero-title mb-6">
            <p className="font-headline text-xs md:text-sm tracking-[0.35em] uppercase text-on-surface-variant">
              SYSTEMS ARCHITECT &nbsp;·&nbsp; RELIABILITY ENGINEER
            </p>
          </div>

          {/* Description */}
          <p className="hero-desc text-on-surface-variant font-body text-sm md:text-base max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed opacity-80">
            I design backend platforms with a focus on stability, scalability,
            and failure recovery. Every system is a set of interacting
            components with clear boundaries.
          </p>

          {/* CTAs */}
          <div className="hero-ctas pointer-events-auto flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={scrollToProjects}
              className="group relative px-10 py-4 bg-surface-container-highest/40 glass-panel border border-primary/30 text-primary font-headline font-bold tracking-widest uppercase text-sm hover:border-primary transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">VIEW_SYSTEMS</span>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-10 py-4 text-on-surface font-headline tracking-widest uppercase text-sm border border-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
            >
              OPEN_TERMINAL
            </button>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 hover:opacity-100 transition-opacity cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[9px] tracking-[0.5em] uppercase text-on-surface-variant group-hover:text-primary transition-colors">
          SCROLL TO ENTER
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </button>

      {/* Side decorative text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-2 opacity-20 pointer-events-none">
        <div
          className="text-[9px] font-mono tracking-[0.4em] text-primary uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          BACKEND_SYSTEMS / RELIABILITY / DISTRIBUTED
        </div>
      </div>

      {/* Right-side hint: drag to interact (desktop only) */}
      <div className="absolute right-8 bottom-10 z-20 hidden md:flex flex-col items-center gap-2 opacity-30 pointer-events-none">
        <div
          className="text-[8px] font-mono tracking-[0.35em] text-primary uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          DRAG · ZOOM · CLICK NODE
        </div>
      </div>
    </section>
  );
}
