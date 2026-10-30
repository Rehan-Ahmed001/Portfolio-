# Rehan Ahmed — Portfolio

A single-page designer portfolio built with plain HTML, CSS, and vanilla JavaScript.
No build step, no dependencies, no framework.

## Run locally

Just open `index.html` in a browser.

Or serve it (recommended, so paths and preload behave exactly like production):

```powershell
# from D:\SMIT\SDD Portfolio
python -m http.server 5173
```

Then visit <http://localhost:5173>.

## Project structure

```
/
├─ AGENTS.md            rules for AI agents working here
├─ spec.md              what the site must contain
├─ plan.md              how it gets built (10 phases)
├─ task.md              task board (76 tasks)
├─ index.html           the whole site
├─ assets/
│  ├─ profile.jpg       your portrait (1094 × 1438, 88 KB)
│  ├─ favicon.svg
│  └─ projects/         project cover images (add yours here)
├─ css/
│  └─ styles.css        design tokens + all styles
└─ js/
   └─ main.js           menu, nav highlight, reveal, counters, form
```

## Replace this content before launch

Search `index.html` for `REPLACE` — every placeholder is marked with a comment.

| Section | What to change |
| --- | --- |
| Hero | Role title, positioning line, location |
| Metrics | All four numbers (`data-count` + visible text) — **must be true** |
| About | Story, degree/institute/year, certifications, experience timeline |
| Services | The four service cards |
| Work | Six projects: titles, categories, results, cover images |
| Testimonials | Three real client quotes |
| Skills | Tool chips |
| Contact | Email address and social profile URLs |
| SEO | `<title>`, meta description, Open Graph image |

Design tokens (colors, type, spacing) live at the top of `css/styles.css`.

## Design system

- **Theme:** dark-first, warm amber accent `#c8873f`
- **Fonts:** system UI stack (no network request, instant load)
- **Layout:** 12-column-friendly container, max 1180 px
- **Spacing scale:** 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96
- **Breakpoints:** 1024 / 900 / 640 / 420 px

## Features

- Sticky header with active-section highlighting
- Mobile menu (keyboard accessible, closes on Escape / link click)
- Scroll-reveal animations with `prefers-reduced-motion` support
- Metrics count-up, triggered once
- Client-side form validation, sends via the visitor's email app (`mailto:`)
- Portrait initials fallback if the image fails to load
- Skip link, focus rings, semantic landmarks, AA-targeted contrast

## Contact form note

The form has no backend. It validates the fields, then opens the visitor's mail
client with the message pre-filled. To collect messages automatically later,
replace the submit handler in `js/main.js` with a form endpoint (Formspree,
Netlify Forms, etc.) — get owner approval first.

## Deploy

Any static host works. Files to upload: `index.html`, `css/`, `js/`, `assets/`.

### GitHub Pages
1. Create a repository and push these files to the `main` branch.
2. Settings → Pages → Source: `Deploy from a branch` → `main` / `/ (root)`.

### Netlify / Vercel
1. Drag the folder into Netlify Drop, or import the repo in Vercel.
2. Build command: none. Output directory: `.` (root).

## Status

Work in progress — content placeholders are still present. See `task.md` for
what remains before launch.
