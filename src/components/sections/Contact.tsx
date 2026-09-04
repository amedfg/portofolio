"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { Section } from "@/components/ui/Section";

const SOCIALS = [
  {
    href: "mailto:achmadf2301@gmail.com",
    icon: FiMail,
    label: "Email",
    handle: "achmadf2301@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/achmadfg",
    icon: FiLinkedin,
    label: "LinkedIn",
    handle: "in/achmadfg",
  },
  {
    href: "https://github.com/amedfg",
    icon: FiGithub,
    label: "GitHub",
    handle: "@amedfg",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setFailed(true);
      setTimeout(() => setFailed(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Have a project in mind? Let's talk."
      subtitle="I&apos;m open to freelance work, full-time roles, and interesting collaborations. I usually reply within a day or two."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="card-soft p-6 lg:col-span-2"
        >
          <h3 className="font-semibold tracking-tight">Reach me directly</h3>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
            Prefer email or social? I&apos;m there too.
          </p>

          <ul className="mt-6 space-y-3">
            {SOCIALS.map(({ href, icon: Icon, label, handle }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-stone-200 bg-white/40 p-3 transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:bg-white dark:border-stone-700/40 dark:bg-stone-800/10 dark:hover:bg-white/5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                    <Icon size={15} />
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{label}</div>
                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      {handle}
                    </div>
                  </div>
                  <span className="text-xs text-stone-400 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-soft relative p-6 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              id="name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Jane Doe"
              required
            />
            <Field
              label="Email"
              id="email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="jane@company.com"
              required
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the project, timeline, and goals…"
              className="w-full resize-none rounded-xl border border-stone-200 bg-white/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-stone-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:border-stone-700/40 dark:bg-stone-800/10 dark:placeholder:text-stone-500"
            />
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-xs text-stone-500 dark:text-stone-400">
              By submitting, you agree to be contacted by email.
            </p>
            <button
              type="submit"
              disabled={loading || sent}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending…
                </>
              ) : (
                <>
                  <FiSend /> Send message
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute inset-x-6 bottom-6 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/90 p-3 text-sm font-medium text-emerald-700 backdrop-blur-md dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
              >
                <FiCheckCircle /> Thanks — your message is on its way!
              </motion.div>
            )}
            {failed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute inset-x-6 bottom-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50/90 p-3 text-sm font-medium text-red-700 backdrop-blur-md dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
              >
                Gagal mengirim — coba lagi atau email langsung ke achmadf2301@gmail.com
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </Section>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone-200 bg-white/60 px-4 py-2.5 text-sm outline-none transition-all placeholder:text-stone-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:border-stone-700/40 dark:bg-stone-800/10 dark:placeholder:text-stone-500"
      />
    </div>
  );
}
