# Portfolio Website — Specification

> Status: **Draft v1**
> Owner: Rehan Ahmed
> Project root: `D:\SMIT\SDD Portfolio`

---

## 1. Overview

A personal portfolio website for a **designer** that presents my profile, credentials, and best work in a premium, confident way. The site must instantly answer three questions for a visitor:

1. **Who is this?** — photo, name, title, one-line positioning statement.
2. **Why should I trust them?** — qualification, background, experience, and hard numbers.
3. **Can I see proof?** — selected projects with visuals, outcomes, and results.

Goal: look like a top-tier designer, not a template. Every screen should feel intentional, minimal, and polished.

---

## 2. Must-Have Content (Explicit Requirements)

These items are **required** and must appear above the fold or immediately after it.

### 2.1 Profile Picture
- A high-quality, professional portrait of me.
- Circular or softly rounded frame, consistent across Hero and About.
- **File in use:** `assets/profile.jpg`
  - Source original: `assets/WhatsApp Image 2026-10-30 at 11.10.00 AM.jpeg`
  - Dimensions: **1094 × 1438 px** (portrait, 3:4)
  - File size: **88.1 KB** (optimized, well under budget)
  - Format: JPEG
- **Framing:** portrait crop, so the avatar uses `object-fit: cover` with `object-position: center 25%` to keep the face in frame. A square 1080×1080 version is optional if tighter framing is needed.
- Must have a graceful fallback (initials avatar "RA") if the image is missing.
- Needs a proper `alt` text: `Portrait of Rehan Ahmed`.

### 2.2 Name and Title
- My **full name** as the primary headline.
- My **role** directly below it, e.g. `Product & Brand Designer`.
- One-sentence positioning line under the role, e.g. _"I design clear, beautiful experiences that turn visitors into customers."_

### 2.3 Qualification
- Formal education / degree / diploma (e.g. `BS Design — [Institute], [Year]`).
- Certifications and courses (e.g. Google UX, Figma Advanced, SMIT Design Program).
- Displayed as a clean timeline or badge list — no walls of text.

### 2.4 Background
- A short professional story: how I started, what I specialize in, what I care about.
- Experience timeline: company / role / years.
- Differentiators: what I do better than others.

### 2.5 Metrics (Numbers That Build Trust)
A visible stat strip with 4 items, animated count-up on scroll:

| Metric | Value (edit) | Label |
| --- | --- | --- |
| Years of experience | `5+` | Years of Experience |
| Projects completed | `60+` | Projects Delivered |
| Happy clients | `40+` | Happy Clients |
| Satisfaction / awards | `98%` | Client Satisfaction |

> Rules: only publish numbers that are true. Placeholders above must be replaced before launch.

---

## 3. Page Structure

Single-page site with anchor navigation (plus optional separate case-study pages later).

1. **Header / Nav** — logo/wordmark, links (Work, About, Services, Contact), CTA button, mobile menu.
2. **Hero** — profile picture, name, role, positioning line, primary CTA (`View Work`) + secondary CTA (`Contact Me`), scroll hint.
3. **Metrics strip** — the 4 stats from §2.5.
4. **About** — photo, story, background timeline, qualification list.
5. **Services / What I Do** — 3–4 cards (e.g. UI/UX Design, Brand Identity, Web Design, Design Systems).
6. **Selected Work** — 4–6 project cards: cover image, title, category, one-line impact, link.
7. **Process** — 4 steps: Discover → Define → Design → Deliver.
8. **Testimonials** — 2–3 client quotes with name, role, avatar.
9. **Tools & Skills** — Figma, Adobe Suite, Webflow, etc., as tidy chips or logo grid.
10. **Contact / CTA** — strong closing statement, email, social links, simple form (name, email, message).
11. **Footer** — copyright, quick links, back-to-top.

---

## 4. Design Direction

- **Style:** modern, minimal, high-contrast, generous whitespace, strong typography.
- **Palette:** neutral base (near-black / off-white) + **one** accent color. No rainbow gradients.
- **Type:** one display font for headings, one clean sans for body. Max 2 families.
- **Layout:** 12-column grid, consistent spacing scale (4/8/16/24/32/48/64/96).
- **Imagery:** large project previews, subtle hover zoom, soft shadows — no stock clichés.
- **Motion:** subtle and purposeful only (fade/slide-in on scroll, hover states, count-up stats). Respect `prefers-reduced-motion`.
- **Dark mode:** optional but preferred, must keep contrast ≥ 4.5:1.

### Design Quality Bar
- No default browser styling anywhere.
- No lorem ipsum at launch.
- No more than 2 font families, 3 font sizes per section level.
- Consistent border-radius, shadows, and button styles throughout.
- Looks intentional at every breakpoint: `360 / 768 / 1024 / 1440 px`.

---

## 5. Functional Requirements

- Sticky header with active-section highlighting.
- Smooth scrolling for anchor links.
- Mobile-first responsive layout; hamburger menu under 768 px.
- Scroll-reveal animations (with reduced-motion fallback).
- Metrics count-up animation triggered once.
- Contact form: client-side validation, success/error state. (Backend optional — mailto or Formspree-style endpoint, must be approved by owner.)
- Working social links (open in new tab with `rel="noopener noreferrer"`).
- 404 handling if multiple pages exist.
- No console errors.

---

## 6. Non-Functional Requirements

- **Performance:** Lighthouse ≥ 90 for Performance, Accessibility, Best Practices, SEO. LCP < 2.5 s.
- **Accessibility:** semantic HTML, keyboard navigable, visible focus rings, alt text on all images, AA contrast.
- **Responsive:** no horizontal scroll at any width from 320 px up.
- **SEO:** unique title + meta description, Open Graph + Twitter card, favicon, `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema.
- **Assets:** all images compressed (WebP/AVIF where possible), lazy-loaded below the fold.
- **Browser support:** latest Chrome, Firefox, Safari, Edge.

---

## 7. Suggested Tech Stack

Keep it simple and dependency-light.

- **Option A (recommended):** plain HTML + CSS + vanilla JS — fastest, easiest to host, zero build step.
- **Option B:** Vite + React + Tailwind — if the site will grow into case-study pages.
- **Hosting:** GitHub Pages, Netlify, or Vercel (static).
- **Fonts:** self-hosted or Google Fonts with `display=swap`.

> No package installs or external services without owner approval (see `AGENTS.md`).

---

## 8. File Structure (Option A)

```
/
├─ AGENTS.md
├─ spec.md
├─ index.html
├─ assets/
│  ├─ profile.jpg
│  ├─ projects/
│  ├─ favicon.ico
│  └─ og-image.jpg
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
└─ README.md
```

---

## 9. Content Checklist (Owner Must Fill)

| Item | Value |
| --- | --- |
| Full name | Rehan Ahmed |
| Role / title | `[e.g. Product & Brand Designer]` |
| Positioning line | `[one sentence]` |
| Profile photo | ✅ `assets/profile.jpg` — 1094×1438, 88 KB, JPEG |
| Degree / qualification | `[degree, institute, year]` |
| Certifications | `[list]` |
| Years of experience | `[e.g. 5+]` |
| Projects delivered | `[e.g. 60+]` |
| Happy clients | `[e.g. 40+]` |
| Satisfaction / awards | `[e.g. 98%]` |
| Services offered | `[3–4 items]` |
| 4–6 projects | `[title + image + result]` |
| Testimonials | `[2–3 quotes]` |
| Email | `[you@example.com]` |
| Social links | `[LinkedIn, Behance, Dribbble, GitHub, X]` |

> Nothing ships with brackets still in it.

---

## 10. Acceptance Criteria

The site is done when:

- [ ] Profile picture, name, role, and positioning line are visible in the hero.
- [ ] Qualification and background are clearly presented.
- [ ] Metrics strip shows 4 real, accurate numbers.
- [ ] At least 4 real projects are showcased with images and outcomes.
- [ ] Contact method works and is easy to find.
- [ ] Fully responsive at 360 / 768 / 1024 / 1440 px.
- [ ] Lighthouse ≥ 90 across all four categories.
- [ ] No console errors, no broken links, no placeholder text.
- [ ] All assets live inside this project folder.
- [ ] `README.md` explains how to run and deploy.

---

## 11. Out of Scope (v1)

- Blog / CMS.
- User accounts or login.
- Payments or e-commerce.
- Multi-language support.
- Backend database (unless contact form requires it later).
