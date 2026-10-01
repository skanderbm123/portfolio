"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Stack() {
  return (
    <section id="stack" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" label="Stack" title="The tools I reach for.">
          Daily drivers first, with the languages and practices that shaped how I build.
        </SectionHeading>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g, gi) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.6, delay: gi * 0.07 }}
              className="bg-bg p-6 transition-colors hover:bg-surface sm:p-7"
            >
              <h3 className="eyebrow mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {g.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.07 + i * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
