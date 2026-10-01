import Image from "next/image";
import { about, stats } from "@/lib/data";
import Reveal from "./Reveal";
import Counter from "./Counter";
import SectionHeading from "./SectionHeading";
import photo from "@/assets/user-image.png";

const statColors = ["bg-pink", "bg-mint", "bg-sky"];
const offColors = ["bg-sun", "bg-grape", "bg-tangerine"];
const offTilt = [-2, 1.5, -1];

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="About me" color="pink" title={<>A little <span className="marker">about</span> me</>} />

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal rotate={-3} className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:self-start">
            <figure className="brut bg-cream p-3 pb-5">
              <div className="relative aspect-square overflow-hidden border-2 border-ink">
                <Image src={photo} alt="Skander smiling in a green zip jacket" fill sizes="(min-width: 1024px) 380px, 90vw" className="object-cover" />
              </div>
              <figcaption className="mt-4 text-center font-pixel text-lg">that's me, mid-smile</figcaption>
            </figure>
            <div className="brut-sm mt-7 rotate-2 bg-grape p-5">
              <p className="font-pixel text-sm">Education</p>
              <p className="mt-1 text-lg font-extrabold leading-tight">{about.education.degree}</p>
              <p className="font-semibold">{about.education.school}</p>
              <p className="mt-1 text-sm font-medium text-ink/75">{about.education.note}</p>
            </div>
          </Reveal>

          <div>
            <div className="space-y-5 text-lg font-medium leading-relaxed text-ink/80">
              {about.paragraphs.map((p, i) => (
                <Reveal as="p" key={i} delay={i * 0.06} y={20} className={i === 0 ? "text-2xl font-bold leading-snug text-ink sm:text-3xl" : ""}>
                  {p}
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1} rotate={[-1.5, 1, -1][i]} className={`brut press rounded-2xl p-5 ${statColors[i]}`}>
                  <p className="font-pixel text-5xl font-bold leading-none">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-bold leading-snug">{s.label}</p>
                </Reveal>
              ))}
            </div>

            <h3 className="mb-4 mt-14 font-pixel text-xl">Off the clock</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {about.offClock.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.1} rotate={offTilt[i]} className={`brut press rounded-2xl p-5 ${offColors[i]}`}>
                  <span className="text-4xl" aria-hidden>{o.emoji}</span>
                  <p className="mt-3 text-xl font-extrabold">{o.title}</p>
                  <p className="mt-1 text-sm font-medium leading-snug">{o.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
