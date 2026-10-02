"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Burst, Plus, Squiggle, Star } from "./Deco";
import portrait from "@/assets/profile-img.png";

// Draggable tech stickers around the portrait: [label, bg class, rotation, position]
const stickers = [
  ["Java", "bg-sun", -8, "left-[-6%] top-[8%]"],
  ["Kafka", "bg-pink", 7, "right-[-4%] top-[2%]"],
  ["React", "bg-sky", -5, "left-[-9%] top-[52%]"],
  ["Spring Boot", "bg-mint", 6, "right-[-7%] top-[58%]"],
  ["GraphQL", "bg-grape", -6, "left-[18%] bottom-[-4%]"],
];

const letterColors = ["var(--accent-2)", "var(--accent)", "#2ee6a6", "#4f8bff", "var(--accent-2)", "var(--accent)", "#2ee6a6"];

function BouncyName({ text }) {
  return (
    <span aria-label={text} className="inline-flex">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ y: 80, opacity: 0, rotate: -12 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 12, delay: 0.25 + i * 0.06 }}
          whileHover={{ y: -14, rotate: i % 2 ? 6 : -6, transition: { type: "spring", stiffness: 400, damping: 8 } }}
          className="inline-block cursor-default"
          style={{ textShadow: `5px 5px 0 ${letterColors[i % letterColors.length]}` }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const area = useRef(null);
  return (
    <section id="top" className="relative px-5 pb-16 pt-32 sm:px-8 lg:pt-40">
      <Star className="bob absolute left-[4%] top-40 hidden h-10 w-10 lg:block" />
      <Plus className="bob absolute right-[46%] top-36 hidden h-8 w-8 lg:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="brut-sm mb-6 inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 text-sm font-bold"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#151515] opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#151515]" />
            </span>
            {profile.role} @ {profile.company} · {profile.location}
          </motion.p>

          <h1>
            <span className="block text-3xl font-extrabold sm:text-4xl">
              {profile.greeting} <span className="wave" aria-hidden>👋</span>
            </span>
            <span className="relative mt-1 block text-[clamp(4.2rem,15vw,9.5rem)] font-extrabold leading-[0.95] tracking-tight">
              <BouncyName text={profile.firstName} />
              <Squiggle className="absolute -bottom-3 left-0 h-3 w-[70%] sm:h-4" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 max-w-xl text-xl font-medium leading-snug sm:text-2xl"
          >
            I build the <span className="marker font-bold">backend</span> that keeps integrations running smoothly, and make it feel good on the front end too.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="brut press rounded-2xl bg-pink px-7 py-3.5 text-lg font-extrabold">
              Say hi →
            </a>
            <a href="#work" className="brut press rounded-2xl bg-cream px-7 py-3.5 text-lg font-extrabold">
              See my work
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="brut-sm press grid h-12 w-12 place-items-center rounded-full bg-ink text-cream">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" /></svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="brut-sm press grid h-12 w-12 place-items-center rounded-full bg-sky">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
            </a>
          </motion.div>
        </div>

        {/* Portrait + draggable stickers */}
        <div ref={area} className="relative mx-auto w-full max-w-sm py-6 lg:max-w-none">
          <div className="brut absolute inset-6 -rotate-6 rounded-[2.5rem] bg-accent" aria-hidden />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.3 }}
            className="brut relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-cream"
          >
            <Image src={portrait} alt="Portrait of Skander Ben Mekki" fill priority sizes="(min-width: 1024px) 420px, 90vw" className="object-cover object-top" />
          </motion.div>

          {stickers.map(([label, color, rot, pos], i) => (
            <motion.div
              key={label}
              drag
              dragConstraints={area}
              dragElastic={0.25}
              dragMomentum={false}
              whileHover={{ scale: 1.1 }}
              whileDrag={{ scale: 1.15, zIndex: 30, cursor: "grabbing" }}
              initial={{ opacity: 0, scale: 0, rotate: rot * 3 }}
              animate={{ opacity: 1, scale: 1, rotate: rot }}
              transition={{ type: "spring", stiffness: 260, damping: 12, delay: 0.9 + i * 0.12 }}
              className={`brut-sm absolute z-20 cursor-grab touch-none select-none rounded-xl px-3.5 py-1.5 text-sm font-extrabold sm:text-base ${color} ${pos}`}
            >
              {label}
            </motion.div>
          ))}

          <Burst className="absolute -bottom-4 -right-3 z-20 h-28 w-28 sm:-right-8 sm:h-32 sm:w-32" fill="var(--accent-2)">
            <p className="font-pixel text-3xl font-bold leading-none">5+</p>
            <p className="text-[11px] font-extrabold uppercase leading-tight">years<br />shipping</p>
          </Burst>

          <p className="absolute -top-2 right-4 z-10 hidden -rotate-6 font-pixel text-sm sm:block">
            ← psst, drag the stickers
          </p>
        </div>
      </div>
    </section>
  );
}
