# Alex Carter — Fullstack Developer Portfolio

A modern, professional, and highly interactive portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Clean, minimal, fully responsive UI (mobile / tablet / desktop)
- Dark & light theme with system preference + toggle, smooth transitions
- Framer Motion animations: page entrances, scroll fade/slide, hover, tilt, parallax hero
- Sections: Hero, About, Skills, Projects, Experience (timeline), Contact (form + socials)
- Sticky navbar with scroll spy + active section indicator
- Reusable card components, glassmorphism, gradient accents
- Loading animation + scroll-to-top button
- SEO meta tags via Next.js `Metadata`
- Optimized images via `next/image`
- Mock data for projects & experience

## Tech Stack

| Layer        | Tools                                  |
| ------------ | -------------------------------------- |
| Framework    | Next.js 14 (App Router) + TypeScript   |
| Styling      | Tailwind CSS 3, custom design tokens   |
| Animations   | Framer Motion                          |
| Theming      | `next-themes` (system / light / dark)  |
| Icons        | `react-icons` (Feather + Simple Icons) |

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind + design tokens
│   ├── layout.tsx         # Root layout with Providers, Navbar, Footer
│   ├── page.tsx           # Composes all sections
│   └── providers.tsx      # next-themes ThemeProvider
├── components/
│   ├── Navbar.tsx         # Scroll spy + responsive menu + theme toggle
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── ScrollToTop.tsx
│   ├── Loader.tsx
│   ├── ui/
│   │   ├── Section.tsx    # Section heading wrapper
│   │   └── ProjectCard.tsx# 3D tilt card with hover overlay
│   └── sections/
│       ├── Hero.tsx       # Parallax + animated portrait
│       ├── About.tsx
│       ├── Skills.tsx     # Animated progress bars + tag pills
│       ├── Projects.tsx
│       ├── Experience.tsx # Vertical timeline
│       └── Contact.tsx    # Mock-submit form + social cards
├── data/                  # Mock data
├── hooks/
│   └── useActiveSection.ts
└── lib/
    └── cn.ts
```

## Customizing

- **Personal info / copy** — edit `src/components/sections/Hero.tsx`, `About.tsx`, `Contact.tsx`.
- **Skills** — `src/data/skills.ts`.
- **Projects** — `src/data/projects.ts`.
- **Experience** — `src/data/experience.ts`.
- **Theme palette** — `tailwind.config.ts` (the `brand` color scale).
- **CV download** — place your `cv.pdf` in `public/` (the Hero button links to `/cv.pdf`).

## Build

```bash
npm run build
npm start
```

## Notes on images

The brief asked for `https://source.unsplash.com/random` placeholder images.
Unsplash deprecated that endpoint for new embeds, so the project uses
[picsum.photos](https://picsum.photos) seeds for deterministic random images.
Both hostnames are pre-configured in `next.config.js`, so you can swap them
freely.
