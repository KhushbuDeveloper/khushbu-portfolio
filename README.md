# Khushbu Patel — Portfolio

Personal portfolio for **Khushbu Patel, Senior Full Stack Developer**. A single-page site with matching light and dark themes. Built with React 19, TypeScript, Vite, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
npm run typecheck  # TypeScript only
```

## Site settings

| What | Where |
| --- | --- |
| **Resume PDF**: the Download Resume and View Full Resume buttons are hidden for now. To show them, put the PDF at `public/resume.pdf` and set `resume: '/resume.pdf'`. Use a version without your phone number or email, because anyone can download it. | `src/data/site.ts` |
| **Production domain** (`khushbu-portfolio-ivory.vercel.app`) | `src/data/site.ts`, `index.html` (canonical, Open Graph, Twitter, JSON-LD), `public/robots.txt`, `public/sitemap.xml` |

## Editing content

All copy lives in `src/data/`. The components only render it.

| Content | File |
| --- | --- |
| Name, title, LinkedIn/GitHub links, resume path, nav items | `src/data/site.ts` |
| About "at a glance" cards | `src/data/highlights.ts` |
| Tech icon strip + floating hero badges | `src/data/technologies.ts` |
| Work history | `src/data/experience.ts` |
| Skills by category (with brand logos) | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Education + certifications | `src/data/education.ts` |

## Folder structure

```
src/
├── main.tsx                 # entry point
├── App.tsx                  # page order; lazy-loads everything below the hero
├── motionFeatures.ts        # Framer Motion features, loaded async via LazyMotion
├── styles/globals.css       # theme tokens (CSS variables) + Tailwind setup
├── hooks/
│   ├── useTheme.ts          # light/dark theme: localStorage + system preference
│   └── useActiveSection.ts  # highlights the nav link for the section in view
├── data/                    # all site content (see above)
└── components/
    ├── Navbar.tsx, ThemeToggle.tsx
    ├── Hero.tsx, HeroVisual.tsx (abstract animated graphic), TechStack.tsx
    ├── About.tsx, StatCard.tsx
    ├── Experience.tsx, ExperienceItem.tsx
    ├── Skills.tsx, SkillCard.tsx (one category row)
    ├── Projects.tsx, ProjectCard.tsx
    ├── Education.tsx, Certifications.tsx
    ├── Contact.tsx, Footer.tsx
    ├── BelowFold.tsx        # the lazily loaded group of lower sections
    └── Button.tsx, Section.tsx, SectionHeading.tsx, Reveal.tsx, TechBadge.tsx
```

## Theme system

Colors are CSS variables in `src/styles/globals.css`: `--background`, `--foreground`, `--card`, `--border`, `--muted`, `--primary`, `--accent`, `--glow` and so on. `[data-theme="dark"]` redefines each one. Tailwind exposes them as utilities (`bg-card`, `text-muted-foreground`, `border-border`), so both themes share one layout and only the colors change.

An inline script in `index.html` sets `data-theme` before the first paint. It uses the saved choice first and falls back to the OS preference, so the page never flashes the wrong theme.

## Privacy

The site does not publish an email address or a home location. Visitors reach out through LinkedIn or GitHub.

## Accessibility and performance

- The page uses semantic landmarks and a skip link. Its headings follow a single h1 → h2 → h3 order, and every focusable element has a visible focus state.
- The theme toggle is a `role="switch"`. The mobile menu locks scrolling, closes on Escape and moves focus back to the menu button.
- Animations respect `prefers-reduced-motion`.
- Code splitting: sections below the hero and the animation features load in their own chunks.

## SEO

`index.html` sets the title and description, a canonical URL, and Open Graph and Twitter cards (`public/og-image.png`, 1200×630). It also includes Person structured data (JSON-LD), robots meta, `public/robots.txt` and `public/sitemap.xml`.

## Deploy

On **Vercel** or **Netlify**, import the repo. Use the build command `npm run build` with output directory `dist`.
