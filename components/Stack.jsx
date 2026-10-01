"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";
import { bg } from "@/lib/colors";
import SectionHeading from "./SectionHeading";

export default function Stack() {
  return (
    <section id="stack" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Toolbox" color="mint" title={<>The <span className="marker">tools</span> I reach for</>}>
          Daily drivers, plus the practices that shaped how I build.
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g, gi) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 40, rotate: gi % 2 ? 3 : -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: [-1.2, 1, -0.6, 0.8, -1, 1.2][gi] }}
              whileHover={{ rotate: 0, y: -6 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ type: "spring", stiffness: 140, damping: 15, delay: (gi % 3) * 0.08 }}
              className={`brut rounded-3xl p-6 ${bg[g.color]}`}
            >
              <h3 className="mb-5 font-pixel text-xl">{g.group}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((item, i) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.12, rotate: i % 2 ? 5 : -5 }}
                    whileTap={{ scale: 0.92 }}
                    className="brut-sm cursor-default rounded-xl bg-cream px-3.5 py-1.5 font-bold"
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
