"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const lenis = new Lenis({
      duration: 1.05,
      easing: easeOutQuart,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      anchors: {
        duration: 1.15,
        easing: easeOutQuart,
      },
      stopInertiaOnNavigate: true,
    });

    // Sync ScrollTrigger with Lenis
    const unsubscribe = lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);

    // Prevent GSAP ticker lag smoothing from causing jitter
    gsap.ticker.lagSmoothing(0);

    return () => {
      unsubscribe();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
