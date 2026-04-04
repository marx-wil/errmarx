import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Creates a scrubbed ScrollTrigger that fires `onUpdate(progress)` as the
 * user scrolls through `element`.  Useful for camera or parallax animations.
 */
export function createScrollScrub(
  element: HTMLElement,
  onUpdate: (progress: number) => void,
  options?: {
    start?: string;
    end?: string;
    scrub?: number | boolean;
  }
): ScrollTrigger {
  return ScrollTrigger.create({
    trigger: element,
    start: options?.start ?? "top top",
    end: options?.end ?? "bottom top",
    scrub: options?.scrub ?? 1.5,
    onUpdate: (self) => onUpdate(self.progress),
  });
}

/**
 * Staggered fade-in entrance for children matching `targets` when
 * `element` enters the viewport.
 */
export function createSectionEntrance(
  element: HTMLElement,
  targets: string,
  options?: { stagger?: number; duration?: number; y?: number }
) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: options?.y ?? 50 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.8,
      stagger: options?.stagger ?? 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Horizontal slide-in for a list of elements.
 */
export function createHorizontalReveal(
  element: HTMLElement,
  targets: string,
  fromLeft = true
) {
  return gsap.fromTo(
    targets,
    { opacity: 0, x: fromLeft ? -60 : 60 },
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Smooth counter animation for stat numbers.
 */
export function animateCounter(
  element: HTMLElement,
  endValue: number,
  suffix = ""
) {
  const obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration: 1.5,
    ease: "power1.out",
    onUpdate: () => {
      element.textContent = `${Math.round(obj.val)}${suffix}`;
    },
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      once: true,
    },
  });
}

/** Kill all ScrollTriggers and reset (call on page unmount) */
export function killAllTriggers() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
