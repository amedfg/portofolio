"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SKILL_CATEGORIES } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for, and feel at home with."
      subtitle="The stack I use day to day, and how deep it goes."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: catIdx * 0.08 }}
            className="card-soft p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-semibold tracking-tight">{category.title}</h3>
              <span className="text-xs uppercase tracking-wider text-stone-400">
                {category.items.length} tools
              </span>
            </div>

            <div className="space-y-3">
              {category.items.map((skill) => {
                const Icon = skill.icon;
                const level =
                  skill.level >= 90
                    ? "Expert"
                    : skill.level >= 80
                      ? "Advanced"
                      : "Familiar";
                return (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="flex min-w-0 items-center gap-2 font-medium">
                      <Icon
                        size={16}
                        style={{ color: skill.color }}
                        className="shrink-0"
                      />
                      <span className="truncate">{skill.name}</span>
                    </span>
                    <span className="shrink-0 text-xs text-stone-400 dark:text-stone-500">
                      {level}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 flex flex-wrap gap-2"
      >
        {[
          "REST APIs",
          "Domain-Driven Design",
          "Zitadel OIDC / SSO",
          "WebSocket",
          "Laravel Nova",
          "AWS S3",
          "MinIO",
          "Deep Learning",
          "CNN / ResNet50",
          "Image Classification",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-xs font-medium text-stone-600 backdrop-blur-md transition-colors hover:border-amber-400 hover:text-amber-600 dark:border-stone-700/40 dark:bg-stone-800/20 dark:text-stone-300 dark:hover:border-amber-500/40 dark:hover:text-amber-400"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </Section>
  );
}
