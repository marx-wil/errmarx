"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import HeroScene from "./HeroScene";

/* ─── Capability detection ───────────────────────────── */
function checkWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function checkReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ─── Static fallback for low-perf / reduced-motion ─── */
function StaticHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(0,210,255,0.08) 0%, transparent 60%), " +
            "radial-gradient(ellipse at 30% 70%, rgba(237,177,255,0.06) 0%, transparent 50%)",
        }}
      />
      {/* Grid */}
      <div className="absolute inset-0 digital-grid opacity-20" />
      {/* Corner decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/10" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-secondary/10 rotate-45" />
    </div>
  );
}

/* ─── Main export ────────────────────────────────────── */
export default function Scene() {
  const [capable, setCapable] = useState<boolean | null>(null);

  useEffect(() => {
    const hasWebGL = checkWebGL();
    const wantsReduced = checkReducedMotion();
    setCapable(hasWebGL && !wantsReduced);
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  // SSR / detection pending — render nothing until client-side check
  if (capable === null) return null;

  // Fallback for low-perf or reduced-motion preference
  if (!capable) return <StaticHeroBackground />;

  return (
    <Canvas
      camera={{ position: [2.3, 0, 9.5], fov: 52 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      dpr={[1, 1.5]}
      style={{
        position: "absolute",
        inset: 0,
        background: "transparent",
      }}
    >
      <HeroScene />
      <Preload all />
    </Canvas>
  );
}
