"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that triggers a CSS class when an element scrolls into view.
 * Uses the Intersection Observer API for performant scroll-based reveals.
 *
 * @param threshold - Fraction of element visible before triggering (0–1)
 * @returns A ref to attach and a boolean indicating visibility
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Only trigger once
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
