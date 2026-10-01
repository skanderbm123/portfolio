"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Shot({ project, src, className = "" }) {
  // Screenshots with wide white margins are zoomed to the content.
  return (
    <div className={`overflow-hidden bg-white ${className}`}>
      <Image
        src={asset(src)}
        alt=""
        fill
        sizes="(min-width: 1024px) 640px, 90vw"
        className="object-cover"
        style={{ transform: `scale(${project.zoom})` }}
      />
    </div>
  );
}

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
      className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl overflow-hidden rounded-2xl border border-line-strong bg-surface"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <p className="font-medium">{project.title}</p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted">
              {i + 1} / {n}
            </span>
            <button ref={closeRef} onClick={onClose} aria-label="Close gallery" className="grid h-8 w-8 place-items-center rounded-full hover:bg-surface-2">
              ✕
            </button>
          </div>
        </div>
        <div className="relative aspect-[16/9] bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={m.src}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0"
            >
              <Image src={asset(m.src)} alt={m.caption} fill sizes="1024px" className="object-contain" />
            </motion.div>
          </AnimatePresence>
          {n > 1 && (
            <>
              <button onClick={() => go(-1)} aria-label="Previous image" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-bg/80 backdrop-blur hover:bg-bg">
                ←
              </button>
              <button onClick={() => go(1)} aria-label="Next image" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-bg/80 backdrop-blur hover:bg-bg">
                →
              </button>
            </>
          )}
        </div>
        <p className="px-5 py-3 text-sm text-muted" aria-live="polite">
          {m.caption}
        </p>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const flip = index % 2 === 1;
  return (
    <Reveal className="card grid overflow-hidden lg:grid-cols-2">
      <button
        onClick={onOpen}
        aria-label={`Open ${project.title} gallery`}
        className={`group relative block aspect-[16/10] w-full overflow-hidden border-b border-line text-left lg:aspect-auto lg:min-h-[22rem] lg:border-b-0 ${
          flip ? "lg:order-2 lg:border-l" : "lg:border-r"
        }`}
      >
        <Shot project={project} src={project.media[0].src} className="absolute inset-0 transition duration-700 group-hover:scale-[1.04]" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
        <span className="absolute bottom-4 left-4 rounded-full bg-bg/85 px-3.5 py-1.5 font-mono text-xs backdrop-blur transition group-hover:bg-accent group-hover:text-accent-ink">
          View gallery · {project.media.length} images
        </span>
      </button>

      <div className="flex flex-col p-6 sm:p-9">
        <p className="eyebrow">{project.kind}</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-4 text-muted">{project.summary}</p>
        <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden className="mt-[0.6em] h-1 w-3 shrink-0 rounded-full bg-accent/70" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full border border-line bg-surface-2/60 px-3 py-1 font-mono text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-8 font-medium text-accent"
        >
          <span className="border-b border-accent/40 pb-0.5 transition group-hover/link:border-accent">View source on GitHub</span>
          <span aria-hidden className="transition group-hover/link:translate-x-1">↗</span>
        </a>
      </div>
    </Reveal>
  );
}

export default function Work() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="work" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" label="Selected work" title="Things I build on my own time.">
          Personal projects where I own the whole stack, from data layer to the last pixel.
        </SectionHeading>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>{open && <Lightbox project={open} onClose={close} />}</AnimatePresence>
    </section>
  );
}
