"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { asset } from "@/lib/asset";
import SectionHeading from "./SectionHeading";

const WEB3FORMS_KEY = "bb729fc3-b82b-4de5-ac26-bcb82f1203d8";

const field =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending", message: "Sending…" });
    try {
      const body = new FormData(form);
      body.append("access_key", WEB3FORMS_KEY);
      body.append("subject", "New message from your portfolio");
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      form.reset();
      setStatus({ state: "ok", message: "Thanks. Your message is on its way, and I'll get back to you soon." });
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try again, or reach out on LinkedIn." });
    }
  };

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" label="Contact" title="Let's build something that lasts.">
          Whether it's an opportunity, a question about my work, or just a good conversation about tech, my inbox is open.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {[
              { label: "LinkedIn", value: "skander-ben-mekki", href: profile.linkedin },
              { label: "GitHub", value: "skanderbm123", href: profile.github },
              { label: "Resume", value: "Download PDF", href: asset(profile.resume) },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center justify-between p-5 transition hover:border-accent"
              >
                <span>
                  <span className="eyebrow block">{l.label}</span>
                  <span className="mt-1 block font-medium">{l.value}</span>
                </span>
                <span aria-hidden className="text-xl text-muted transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">↗</span>
              </a>
            ))}
            <p className="pt-3 text-sm text-muted">Based in {profile.location}.</p>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card space-y-4 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow mb-2 block">Name</span>
                <input name="name" type="text" required autoComplete="name" placeholder="Ada Lovelace" className={field} />
              </label>
              <label className="block">
                <span className="eyebrow mb-2 block">Email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="ada@example.com" className={field} />
              </label>
            </div>
            <label className="block">
              <span className="eyebrow mb-2 block">Message</span>
              <textarea name="message" rows={6} required placeholder="What are you working on?" className={`${field} resize-y`} />
            </label>
            {/* honeypot for bots */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status.state === "sending"}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-medium text-accent-ink transition hover:brightness-110 disabled:opacity-60"
              >
                {status.state === "sending" ? "Sending…" : "Send message"}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${status.state === "error" ? "text-[#ff6b6b]" : "text-muted"}`}
              >
                {status.state === "sending" ? "" : status.message}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
