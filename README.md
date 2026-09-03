# Achmad Fauzi Guritno — Portfolio

A personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, focusing on clean engineering aesthetics, responsive design, and production projects.

Live: [https://portofolio.dema.web.id](https://portofolio.dema.web.id)

---

## Features

- **Engineering Aesthetic**: Stone/Amber earthy color palette (no generic gradient slop).
- **Interactive Terminal**: Real-time mock capabilities inspector directly on the hero section.
- **Responsive Design**: Tested across mobile (iPhone SE, iPhone 14), tablet (iPad Air), laptop, and 1080p desktop.
- **Dark & Light Mode**: Smooth theme transitions powered by `next-themes`.
- **Project Showcase**: Category filtering (`Full-Stack & AI`, `Backend & Architecture`, `Enterprise & System`) with realistic UI/terminal mockups.
- **Dockerized**: Multi-stage standalone production build ready for deployment.

---

## Tech Stack

| Layer | Tools |
|---|---|
| **Framework** | Next.js 16 (Turbopack) + React 19 + TypeScript |
| **Styling** | Tailwind CSS 3 (Stone / Amber design tokens) |
| **Animations** | Framer Motion |
| **Theming** | `next-themes` (Dark / Light / System) |
| **Icons** | `react-icons` (Feather Icons) |
| **Deployment** | Docker (Alpine Node.js standalone) + Cloudflare Tunnel |

---

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Docker Deployment

```bash
docker build -t portofolio-amed:latest .
docker run -d --name portofolio-amed -p 3001:3001 --restart unless-stopped portofolio-amed:latest
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind tokens & base styling
│   ├── layout.tsx         # Root layout with SEO metadata & providers
│   ├── page.tsx           # Page assembler
│   └── providers.tsx      # ThemeProvider wrapper
├── components/
│   ├── Navbar.tsx         # Responsive navbar with scroll-spy
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── ScrollToTop.tsx
│   ├── Loader.tsx
│   ├── ui/
│   │   ├── Section.tsx    # Section wrapper
│   │   └── ProjectCard.tsx# 3D interactive project cards
│   └── sections/
│       ├── Hero.tsx       # Bio & interactive terminal demo
│       ├── About.tsx
│       ├── Skills.tsx     # Technical skill breakdown
│       ├── Projects.tsx   # Categorized project grid
│       ├── Experience.tsx # Career timeline
│       └── Contact.tsx    # Contact links & message form
├── data/
│   ├── projects.ts        # Featured & archived project records
│   ├── skills.ts          # Core competencies
│   └── experience.ts      # Career history
├── hooks/
│   └── useActiveSection.ts
└── lib/
    └── cn.ts
```

---

## License

MIT © [Achmad Fauzi Guritno](https://github.com/amedfg)
