# Andrew Andari — Developer Portfolio

A premium, dark-mode personal portfolio targeting Software Engineering roles. Fully static, accessible, and animation-rich.

## Stack

- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (scroll reveals, hero stagger, hover lift — all gated by `prefers-reduced-motion`)
- **Fonts:** Geist Sans & Geist Mono via `next/font`

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Editing Content

All site copy lives in one typed file: [`lib/data.ts`](lib/data.ts). Update your email, socials, experience bullets, projects, and skills there — no component changes needed.

## Structure

```
app/            layout, page, global theme tokens
components/
  Navbar.tsx    sticky nav + mobile menu
  sections/     Hero, About, Experience, Projects, Skills, Contact
  ui/           Reveal, SectionHeading, TimelineItem, ProjectCard, TechTag, Footer
lib/            data.ts (all content), types.ts
```
