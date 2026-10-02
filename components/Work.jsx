"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";
import { asset } from "@/lib/asset";
import { bg } from "@/lib/colors";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Lightbox({ project, onClose }) {
  const [i, setI] = useState(0);
  const closeRef = useRef(null);
  const n = project.media.length;
  const go = useCallback((d) => setI((c) => (c + d + n) % n), [n]);

  useEffect(() => {
    const prevFocus = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      prevFocus?.focus?.();
    };
  }, [go, onClose]);

  const m = project.media[i];
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -4, y: 40 }}
        animate={{ scale: 1, rotate: 0, y: 0 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className={`brut w-full max-w-5xl overflow-hidden rounded-3xl ${bg[project.color]}`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <p className="text-lg font-extrabold">{project.title}</p>
          <div className="flex items-center gap-3">
            <span className="brut-sm rounded-full bg-cream px-3 py-0.5 font-pixel text-sm">{i + 1} / {n}</span>
            <button ref={closeRef} onClick={onClose} aria-label="Close gallery" className="brut-sm press grid h-9 w-9 place-items-center rounded-full bg-cream font-bold">
              ✕
            </button>
          </div>
        </div>
        <div className="relative mx-4 aspect-[16/9] overflow-hidden border-[2.5px] border-ink bg-white">
          <AnimatePresence mode="wait">
            <motion.div key={m.src} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.2 }} className="absolute inset-0">
              <Image src={asset(m.src)} alt={m.caption} fill sizes="1024px" className="object-contain" />
            </motion.div>
          </AnimatePresence>
          {n > 1 && (
            <>
              <button onClick={() => go(-1)} aria-label="Previous image" className="brut-sm press absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream text-lg font-bold">←</button>
              <button onClick={() => go(1)} aria-label="Next image" className="brut-sm press absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream text-lg font-bold">→</button>
            </>
          )}
        </div>
        <p className="px-5 py-4 font-bold" aria-live="polite">{m.caption}</p>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const flip = index % 2 === 1;
  return (
    <Reveal rotate={flip ? 0.6 : -0.6} className={`brut grid gap-8 rounded-[2rem] p-5 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${bg[project.color]}`}>
      <motion.button
        onClick={onOpen}
        aria-label={`Open ${project.title} gallery`}
        whileHover={{ rotate: flip ? -2 : 2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`brut group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white text-left ${flip ? "lg:order-2" : ""}`}
      >
        <div className="absolute inset-0 overflow-hidden bg-white">
          <Image
            src={asset(project.media[0].src)}
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
            style={{ transform: `scale(${project.zoom})` }}
          />
        </div>
        <span className="brut-sm absolute bottom-3 left-3 rounded-full bg-cream px-3.5 py-1.5 text-sm font-extrabold transition group-hover:bg-accent">
          📸 {project.media.length} screenshots
        </span>
      </motion.button>

      <div>
        <span className="brut-sm inline-block -rotate-2 rounded-full bg-ink px-3 py-1 font-pixel text-sm text-cream">{project.badge}</span>
        <h3 className="mt-3 text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">{project.title}</h3>
        <p className="mt-1 text-sm font-bold text-[#151515]/70">{project.kind}</p>
        <p className="mt-4 text-lg font-semibold leading-snug">{project.summary}</p>
        <ul className="mt-4 space-y-2 font-medium leading-snug">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden className="mt-[0.35em] h-3 w-3 shrink-0 rotate-12 border-2 border-ink bg-cream" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="brut-sm rounded-full bg-cream px-3 py-1 text-sm font-bold">{t}</li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <button onClick={onOpen} className="brut-sm press rounded-xl bg-cream px-5 py-2.5 font-extrabold">Open gallery</button>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="brut-sm press rounded-xl bg-ink px-5 py-2.5 font-extrabold text-cream">
            View on GitHub ↗
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="work" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Side quests" color="sky" title={<>Stuff I've <span className="marker">built</span> for fun</>}>
          Personal projects where I own the whole thing, from the database to the last pixel (and the ninja).
        </SectionHeading>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>{open && <Lightbox project={open} onClose={close} />}</AnimatePresence>
    </section>
  );
}
