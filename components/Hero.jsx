"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, motion, useInView } from "framer-motion";
import { profile, stats } from "@/lib/data";
import portrait from "@/assets/profile-img.png";

const ease = [0.22, 1, 0.36, 1];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.textContent = `${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => (node.textContent = `${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const terminal = [
  ["whoami", "skander ben mekki"],
  ["role", "software engineer II @ appdirect"],
  ["focus", "integrations · microservices · full-stack"],
  ["stack", "java spring-boot kafka graphql react"],
];

function Terminal() {
  return (
    <div className="card w-full overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-muted">~/skander</span>
      </div>
      <div className="space-y-2.5 p-4 font-mono text-[12.5px] leading-relaxed">
        {terminal.map(([cmd, out], i) => (
          <motion.div
            key={cmd}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + i * 0.45, duration: 0.4 }}
          >
            <p>
              <span className="text-accent">$</span> {cmd}
            </p>
            <p className="text-muted">{out}</p>
          </motion.div>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 + terminal.length * 0.45 }}
        >
          <span className="text-accent">$</span> <span className="cursor-blink inline-block h-3.5 w-1.5 translate-y-0.5 bg-text" />
        </motion.p>
      </div>
    </div>
  );
}

export default function Hero() {
  let wordIndex = 0;
  return (
    <section id="top" className="relative px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.role} · {profile.company} · {profile.location}
          </motion.p>

          <h1 className="text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            <span className="sr-only">{profile.headline.join(" ")}</span>
            <span aria-hidden>
              {profile.headline.map((line, li) => (
                <span key={li} className="block overflow-hidden pb-[0.12em]">
                  {line.split(" ").map((word) => {
                    const i = wordIndex++;
                    const accent = profile.accentWords.includes(word);
                    return (
                      <motion.span
                        key={i}
                        initial={{ y: "110%", rotate: 3 }}
                        animate={{ y: 0, rotate: 0 }}
                        transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease }}
                        className={`mr-[0.25em] inline-block origin-left ${
                          accent ? "font-serif font-normal italic text-accent" : ""
                        }`}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition hover:brightness-110"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="rounded-full border border-line-strong px-6 py-3 font-medium transition hover:bg-surface-2"
            >
              See my work
            </a>
            <div className="ml-1 flex items-center gap-1 text-muted">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-surface-2 hover:text-text">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" /></svg>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-surface-2 hover:text-text">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line-strong">
            <Image
              src={portrait}
              alt="Portrait of Skander Ben Mekki"
              fill
              priority
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover object-top grayscale-[0.15] transition duration-700 hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          </div>
          <div className="floaty absolute -bottom-10 -left-4 w-[88%] sm:-left-10 lg:-left-16">
            <Terminal />
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-28 grid max-w-6xl grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className="px-1 py-7 sm:px-8"
          >
            <p className="font-mono text-4xl font-medium tracking-tight sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
