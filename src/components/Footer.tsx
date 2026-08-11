"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SOCIALS = [
  { href: "https://github.com/amedfg", icon: FiGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/achmadfg",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:achmadf2301@gmail.com", icon: FiMail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/60 bg-white/40 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/40">
      <div className="container-px flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Achmad Fauzi Guritno. Crafted with
          Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white/60 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
