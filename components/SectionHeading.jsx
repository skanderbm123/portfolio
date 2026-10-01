import Reveal from "./Reveal";
import { Star } from "./Deco";
import { bg } from "@/lib/colors";

export default function SectionHeading({ label, color = "sun", title, children }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p
        className={`brut-sm mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full px-4 py-1.5 font-pixel text-sm tracking-wide ${bg[color]}`}
      >
        <Star className="h-4 w-4" fill="var(--paper)" />
        {label}
      </p>
      <h2 className="text-balance text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">{title}</h2>
      {children ? <p className="mt-5 max-w-2xl text-lg font-medium text-ink/75">{children}</p> : null}
    </Reveal>
  );
}
