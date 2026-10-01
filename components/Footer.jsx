import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built by hand with Next.js.
        </p>
        <ul className="flex items-center gap-6">
          <li><a className="hover:text-text" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="hover:text-text" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="hover:text-text" href="#top">Back to top ↑</a></li>
        </ul>
      </div>
    </footer>
  );
}
