"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently scrolled to the top of
 * the viewport (below the sticky header), for scroll-spy nav highlighting.
 * Returns null when disabled, or when none of the sections are in view yet
 * (e.g. still on the hero, above the first tracked section).
 */
function useActiveSection(sectionIds: string[], enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActiveId(null);
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          } else if (entry.boundingClientRect.top > 0) {
            // Exited by scrolling back up above it (not down past it) —
            // clear it so the nav falls back to "Home" instead of staying
            // stuck on the last section that was active.
            setActiveId((current) => (current === entry.target.id ? null : current));
          }
        }
      },
      // Treat a section as "active" once it has crossed just below the
      // sticky header, and until it's mostly scrolled past.
      { rootMargin: "-104px 0px -75% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, enabled]);

  return activeId;
}

export { useActiveSection };
