# Aguna Solutions - Website Knowledge Base Manifest

This is the master architectural document for the Aguna Solutions portfolio website. It acts as a comprehensive blueprint that explains the entire project, its purpose, page structures, components, assets, interactions, and business logic. It provides another AI with all the information required to rebuild this enterprise-grade website from scratch.

---

## 1. Overall Website Purpose

Aguna Solutions is a premium, enterprise-grade cybersecurity, VAPT (Vulnerability Assessment and Penetration Testing), cloud security, and custom software consulting firm. 
The website serves as a highly sophisticated digital portfolio, designed to build instant trust with enterprise clients, showcase advanced technical capabilities, list specialized products, demonstrate compliance, and channel qualified leads via secure contact mechanisms.

*   **Industry Tone:** Enterprise-ready, technically confident, secure, and modern.
*   **Visual Philosophy:** A cohesive, immersive dark cyber theme dominated by midnight navy and black, offset by high-contrast, vibrant cool accents (blue, cyan, indigo, slate, and mist white). The website rejects generic warm or lifestyle elements in favor of a clean, premium, high-tech aesthetic.
*   **Interaction Strategy:** Smooth animations (leveraging Framer Motion and AOS), custom interactive shaders, a 3D photo carousel, an ASCII art sphere, and scroll-driven effects that make the interface feel alive and responsive.

---

## 2. Directory Structure & Relationships

The knowledge base is organized into a modular, highly cross-referenced structure. The relationship between folders is designed to mirror the actual Next.js application architecture:

```
website-knowledge-base/
├── manifest.md                 # Master entry point and architectural blueprint
├── sitemap.md                  # Page hierarchy and internal linking network
├── assets-map.md               # Registry mapping every media asset to its usage
├── routes.md                   # Next.js App Router routing specification
├── seo.md                      # Comprehensive SEO, meta, and schema specifications
├── design-system.md            # Typography, colors, spacing, and UI components
│
├── pages/                      # Documented pages representing each route
│   ├── home.md                 # Landing page content and structure
│   ├── about.md                # Mission, values, and partnership details
│   ├── services.md             # Security and VAPT portfolio details
│   ├── products.md             # AI and enterprise product listings
│   ├── cyber-security.md       # Core cybersecurity pillars and capabilities
│   ├── certificates.md         # Compliance and trust credentials
│   └── contact.md              # Inbound inquiry portal
│
├── components/                 # Reusable UI sections and animated elements
│   ├── navbar.md               # Dual-zone responsive header navigation
│   ├── footer.md               # Dynamic white-backdrop site footer
│   ├── hero.md                 # Typographical typewriter home hero
│   ├── security-prompt.md      # Warning banner for risk awareness
│   ├── trust-section.md        # Capabilities, logo marquee, and compliances
│   ├── certificates-grid.md    # Credentials listing with hover states
│   ├── about-mission.md        # Corporate vision and video section
│   ├── about-values.md         # 6 Core operating principles
│   ├── how-we-work.md          # 4-Step risk-based engagement model
│   ├── tech-partners.md        # Ecosystem integrations and partner logos
│   ├── service-offerings.md    # 12-Service portfolio and VAPT types
│   ├── service-methodologies.md# PTES, OWASP, and OSSTMM frameworks
│   ├── service-expertise.md    # Engineering certs and operational areas
│   ├── why-aguna.md            # 5 Foundational value propositions
│   ├── industries.md           # Horizontal marquee of 6 target industries
│   ├── products-hero.md        # Radial orbital timeline of innovations
│   ├── products-list.md        # Product capabilities, impact, and tech specs
│   ├── contact-info.md         # Corporate location and email cards
│   ├── contact-form.md         # Input layout, status handling, and events
│   └── ui-effects-library.md   # Mechanics of advanced animations (Spline, CSS)
│
├── interactions/               # Business logic, behaviors, and flows
│   ├── forms.md                # Contact form submission and nodemailer pipeline
│   ├── navigation.md           # Mobile menus, dropdowns, and hash scrolls
│   ├── animations.md           # Scroll lerping, mouse-tracking, and starfields
│   ├── business-logic.md       # Color algorithms, SMTP checks, and route retries
│   └── validations.md          # Input rules, regex constraints, and error UX
│
└── images/                     # Localized directory of all site graphics
```

### Folder Relationships:
*   **`pages/`** files represent the primary routes and import components from **`components/`** to build section layouts.
*   **`components/`** utilize styles, tokens, and animations defined in **`design-system.md`**, and reference files in **`images/`**.
*   Interactive elements within **`components/`** (like forms or dropdowns) have their functional behavior and logic detailed in **`interactions/`**.
*   **`assets-map.md`**, **`routes.md`**, **`seo.md`**, and **`sitemap.md`** act as indexes mapping pages and components to their files, metadata, and assets.

---

## 3. Pages & Routing Architecture

The website uses the Next.js App Router. Pages are organized under the `app/` folder, each containing a `page.tsx` file representing a public route.

| Route (URL) | File Path | Primary Purpose | Components Rendered |
| :--- | :--- | :--- | :--- |
| `/` | `app/page.tsx` | Main corporate introduction, credentials, and compliance summary. | `Navbar`, `Hero`, `SecurityPrompt`, `TrustSection`, `CertificatesGrid` |
| `/about` | `app/about/page.tsx` | Explains company mission, operating principles, methodologies, and tech partners. | `Navbar`, `AboutMission`, `HowWeWork`, `AboutValues`, `TechPartners` |
| `/services` | `app/services/page.tsx` | Highlights 12 core services, VAPT offerings, team expertise, and industry sectors. | `Navbar`, `ServiceOfferings`, `ServiceMethodologies`, `ServiceExpertise`, `WhyAguna`, `Industries` |
| `/products` | `app/products/page.tsx` | Promotes proprietary industrial AI, security, and governance products. | `Navbar`, `ProductsHero`, `ProductsList` |
| `/cyber-security` | `app/cyber-security/page.tsx` | Deep dive into 24/7 Managed SOC, TDIR, IAM, GRC, and advanced pentesting. | `Navbar`, `CyberPillars`, `CyberIntro`, `CyberCapabilities`, `CyberOperations`, `WhyCyber`, `PentestTypes`, `AdvancedCapabilities` |
| `/certificates` | `app/certificates/page.tsx` | Immersive 3D photo carousel showcase of verified security certificates. | `Navbar`, `ThreeDPhotoCarousel`, `AuroraBackground` |
| `/contact` | `app/contact/page.tsx` | Leads capture page featuring a secure contact form and ASCII sphere. | `Navbar`, `ContactInfo`, `ContactForm`, `ArtificialHero` |

---

## 4. Reusable Layouts & Shared Content

*   **Root Layout (`app/layout.tsx`):** Wraps all pages. It initializes global fonts (`Inter`, `Manrope`, `Montserrat`), sets up the global `ThemeProvider` (forcing a default dark mode class), injects the `SmoothScroll` component for smooth page transitions, and appends the global `Footer` to the bottom of all routes.
*   **Dynamic Navigation (`Navbar.tsx`):** Present at the top of every page. It handles unified routing, dynamic active-route highlighting, and a full-screen collapsible mobile menu.
*   **Section Dividers (`SectionDivider.tsx`):** Standardizes spacing and separates high-contrast sections using clean, minimal dividing rules.

---

## 5. External Integrations & APIs

The website integrates with a server-side email routing service to handle customer inquiries.

*   **Contact Form API Endpoint:** `POST /api/contact`
    *   **Method:** `POST`
    *   **Content-Type:** `application/json`
    *   **Request Payload:** `{ name: string, email: string, subject: string, message: string }`
    *   **Logic:** Validates payload, checks server environment variables, establishes a connection to a secure SMTP server via `nodemailer`, compiles a multi-part text/HTML template, and routes the submission to `info@agunasolutions.com`.
    *   **Response Codes:**
        *   `200 OK` - `{ message: "Email sent successfully" }`
        *   `500 Internal Server Error` - `{ error: "Server configuration error" }` (if SMTP credentials are missing) or `{ error: "Failed to send email" }` (if SMTP connection fails).

---

## 6. Business Logic Overview

*   **Form Lifecycle & State Machine:** The contact form maintains a strict 4-state lifecycle (`idle` -> `loading` -> `success` / `error`). It disables submissions during transit, displays custom animated spinner and confirmation states, and automatically resets back to `idle` after 5 seconds upon success.
*   **Scroll-Driven Background Color Lerping (`ScrollBackground.tsx`):** Uses client-side scroll tracking to interpolate RGB values dynamically. It tracks normalized scroll position (0.0 to 1.0) and updates the background color smoothly from deep navy to bright blue and back, ensuring a seamless visual transition during scroll.
*   **Hash-Scrolling with Hydration Retry (`SmoothScroll.tsx`):** Resolves Next.js hydration lag when linking to specific element hashes (e.g., `/about#partners`). It intercepts the hash, calculates the target element's viewport offset, and triggers a smooth scroll immediately, followed by a second delayed retry 500ms later to guarantee alignment once dynamic components finish rendering.
*   **Interactive Mouse-Tracking Shaders (`DynamicBorderCard.tsx`):** Calculates the client's cursor coordinates relative to the card border in real-time, updating local CSS custom properties (`--mouse-x`, `--mouse-y`) to render a smooth, glowing halo effect that follows the user's focus.

---

## 7. Assets and Media Files

All assets used in the site are consolidated under `website-knowledge-base/images/`.

*   **Corporate Logos:** Main corporate logo (`aguna-logo.png`).
*   **Ecosystem & Customer Logos:** 9 customer logos under `images/Our Customers/` and 8 tech partner logos under `images/` (such as CrowdStrike, CyberArk, Palo Alto Networks, Tenable, DSCI, NCOE, IIT Gandhinagar).
*   **Process & Methodology Graphics:** 4 workflow step illustrations under `images/how-we-work/` and 3 methodology seals under `images/methodologies/` (PTES, OWASP, OSSTMM).
*   **Certificates & Security Seals:** Graphic badges representing verified compliance credentials (`iso-27001.png`, `soc-type-1.png`, `soc-type-2-final.png`).
*   **Abstract Visuals:** Security lock graphic (`lock-v2.jpg`), background overlays, and a looping corporate video (`about-video.mp4` located in the main public folder).

*There are no missing assets in the project; every graphic referenced in the React codebase is fully accounted for, copied, and documented.*
