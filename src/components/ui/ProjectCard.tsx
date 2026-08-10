"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rX = useTransform(rotateX, (v) => `${v}deg`);
  const rY = useTransform(rotateY, (v) => `${v}deg`);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width - 0.5) * 2;
    const py = (y / rect.height - 0.5) * 2;
    rotateY.set(px * 6);
    rotateX.set(-py * 6);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
        className="card-soft group relative overflow-hidden transition-shadow hover:shadow-glow"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {(project.demo || project.github) && (
            <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center gap-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-900 backdrop-blur-md transition-transform hover:scale-105"
                >
                  <FiExternalLink size={12} /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-transform hover:scale-105"
                >
                  <FiGithub size={12} /> Code
                </a>
              )}
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
