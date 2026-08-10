"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 120) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [sectionIds, offset]);

  return active;
}
