# 01 — Design System

## Brand Colors

Defined in `tailwind.config.ts` under `theme.extend.colors.brand` and as CSS custom properties in `app/globals.css`:

| Token | Hex | Use |
|---|---|---|
| `brand.dark` / `--brand-dark` | `#0B1120` | Global page background (deep navy) |
| `brand.surface` / `--brand-surface` | `#1E293B` | Cards, panels, raised surfaces |
| `brand.blue` / `--brand-blue` | `#55a4ff` | Primary accent — links, glows, highlights |
| `brand.light` / `--brand-light` | `#F8FAFC` | Foreground text on dark backgrounds |
| `brand.slate` / `--brand-slate` | `#0F172A` | Dark foreground text (for light-bg sections) |

**Secondary accents used inline** (not in Tailwind config, but appear throughout):
- Cyan: `#67e8f9` / `cyan-300` — secondary accent for orbital effects
- Emerald: `text-emerald-400`, `bg-emerald-500/10` — positive/certified states
- Amber: `text-amber-400` — compliances/awards section
- Red: `bg-red-600` — form error state only

**Footer and Navbar light theme**: The footer uses `bg-white/80` with dark text (`text-zinc-700`, `text-black`). The Navbar also uses a white-dominant gradient. These are the only "light" surfaces on the site; everything else is dark navy.

---

## Typography

Six fonts loaded via `next/font/google` in `app/layout.tsx`. All are registered as CSS variables and Tailwind utility classes:

| Font | CSS Variable | Tailwind Class | Use |
|---|---|---|---|
| Inter | `--font-inter` | `font-inter` | Body default (set on `body` in globals.css) |
| Manrope | `--font-manrope` | `font-manrope` | Supporting body copy, chip labels |
| Montserrat | `--font-montserrat` | `font-montserrat` | Section headings, hero H1 on home page |
| Space Grotesk | `--font-grotesk` | `font-grotesk` | Products page headings, product names |
| JetBrains Mono | `--font-jetbrains` | `font-jetbrains` | Orbital node labels, tag chips, code-adjacent labels |
| Fraunces (normal + italic) | `--font-fraunces` | `font-fraunces` | Italic accent phrases (e.g. "specialized industries") |

**Typical heading pattern:**
```tsx
<h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white leading-[1.1] tracking-tight">
```

**Typical body pattern:**
```tsx
<p className="text-slate-300/90 text-lg leading-relaxed max-w-xl">
```

**Gradient text:**
```tsx
<span className="bg-gradient-to-r from-brand-blue via-cyan-300 to-white bg-clip-text text-transparent">
```

---

## Spacing & Layout

- **Max content width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section padding**: `py-20 px-4` is the standard; hero sections use `py-24 md:py-28`
- **Navbar height**: `h-20` (fixed, `z-50`)
- **Hero top padding**: `pt-36` to clear the fixed navbar
- **Card border radius**: `rounded-2xl` is standard; `rounded-xl` for inner elements
- **Grid gaps**: `gap-6` standard card grids; `gap-8 lg:gap-12` for page-level two-column layouts

---

## Animations (Tailwind + CSS)

Custom animations registered in `tailwind.config.ts` and keyframes in `app/globals.css`:

| Name | Class | Description |
|---|---|---|
| Aurora | `animate-aurora` | 60s background-position shift for aurora gradient |
| Marquee | `animate-marquee` | `var(--duration)` horizontal marquee slide (InfiniteSlider) |
| Border Orbit | `animate-border-orbit` | 8s conic-gradient rotation for DynamicBorderCard |
| Stars 1/2/3 | `animate-stars-1/2/3` | 50/100/150s vertical translateY for cosmic starfield |
| Spin | `animate-spin` (Tailwind default) | Used for CyberOrb rings via inline `animation: spin Xs linear infinite` |
| Ping | `animate-ping` (Tailwind default) | Pulsing halo on orbital core |
| Pulse | `animate-pulse` (Tailwind default) | CyberOrb core glow, hero eyebrow dot |

**BinaryRain** uses vanilla `requestAnimationFrame` on a `<canvas>` — no CSS animation.

**RadialOrbitalTimeline** uses `requestAnimationFrame` + React `useState(t)` for the orbit angle — no CSS animation for the node positions.

---

## Component Patterns

### Section header block (reused everywhere)
```tsx
<div className="text-center mb-12">
  <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
    Eyebrow Label
  </p>
  <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-brand-light tracking-tight">
    Section Heading
  </h2>
</div>
```

### Tag/chip pill
```tsx
<span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 font-jetbrains text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300 backdrop-blur-sm">
  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
  Label Text
</span>
```

### Card with hover pop
```tsx
<div className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.04] hover:border-cyan-300/50 hover:bg-slate-800/60 hover:shadow-[0_0_30px_rgba(85,164,255,0.25)]">
```

### Gradient horizontal rule / accent bar
```tsx
<div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent" />
```

---

## Global Body Styles

From `app/globals.css`:
```css
body {
  background-color: var(--brand-dark);  /* #0B1120 */
  color: #F8FAFC;
  font-family: var(--font-inter), system-ui, sans-serif;
}
```

The `ScrollBackground` component can override this with a scroll-driven background tint — see `02-shared-components.md`.
