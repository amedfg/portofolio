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
    <footer className="relative border-t border-stone-200/60 bg-white/40 backdrop-blur-md dark:border-stone-700/40 dark:bg-stone-950/40">
      <div className="container-px flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          © {new Date().getFullYear()} Achmad Fauzi Guritno. Built with
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
              className="grid h-9 w-9 place-items-center rounded-lg border border-stone-200 bg-white/60 text-stone-600 transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600 dark:border-stone-700/40 dark:bg-stone-800/20 dark:text-stone-300 dark:hover:text-amber-400"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
