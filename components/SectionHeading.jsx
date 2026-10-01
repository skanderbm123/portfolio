import Reveal from "./Reveal";

export default function SectionHeading({ index, label, title, children }) {
  return (
    <Reveal className="mb-14 max-w-3xl">
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        <span>{label}</span>
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {children ? <p className="mt-5 max-w-2xl text-lg text-muted">{children}</p> : null}
    </Reveal>
  );
}
