"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { asset } from "@/lib/asset";
import { Burst } from "./Deco";
import SectionHeading from "./SectionHeading";

const WEB3FORMS_KEY = "bb729fc3-b82b-4de5-ac26-bcb82f1203d8";

const field =
  "w-full rounded-xl border-[2.5px] border-ink bg-cream px-4 py-3 font-medium outline-none transition placeholder:text-ink/40 focus:-translate-y-0.5 focus:shadow-[4px_4px_0_var(--ink)]";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending", message: "" });
    try {
      const body = new FormData(form);
      body.append("access_key", WEB3FORMS_KEY);
      body.append("subject", "New message from your portfolio");
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      form.reset();
      setStatus({ state: "ok", message: "Message sent! I'll get back to you soon 🎉" });
    } catch {
      setStatus({ state: "error", message: "Oops, that didn't go through. Try again, or ping me on LinkedIn." });
    }
  };

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Contact" color="tangerine" title={<>Let's <span className="marker">talk</span>!</>}>
          An opportunity, a question about my work, or just a good chat about tech, creativity or anything in between.
        </SectionHeading>

        <div className="brut relative grid gap-10 rounded-[2rem] bg-accent p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Burst className="absolute -right-4 -top-10 z-10 hidden h-28 w-28 rotate-12 sm:grid" fill="var(--accent-2)">
            <p className="font-pixel text-2xl font-bold leading-none">hi!</p>
          </Burst>

          <div className="space-y-4">
            <p className="text-2xl font-extrabold leading-tight">Find me around the internet</p>
            {[
              { label: "LinkedIn", value: "skander-ben-mekki", href: profile.linkedin, cls: "bg-sky" },
              { label: "GitHub", value: "skanderbm123", href: profile.github, cls: "bg-ink text-cream" },
              { label: "Resume", value: "Download the PDF", href: asset(profile.resume), cls: "bg-pink" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={`brut press flex items-center justify-between rounded-2xl px-5 py-4 ${l.cls}`}>
                <span>
                  <span className="block font-pixel text-sm opacity-80">{l.label}</span>
                  <span className="block text-lg font-extrabold">{l.value}</span>
                </span>
                <span aria-hidden className="text-2xl">↗</span>
              </a>
            ))}
            <p className="pt-2 font-bold">📍 {profile.location}</p>
          </div>

          <motion.form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block font-pixel text-sm">Your name</span>
                <input name="name" type="text" required autoComplete="name" placeholder="Ada Lovelace" className={field} />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-pixel text-sm">Your email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="ada@example.com" className={field} />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block font-pixel text-sm">Message</span>
              <textarea name="message" rows={6} required placeholder="What's on your mind?" className={`${field} resize-y`} />
            </label>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status.state === "sending"} className="brut press rounded-2xl bg-pink px-8 py-3.5 text-lg font-extrabold disabled:opacity-60">
                {status.state === "sending" ? "Sending…" : "Send it →"}
              </button>
              <p role="status" aria-live="polite" className="font-bold">{status.message}</p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
