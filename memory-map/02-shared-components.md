# 02 — Shared Components

All components that appear on multiple pages or provide site-wide infrastructure.

---

## Navbar (`components/Navbar.tsx`)

**Client component** (`"use client"`)

Fixed top bar, `z-50`, `h-20`. White-to-transparent gradient background:
```
linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(225,247,255,0.95) 40%, rgba(5,10,20,0.8) 100%)
```

### Structure
- **Left**: Aguna logo — `Image` width=64 height=70 (logo is 609×666 near-square). Has a blur halo behind it.
- **Center** (desktop): pill nav — `bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2`. Links use `px-5 py-2 rounded-full` with active state `bg-white/60 font-bold text-blue-900`.
- **Right** (desktop): Contact button (`/contact`) + mobile hamburger

### Nav Links
```
Home  →  /
Cybersecurity Services  →  dropdown → /services, /cyber-security
Products  →  /products
About  →  /about
```

### Dropdown behavior
- `dropdownTimerRef` (`useRef<ReturnType<typeof setTimeout>>`) adds a 150ms delay before closing on `mouseLeave` — prevents the panel from closing when moving the cursor from trigger to panel
- An invisible `h-2` div bridge sits between trigger and panel to cover the gap

### Mobile overlay
- Full-screen `bg-slate-900/95 backdrop-blur-xl` modal
- Cybersecurity Services has an accordion (chevron rotate)
- Escape key closes overlay
- `document.body.style.overflow = 'hidden'` while open

### Active link detection
- `/` uses exact match: `pathname === "/"`
- Others use `pathname.startsWith(href)`

---

## Footer (`components/Footer.tsx`)

**Server component** (no `"use client"`)

Light theme: `bg-white/80 backdrop-blur-md border-t border-gray-200`

Four columns (md:col-span-3 each in a 12-col grid):
1. **Corporate** — address (Noida), email (`info@agunasolutions.com`), LinkedIn button (inline SVG — `lucide-react@1.21.0` has no `Linkedin` export)
2. **Quick Links** — 7 page routes
3. **Trust & Compliance** — anchor links to sections
4. **Tech & Operations** — anchor links to section IDs on cyber-security page

Copyright bar at bottom: `© [year] Aguna Solutions. All rights reserved.`

---

## SectionDivider (`components/SectionDivider.tsx`)

Visual separator used between every major section. Thin decorative line or gradient bar.

---

## SmoothScroll (`components/SmoothScroll.tsx`)

**Client component**, wrapped in `<Suspense>` in layout. Implements Lenis smooth scrolling site-wide.

---

## ScrollBackground (`components/ScrollBackground.tsx`)

**Client component**. Listens to scroll position and can apply a dynamic background tint to the `<body>` or a fixed overlay. Sits between Navbar and main content in layout.

---

## BinaryRain (`components/ui/binary-rain.tsx`)

**Client component**  
`<canvas>` element, `absolute inset-0 h-full w-full`, `aria-hidden="true"`  
Must be inside a **positioned container** (e.g. `relative overflow-hidden`).

### How it works
- Three depth layers: far (fontSize=10, speed=0.4, opacity=0.25), mid (14, 0.8, 0.45), near (20, 1.4, 0.7)
- ~55% column density per layer (random skip)
- Each column has a trail of 6–20 characters (0s and 1s)
- Head char: `rgba(180,230,255, opacity)` with cyan glow (`shadowBlur=8`)
- Tail chars: `rgba(85,164,255, ...)` fading with trail depth
- Translucent dark overlay each frame (`rgba(11,17,32,0.18)`) creates the fade-trail effect
- Chars randomly flip (0↔1) every ~1.5% of frames
- DPR-aware: sets `canvas.width = clientWidth * dpr`
- Resize listener rebuilds columns on window resize

### Usage
```tsx
// Inside a relative container
<BinaryRain />
// or with opacity control
<div className="pointer-events-none absolute inset-0 z-[1] opacity-60">
  <BinaryRain />
</div>
```

---

## CyberOrb (`components/ui/cyber-orb.tsx`)

**Client component**  
Decorative animated security orb. Used on the Home hero right column (hidden on mobile with `hidden lg:flex`).

### Structure
- Ambient radial glow behind everything
- Outer ring (100% size): dashed, `animation: spin 28s linear infinite`
- Mid ring (76%): `reverse`, 18s — has an orbiting blue dot at `-top-1.5`
- Inner ring (54%): 12s forward — has a cyan dot at `right-1`
- Core (34%): pulsing radial gradient + `ShieldCheck` icon from lucide-react

Rings use inline `style={{ animation: 'spin Xs linear infinite' }}` because the `spin` keyframe is defined in `globals.css` (not Tailwind's built-in which uses `transform: rotate`).

---

## InfiniteSlider (`components/ui/infinite-slider.tsx`)

**Client component**  
Pure CSS marquee using `animation: marquee-slide var(--duration, 30s) linear infinite`.

```tsx
<InfiniteSlider duration={30} ariaLabel="Label" className="py-4">
  {items}
</InfiniteSlider>
```

**Important**: The hover pause was removed. There is no `durationOnHover` prop. Hover over a logo does nothing — the animation runs continuously. This was a deliberate fix (Task 3 — the slider was broken when React state controlled the duration).

Content is duplicated internally to create the seamless loop.

---

## DottedSurface (`components/ui/dotted-surface.tsx`)

Subtle dotted grid texture overlay. Used in Hero.tsx as a depth texture layer between the BinaryRain canvas and the vignette gradient.

---

## Typewriter (`components/ui/typewriter.tsx`)

Cycles through an array of words with a typewriter effect.

```tsx
<Typewriter words={["World's Data", "Digital Future", "Cloud Assets", "Enterprise"]} />
```

Used in Hero for the animated second line of the H1.

---

## AuroraBackground (`components/ui/aurora-background.tsx`)

Animated aurora gradient background wrapper. Used on Products page and Certificates page.

```tsx
<AuroraBackground className="min-h-screen w-full">
  {children}
</AuroraBackground>
```

Uses `animate-aurora` (60s background-position shift) defined in Tailwind config.

---

## DynamicBorderCard (`components/ui/dynamic-border-animations-card.tsx`)

Card with a rotating conic-gradient border via `::before` pseudo-element. Used in `CertificatesGrid`.

The `border-orbit` keyframe rotates the entire `::before` element 360°. The glow filter `blur(4px)` gives the orbiting light-trail feel.

---

## ArtificialHero (`components/ui/artificial-hero.tsx`)

ASCII/particle sphere animation. Used as background on the Contact page.

---

## LampContainer (`components/ui/lamp-container.tsx`)

Lamp glow effect — a downward cone of light from the top. Used as background on `ServiceOfferings`.

---

## RadialOrbitalTimeline (`components/ui/radial-orbital-timeline.tsx`)

See `06-page-products.md` for full detail — this is the 3D orbital used on the Products page.
