"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnterInteractive = () => { isHovering = true; };
    const onMouseLeaveInteractive = () => { isHovering = false; };

    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll<HTMLElement>(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };

    // Attach initially and re-attach on DOM mutations
    attachHoverListeners();
    const mutationObserver = new MutationObserver(attachHoverListeners);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const tick = () => {
      // Dot follows exactly
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;

      // Ring lerps toward mouse
      const ease = isHovering ? 0.14 : 0.1;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      const ringSize = isHovering ? 44 : 28;
      ring.style.transform = `translate(${ringX - ringSize / 2}px, ${ringY - ringSize / 2}px)`;
      ring.style.width = `${ringSize}px`;
      ring.style.height = `${ringSize}px`;
      ring.style.opacity = isHovering ? "1" : "0.7";
      ring.style.borderColor = isHovering ? "rgba(0, 210, 255, 0.9)" : "rgba(165, 231, 255, 0.5)";
      ring.style.boxShadow = isHovering
        ? "0 0 12px rgba(0, 210, 255, 0.5), inset 0 0 6px rgba(0, 210, 255, 0.1)"
        : "0 0 6px rgba(165, 231, 255, 0.2)";

      rafId = requestAnimationFrame(tick);
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Exact-position dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#a5e7ff",
          boxShadow: "0 0 8px rgba(165, 231, 255, 0.8)",
          willChange: "transform",
        }}
      />

      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1px solid rgba(165, 231, 255, 0.5)",
          background: "transparent",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
          willChange: "transform, width, height",
        }}
      />
    </>
  );
}
