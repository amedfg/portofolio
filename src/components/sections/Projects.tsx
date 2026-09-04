"use client";

import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { useState } from "react";

const CATEGORIES = [
  "All Systems",
  "Full-Stack & AI",
  "Backend & Architecture",
  "Enterprise & System",
] as const;

export function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All Systems");

  const filteredProjects =
    activeTab === "All Systems"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <Section
      id="projects"
      eyebrow="Architecture & Systems"
      title="Things I've built and shipped."
      subtitle="A mix of production systems at work and self-hosted projects. What's public is linked; the rest is under NDA."
    >
      {/* Category Filter Tabs */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`shrink-0 whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeTab === cat
                ? "bg-amber-500 text-white"
                : "border border-stone-200 bg-stone-50/60 text-stone-600 hover:bg-stone-50 hover:text-stone-900 dark:border-stone-700/40 dark:bg-stone-50/5 dark:text-stone-400 dark:hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
