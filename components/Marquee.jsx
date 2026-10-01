import { stack } from "@/lib/data";
import { Star } from "./Deco";

const items = [...new Set(stack.flatMap((g) => g.items))].filter((t) => t.length < 16);
const fills = ["var(--accent)", "#ff5ca8", "#2ee6a6", "#4f8bff", "#ff7a3d", "#b79cff"];

export default function Marquee() {
  const row = (key) => (
    <ul key={key} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={key === "b"}>
      {items.map((t, i) => (
        <li key={t} className="flex items-center gap-8 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
          {t}
          <Star className="h-7 w-7 sm:h-10 sm:w-10" fill={fills[i % fills.length]} />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative z-10 py-8">
      <div className="marquee -rotate-1 overflow-hidden border-y-[3px] border-ink bg-sun py-4 shadow-[0_6px_0_var(--ink)]">
        <div className="marquee-track flex">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </div>
  );
}
