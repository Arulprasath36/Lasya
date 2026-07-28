---
name: madhu-design
description: Use this skill to generate well-branded interfaces and assets for Madhu Dance Academy, a Bollywood dance school, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Madhu Dance Academy Design Skill

Madhu Dance Academy is a Bollywood dance school (kids, teens, adults). Brand: **"Where rhythm becomes
expression."** Dark-luxury, cinematic, peacock-jewel palette on deep ink, gold as the single
primary accent. Elegant Cormorant Garamond display + Manrope body. Joyful but never childish.

## Start here
1. Read `README.md` for the full system: content voice, visual foundations, iconography, and
   the file index.
2. Use `colors_and_type.css` for all color + type tokens (CSS variables). Link the Google
   Fonts (Cormorant Garamond, Manrope, Marcellus) as shown in its header comment.
3. Browse `preview/*.html` to see the tokens and components as rendered cards.
4. For full UI, open `ui_kits/website/` — copy its JSX components (Nav, Hero, program cards,
   gallery, modal, footer) and `site.css` patterns.

## Assets
- `assets/logo-madhu.png` — primary logo (black circular badge, gold "M" monogram + "MADHU DANCE ACADEMY" wordmark, transparent).
- `assets/logo-madhu-nav.png` — tagline-free crop for nav / small use.
- Icons: **Lucide** via CDN, rendered as inline SVG. Imagery: real performance photos in
  `assets/photos/` (hero, about, gallery); `image-slot` placeholder only for the founder portrait.
- Motion: a JS-driven **motion-art** layer (drifting blurred brand-color blobs) flows behind
  the hero and CTA; a **vibrant** background mood lights sections in pink/royal/teal/magenta.

## How to work
If creating visual artifacts (slides, mocks, throwaway prototypes), copy the assets and
tokens out and produce static HTML files for the user to view. If working on production code,
copy the assets and follow the rules here to design on-brand.

If invoked without guidance, ask the user what they want to build, ask a few focused
questions, then act as an expert designer producing on-brand HTML artifacts or production
code as needed.

## Non-negotiables
- Gold is the only large accent; teal/emerald/royal/magenta appear as the peacock gradient or
  per-program coding, never big flat fills.
- Warm ivory text (`--fg-1`), never pure white. Deep-ink backgrounds with the stage-wash radial.
- Motion is theatrical, never bouncy; always provide a reduced-motion fallback.
- No emoji. No Inter. No hand-drawn icons — use Lucide.
