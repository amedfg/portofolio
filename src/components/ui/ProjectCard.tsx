"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
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
    rotateY.set(px * 4);
    rotateX.set(-py * 4);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      style={{ perspective: 1200 }}
      className={`h-full ${isFeatured && index === 0 ? "lg:col-span-2" : ""}`}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
        className="card-soft group relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-soft hover:border-amber-500/40"
      >
        {/* Visual Graphic Header */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-950/40 border-b border-stone-200/60 dark:border-white/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Subtle Category Badge Top-Left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center rounded-md bg-stone-900/80 px-2.5 py-1 text-[10px] font-semibold text-amber-400 backdrop-blur-md border border-amber-500/30">
              {project.category}
            </span>
          </div>

          {/* Action Links Overlay */}
          <div className="absolute inset-0 bg-stone-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-end p-3 gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105"
              >
                <FiExternalLink size={13} /> Live System
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-stone-900/90 border border-stone-200/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-transform hover:scale-105"
              >
                <FiGithub size={13} /> Code
              </a>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="flex flex-col flex-1 p-4 sm:p-6 justify-between">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
            </div>
            
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.description}
            </p>

            {/* Architecture Highlights / Outcomes */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-3.5 space-y-1.5 border-t border-stone-200/70 dark:border-white/5 pt-3">
                {project.highlights.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
                    <FiCheckCircle className="mt-0.5 text-amber-500 shrink-0" size={12} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Tech Badges */}
          <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-stone-200/80 bg-stone-100/70 px-2 py-0.5 text-[11px] font-mono font-medium text-stone-700 dark:border-stone-700/40 dark:bg-stone-800/20 dark:text-stone-300"
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
