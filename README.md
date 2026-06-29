# Luis Toro — Portfolio

Personal portfolio for Luis Toro, Product Designer with 6+ years of experience across FinTech, Healthcare, EdTech, and E-commerce.

**Stack:** [Astro 7](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) + Figma MCP

## Pages

| Route | Content |
|---|---|
| `/` | Work portfolio — Hero + 2-column project grid |
| `/work/[slug]` | Individual project pages |
| `/side-projects` | Side projects gallery |
| `/about` | About page with masonry photo grid |
| `/cv` | CV / Resume |

## Getting Started

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # Static build → ./dist
npm run preview      # Preview built site
```

## Project Structure

```
public/assets/          # Images, SVGs, PDFs
src/
  components/           # Navbar, Hero, Footer, Cursor, PortfolioGrid, SideProjectsGrid
  data/                 # Shared project data (projects.ts, sideProjects.ts)
  layouts/              # Layout.astro (HTML shell, fonts, meta)
  pages/
    work/
      [slug].astro      # Dynamic project routes
    index.astro         # Home
    about.astro         # About
    cv.astro            # CV
    side-projects.astro # Side projects
  styles/
    global.css          # Tailwind imports + custom keyframes
astro.config.mjs        # Astro + Tailwind Vite plugin
opencode.json           # Figma MCP connection (localhost:3845)
tsconfig.json
```

## Features

- **Custom cursor** — Animated dot that expands into "VIEW PROJECT" pill on project cards
- **Responsive** — Burger menu with slide-in panel on mobile, adaptive grids
- **Figma MCP** — Design-to-code via `opencode.json` connected to Figma Desktop
- **View Transitions** — Native Astro 7 page transitions
- **Masonry grid** — 4-column photo gallery on About page
