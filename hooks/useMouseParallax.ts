"use client";

import { useState, useEffect, useRef } from "react";

interface ParallaxPosition {
  x: number; // -1 → +1
  y: number; // -1 → +1
}

/**
 * Tracks normalized mouse position (-1 to +1) across the viewport.
 * @param strength  Multiplier applied to the raw position (default 1)
 * @param ease      How quickly the value follows the cursor (0–1, default 0.08)
 */
export function useMouseParallax(
  strength = 1,
  ease = 0.08
): ParallaxPosition {
  const targetRef = useRef<ParallaxPosition>({ x: 0, y: 0 });
  const [position, setPosition] = useState<ParallaxPosition>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: ((e.clientX / window.innerWidth) * 2 - 1) * strength,
        y: -((e.clientY / window.innerHeight) * 2 - 1) * strength,
      };
    };

    const tick = () => {
      setPosition((prev) => {
        const nx = prev.x + (targetRef.current.x - prev.x) * ease;
        const ny = prev.y + (targetRef.current.y - prev.y) * ease;
        // Only update state if movement is non-trivial (avoids re-render storm)
        if (Math.abs(nx - prev.x) < 0.0001 && Math.abs(ny - prev.y) < 0.0001) {
          return prev;
        }
        return { x: nx, y: ny };
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [strength, ease]);

  return position;
}
