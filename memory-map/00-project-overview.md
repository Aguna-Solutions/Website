# 00 — Project Overview

## What this is

Corporate website for **Aguna Solutions** — an enterprise cybersecurity and AI products company based in Noida, India. The site is a marketing/product showcase with a contact form. No auth, no user accounts, no database (data is static TypeScript files).

---

## Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js 14 (App Router) | 14.x |
| Language | TypeScript (strict) | 5.x |
| Styling | Tailwind CSS | 3.x |
| Animation | Framer Motion | 12.42.0 (exact pin) |
| Icons | Lucide React | 1.21.0 (exact pin) |
| Email | Nodemailer | 9.0.1 (exact pin) |
| Testing | fast-check (PBT) | 4.8.0 (exact pin) |
| Fonts | next/font/google | — |
| Config | next.config.mjs | NOT .ts (Next 14 limitation) |

---

## How to Run

```bash
cd D:\Aguna\website
npm run dev        # dev server → http://localhost:3000
npm run build      # production build (must exit 0)
npx tsc --noEmit   # type check only — run after every change
```

**Dev server is started manually by the user**, not by any agent.

---

## File Structure

```
D:\Aguna\website\
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — fonts, Navbar, Footer, SmoothScroll, ScrollBackground
│   ├── globals.css             # Tailwind + CSS custom props + keyframes
│   ├── page.tsx                # Home route  /
│   ├── about/page.tsx          # /about
│   ├── services/page.tsx       # /services
│   ├── products/page.tsx       # /products
│   ├── cyber-security/page.tsx # /cyber-security
│   ├── certificates/page.tsx   # /certificates
│   ├── contact/page.tsx        # /contact
│   ├── sitemap.ts              # XML sitemap for SEO
│   └── api/contact/route.ts    # POST /api/contact (Nodemailer SMTP)
│
├── components/                 # All React components (no sub-folders except ui/)
│   ├── ui/                     # Pure visual / animation primitives
│   │   ├── binary-rain.tsx         # Canvas parallax 0/1 rain
│   │   ├── cyber-orb.tsx           # Rotating ring holographic orb
│   │   ├── radial-orbital-timeline.tsx  # 3D CSS-perspective orbital system
│   │   ├── aurora-background.tsx   # Animated aurora gradient bg
│   │   ├── infinite-slider.tsx     # CSS marquee infinite scroll
│   │   ├── 3d-carousel.tsx         # 3D photo carousel
│   │   ├── dotted-surface.tsx      # Dotted grid texture overlay
│   │   ├── typewriter.tsx          # Typewriter cycling text
│   │   ├── artificial-hero.tsx     # ASCII sphere animation
│   │   ├── lamp-container.tsx      # Lamp glow effect container
│   │   └── dynamic-border-animations-card.tsx  # Orbiting border card
│   │
│   ├── Navbar.tsx              # Fixed top navbar with dropdown + mobile overlay
│   ├── Footer.tsx              # 4-column footer (white bg, light theme)
│   ├── Hero.tsx                # Home hero — binary rain + cyber orb
│   ├── SecurityPrompt.tsx      # "Is Your Company Secure?" CTA
│   ├── TrustSection.tsx        # 4 sub-sections: capability grid, customer logos, differentiators, compliances
│   ├── CertificatesGrid.tsx    # 3-col certification cards (home page section)
│   ├── AboutMission.tsx        # About hero + video
│   ├── HowWeWork.tsx           # 4-step process with images
│   ├── AboutValues.tsx         # Company values grid
│   ├── TechPartners.tsx        # Partner logos + descriptions
│   ├── ServiceOfferings.tsx    # 12-service grid with modal (LampContainer bg)
│   ├── ServiceMethodologies.tsx # PTES/OWASP/OSSTMM methodology section
│   ├── ServiceExpertise.tsx    # Expertise stats/highlights
│   ├── WhyAguna.tsx            # Why choose Aguna section
│   ├── Industries.tsx          # Industry verticals with InfiniteSlider
│   ├── ProductsHero.tsx        # 3D orbital + binary rain + product tiles
│   ├── ProductsList.tsx        # Detailed product cards list
│   ├── CyberPillars.tsx        # 4 security pillars
│   ├── CyberCapabilities.tsx   # Capability highlight cards
│   ├── CyberOperations.tsx     # Operations grid with modal
│   ├── WhyCyber.tsx            # Why cyber security section
│   ├── PentestTypes.tsx        # Types of penetration testing
│   ├── AdvancedCapabilities.tsx # Advanced ops capabilities
│   ├── ContactInfo.tsx         # Address, email, LinkedIn
│   ├── ContactForm.tsx         # 4-state form (idle/loading/success/error)
│   ├── SectionDivider.tsx      # Visual separator between sections
│   ├── SmoothScroll.tsx        # Lenis smooth scroll provider
│   └── ScrollBackground.tsx    # Background that reacts to scroll position
│
├── lib/data/                   # Static TypeScript data files (no DB)
│   ├── products.ts             # 5 products (Product interface)
│   ├── services.ts             # 12 services (Service interface)
│   ├── certificates.ts         # 3 certificates (Certificate interface)
│   └── partners.ts             # 10 partners (Partner interface)
│
├── public/
│   ├── aguna-logo.png          # 609×666 near-square logo
│   ├── images/                 # All static images
│   │   ├── Our Customers/      # 9 customer logos (PNG)
│   │   ├── how-we-work/        # step1–step4.png
│   │   └── ...                 # partner logos, cert images, backgrounds
│   └── videos/
│       └── about-video.mp4     # Video for AboutMission component
│
├── tailwind.config.ts          # Brand colors + custom fonts + animations
├── next.config.mjs             # Next.js config (must be .mjs not .ts)
├── tsconfig.json               # TypeScript strict mode
└── jest.config.ts              # Jest + fast-check PBT setup
```

---

## SEO Setup

- **Metadata** defined via Next.js `export const metadata` in every page file
- **Sitemap** generated at `app/sitemap.ts`
- **JSON-LD structured data** inline in `app/page.tsx` (Organization schema) and `app/services/page.tsx` (ProfessionalService schema)
- **Canonical URLs** set on every page using `alternates.canonical`
- Domain: `https://www.agunasolutions.com`

---

## Contact Form / Email

API route: `POST /api/contact`  
Requires four environment variables:
```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```
Sends to `info@agunasolutions.com`. All four must be present or it returns 500. See `09-page-contact.md` for full details.

---

## Known Constraints

- `lucide-react@1.21.0` does **not** export `Linkedin` — use inline SVG in Footer
- `next.config` must be `.mjs` — `.ts` crashes Next 14
- All package versions are **exact pins** — do not add `^` or `~`
- TypeScript strict mode is on — run `npx tsc --noEmit` after every code change
- No `"use client"` needed for pure display components; it IS needed for anything using `useState`, `useEffect`, `useRef`, canvas, or Framer Motion
