"use client";

import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="A few things I've shipped recently."
      subtitle="Side projects and client work, picked to show range across product types, stacks, and team sizes."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
