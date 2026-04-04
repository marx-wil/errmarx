"use client";

import { useState, useEffect } from "react";

interface ScrollState {
  scrollY: number;
  scrollProgress: number; // 0 → 1 across full page
  direction: "up" | "down" | "idle";
}

/**
 * Normalized scroll hook that syncs with Lenis's virtual scroll
 * by reading from the DOM on passive scroll events.
 */
export function useScroll(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrollProgress: 0,
    direction: "idle",
  });

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      setState({
        scrollY: current,
        scrollProgress: total > 0 ? current / total : 0,
        direction: current > lastY ? "down" : current < lastY ? "up" : "idle",
      });

      lastY = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Fire once to capture initial state
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}

/**
 * Returns a 0–1 progress for a specific section.
 * @param sectionId  The id of the section element
 */
export function useSectionScroll(sectionId: string) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 0 when top of section hits bottom of viewport, 1 when bottom of section leaves top
      const raw = 1 - rect.bottom / (windowH + rect.height);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionId]);

  return progress;
}
