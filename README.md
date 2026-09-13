# Portfolio — Astro

Minimal Astro rewrite of `shajmanfaiz.github.io` (previously Next.js 11).

## Stack
- [Astro 4](https://astro.build) + `@astrojs/tailwind`
- Tailwind CSS (existing `src/styles/globals.css` monochrome system)
- Vanilla JS for theme toggle / scroll (no React runtime)

## Development
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Structure
```
src/
  layouts/Layout.astro
  components/Header.astro, Hero.astro, About.astro, Projects.astro, Contact.astro, StarField.astro
  pages/index.astro, pages/ar/index.astro
  lib/data.js
  styles/globals.css
locales/en|ar/common.json
public/assets/*
```

## Projects rolling
CSS seamless marquee (`Projects.astro`): duplicated track `translateX(-50%)` with `aria-hidden` clones, `hover:pause`, `prefers-reduced-motion` fallback. Badge shows unique count (7). SafariByte live → https://shajmanfaiz.github.io/safaribyte

## Deploy
GitHub Pages via `.github/workflows/deployment.yml` → `dist/` + `.nojekyll` on push to `main`/`dev`.

Previous Next.js code archived on `main` / `dev` before `feat/astro`.
