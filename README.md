# Praxis — consultancy site prototype

Single-page marketing site prototype for an enterprise digital-solutions consultancy. Built as a stack-familiar prototype to explore narrative structure, capability framing, and visual storytelling for a B2B consulting practice.

**Live preview:** https://cfpperche.github.io/praxis-prototype/

> **"Praxis" is a placeholder brand.** The word means "practice / applied theory" in Greek, recognized identically in EN/PT/ES. Swap globally in `src/i18n/translations.js`, `index.html`, `src/components/Nav.jsx`, `src/components/Footer.jsx`, and `package.json` if the final brand differs.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Custom i18n (no external i18n dependency)
- IntersectionObserver-based scroll-reveal with safety-net fallback

## Run

```bash
bun install     # or npm install / pnpm install
bun run dev     # http://localhost:5174
bun run build   # production bundle to dist/
bun run preview # serve dist/ for inspection
```

## Languages

EN / PT / ES, full coverage. Active locale persisted in `localStorage` under `praxis.locale` and auto-detected from `navigator.language` on first visit. Switch via the globe button in the top nav.

## Page narrative

The page follows a deliberate three-act structure adapted from consulting-deck storytelling:

1. **Hero** — outcome-led headline + positioning + dual CTA.
2. **Challenge** — three universal tensions every transformation runs into, framed `from → to`. Positions the visitor as protagonist.
3. **Capabilities** — six solution lines, each surfacing a business outcome (not a technical artifact).
4. **Approach** — The Praxis Method as a four-phase flowchart with connector line and named stage outcomes, plus a five-stop client-state arc.
5. **Cases** — three representative engagement shapes in Challenge / Work / Outcome narrative form.
6. **Industries** — six verticals. Industry-portable practice, not all-things-to-all-clients.
7. **Engagement** — four engagement-tier cards (Diagnostic, Implementation, Embedded, Advisory).
8. **Contact** — form with stubbed submit handler.

Each major section closes with a serif-italic **bumper statement** that crystallizes the takeaway — pattern borrowed from McKinsey/BCG deck convention.

## Editing content

All copy lives in `src/i18n/translations.js`. Each language object has the same shape — edit one, mirror into the other two. The `useTranslation` hook resolves dot-paths (`t('hero.heading')`) and falls back to `en` if a key is missing.

## Tone notes

- **No founder mentions.** Site reads as a multi-person firm.
- **No stock photos.** Geometry, gradients, glyph icons only.
- **Enterprise voice.** No emojis, no "we are passionate", no exclamation points.
- **Outcome-first.** Each capability mentions the business outcome it generates.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds with Bun and deploys to GitHub Pages on every push to `main`. The Vite `base` is set via the `VITE_BASE` env var at build time so the same code runs locally at `/` and on Pages at `/praxis-prototype/`.

## File map

```
.
├── OFFERING.md                       # positioning + service-line catalog
├── README.md                         # this file
├── package.json
├── vite.config.js                    # base path via VITE_BASE env
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .github/workflows/deploy.yml      # CI → GitHub Pages
└── src/
    ├── main.jsx                      # entry, wraps app in I18nProvider
    ├── App.jsx                       # composes sections, background gradient
    ├── styles/index.css              # tailwind base + utility classes
    ├── hooks/useReveal.js            # IntersectionObserver + safety-net timer
    ├── i18n/
    │   ├── translations.js           # EN/PT/ES content (~700 lines)
    │   └── useTranslation.jsx        # provider + hook
    └── components/
        ├── Nav.jsx                   # sticky nav, scroll-aware bg
        ├── LanguageSwitcher.jsx      # globe dropdown
        ├── Reveal.jsx                # fade-on-scroll wrapper
        ├── Hero.jsx
        ├── Challenge.jsx             # 3 tension cards
        ├── Capabilities.jsx          # 6 solution cards
        ├── Approach.jsx              # 4-phase flowchart + transformation arc
        ├── Cases.jsx                 # 3 narrative case studies
        ├── Industries.jsx
        ├── Engagement.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## License

This is a prototype. Treat the code as MIT-equivalent — copy, fork, reshape as needed. No warranty.
