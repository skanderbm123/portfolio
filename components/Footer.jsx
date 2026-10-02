import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-10 border-t-[3px] border-ink bg-[#0c0a12] px-5 py-12 text-[#fff4dc] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[clamp(2.5rem,9vw,6.5rem)] font-extrabold leading-none tracking-tight">
          Thanks for <span className="text-accent">scrolling</span>!
        </p>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-sm font-semibold sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {profile.name}. Handmade in Montréal.</p>
          <ul className="flex items-center gap-6">
            <li><a className="underline-offset-4 hover:text-accent hover:underline" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="underline-offset-4 hover:text-accent hover:underline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="underline-offset-4 hover:text-accent hover:underline" href="#top">Back to top ↑</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
