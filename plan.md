# Portfolio Website — Implementation Plan

> Derived from: `spec.md` (Draft v1)
> Owner: Rehan Ahmed
> Project root: `D:\SMIT\SDD Portfolio`
> Scope rule: **everything happens inside this folder** (see `AGENTS.md`)

---

## 1. Goal & Definition of Success

Ship a single-page designer portfolio that proves three things in under 10 seconds:

1. **Who** — Rehan Ahmed, profile photo, role, positioning line.
2. **Credibility** — qualification, background timeline, real metrics.
3. **Proof** — 4–6 real projects with visuals and outcomes.

**Done = every item in `spec.md` §10 passes on desktop and mobile.**

---

## 2. Guiding Principles

- **Content first, code second.** No section gets built on fake copy.
- **No placeholders at launch** — every `[bracket]` in `spec.md` §9 must be replaced.
- **One source of truth** — `spec.md` drives decisions; if something changes, update the spec too.
- **Zero dependencies by default** — plain HTML/CSS/JS. No frameworks unless the spec changes.
- **Stay offline** — no installs, fonts, or CDNs without explicit approval.
- **Small, reviewable steps** — one phase at a time, confirm before moving on.

---

## 3. Decisions Needed Before Build (Blockers)

These block the phases below. Nothing in Phase 2+ can be final without them.

| # | Question | Needed for | Status |
| --- | --- | --- | --- |
| B1 | Role title (e.g. Product & Brand Designer) | Hero, nav, footer, SEO | ❓ Open |
| B2 | One-line positioning statement | Hero | ❓ Open |
| B3 | Degree, institute, year + certifications | About / Qualification | ❓ Open |
| B4 | Real metrics (years, projects, clients, satisfaction %) | Metrics strip | ❓ Open |
| B5 | Services list (3–4) | Services section | ❓ Open |
| B6 | 4–6 projects: title, image, category, result | Selected Work | ❓ Open |
| B7 | 2–3 testimonials: quote, name, role | Testimonials | ❓ Open |
| B8 | Email + social links | Contact, footer, SEO | ❓ Open |
| B9 | Fonts: system stack vs self-hosted vs Google Fonts | Design system | ⚠️ Recommend system stack (offline-safe) |
| B10 | Contact form: `mailto:` vs third-party endpoint | Contact | ⚠️ Recommend `mailto:` for v1 |
| B11 | Accent color preference | Design system | ⚠️ Default: warm amber `#C8873F` on near-black |
| B12 | Dark mode in v1? | Design system | ⚠️ Recommend yes (dark-first) |

> **Note:** the profile photo is already confirmed (`assets/profile.jpg`, 1094×1438, 88 KB). It cannot be visually verified by the agent, so the owner confirms it is a clear headshot.

---

## 4. Phase Plan

### Phase 0 — Content Collection (blocking)
**Goal:** Replace every placeholder in `spec.md` §9.

- [ ] Collect answers to B1–B8 from the owner.
- [ ] Confirm photo is a clear headshot and framing is acceptable.
- [ ] Gather project images into `assets/projects/`.
- [ ] Write first-draft copy for About, Services, Process, Contact.
- [ ] Update `spec.md` §9 checklist to ✅ as items land.

**Done when:** `spec.md` §9 has zero unresolved `[brackets]`.

---

### Phase 1 — Project Scaffold
**Goal:** Correct structure, zero errors, ready to build.

- [ ] Create `index.html` with semantic landmarks (`header`, `main`, `section`, `footer`).
- [ ] Create `css/styles.css` with reset + design tokens.
- [ ] Create `js/main.js` (empty module entry).
- [ ] Create `assets/projects/` folder.
- [ ] Add `README.md` (run + deploy instructions).
- [ ] Verify page loads locally with no console errors.

**Done when:** blank page loads clean, structure matches `spec.md` §8.

---

### Phase 2 — Design System
**Goal:** Lock the visual language before building sections.

- [ ] Color tokens: base (near-black / off-white), one accent, muted text, borders.
- [ ] Type scale: display + body, 5–6 sizes max, fluid with `clamp()`.
- [ ] Spacing scale: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96.
- [ ] Radius, shadow, and transition tokens.
- [ ] Button variants (primary, secondary, ghost) + focus-visible ring.
- [ ] Container/grid utilities (12-col, max-width ~1200px).
- [ ] Dark-first palette with light override (if B12 = yes).

**Done when:** tokens exist and are the only values used downstream.

---

### Phase 3 — Header & Hero (highest-value screen)
**Goal:** Nail the first fold.

- [ ] Sticky header: wordmark "Rehan Ahmed", nav links, CTA, mobile toggle.
- [ ] Hero: profile photo (circle, `object-fit: cover`, `object-position: center 25%`), name, role, positioning line.
- [ ] Primary CTA (`View Work`) + secondary CTA (`Contact Me`).
- [ ] Initials fallback avatar "RA" via `onerror`.
- [ ] Scroll hint.
- [ ] Verify above-the-fold layout at 1440 / 1024 / 768 / 360 px.

**Done when:** spec §2.1 and §2.2 are fully satisfied.

---

### Phase 4 — Core Sections
**Goal:** Build all content sections in order.

- [ ] **Metrics strip** — 4 stats, count-up on scroll (static fallback if JS off).
- [ ] **About** — story, photo, experience timeline, qualification badges.
- [ ] **Services** — 3–4 cards with icon, title, short description.
- [ ] **Selected Work** — 4–6 cards, image, title, category, one-line result, hover state.
- [ ] **Process** — Discover → Define → Design → Deliver.
- [ ] **Testimonials** — 2–3 quotes with name/role.
- [ ] **Tools & Skills** — chips or logo grid.
- [ ] **Contact** — closing statement, email, socials, form (name/email/message) with validation.
- [ ] **Footer** — copyright, quick links, back-to-top.

**Done when:** all 11 sections from `spec.md` §3 render with content.

---

### Phase 5 — Interaction & Motion
**Goal:** Polish without gimmicks.

- [ ] Smooth anchor scrolling.
- [ ] Active-section highlighting in nav (IntersectionObserver).
- [ ] Scroll-reveal animations, triggered once.
- [ ] `prefers-reduced-motion` disables motion.
- [ ] Mobile menu: open/close, keyboard accessible, closes on link click.
- [ ] Contact form: inline validation, success/error state.
- [ ] Hover/focus states on all interactive elements.

**Done when:** every item in `spec.md` §5 works.

---

### Phase 6 — Responsive & Cross-Browser QA
**Goal:** Nothing breaks at any width.

- [ ] Test 320 / 360 / 768 / 1024 / 1440 px.
- [ ] No horizontal scroll anywhere.
- [ ] Touch targets ≥ 44×44 px.
- [ ] Check Chrome, Firefox, Edge, Safari (or equivalent).
- [ ] Longest strings (name, project titles) do not overflow.

**Done when:** spec §6 responsive + browser items pass.

---

### Phase 7 — Accessibility & SEO
**Goal:** Meet spec §6.

- [ ] Semantic headings (single `h1`), landmarks, skip link.
- [ ] Alt text on every image; decorative images `alt=""`.
- [ ] Keyboard-only pass: nav → menu → links → form.
- [ ] Visible focus rings, AA contrast verified.
- [ ] Title, meta description, canonical.
- [ ] Open Graph + Twitter card with `assets/og-image.jpg`.
- [ ] Favicon, `robots.txt`, `sitemap.xml`.
- [ ] JSON-LD `Person` schema (name, role, photo, socials).

**Done when:** Lighthouse Accessibility + SEO ≥ 90.

---

### Phase 8 — Performance & Final Polish
**Goal:** Fast and clean.

- [ ] Compress/resize project images; convert to WebP where sensible.
- [ ] Lazy-load below-the-fold images; set width/height to avoid layout shift.
- [ ] Inline critical CSS or ensure single small stylesheet.
- [ ] Lighthouse run: target ≥ 90 across all four categories, LCP < 2.5 s.
- [ ] Remove all debug logs and commented-out code.
- [ ] Zero console errors, zero broken links, zero placeholder text.
- [ ] Final pass against `spec.md` §10 checklist.

**Done when:** spec §10 is 100% ticked.

---

### Phase 9 — Launch
**Goal:** Put it online.

- [ ] Owner approves final build.
- [ ] Choose host (GitHub Pages / Netlify / Vercel) — owner decides.
- [ ] Add deploy steps to `README.md`.
- [ ] Deploy and verify live URL on mobile + desktop.
- [ ] Post-launch: share link, collect feedback, log v1.1 ideas.

**Done when:** live site matches the approved local build.

---

## 5. Build Order & Dependencies

```
Phase 0 (content)
   └─> Phase 1 (scaffold)
         └─> Phase 2 (design system)
               ├─> Phase 3 (hero)
               └─> Phase 4 (sections)
                     └─> Phase 5 (motion)
                           └─> Phase 6 (responsive)
                                 └─> Phase 7 (a11y + SEO)
                                       └─> Phase 8 (perf)
                                             └─> Phase 9 (launch)
```

Phases 6–8 are iterative — expect to loop back after each one.

---

## 6. Spec Traceability

| Spec section | Covered by |
| --- | --- |
| §2.1 Profile picture | Phase 3 |
| §2.2 Name & title | Phase 0 (copy), Phase 3 |
| §2.3 Qualification | Phase 0 (copy), Phase 4 |
| §2.4 Background | Phase 0 (copy), Phase 4 |
| §2.5 Metrics | Phase 0 (numbers), Phase 4 |
| §3 Page structure | Phases 3–4 |
| §4 Design direction | Phase 2 |
| §5 Functional | Phase 5 |
| §6 Non-functional | Phases 6–8 |
| §7 Tech stack | Phase 1 |
| §8 File structure | Phase 1 |
| §9 Content checklist | Phase 0 |
| §10 Acceptance criteria | Phase 8 |
| §11 Out of scope | Guardrail — do not build |

---

## 7. Milestones

| Milestone | Phases | Outcome |
| --- | --- | --- |
| **M1 — Content locked** | 0 | No placeholders remain in spec |
| **M2 — First fold live** | 1–3 | Hero + header look finished |
| **M3 — Full page built** | 4–5 | All sections + interactions working |
| **M4 — Quality pass** | 6–8 | Responsive, accessible, fast, clean |
| **M5 — Published** | 9 | Public URL live |

---

## 8. Risks & Mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Missing project images | Can't finish Work section | Use styled placeholder cards; owner supplies images |
| Placeholder metrics go live | Credibility damage | Gate launch on real numbers only |
| Over-building (scope creep) | Delay | Stick to `spec.md` §11 out-of-scope list |
| Font/CDN requests break offline rule | Policy breach | Default to system fonts; ask before adding |
| Portrait photo crops badly in circle | Ugly hero | Owner approves framing or supplies 1080×1080 crop |
| Agent cannot view images | Weak visual QA | Owner confirms screenshots; agent verifies via measurements and code |
| Form has no backend | Messages lost | Use `mailto:` for v1; consider endpoint later with approval |

---

## 9. Working Agreement

- Agent proposes, owner approves each phase before the next begins.
- Every change is reported as: file created / edited / deleted.
- No deletions or overwrites of existing work without confirmation.
- If a task needs anything outside `D:\SMIT\SDD Portfolio`, the agent stops and asks.
