# 06 — Page: Products (`/products`)

**File**: `app/products/page.tsx`  
**Type**: Server component

## Component Stack (top → bottom)

```
<ProductsHero />     ← AuroraBackground + BinaryRain + 3D orbital + product tiles
<SectionDivider />
<ProductsList />     ← Detailed product cards with all metadata
```

## SEO / Metadata

```ts
title: "AI-Driven Industrial & Security Products | Aguna Solutions"
description: "AI-driven predictive analytics and security products for specialized industries."
canonical: "https://www.agunasolutions.com/products"
```

---

## ProductsHero (`components/ProductsHero.tsx`)

**Client component**

### Background layers (back to front)
1. `<AuroraBackground>` — animated aurora gradient wrapping the entire section
2. `<BinaryRain />` — canvas binary rain at `z-[1] opacity-60` — same canvas as Home but layered over aurora

### Two-column grid layout
`lg:grid-cols-2 gap-8 lg:gap-12 items-center`, inside `max-w-7xl py-24 md:py-28`

#### Left column — headings
- Eyebrow chip: "AI-Driven Product Suite" — `font-jetbrains` monospace, blue pill
- H1: "Our **Products**" — `font-grotesk font-bold text-5xl md:text-6xl lg:text-7xl`
  - "Products" = gradient `from-white via-cyan-200 to-blue-400`
- Subtext: "AI-driven predictive analytics and security for *specialized industries*."
  - "specialized industries" uses `font-fraunces italic`
- Decorative rule: `h-px w-24 bg-gradient-to-r from-blue-500 to-transparent`

#### Right column — RadialOrbitalTimeline
```tsx
<RadialOrbitalTimeline nodes={orbitalNodes} />
```

`orbitalNodes` are derived from `products` data with an `orbitalIconMap` override:
```ts
{
  "Industry 4.0 Analytics":       Cpu
  "CCTV Anomaly Detection":       Eye
  "Database Activity Monitor":    Database
  "Athermind Integrity Platform": Fingerprint
  "DMS Platform":                 FileText
}
```

### Product tiles row (beneath hero)

`mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4`

5 tiles, one per product. Each tile:
```tsx
<div className="group relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.04] hover:border-cyan-300/50 hover:bg-slate-800/60 hover:shadow-[0_0_30px_rgba(85,164,255,0.25)]">
  <Icon />           // 48×48 blue icon square
  <h3>product.name</h3>
  <p>product.valueStatement</p>
  <div />            // hover accent bar — w-0 → w-full on hover
</div>
```

---

## RadialOrbitalTimeline (`components/ui/radial-orbital-timeline.tsx`)

**Client component**  
`"use client"` — uses `useState`, `useEffect`, `requestAnimationFrame`

### Orbital geometry
- Container: `max-w-[560px] aspect-square`, `perspective: 1100px`
- Ring plane: `rotateX(58deg)` gives ~53% Y compression (cos(58°) ≈ 0.53)
- `ORBIT_X = 40` (% of container width)
- `ORBIT_Y = 21` (% of container height — compressed to match tilt)
- `SPEED = 0.28` radians/second

### Depth model
Node positions are calculated in a `rAF` loop using `performance.now()`:
```ts
const angle = (2π / n) * i - π/2 + t * SPEED
const x = 50 + ORBIT_X * cos(angle)     // % of container
const y = 50 + ORBIT_Y * sin(angle)
const depth = sin(angle)                 // -1 (back) to +1 (front)
const d = (depth + 1) / 2               // 0..1
const scale = 0.62 + 0.55 * d           // 0.62 back → 1.17 front
const opacity = 0.45 + 0.55 * d         // 0.45 back → 1.0 front
const zIndex = 10 + Math.round(d * 40)  // depth sorting
```

### SVG ring plane (behind nodes)
Inside `rotateX(58deg)` div — appears as compressed ellipses:
- 3 concentric dashed rings at r=110, 175, 240
- Ambient radial glow gradient
- Two rotating arc paths (counter-clockwise and clockwise at different speeds)

### Pulsing core (Aguna logo)
`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`  
Size: 26% × 26% of container  
`zIndex: 60` — always above all nodes

Structure:
- `animate-ping` outer halo (25% larger than disc)
- Radial blur glow
- Circular disc: `bg-slate-950/80 backdrop-blur-sm border border-blue-400/30`
- Box shadow: `0 0 30px rgba(85,164,255,0.55), 0 0 60px rgba(85,164,255,0.25), inset 0 0 20px rgba(85,164,255,0.15)`
- `Image src="/aguna-logo.png" width=120 height=131 unoptimized h-[72%] w-auto`

### Node hover behavior
Icon disc: `group-hover:scale-[1.45] group-hover:border-cyan-300 group-hover:bg-slate-800`  
Label: `group-hover:scale-110 group-hover:text-white`  
Sector: `group-hover:text-blue-300`

Each node also has a blinking glow ring: `0.55 + 0.45 * sin(t * 1.4 + i)`

### Props interface
```ts
interface OrbitalNode {
  id: string;
  label: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  sector: string;
  description: string;
}
```

---

## ProductsList (`components/ProductsList.tsx`)

Detailed product listing below the hero. Shows full product cards with all metadata from `lib/data/products.ts`:
- `name`, `description`, `capabilities[]` (3 items), `impactMetric`, `tags[]`, `techSpecs[]` (2 hover badges), `icon`

---

## Data: `lib/data/products.ts`

5 products:

| Name | Icon | Value Statement | Impact Metric |
|---|---|---|---|
| Industry 4.0 Analytics | `Factory` | "Eliminate unplanned downtime before it costs you." | ↓ Downtime 40%, ↑ OEE 25% |
| CCTV Anomaly Detection | `Camera` | "Turn every camera into an intelligent security analyst." | ↑ Detection Accuracy 98.5% |
| Database Activity Monitor | `Database` | "Full visibility into every query, every user, every threat." | ↓ Breach Risk 85% |
| Athermind Integrity Platform | `Lock` | "Immutable records. Unbreakable trust." | 100% Audit Compliance |
| DMS Platform | `FileText` | "Intelligent document lifecycle management at enterprise scale." | ↓ Processing Time 70% |
