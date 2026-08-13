# 03 — Page: Home (`/`)

**File**: `app/page.tsx`  
**Type**: Server component (metadata export + JSON-LD)

## Component Stack (top → bottom)

```
<Hero />
<SectionDivider />
<SecurityPrompt />
<SectionDivider />
<TrustSection />          ← contains 4 internal sub-sections
<CertificatesGrid />
```

---

## SEO / Metadata

```ts
title: "Aguna Solutions | Advanced AI & Security Solutions"
description: "Aguna delivers immutable data protection, enterprise VAPT, cloud security..."
keywords: ["cybersecurity", "enterprise data protection", "VAPT", "cloud security", "AI solutions"]
canonical: "https://www.agunasolutions.com/"
openGraph: { type: "website", image: "/aguna-logo.png" }
twitter: { card: "summary_large_image" }
```

JSON-LD structured data: `@type: "GovernmentService"` (schema.org) — includes name, url, logo, LinkedIn sameAs, contactPoint (email), address (Noida, IN).

---

## Hero (`components/Hero.tsx`)

**Client component**

### Layout
Two-column `lg:grid-cols-2` inside a `min-h-screen bg-[#0B1120] pt-36 pb-24` section.

### Background layers (back to front)
1. `<BinaryRain />` — canvas, `absolute inset-0`, deepest layer
2. `<DottedSurface />` — subtle dotted grid texture
3. Radial vignette gradient — `bg-[radial-gradient(ellipse 90% 80% at 35% 45%, rgba(11,17,32,0.92)...)]` — keeps text readable over the rain

### Left column content
- **Eyebrow chip**: "Enterprise Cyber Defense" — blue pill with pulsing dot
- **H1 line 1**: "Securing the" — `font-montserrat font-bold text-5xl md:text-7xl`
- **H1 line 2**: `<Typewriter words={["World's Data","Digital Future","Cloud Assets","Enterprise"]} />` — gradient text `from-brand-blue via-cyan-300 to-white`
- **Subhead**: "Enterprise-grade cybersecurity, VAPT, and cloud security solutions..."
- **Trust badges** (3): SOC2 Certified (emerald), Cloud Native (blue), Immutable Storage (purple)

### Right column
- `<CyberOrb />` — hidden on mobile (`hidden lg:flex`)

---

## SecurityPrompt (`components/SecurityPrompt.tsx`)

**Server component**

Section with heading "Is Your Company Secure?" — was previously bright red, **now dark slate** (`bg-slate-900`) with blue accents.

### Structure
- Outer gradient border: `bg-gradient-to-br from-blue-500/40 via-slate-600/30 to-blue-400/20`
- Left accent stripe: 4px wide `bg-gradient-to-b from-blue-400/60`
- `ShieldAlert` icon (32px, blue-400)
- Paragraph explaining threat landscape and Aguna's approach
- CTA button: "Get a Free Security Assessment" → `/contact` — `bg-blue-600 hover:bg-blue-500`
- Right decorative: large `ShieldAlert` at 20% opacity

---

## TrustSection (`components/TrustSection.tsx`)

**Client component** (InfiniteSlider inside)

Contains four distinct sub-sections rendered sequentially:

### Sub-section 1: "How We Can Help?"

`py-20 bg-brand-dark`

2×2 grid (`md:grid-cols-2`) of image panels with overlay text:
| Panel | Image | Subtitle |
|---|---|---|
| "Clarity over uncertainty" | `/images/lock-v2.jpg` | "Understand what truly puts your business at risk..." |
| "Security without disruption" | `/images/security-lock.jpg` | "Protect systems and data without slowing teams down." |
| "Prepared not surprised" | `/images/methodology.jpg` | "Respond to incidents with structure, speed, and confidence." |
| "Security that supports growth" | `/images/service-bg-lock.jpg` | "Align protection with business priorities..." |

Each panel: `min-h-[320px]`, `Image fill object-cover`, dark gradient overlay, text at bottom. Hover: image scales 1.05x.

### Sub-section 2: "Our Customers"

`py-20 bg-brand-dark`

`<InfiniteSlider duration={30}>` — 9 customer logos (PNG):
- GNFC, Margoncloud, Musashi, NPST, NTN, Orange, Star Air, Tynor, Zones
- Files at `/images/Our Customers/as_[name].png`
- Each in a `bg-white/5 border border-white/10 rounded-xl` pill
- Edge fade gradients (`#0B1120` → transparent) on left and right

### Sub-section 3: "What Sets Us Apart?"

`py-20 bg-white` ← **light section**

Five differentiator statements in `flex flex-wrap justify-center gap-6`:
```
"Certified expertise across VAPT, cloud, and compliance domains"
"Evidence-based security with full reporting transparency"
"Rapid response SLAs with dedicated account management"
"Proven track record with enterprise and government clients"
"End-to-end coverage from assessment through remediation"
```
Each card: dark bg (`bg-slate-900 border-slate-700`), `CheckCircle` (emerald-400), `md:w-[calc(33.333%-1rem)]`.
3 per row on desktop, last 2 center-justified via `justify-center` on the flex container.

### Sub-section 4: "Our Compliances"

`id="our-compliances"` `py-20 bg-brand-dark`

7 certification chips in `flex flex-wrap justify-center gap-3`:
`CEH, OSCP, eWPT, CRTP, CRTE, ISO 27001, CyberArk (CDI)`

Amber award icon in a circular badge above the heading.

---

## CertificatesGrid (`components/CertificatesGrid.tsx`)

**Server component**  
`id="certificates"` — linked from Footer

3-column grid (`md:grid-cols-3`) of `<DynamicBorderCard>` components.
Data from `lib/data/certificates.ts` — 3 certs: ISO 27001:2022, SOC 2 Type I, SOC 2 Type II.

### Card structure (inside DynamicBorderCard)
1. **Logo block** — `h-[90px]` fixed-height container with `bg-white/5 rounded-xl`, `Image` object-contain
2. **Verified badge** — `✓ Verified` pill (emerald)
3. **Title** — `font-bold text-white text-lg`
4. **Authority** — `text-gray-400 text-sm`
5. **Description** — `text-gray-300 text-sm leading-relaxed`

Logo is in its own block above the title — this was an explicit bug fix (logos were overlapping text before).
