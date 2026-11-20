import { useEffect } from "react";

/**
 * Adds `is-visible` to every element carrying `.reveal` or `.reveal-scale`
 * once it scrolls into view. Re-scans when the route content changes.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const selector = ".reveal, .reveal-scale";

    if (reducedMotion.matches) {
      document
        .querySelectorAll(selector)
        .forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const scan = () => {
      document.querySelectorAll(selector).forEach((node) => {
        if (!node.classList.contains("is-visible") && !node.dataset.revealBound) {
          node.dataset.revealBound = "true";
          observer.observe(node);
        }
      });
    };

    scan();

    const mutationObserver = new MutationObserver(() => scan());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
