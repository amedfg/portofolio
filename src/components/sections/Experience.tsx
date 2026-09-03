"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="The path that got me here."
      subtitle="A short tour through the teams and products I've shipped with."
    >
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-amber-500/30 via-stone-200 to-transparent dark:via-stone-700/20 sm:block"
        />

        <ol className="space-y-10">
          {EXPERIENCE.map((item, i) => (
            <motion.li
              key={item.role + item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative sm:pl-14"
            >
              <div className="absolute left-0 top-2 hidden h-8 w-8 items-center justify-center rounded-full border border-amber-400 bg-white shadow-glow dark:border-amber-500/30 dark:bg-stone-950 sm:flex">
                <FiBriefcase
                  className="text-amber-700 dark:text-amber-400"
                  size={14}
                />
              </div>

              <div className="card-soft p-6 transition-transform hover:-translate-y-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-stone-500 dark:text-stone-400">
                    <span className="rounded-full border border-stone-200 px-2.5 py-1 font-medium dark:border-stone-700/40">
                      {item.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiMapPin size={11} /> {item.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
