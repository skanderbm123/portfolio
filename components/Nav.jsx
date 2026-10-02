"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { nav, profile } from "@/lib/data";
import { asset } from "@/lib/asset";

const moods = [
  { id: "sunny", label: "Sunny", color: "#ffd23f" },
  { id: "bubblegum", label: "Bubblegum", color: "#ff5ca8" },
  { id: "mint", label: "Mint", color: "#2ee6a6" },
  { id: "grape", label: "Grape", color: "#b79cff" },
];

function MoodButton() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const cur = document.documentElement.dataset.mood;
    const idx = moods.findIndex((m) => m.id === cur);
    if (idx > 0) setI(idx);
  }, []);

  const next = () => {
    const n = (i + 1) % moods.length;
    setI(n);
    document.documentElement.dataset.mood = moods[n].id;
    try {
      localStorage.setItem("mood", moods[n].id);
    } catch {}
  };

  return (
    <motion.button
      onClick={next}
      whileTap={{ scale: 0.8, rotate: 90 }}
      whileHover={{ rotate: 20 }}
      aria-label={`Change the color mood. Currently ${moods[i].label}`}
      title="Change the vibe"
      className="brut-sm grid h-10 w-10 place-items-center rounded-full"
      style={{ background: moods[i].color }}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#151515" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      </svg>
    </motion.button>
  );
}

function ThemeButton() {
  const toggle = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.8, rotate: -90 }}
      whileHover={{ rotate: -20 }}
      aria-label="Switch between light and dark mode"
      title="Light / dark"
      className="brut-sm grid h-10 w-10 place-items-center rounded-full bg-cream"
    >
      {/* sun in dark mode (click for light), moon in light mode */}
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="hidden dark:block">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="dark:hidden">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </motion.button>
  );
}

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const ids = [...nav.map((n) => n.id), "top"];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id === "top" ? "" : e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.map((id) => document.getElementById(id)).filter(Boolean).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-1.5 origin-left border-b-2 border-ink bg-[linear-gradient(90deg,#ff5ca8,#ffd23f,#2ee6a6,#4f8bff)]"
      />
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.1 }}
        className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
      >
        <nav aria-label="Primary" className="brut mx-auto flex max-w-5xl items-center justify-between rounded-full bg-cream px-3 py-2 sm:px-4">
          <a href="#top" aria-label="Back to top" className="flex items-center gap-2 font-extrabold">
            <span className="brut-sm grid h-9 w-9 -rotate-6 place-items-center rounded-full bg-accent font-pixel text-sm">SB</span>
            <span className="hidden sm:inline">Skander</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className={`rounded-full border-2 px-3.5 py-1 text-sm font-bold transition ${
                    active === n.id ? "border-ink bg-accent" : "border-transparent hover:border-ink hover:bg-accent hover:text-[#151515]"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeButton />
            <MoodButton />
            <a
              href={asset(profile.resume)}
              target="_blank"
              rel="noopener noreferrer"
              className="brut-sm press hidden rounded-full bg-pink px-4 py-1.5 text-sm font-bold sm:inline-block"
            >
              Resume
            </a>
            <button
              className="brut-sm grid h-10 w-10 place-items-center rounded-full bg-cream md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              className="brut mx-auto mt-3 max-w-5xl rounded-3xl bg-cream p-3 md:hidden"
            >
              <ul className="grid gap-1.5">
                {nav.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg font-bold hover:bg-accent hover:text-[#151515]">
                      {n.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={asset(profile.resume)} target="_blank" rel="noopener noreferrer" className="brut-sm block rounded-2xl bg-pink px-4 py-3 text-center text-lg font-bold">
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
