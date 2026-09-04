"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiTool } from "react-icons/fi";
import { Section } from "@/components/ui/Section";

const FOCUS_AREAS = [
  {
    icon: FiServer,
    title: "Backend & APIs",
    text: "Scalable REST APIs in Laravel & Flask with Domain-Driven Design and clean data models.",
  },
  {
    icon: FiCode,
    title: "AI Integration",
    text: "AI-driven services with LiteLLM and Ollama — chat, document processing, and resume screening.",
  },
  {
    icon: FiTool,
    title: "Auth & DevOps",
    text: "OIDC-based SSO with Zitadel, CI/CD pipelines on GitLab, and production-ready delivery.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A backend engineer who ships."
      subtitle="I work across the whole backend: API design, database schema, queues, and deployment. Here's what that looks like in practice."
    >
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-stone-600 dark:text-stone-300 lg:col-span-7"
        >
          <p>
            I&apos;m a backend engineer with{" "}
            <span className="font-semibold text-stone-900 dark:text-stone-100">
              2+ years of professional experience
            </span>
            , currently at PT. Bodha Padma Nawadhya in Jakarta. Before that,
            most of what I learned came from breaking and fixing my own
            projects.
          </p>
          <p>
            Day to day I build REST APIs with Laravel and Flask using a
            4-layer Domain-Driven Design structure, integrate LLM features via
            LiteLLM and Ollama, and work with PostgreSQL, MongoDB, MinIO, and
            S3. Auth is OIDC-based SSO with Zitadel.
          </p>
          <p>
            I&apos;m a Computer Science graduate from Diponegoro University
            (GPA 3.61), and I enjoy collaborating in agile teams, conducting
            code reviews, and supporting CI/CD pipelines to deliver
            production-ready software.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:col-span-5">
          {FOCUS_AREAS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card-soft group flex items-start gap-4 p-5"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-500 text-white transition-transform group-hover:scale-110">
                <item.icon size={18} />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
