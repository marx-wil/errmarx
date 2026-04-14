"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import HeroScene from "./HeroScene";

/*   Capability detection          ── */
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

/*   Static fallback for low-perf / reduced-motion   */
function StaticHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 48%, rgba(0,210,255,0.07) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 40% 60%, rgba(237,177,255,0.05) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 digital-grid opacity-20" />
      <div className="absolute top-24 right-24 w-28 h-28 border border-primary/10 rotate-12" />
      <div className="absolute bottom-28 left-24 w-20 h-20 border border-secondary/10 rotate-45" />
      <div className="absolute top-1/3 left-16 w-16 h-16 border border-tertiary/8 -rotate-12" />
    </div>
  );
}

/*   Main export             ── */
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
      camera={{ position: [0, 2, 10], fov: 50 }}
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
