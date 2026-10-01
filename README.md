# Skander Ben Mekki — Portfolio

One-page portfolio built with Next.js (static export), Tailwind CSS v4 and Framer Motion.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static site in ./out
```

## Editing content

All copy lives in [`lib/data.js`](lib/data.js): profile, stats, about text, experience, projects and the tech stack.
Sections re-render from that file, so a resume update is a data edit, not a layout change.

- Resume PDF: `public/Skander-Ben-Mekki-Portfolio-Website.pdf` (linked from the nav and contact section)
- Project screenshots: `public/` (referenced by filename in `lib/data.js`)
- Colors and fonts: CSS variables at the top of `app/globals.css`, light and dark themes

## Structure

```
app/            layout, page, global styles + theme tokens
components/     Nav, Hero, About, Experience, Work, Stack, Contact, Footer
lib/data.js     site content
lib/asset.js    basePath-aware helper for files in /public
```

## Deploy

`.github/workflows/nextjs.yml` builds with `npm run build:gh` (adds the `/portfolio` base path) and publishes `out/` to GitHub Pages.
