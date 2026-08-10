"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-20 py-24 sm:py-28", className)}
    >
      <div className="container-px">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {eyebrow}
              </span>
            )}
            {title && <h2 className="section-heading mt-4">{title}</h2>}
            {subtitle && <p className="section-sub">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
