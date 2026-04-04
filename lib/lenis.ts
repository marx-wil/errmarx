/**
 * Lenis configuration shared across the app.
 * The actual Lenis instance is created in LenisProvider (client component)
 * because it needs DOM access.
 */
export const LENIS_CONFIG = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
};

/** Returns true if the browser supports smooth scroll UX (not reduced-motion). */
export function shouldUseSmoothScroll(): boolean {
  if (typeof window === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
