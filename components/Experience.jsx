"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Tag({ children }) {
  return (
    <li className="rounded-full border border-line bg-surface-2/60 px-3 py-1 font-mono text-xs text-muted">
      {children}
    </li>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 28, mass: 0.4 });

  return (
    <section id="experience" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="Experience"
          title="From QA intern to leading integration work."
        >
          Four teams, one thread: building software that other people can depend on.
        </SectionHeading>

        <ol ref={ref} className="relative">
          {/* timeline rail + scroll-driven fill */}
          <div aria-hidden className="absolute bottom-0 left-[7px] top-2 w-px bg-line md:left-[calc(200px+7px)]">
            <motion.div style={{ scaleY: fill }} className="h-full origin-top bg-accent" />
          </div>

          {experience.map((job, i) => (
            <li key={job.company} className="relative grid gap-4 pb-14 pl-9 last:pb-0 md:grid-cols-[200px_1fr] md:gap-12 md:pl-0">
              <Reveal className="md:pr-10 md:text-right" y={16}>
                <p className="font-mono text-sm text-text">{job.years}</p>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
              </Reveal>

              <span
                aria-hidden
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-bg md:left-[200px] ${
                  job.current ? "bg-accent shadow-[0_0_0_4px_var(--accent-soft)]" : "bg-line-strong"
                }`}
              />

              <Reveal delay={0.05} className="md:pl-10">
                <article className="card group p-6 transition-colors hover:border-line-strong sm:p-7">
                  <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold tracking-tight">
                      <a href={job.link} target="_blank" rel="noopener noreferrer" className="decoration-accent underline-offset-4 hover:underline">
                        {job.company}
                        <span aria-hidden className="ml-1 inline-block text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">↗</span>
                      </a>
                    </h3>
                    {job.current && (
                      <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                        Current
                      </span>
                    )}
                  </header>
                  <p className="mt-1 text-muted">{job.title}</p>
                  <p className="mt-4">{job.summary}</p>
                  <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-muted">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span aria-hidden className="mt-[0.6em] h-1 w-3 shrink-0 rounded-full bg-accent/70" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {job.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
