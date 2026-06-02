import { useEffect } from "react";

/**
 * useScrollReveal
 * Observes all elements with .reveal, .reveal-left, .reveal-right, .reveal-scale
 * and adds the .visible class when they enter the viewport.
 *
 * Call this once in App.jsx:  useScrollReveal();
 */
export default function useScrollReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const elements = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once revealed, stop watching (no re-hiding on scroll back up)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,      // trigger when 12% of element is visible
        rootMargin: "0px 0px -40px 0px",  // slight bottom offset for feel
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}