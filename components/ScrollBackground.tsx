"use client";

import { useEffect } from "react";

/**
 * Pure function exported for property-based testing.
 * Computes the background color based on scroll position using piecewise RGB interpolation.
 *
 * @param scrollY - Current window.scrollY value
 * @param scrollHeight - document.documentElement.scrollHeight
 * @param innerHeight - window.innerHeight
 * @returns CSS rgb() color string
 */
export function computeColor(
  scrollY: number,
  scrollHeight: number,
  innerHeight: number
): string {
  const maxScroll = scrollHeight - innerHeight;
  const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

  if (progress <= 0.5) {
    const t = progress * 2;
    const r = Math.round(5 + t * 15);
    const g = Math.round(10 + t * 30);
    const b = Math.round(30 + t * 50);
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    const t = (progress - 0.5) * 2;
    const r = Math.round(20 - t * 10);
    const g = Math.round(40 - t * 20);
    const b = Math.round(80 - t * 30);
    return `rgb(${r}, ${g}, ${b})`;
  }
}

/**
 * ScrollBackground — attaches a passive scroll listener and writes a
 * piecewise-interpolated RGB color to the nearest <main> element's
 * backgroundColor, creating a smooth scroll-driven background transition.
 *
 * Requirements: 13.4–13.7, 18.4
 */
export default function ScrollBackground() {
  useEffect(() => {
    const handleScroll = () => {
      const main = document.querySelector("main") as HTMLElement | null;
      if (!main) return;

      const color = computeColor(
        window.scrollY,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      main.style.backgroundColor = color;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
