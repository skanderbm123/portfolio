import Image from "next/image";
import { about } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import photo from "@/assets/user-image.png";

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" label="About" title="Full-stack by habit, backend by instinct." />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-square max-w-sm overflow-hidden rounded-3xl border border-line">
              <Image
                src={photo}
                alt="Skander smiling in a green zip jacket"
                fill
                sizes="(min-width: 1024px) 380px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="card mt-5 max-w-sm p-5">
              <p className="eyebrow mb-2">Education</p>
              <p className="font-medium">{about.education.degree}</p>
              <p className="text-muted">{about.education.school}</p>
              <p className="mt-2 text-sm text-muted">{about.education.note}</p>
            </div>
          </Reveal>

          <div>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p, i) => (
                <Reveal as="p" key={i} delay={i * 0.08} className={i === 0 ? "text-xl text-text sm:text-2xl sm:leading-snug" : ""}>
                  {p}
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {about.principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1} className="card p-5 transition-colors hover:border-line-strong">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h3 className="mt-3 font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
