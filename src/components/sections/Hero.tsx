"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiArrowDown,
  FiTerminal,
  FiCpu,
  FiLayers,
  FiPlay,
} from "react-icons/fi";

const COMMANDS: Record<
  string,
  {
    label: string;
    response: string;
    badge: string;
    details: string[];
  }
> = {
  "curl capabilities": {
    label: "capabilities",
    response: "200 OK (24ms)",
    badge: "API Gateway",
    details: [
      "✓ 4-Layer Domain-Driven Design (DDD)",
      "✓ Async Workers (Celery & Redis queue)",
      "✓ LLM Orchestration (LiteLLM, Ollama)",
      "✓ Production Docker (CF Tunnel)",
    ],
  },
  "amed --stack": {
    label: "stack",
    response: "Languages & Infra",
    badge: "Core Engineering",
    details: [
      "Languages: Python, PHP, TypeScript, Go",
      "Frameworks: FastAPI, Laravel 12, Next.js",
      "Storage: PostgreSQL, Redis, MinIO (S3)",
      "Infra: Docker, Cloudflare, Linux, Celery",
    ],
  },
  "amed --status": {
    label: "status",
    response: "Ready for Hire",
    badge: "Available",
    details: [
      "Roles: Backend Engineer, AI Systems",
      "Focus: Scalable Microservices & AI APIs",
      "Location: Indonesia (Remote Worldwide)",
    ],
  },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [activeCmd, setActiveCmd] = useState<string>("curl capabilities");
  const commandKeys = Object.keys(COMMANDS);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[550px] bg-gradient-to-b from-amber-500/5 via-stone-500/5 to-transparent" />
      
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-28 -z-10 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -right-32 top-40 -z-10 h-72 w-72 rounded-full bg-stone-400/10 blur-3xl pointer-events-none"
      />

      <motion.div
        style={{ y, opacity }}
        className="container-px w-full grid items-start gap-8 lg:gap-10 lg:grid-cols-12"
      >
        {/* Left column: Bio and quick CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center w-full min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.1rem] text-stone-900 dark:text-stone-100 break-words"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Achmad Fauzi Guritno</span>.
            <br />
            Architecting{" "}
            <span className="text-amber-600 dark:text-amber-400 font-extrabold">
              Scalable Backends
            </span>{" "}
            & AI Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 w-full max-w-xl text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed break-words"
          >
            Backend & Systems Engineer specializing in{" "}
            <span className="font-semibold text-stone-900 dark:text-stone-100">
              Domain-Driven Design (DDD)
            </span>
            , high-throughput microservices, and asynchronous AI agent pipelines.
            Crafting resilient architectures with FastAPI, Laravel 12, PostgreSQL, and Celery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 w-full"
          >
            <a href="/cv.pdf" download className="btn-primary w-full sm:w-auto text-center">
              <FiDownload /> Download Resume
            </a>
            <a href="#projects" className="btn-ghost w-full sm:w-auto text-center">
              <FiLayers /> View Projects
            </a>
            <div className="flex items-center justify-center gap-2 mt-1 sm:mt-0 sm:ml-1">
              <a
                href="https://github.com/amedfg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-stone-200 bg-white/60 text-stone-600 transition-all hover:-translate-y-0.5 hover:text-amber-600 dark:border-stone-700/50 dark:bg-stone-800/30 dark:text-stone-400 dark:hover:text-amber-400"
              >
                <FiGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/achmadfg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-stone-200 bg-white/60 text-stone-600 transition-all hover:-translate-y-0.5 hover:text-amber-600 dark:border-stone-700/50 dark:bg-stone-800/30 dark:text-stone-400 dark:hover:text-amber-400"
              >
                <FiLinkedin size={16} />
              </a>
            </div>
          </motion.div>

          {/* Metric Cards - 100% Mobile Safe Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-xl"
          >
            {[
              { value: "2+ Years", label: "Production" },
              { value: "Sub-50ms", label: "Low Latency" },
              { value: "100%", label: "Self-Hosted" },
            ].map((s) => (
              <div
                key={s.label}
                className="card-soft p-2.5 sm:p-3.5 text-center transition-all hover:-translate-y-0.5 hover:border-amber-500/40"
              >
                <div className="text-xs sm:text-base font-bold tracking-tight text-stone-900 dark:text-stone-100 truncate">
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-xs font-medium text-stone-500 dark:text-stone-400 mt-0.5 truncate">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column: Interactive Backend Terminal & API Inspector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full lg:col-span-5 lg:mt-2 min-w-0"
        >
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 via-stone-400/10 to-amber-400/15 blur-lg opacity-70 pointer-events-none" />

          {/* Terminal Box */}
          <div className="relative rounded-2xl border border-stone-700/80 bg-stone-950/95 shadow-2xl backdrop-blur-xl overflow-hidden text-stone-200">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between border-b border-stone-800 bg-stone-900/90 px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80 shrink-0" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80 shrink-0" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 shrink-0" />
                <span className="ml-1.5 font-mono text-[11px] sm:text-xs text-stone-400 font-medium truncate">
                  amed@server:~ (api)
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <span className="inline-flex items-center gap-1 rounded bg-stone-800 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-amber-400">
                  <FiCpu className="animate-spin" size={10} /> LIVE DEMO
                </span>
              </div>
            </div>

            {/* Interactive Command Tabs */}
            <div className="flex border-b border-stone-800/80 bg-stone-900/40 px-2 pt-2 gap-1 overflow-x-auto scrollbar-none">
              {commandKeys.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => setActiveCmd(cmd)}
                  className={`flex items-center gap-1 rounded-t-lg px-2.5 py-1.5 font-mono text-[10px] sm:text-xs transition-colors whitespace-nowrap ${
                    activeCmd === cmd
                      ? "bg-stone-800/90 text-amber-400 border-t border-x border-amber-600/40"
                      : "text-stone-400 hover:text-stone-200 hover:bg-stone-800/40"
                  }`}
                >
                  <FiTerminal size={11} />
                  <span>{COMMANDS[cmd].label}</span>
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed space-y-2.5 sm:space-y-3">
              {/* Active command prompt */}
              <div className="flex items-center gap-1.5 text-stone-300">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-white font-semibold break-all">{activeCmd}</span>
              </div>

              {/* Status and Badge */}
              <div className="flex items-center justify-between rounded-lg bg-stone-900/90 border border-stone-800 p-2 sm:p-2.5 gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-emerald-300 font-semibold text-[10px] sm:text-xs truncate">
                    {COMMANDS[activeCmd].response}
                  </span>
                </div>
                <span className="rounded bg-amber-500/20 text-amber-400 px-2 py-0.5 text-[9px] sm:text-[10px] font-sans font-semibold border border-amber-500/30 shrink-0">
                  {COMMANDS[activeCmd].badge}
                </span>
              </div>

              {/* Details List */}
              <div className="space-y-1 pl-0.5 sm:pl-1">
                {COMMANDS[activeCmd].details.map((item, i) => (
                  <div key={i} className="text-stone-300 flex items-start gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs">
                    <span className="text-amber-400 mt-0.5 shrink-0">❯</span>
                    <span className="break-words">{item}</span>
                  </div>
                ))}
              </div>

              {/* Terminal Footer */}
              <div className="mt-2.5 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-stone-300 font-sans">
                <span>Select tabs to inspect</span>
                <a
                  href="#contact"
                  className="text-amber-400 hover:text-amber-200 hover:underline flex items-center gap-1 font-mono font-medium"
                >
                  connect --now <FiPlay size={9} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#projects"
        aria-label="Scroll to Projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-stone-400 hover:text-amber-500 transition-colors sm:block"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
