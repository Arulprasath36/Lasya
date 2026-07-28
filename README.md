# Madhu Dance Academy — Design System

**Madhu Dance Academy** is a Bollywood dance school for kids, teens, and adults. The brand promise:
**"From First Steps to Stage Lights."** Madhu Dance Academy teaches choreography, expression, formations,
and performance confidence — and the identity should feel *elegant, joyful, cultural,
cinematic, and modern*: a high-end creative-studio aesthetic that is still welcoming to
parents and students. Not childish, not template-y.

> Madhu Dance Academy (लास्य) is the graceful, expressive, feminine form of dance in Indian tradition —
> the perfect name to anchor a brand about *expression*.

## Sources

This system was built **from a written creative brief** (no codebase, Figma, or existing
brand assets were attached). All visual decisions below were originated here. If you have
real photography, a finalized logo, or brand fonts, hand them over and we'll swap them in —
see **Caveats** at the bottom.

---

## Brand at a glance

- **Tagline / headline:** *Dance Bollywood. Feel the Rhythm. Own the Stage.*
- **Sub:** *Madhu Dance Academy is a joyful Bollywood dance school for kids, teens, and adults.*
- **Core motif:** the **peacock feather "eye"** — abstracted into a monogram and into
  light-trail gradients that read as dance movement.
- **Palette:** peacock jewels (gold, teal, emerald, royal blue, magenta) on **deep ink**.
- **Mood:** dark luxury, cinematic stage lighting, gold particle shimmer.

---

## CONTENT FUNDAMENTALS

How Madhu Dance Academy writes.

- **Voice:** warm, confident, invitational. It celebrates the student. Joyful but never
  goofy — think a poised performer who wants you on stage with them.
- **Person:** speaks to **"you"** ("Own the stage," "Find your rhythm"), and refers to the
  school as **"Madhu Dance Academy"** or **"we."**
- **Casing:** Headlines in **Title Case** or sentence case set in the display serif.
  Eyebrows/labels in **UPPERCASE**, widely tracked (Marcellus). Body in sentence case.
- **Rhythm of copy:** short, punchy, *beat-like* fragments for headlines — often three
  staccato clauses: *"Dance Bollywood. Feel the Rhythm. Own the Stage."* Body copy is
  fuller and reassuring, aimed at parents as much as students.
- **Vocabulary:** expression, rhythm, confidence, stage presence, formations,
  choreography, joy, culture. Avoids hype/sales clichés ("unlock," "game-changer").
- **Emoji:** **none.** The luxury register carries the warmth instead.
- **Examples**
  - Eyebrow: `OUR PROGRAMS` · `WHY MADHU DANCE ACADEMY` · `STUDENT STORIES`
  - CTA buttons: **Join a Class** · **View Programs** · **Register Now** · **Contact Us**
  - Section heads: *"From First Steps to Stage Lights."* · *"Ready to dance with Madhu Dance Academy?"*
  - Program names: *Kids Bollywood · Teen Dance · Adult Bollywood Fitness · Wedding &
    Event Choreography*

---

## VISUAL FOUNDATIONS

**Color.** Deep-ink base (`--ink-900 #07080D` → navy `--ink-800 #0B0F1E`) sets a dark-luxury
stage. **Gold (`--gold-500 #D8B25A`) is the single primary accent** — used for the logo,
key CTAs, hairlines, and shimmer. The four other peacock jewels (teal, emerald, royal,
magenta) appear as a **gradient (`--grad-peacock`)** for feather trails and as program
color-coding — never as large flat fills. Foreground is **warm ivory (`--fg-1 #F5EFE1`)**,
not pure white, to keep the screen warm and filmic.

**Type.** Three families (final pairing — "Luxury Dance Studio"):
- **Cormorant Garamond** — high-contrast elegant serif. Hero and headings. The **wordmark is
  Cormorant Garamond SemiBold *Italic*** — its flowing italic carries the performance/
  "Own the Stage" feeling.
- **Marcellus** — refined roman caps for **eyebrows/labels** only, widely tracked.
- **Manrope** — clean modern sans for body, UI, buttons (chosen over Inter to avoid the
  generic look).
High display-to-body contrast (a 140px serif over 17px sans) is the signature.

**Spacing.** 4px base scale (`--s-1`…`--s-10`). Sections breathe — `--s-9 / --s-10`
(96–128px) vertical rhythm between marketing sections; generous letting on dark.

**Backgrounds.** Full-bleed deep ink with a subtle **`--grad-stage`** radial (a soft navy
spotlight from top center, like a stage wash). A **motion-art layer** — large blurred
pink/magenta, royal, teal, and violet blobs drifting on a slow JS-driven clock — gives the
hero and CTA a living, liquid-gradient flow. **Floating gold particles** add shimmer. Real
photography fills the hero, about, and gallery as cinematic, warm-graded tiles.

**Imagery vibe.** Warm, cinematic, slightly golden grade; rich shadows; jewel highlights.
Stage and movement, not flat studio shots. **Real performance photography is now integrated**
(see `assets/photos/`) — dark-stage shots with a blue starcloth backdrop, shot by View By Anu.
The moonlit silhouette anchors the hero; joyful student portraits carry About and the gallery.

**Animation.** Smooth and *theatrical*, never bouncy.
- Reveals use `--ease-stage` (cubic-bezier 0.16,1,0.3,1) — a slow settle, like a curtain.
- **Text fade-up** on scroll (rise 16–24px + fade), staggered to feel "on beat."
- **Feather reveal:** peacock gradient/feather scales + fades in behind headlines.
- **Curtain section transitions**; **horizontal scroll** gallery; **gold particle** drift.
- Hover on cards: lift + gold hairline glow. Always provide a `prefers-reduced-motion`
  fallback (show end-state, no motion).

**Hover / press.**
- *Hover:* surfaces lighten (`--surface-1` → `--surface-2`), gold hairline appears,
  subtle `--glow-gold`. Links brighten gold `--gold-400`.
- *Press:* gold fills deepen to `--gold-600`; cards/buttons scale to ~0.98.

**Borders & dividers.** Hairlines are **gold-tinted** (`--hairline rgba(236,203,121,.16)`)
on dark — 1px. Cool hairline variant for neutral contexts.

**Shadows / glow.** On dark, depth comes from **glow** more than drop-shadow:
`--glow-gold`, `--glow-teal`. Drop-shadows (`--shadow-md/lg`) are deep and soft for
floating cards and modals.

**Cards.** Glassy: `--surface-1` fill, 1px gold-tinted hairline, `--r-lg` (22px) radius,
soft shadow; on hover they lift and gain a gold glow. No heavy borders.

**Corner radii.** Soft but not bubbly — `--r-md 14px` for inputs/small, `--r-lg 22px` for
cards, `--r-pill` for buttons/chips. Hero imagery can run to `--r-xl 34px`.

**Transparency & blur.** Glass surfaces and a blurred, sticky top nav (`backdrop-filter`)
reinforce the "stage light through haze" feel. Use sparingly — overlays, nav, modals.

---

## ICONOGRAPHY

- **Lucide Icons** (via CDN) are the icon system — rendered as **inline SVG** (not a web
  font), so they stay crisp everywhere and never depend on a glyph font loading. The thin,
  rounded 1.4–1.6px stroke matches the elegant serif. *Substitution flagged:* no bespoke
  icon set was supplied; swap for custom glyphs later if desired.
  `<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>` then
  `<i data-lucide="music"></i>` + `lucide.createIcons()`.
- **Usage:** icons are sparing and decorative-adjacent — program glyphs, nav, contact
  details, social. Gold or ivory stroke on dark. Never multicolor.
- **Brand mark:** `assets/logo-madhu.png` is the **real primary logo** — a black circular
  badge with a gold-gradient "M" monogram (crescent + orbiting dot motif) over "MADHU DANCE
  ACADEMY", ringed by a gold border. `assets/logo-madhu-nav.png` is a tagline-free crop
  for nav/small use. `logo-source.png` is the original. (The earlier peacock-swan *laSya*
  logo and the `logo-mark.svg` / `logo-wordmark.svg` placeholders are retired.)
  Everything else uses Lucide.
- **Emoji / unicode icons:** not used.

---

## Index — what's in this system

| File | What it is |
|---|---|
| `colors_and_type.css` | All color + type tokens (CSS variables) and semantic type helpers. |
| `assets/logo-madhu.png` | Primary logo (peacock-swan wordmark + tagline, transparent). |
| `assets/logo-madhu-nav.png` | Tagline-free logo crop for nav / small use. |
| `assets/photos/` | Real performance photography (web-optimized JPEGs from View By Anu). |
| `preview/*.html` | Design-system cards (swatches, type specimens, components) shown in the Design System tab. |
| `ui_kits/website/` | Website UI kit — `index.html` (interactive marketing site) + JSX components + README. |
| `SKILL.md` | Agent-Skill manifest so this system works inside Claude Code. |

### Fonts
Cormorant Garamond, Marcellus, and Manrope are linked from **Google Fonts** (see the
`<link>` in `colors_and_type.css` header and each HTML file). No font files are vendored —
if you need a fully-offline kit, ask and I'll vendor the `.woff2` files into `fonts/`.

---

## CAVEATS — help me make this perfect

- **Logo — done.** The real Madhu Dance Academy monogram logo is now wired in (nav, footer,
  design system). Send a vector/SVG version if you have one for crisp scaling at any size.
- **Fonts are Google-Fonts choices** (Cormorant Garamond + Manrope + Marcellus), per your
  Option 2 direction. Tell me if you'd prefer the Cinzel/Cinzel/Inter route instead.
- **Imagery is real now** for hero, about, and gallery (your performance photos). The
  **instructor section still needs a founder portrait** — send one and I'll drop it in
  (it's currently a placeholder slot).
- **Icon set is Lucide (substituted).** Fine to keep, or we can commission custom glyphs.
