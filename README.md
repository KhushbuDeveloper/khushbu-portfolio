# Khushbu Patel — Senior Full Stack Developer Portfolio

A fast, single-page portfolio website built with **React (Vite) + Tailwind CSS v4 + Framer Motion**. Dark/light theme toggle, animated typing code editor, and smooth scroll-reveal animations throughout — optimized for quick loading and smooth performance.

---

## Table of Contents

1. [Tech Stack & Packages](#1-tech-stack--packages)
2. [Getting Started](#2-getting-started)
3. [Folder Structure](#3-folder-structure)
4. [Routes / Navigation](#4-routes--navigation)
5. [How Each Section Works](#5-how-each-section-works)
6. [Design System (Colors & Fonts)](#6-design-system-colors--fonts)
7. [Editing Your Content](#7-editing-your-content)
8. [Adding Images](#8-adding-images)
9. [Performance Optimizations](#9-performance-optimizations)
10. [Build & Deploy](#10-build--deploy)

---

## 1. Tech Stack & Packages

| Package | Type | Why it's used |
|---|---|---|
| `react` + `react-dom` | dependency | UI library — every section is a component |
| `framer-motion` | dependency | Scroll-reveal animations, fade/slide-in effects, `useInView` hook |
| `lucide-react` | dependency | Icon set (GitHub, LinkedIn, menu, section icons) — tree-shakable, only imported icons ship |
| `react-icons` | dependency | Official brand logos for the Skills badges (JS, React, AWS, Docker, …) via the Simple Icons set |
| `vite` | dev | Build tool & dev server — instant hot reload, optimized production bundles |
| `@vitejs/plugin-react` | dev | JSX + Fast Refresh support in Vite |
| `tailwindcss` + `@tailwindcss/vite` | dev | Utility-first CSS (v4 — configured in CSS via `@theme`, no `tailwind.config.js` needed) |

## 2. Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload)
npm run dev
# → open the printed http://localhost:5173

# 3. Production build (outputs to dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

## 3. Folder Structure

```
portfolio/
├── index.html                  # HTML shell: fonts, meta tags, #root mount point
├── package.json                # Dependencies + npm scripts
├── vite.config.js              # Vite plugins + vendor chunk splitting
├── public/                     # Static assets, served as-is (put images here)
│   ├── favicon.png             # KP logo — browser tab icon (64×64)
│   ├── logo-dark.png           # KP logo for dark theme navbar (96×96)
│   ├── logo-light.png          # KP logo for light theme navbar (96×96)
│   ├── apple-touch-icon.png    # KP logo — iOS home screen + og:image (180×180)
│   └── projects/               # (create this) project screenshots
└── src/
    ├── main.jsx                # Entry point — mounts <App /> into #root
    ├── index.css               # Tailwind import + theme tokens + global styles
    ├── App.jsx                 # Page layout — orders all sections, lazy-loads below-fold
    ├── components/             # One file per visual section
    │   ├── Navbar.jsx          # Fixed top nav + dark/light toggle + mobile menu
    │   ├── Hero.jsx            # Intro: greeting, heading, badge, buttons, socials
    │   ├── CodeEditor.jsx      # Animated typing code editor (custom, no library)
    │   ├── SectionHeading.jsx  # Shared eyebrow + title (identical spacing everywhere)
    │   ├── About.jsx           # About text + 4 focus-area cards
    │   ├── Experience.jsx      # Vertical career timeline
    │   ├── Skills.jsx          # Technology badge cloud
    │   ├── Projects.jsx        # Project cards grid (optional images)
    │   └── Footer.jsx          # Availability badge + socials + copyright
    └── data/                   # ✏️ ALL editable content lives here
        ├── socials.js          # Social/profile links
        ├── skills.js           # Skills list (name + brand logo + brand color)
        ├── experience.js       # Job history for the timeline
        └── projects.js         # Project cards
```

**Key idea:** components define *how things look*, `src/data/` defines *what they say*. To update content you almost never touch a component.

## 4. Routes / Navigation

This is a **single-page site** — there is no router library. Navigation uses hash anchors with CSS smooth scrolling (`scroll-behavior: smooth` in `index.css`). Each section has an `id` and `scroll-mt-24` so headings don't hide under the fixed navbar:

| Link | Section id | Component |
|---|---|---|
| KP logo | `#top` | `Hero.jsx` |
| About | `#about` | `About.jsx` |
| Experience | `#experience` | `Experience.jsx` |
| Skills | `#skills` | `Skills.jsx` |
| Projects | `#projects` | `Projects.jsx` |
| Contact / Hire Me | `#contact` | `Footer.jsx` |

If you later want real multi-page routes (e.g. `/blog`), add `react-router-dom` — but for a portfolio, hash navigation is lighter and faster.

## 5. How Each Section Works

### Navbar (`Navbar.jsx`)
Fixed to the top with `backdrop-blur` glass effect. Desktop shows inline links; below the `md` breakpoint a hamburger button toggles a dropdown via a `useState` boolean. Clicking a mobile link closes the menu.

Also owns the **dark/light theme toggle** (sun/moon button): it sets `data-theme` on `<html>` and saves the choice to `localStorage`. A tiny inline script in `index.html` re-applies the saved theme *before* first paint, so there's never a flash of the wrong colors.

### Hero (`Hero.jsx`)
Two-column grid (stacks on mobile): left side is the intro text, buttons, and social icons; right side is the code editor. Both columns animate in on page load with Framer Motion `initial`/`animate`.

### Code Editor (`CodeEditor.jsx`)
A custom typing effect — no library:
- The full code string is stored as a constant.
- A `setInterval` (every 12 ms) reveals 2 more characters via `code.slice(0, i)` into state.
- Each render splits the typed text into lines; `highlight()` regex-splits every line into string literals (colored blue) and booleans (colored amber).
- A pulsing `▍` block plays the cursor. The interval is cleaned up on unmount.

### About / Experience / Skills / Projects
All start with the shared `SectionHeading` component (same eyebrow/title spacing in every section, `py-20` vertical rhythm). Reveals use `whileInView` + `viewport={{ once: true }}` with one shared **ease-out-quint curve** (`[0.22, 1, 0.36, 1]`), ~0.55 s durations, and small per-item stagger — subtle and professional rather than bouncy. Cards and skill badges lift a few pixels on hover with an accent border tint. Experience is a left-border timeline with absolutely-positioned dots; Skills badges each show the technology's official logo in its brand color.

### Footer (`Footer.jsx`)
"Available for Enterprise Projects" badge with a pulsing dot, social icons, and an auto-updating copyright year (`new Date().getFullYear()`).

## 6. Design System (Colors & Fonts)

Defined once in `src/index.css` under `@theme` — Tailwind v4 turns each token into utilities automatically (`bg-ink`, `text-accent`, `border-line`, `bg-accent/10`, …).

**How the dark/light toggle works:** utilities like `bg-ink` compile to `var(--color-ink)`, so re-declaring the same variables under `:root[data-theme="light"]` re-themes the whole site with zero component changes. The body background/text cross-fade over 0.25 s.

| Token | Dark (default) | Light | Used for |
|---|---|---|---|
| `--color-ink` | `#0b0f14` | `#f5f7fa` | Page background |
| `--color-surface` | `#111826` | `#ffffff` | Cards, code editor body |
| `--color-surface-2` | `#161f2e` | `#eef1f6` | Editor title bar, tech chips |
| `--color-line` | `#223047` | `#dce3ec` | Borders, timeline rail |
| `--color-muted` | `#8b98ab` | `#55637a` | Secondary text |
| `--color-accent` | `#22d3b8` | `#0f9d8f` | Teal — buttons, badges, highlights |
| `--color-accent-2` | `#7c9dfc` | `#4c6fe8` | Code editor strings |
| `--color-fg` | `#e7ebf1` | `#131c28` | Main text |

**Fonts** (loaded from Google Fonts in `index.html` with `preconnect` + `display=swap`):
- **Plus Jakarta Sans** — all headings and body text (`--font-display`)
- **JetBrains Mono** — code editor, eyebrow labels, timeline dates (`--font-mono`)

## 7. Editing Your Content

> ⚠️ **Placeholder alert:** Experience, Projects, and social links currently contain **realistic example data** (fake companies/clients marked with `// TODO`). Replace them with your real information before publishing. Find them all with: `grep -rn "TODO" src/`

| What to change | File |
|---|---|
| Social/profile URLs, email | `src/data/socials.js` |
| Job history (role, company, dates, bullets) | `src/data/experience.js` |
| Projects (title, category, description, tech, image) | `src/data/projects.js` |
| Skill badges (name, logo, brand color) | `src/data/skills.js` |
| Hero text / description | `src/components/Hero.jsx` |
| Typed code content | `code` string in `src/components/CodeEditor.jsx` |
| Theme colors (dark + light) | `@theme` and `:root[data-theme="light"]` in `src/index.css` |
| About paragraph / focus cards | `src/components/About.jsx` |
| Browser tab title / SEO description | `index.html` |

## 8. Adding Images

1. Create the folder `public/projects/`.
2. Save screenshots there — **prefer `.webp`** (much smaller than PNG/JPG). Resize to ~800×450 px; free tools like [squoosh.app](https://squoosh.app) convert and compress in the browser.
3. Reference the image in `src/data/projects.js`:

```js
{
  title: 'FinFlow — Enterprise Fintech Platform',
  image: '/projects/finflow.webp',   // ← path is relative to public/
  ...
}
```

The Projects card already handles the rest: images render with `loading="lazy"` (browser only downloads them when scrolled near), a fixed `aspect-video` ratio (no layout shift), and `object-cover` cropping. Cards without an `image` field simply render without one.

## 9. Performance Optimizations

Everything here is why the site loads fast and scrolls smoothly:

- **Lazy-loaded sections** — `App.jsx` uses `React.lazy` for everything below the fold (About → Footer). First paint only ships Navbar + Hero + Stats code.
- **Vendor chunk splitting** — `vite.config.js` puts React and Framer Motion in separate cacheable chunks; when you edit content, returning visitors re-download only the small app chunk.
- **Tree-shakable icons** — `lucide-react` only bundles the ~10 icons actually imported, not the whole set.
- **Tailwind v4 output** — only the utility classes actually used end up in the CSS (a few KB gzipped).
- **Font loading** — `preconnect` warms up the Google Fonts connection early; `display=swap` shows text immediately in a fallback font instead of invisible text.
- **Lazy images with fixed aspect ratio** — no offscreen downloads, no layout shift (good CLS score).
- **GPU-friendly animations** — Framer Motion animates only `opacity` and `transform`, which the browser composites without re-layout; `viewport={{ once: true }}` stops observers after the first reveal.
- **`requestAnimationFrame` counters** — synced to the display refresh rate instead of a janky `setInterval`.
- **Reduced motion respected** — smooth scrolling turns off under `prefers-reduced-motion`.
- **No heavy libraries** — no jQuery, no slider plugins, no CSS framework bloat; total JS is a fraction of a typical template.

## 10. Build & Deploy

```bash
npm run build
```

Outputs a fully static `dist/` folder (minified, hashed filenames for long-term caching). Deploy it anywhere that serves static files:

- **Vercel** — import the GitHub repo at [vercel.com](https://vercel.com); Vite is auto-detected, zero config.
- **Netlify** — connect the repo, or drag-drop `dist/` onto [Netlify Drop](https://app.netlify.com/drop). Build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — set `base: '/portfolio/'` in `vite.config.js` first (repo-name subpath), then publish `dist/`.

---

Built with React + Vite + Tailwind CSS + Framer Motion.
