# Madhu Dance Academy — Website UI Kit

A high-fidelity, interactive recreation of the **Madhu Dance Academy marketing website**: a dark-luxury,
peacock-themed, motion-forward single page for a Bollywood dance school.

> Built from the brand brief (no production codebase exists yet). This is the reference
> implementation of the website design — copy components out of it to build real pages.

## Run it
Open `index.html`, or serve this folder locally:

```sh
python3 -m http.server 8001
```

Then visit `http://localhost:8001/`. It's a click-through prototype:
- Sticky glass nav; anchor links scroll to sections.
- **Join a Class / Register Now** open a working register modal (fake submit → success state).
- Gallery scrolls horizontally (arrows or drag/trackpad).
- Scroll-reveal entrance animations (with `prefers-reduced-motion` fallback).
- Drop your own photos onto any **image slot** (hero, about, gallery, instructor).

## Files
| File | Contents |
|---|---|
| `index.html` | Entry point — loads fonts, Lucide, React/Babel, and all components. |
| `colors_and_type.css` | Local copy of the Madhu Dance Academy design tokens used by the prototype. |
| `site.css` | Page styles, responsive grids, motion/ambience, reveal helpers. |
| `lib.jsx` | Shared hooks + atoms: `useReveal`, `useScrolled`, `Eyebrow`, `Button`, `Icon` (Lucide), `Particles`, `CursorEye`. |
| `NavHero.jsx` | `Nav`, `Hero`, `HeroSlideshow` (slow cinematic cross-fade of the hero portrait — auto-advances every ~4.2s with subtle progress dots; respects reduced-motion). |
| `Sections.jsx` | `About`, `Programs` (program cards), `WhyMadhu Dance Academy` (feature grid). |
| `Showcase.jsx` | `Gallery` (horizontal scroll), `Instructor`, `Testimonials`. |
| `Contact.jsx` | `FinalCTA`, `RegisterModal`, `Footer`. |
| `App.jsx` | Assembles the page and wires the modal. |
| `image-slot.js` | User-fillable image placeholder web component. |

## Component coverage
Nav · hero · stat row · eyebrow/label · primary/secondary/ghost buttons · program cards ·
feature grid · horizontal gallery · instructor split · testimonial cards · final CTA ·
register modal with form fields (input, select, submit, success) · footer with social.

## Conventions
- Everything reads from the local `colors_and_type.css` tokens — no hard-coded brand colors
  except where a jewel accent is passed per-item (program cards).
- Icons: `<Icon name="…" />` (Lucide). Reveal: add `reveal` (+ `reveal-d1…d4`) to any element.
- Resting state of every element is **visible**; entrances are played via the Web Animations
  API so content is never stuck-hidden if motion is paused.
- Grids are CSS classes (`hero-grid`, `split-grid`, `grid-4`, `grid-3`, `footer-grid`) so
  they collapse responsively.

## Real photography
Hero, About, and the Gallery now use **real performance photos** (`assets/photos/`,
web-optimized). The **Instructor** section still uses an `image-slot` placeholder — drop in a
founder portrait to complete it.
