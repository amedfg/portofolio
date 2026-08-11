"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowDown,
} from "react-icons/fi";

const HERO_IMAGE = "/projects/hero.svg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-brand-500/10 via-transparent to-transparent" />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-32 -z-10 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -right-32 top-64 -z-10 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl"
      />

      <motion.div
        style={{ y, opacity }}
        className="container-px grid items-center gap-12 lg:grid-cols-12"
      >
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to backend & AI engineering roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Achmad Fauzi Guritno</span>.
            <br />
            Backend Engineer building{" "}
            <span className="gradient-text">scalable</span> APIs & AI services.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            Backend Engineer with 2+ years building high-performance backend
            systems, enterprise applications, and AI-driven services —
            specializing in scalable REST APIs with Laravel and Flask,
            Domain-Driven Design, and integrating modern AI with LiteLLM and
            Ollama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="/cv.pdf" download className="btn-primary">
              <FiDownload /> Download CV
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail /> Get in touch
            </a>
            <div className="ml-1 hidden items-center gap-2 sm:flex">
              <a
                href="https://github.com/amedfg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/60 text-slate-600 transition-all hover:-translate-y-0.5 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300"
              >
                <FiGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/achmadfg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/60 text-slate-600 transition-all hover:-translate-y-0.5 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300"
              >
                <FiLinkedin size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {[
              { value: "2+", label: "Years exp." },
              { value: "6", label: "Companies" },
              { value: "10+", label: "Projects" },
            ].map((s) => (
              <div
                key={s.label}
                className="card-soft p-4 text-center transition-transform hover:-translate-y-0.5"
              >
                <div className="text-xl font-bold tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:col-span-5"
        >
          <div className="relative aspect-square rounded-[2rem] border border-white/30 bg-gradient-to-br from-brand-500/30 to-fuchsia-500/30 p-2 shadow-glow backdrop-blur-md">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src={HERO_IMAGE}
                alt="Portrait placeholder"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 -top-4 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80"
          >
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Now building
            </div>
            <div className="text-sm font-semibold">Laravel 12 · DDD APIs</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute -bottom-4 -right-4 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80"
          >
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Stack
            </div>
            <div className="text-sm font-semibold">Laravel · Flask · Postgres</div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 dark:text-slate-400 sm:block"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
