"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { bg, cycle } from "@/lib/colors";
import SectionHeading from "./SectionHeading";

const tagColors = ["bg-sun", "bg-pink", "bg-mint", "bg-sky", "bg-grape", "bg-tangerine"];

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Experience" color="sun" title={<>Where I've <span className="marker">worked</span></>}>
          From QA intern to leading integration work. Four teams, one thread: building software other people can depend on.
        </SectionHeading>

        <ol className="space-y-10">
          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, x: i % 2 ? 60 : -60, rotate: i % 2 ? 3 : -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: i % 2 ? 0.4 : -0.4 }}
              whileHover={{ rotate: 0, y: -4 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            >
              <article className="brut overflow-hidden rounded-3xl bg-cream">
                <header className={`flex flex-wrap items-center justify-between gap-3 border-b-[2.5px] border-ink px-6 py-4 sm:px-8 ${bg[job.color]}`}>
                  <div className="flex items-center gap-3">
                    <span className="brut-sm grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream font-pixel text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      <a href={job.link} target="_blank" rel="noopener noreferrer" className="decoration-[3px] underline-offset-4 hover:underline">
                        {job.company} <span aria-hidden>↗</span>
                      </a>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {job.current && (
                      <span className="brut-sm -rotate-3 rounded-full bg-ink px-3 py-1 font-pixel text-sm text-cream">NOW</span>
                    )}
                    <span className="brut-sm rounded-full bg-cream px-3.5 py-1 text-sm font-bold">{job.years}</span>
                  </div>
                </header>

                <div className="px-6 py-6 sm:px-8">
                  <p className="text-lg font-extrabold">{job.title}</p>
                  <p className="text-sm font-semibold text-ink/60">{job.location}</p>
                  <p className="mt-4 text-lg font-medium">{job.summary}</p>
                  <ul className="mt-4 space-y-3 font-medium leading-relaxed text-ink/80">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span aria-hidden className={`mt-[0.45em] h-3 w-3 shrink-0 rotate-12 border-2 border-ink ${bg[cycle[i % cycle.length]]}`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                    {job.tags.map((t, ti) => (
                      <motion.li
                        key={t}
                        whileHover={{ rotate: ti % 2 ? 4 : -4, y: -3 }}
                        className={`brut-sm rounded-full px-3 py-1 text-sm font-bold ${tagColors[(ti + i) % tagColors.length]}`}
                      >
                        {t}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
