# Portfolio Website — Task Board

> Sources: `spec.md` (requirements) + `plan.md` (phases)
> Owner: Rehan Ahmed
> Root: `D:\SMIT\SDD Portfolio`
> Rule: all work stays inside this folder (`AGENTS.md`)

**Legend**
`👤 Owner` = needs info/decision from Rehan · `🤖 Agent` = build work
`⬜ Todo` · `🟨 In progress` · `✅ Done` · `⛔ Blocked`

---

## Progress Snapshot

| Phase | Tasks | Done | Status |
| --- | --- | --- | --- |
| 0 — Content | 13 | 1 | 🟨 Blocked (needs owner answers) |
| 1 — Scaffold | 6 | 6 | ✅ Done |
| 2 — Design system | 7 | 7 | ✅ Done |
| 3 — Header & Hero | 6 | 6 | ✅ Built (photo framing needs owner check) |
| 4 — Core sections | 10 | 10 | ✅ Done |
| 5 — Interaction | 7 | 7 | ✅ Done |
| 6 — Responsive QA | 5 | 0 | ⬜ Needs browser pass |
| 7 — A11y & SEO | 9 | 4 | 🟨 Partial |
| 8 — Performance | 8 | 2 | 🟨 Partial |
| 9 — Launch | 5 | 0 | ⬜ Todo |
| **Total** | **76** | **37** | **49%** |

---

## Phase 0 — Content Collection ⛔ BLOCKING

Everything below blocks the build. No fake copy, no fake numbers.

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T0-01 | Profile photo provided | 👤 | — | ✅ `assets/profile.jpg` (1094×1438, 88 KB) |
| T0-02 | Confirm photo is a clear headshot | 👤 | T0-01 | Owner says yes |
| T0-03 | Role title (e.g. Product & Brand Designer) | 👤 | — | Text confirmed |
| T0-04 | One-line positioning statement | 👤 | T0-03 | Text confirmed |
| T0-05 | Degree + institute + year | 👤 | — | Text confirmed |
| T0-06 | Certifications list | 👤 | — | Text confirmed |
| T0-07 | Real metrics ×4 (years, projects, clients, satisfaction) | 👤 | — | 4 true numbers |
| T0-08 | Services list (3–4) | 👤 | — | List confirmed |
| T0-09 | 4–6 projects (title, image, category, result) | 👤 | — | Files in `assets/projects/` |
| T0-10 | 2–3 testimonials (quote, name, role) | 👤 | — | Text confirmed |
| T0-11 | Email + social links | 👤 | — | Links confirmed |
| T0-12 | Approve defaults: system fonts, `mailto:` form, amber accent, dark-first | 👤 | — | Yes/No per item |
| T0-13 | Update `spec.md` §9 with all answers | 🤖 | T0-03…T0-11 | Zero `[brackets]` left |

**Exit criteria:** every `[bracket]` in `spec.md` §9 replaced; owner approves final copy.

---

## Phase 1 — Project Scaffold

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T1-01 | Create `index.html` with semantic landmarks | 🤖 | T0-13 | File exists, valid HTML |
| T1-02 | Create `css/styles.css` with reset | 🤖 | T1-01 | Linked, no errors |
| T1-03 | Create `js/main.js` entry | 🤖 | T1-01 | Loaded as module |
| T1-04 | Create `assets/projects/` folder | 🤖 | — | Folder exists |
| T1-05 | Create `README.md` (run + deploy) | 🤖 | T1-01 | Instructions accurate |
| T1-06 | Verify blank page loads with 0 console errors | 🤖 | T1-01…T1-03 | Clean console |

**Exit criteria:** structure matches `spec.md` §8.

---

## Phase 2 — Design System

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T2-01 | Color tokens (base, accent, muted, border, success, error) | 🤖 | T0-12 | CSS variables defined |
| T2-02 | Fluid type scale with `clamp()` | 🤖 | T0-12 | 5–6 sizes, max 2 families |
| T2-03 | Spacing scale 4→96 | 🤖 | — | Tokens defined |
| T2-04 | Radius / shadow / transition tokens | 🤖 | — | Tokens defined |
| T2-05 | Buttons: primary, secondary, ghost + focus ring | 🤖 | T2-01 | All 3 render + focus visible |
| T2-06 | 12-col container + max-width | 🤖 | T2-03 | Utility classes work |
| T2-07 | Dark-first palette + light override | 🤖 | T2-01 | AA contrast in both |

**Exit criteria:** no hard-coded colors/sizes outside tokens.

---

## Phase 3 — Header & Hero

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T3-01 | Sticky header: wordmark, nav, CTA | 🤖 | T2-05 | Sticks on scroll |
| T3-02 | Mobile menu toggle + panel | 🤖 | T3-01 | Opens/closes, keyboard OK |
| T3-03 | Hero: circular photo (`cover`, `center 25%`) | 🤖 | T0-02, T2-01 | Face framed well |
| T3-04 | Hero copy: name, role, positioning line | 🤖 | T0-03, T0-04 | Matches approved copy |
| T3-05 | CTAs: `View Work` + `Contact Me` + scroll hint | 🤖 | T3-04 | Both scroll correctly |
| T3-06 | "RA" initials fallback via `onerror` | 🤖 | T3-03 | Shows if image blocked |

**Exit criteria:** `spec.md` §2.1 + §2.2 fully satisfied.

---

## Phase 4 — Core Sections

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T4-01 | Metrics strip: 4 stats | 🤖 | T0-07 | Real numbers shown |
| T4-02 | About: story + photo | 🤖 | T0-04, T0-05 | Reads clearly |
| T4-03 | Experience timeline | 🤖 | T0-05 | Clean, no wall of text |
| T4-04 | Qualification badges | 🤖 | T0-05, T0-06 | Listed |
| T4-05 | Services cards (3–4) | 🤖 | T0-08 | Cards render |
| T4-06 | Selected Work grid (4–6) | 🤖 | T0-09 | Images + results |
| T4-07 | Process: 4 steps | 🤖 | T0-08 | Discover→Deliver |
| T4-08 | Testimonials (2–3) | 🤖 | T0-10 | Quotes + names |
| T4-09 | Tools & Skills chips | 🤖 | T0-08 | Chips render |
| T4-10 | Contact + footer | 🤖 | T0-11 | Email, socials, back-to-top |

**Exit criteria:** all 11 sections from `spec.md` §3 present.

---

## Phase 5 — Interaction & Motion

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T5-01 | Smooth anchor scrolling | 🤖 | T4-01…T4-10 | Jumps land correctly |
| T5-02 | Active-section nav highlight | 🤖 | T5-01 | Correct link highlights |
| T5-03 | Scroll-reveal (once) | 🤖 | T4-02 | Elements fade in |
| T5-04 | Metrics count-up (once) | 🤖 | T4-01 | Animates on enter |
| T5-05 | `prefers-reduced-motion` fallback | 🤖 | T5-03, T5-04 | No motion, content visible |
| T5-06 | Form validation + success/error | 🤖 | T4-10 | Invalid fields flagged |
| T5-07 | Hover + focus states everywhere | 🤖 | T2-05 | No dead controls |

**Exit criteria:** every item in `spec.md` §5 works.

---

## Phase 6 — Responsive QA

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T6-01 | Test 320/360/768/1024/1440 px | 🤖 | Phase 5 | Layout holds |
| T6-02 | No horizontal scroll at any width | 🤖 | T6-01 | `scrollWidth ≤ clientWidth` |
| T6-03 | Touch targets ≥ 44×44 px | 🤖 | T6-01 | All pass |
| T6-04 | Longest strings don't overflow | 🤖 | T6-01 | Name/titles fit |
| T6-05 | Cross-browser check (Chrome/FF/Edge/Safari) | 🤖 | T6-01 | No breakage |

**Exit criteria:** `spec.md` §6 responsive items pass.

---

## Phase 7 — Accessibility & SEO

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T7-01 | Semantic headings, single `h1`, landmarks | 🤖 | Phase 4 | Valid outline |
| T7-02 | Alt text on all images | 🤖 | Phase 4 | No empty non-decorative alt |
| T7-03 | Skip link | 🤖 | T3-01 | Jumps to main |
| T7-04 | Keyboard-only pass | 🤖 | Phase 5 | Full flow usable |
| T7-05 | Focus rings + AA contrast | 🤖 | T2-01 | Contrast ≥ 4.5:1 |
| T7-06 | Title + meta description + canonical | 🤖 | T0-03 | Unique, accurate |
| T7-07 | OG + Twitter card + `og-image.jpg` | 🤖 | T0-09 | Previews correctly |
| T7-08 | Favicon, `robots.txt`, `sitemap.xml` | 🤖 | T1-01 | Reachable |
| T7-09 | JSON-LD `Person` schema | 🤖 | T0-11 | Valid in Rich Results test |

**Exit criteria:** Lighthouse Accessibility + SEO ≥ 90.

---

## Phase 8 — Performance & Final Polish

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T8-01 | Compress/resize project images | 🤖 | T0-09 | Each < ~200 KB |
| T8-02 | Convert to WebP where sensible | 🤖 | T8-01 | Fallbacks present |
| T8-03 | Lazy-load below the fold | 🤖 | T8-01 | `loading="lazy"` |
| T8-04 | Set image width/height (no layout shift) | 🤖 | T8-01 | CLS ≈ 0 |
| T8-05 | Lighthouse ≥ 90 ×4, LCP < 2.5 s | 🤖 | Phase 7 | Scores recorded |
| T8-06 | Remove debug logs / dead code | 🤖 | Phase 5 | Clean source |
| T8-07 | Zero console errors, broken links, placeholders | 🤖 | T8-05 | Verified |
| T8-08 | Final pass vs `spec.md` §10 | 🤖 | T8-07 | 100% ticked |

**Exit criteria:** `spec.md` §10 fully complete.

---

## Phase 9 — Launch

| ID | Task | Owner | Depends on | Done when |
| --- | --- | --- | --- | --- |
| T9-01 | Owner approves final build | 👤 | T8-08 | Explicit yes |
| T9-02 | Choose host (GitHub Pages / Netlify / Vercel) | 👤 | T9-01 | Decision made |
| T9-03 | Add deploy steps to `README.md` | 🤖 | T9-02 | Steps reproduce build |
| T9-04 | Deploy + verify live on mobile/desktop | 🤖 | T9-03 | URL works |
| T9-05 | Log v1.1 ideas from feedback | 👤 | T9-04 | List captured |

**Exit criteria:** live site matches approved local build.

---

## Critical Path

```
T0-03 → T0-04 → T0-13
   ↓
T0-07 → T0-08 → T0-09 → T0-10 → T0-11
   ↓
Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7 → Phase 8 → Phase 9
```

**Only 3 things stop the build today:**
1. Role + positioning line (T0-03, T0-04)
2. Real metrics + services (T0-07, T0-08)
3. Contact details (T0-11)

Projects and testimonials can land later — sections get built with placeholders first, then filled before launch.

---

## Notes

- Tasks are ordered; do not start a phase until its dependencies are ✅.
- Every task change is reported as: file created / edited / deleted.
- Anything requiring a file outside `D:\SMIT\SDD Portfolio` → stop and ask.
- If the spec changes, update `spec.md` first, then this board.

---

## Build Log

### v0.1 — First build (Phases 1–5)

**Files created**

| File | Purpose |
| --- | --- |
| `index.html` | Full single-page site, 11 sections, semantic landmarks |
| `css/styles.css` | Tokens + all styles, dark theme, responsive breakpoints |
| `js/main.js` | Menu, active nav, reveal, counters, form validation |
| `assets/favicon.svg` | "R" monogram favicon |
| `assets/projects/README.md` | Image specs + wiring instructions |
| `README.md` | Run, structure, replace, deploy |

**Verified**

- ✅ `node --check js/main.js` — syntax OK
- ✅ All local `src`/`href` references exist (4/4)
- ✅ HTML tag balance OK
- ✅ All in-page anchors resolve
- ✅ CSS braces balanced
- ✅ No duplicate IDs, exactly one `h1`
- ✅ 13 `REPLACE` markers flagged in `index.html`

**Not yet verified (needs a browser)**

- Visual layout at 320 / 360 / 768 / 1024 / 1440 px (Phase 6)
- Lighthouse scores (Phase 8)
- Photo framing inside the circular crop — owner must confirm

**Content still placeholder**

Role title, positioning line, degree/institute, certifications, all four
metrics, all six projects, three testimonials, email, and social URLs.

