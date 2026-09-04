"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-stone-200/60 bg-white/90 backdrop-blur-xl dark:border-stone-700/40 dark:bg-stone-950/90"
          : "bg-transparent",
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-500 text-sm font-bold text-white">
            A
          </span>
          <span className="hidden text-sm font-semibold tracking-wide sm:block">
            Achmad<span className="text-amber-600">.</span>dev
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-stone-900 dark:text-white"
                      : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-lg bg-stone-100 dark:bg-white/10"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((s) => !s)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-stone-200 bg-white/60 backdrop-blur-md md:hidden dark:border-stone-700/40 dark:bg-stone-800/20"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-stone-200/60 bg-white/90 backdrop-blur-xl md:hidden dark:border-stone-700/40 dark:bg-stone-950/80"
          >
            <ul className="container-px flex flex-col py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium",
                      active === link.id
                        ? "bg-stone-100 text-stone-900 dark:bg-white/10 dark:text-white"
                        : "text-stone-600 dark:text-stone-300",
                    )}
                  >
                    {link.label}
                    {active === link.id && (
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
