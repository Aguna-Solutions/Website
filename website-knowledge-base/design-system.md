# Corporate Design System & UI Pattern Registry

This document serves as the official design system and UI registry for the Aguna Solutions website. It provides precise specifications for typography, color palettes, spacing hierarchies, button variations, custom card schemas, badges, iconography, and advanced interactive motion patterns.

---

## 1. Color Palette & Token Registry

The website employs a high-contrast, modern "cyber-dark" theme. Warm or lifestyle colors (such as terracotta, turf yellow, or warm red) are rejected in favor of deep, cool navy blues, slates, and neon cyans.

### 1.1 Core Brand Colors

*   **Primary Background (Deep Navy):** `#0B1120` (HSL: `222°, 47%, 8%`)
    *   *Usage:* Global canvas backdrop. Dominates 90% of the viewport areas.
*   **Secondary Surface (Surface Navy):** `#1E293B` (HSL: `217°, 33%, 17%`)
    *   *Usage:* Card backgrounds, structural borders, and modular panel surfaces.
*   **Accent Color (Light Cyber Blue):** `#55a4ff` (HSL: `212°, 100%, 66%`)
    *   *Usage:* Primary callouts, interactive hover states, typography gradients, and focus indicators.
*   **Brand Dark:** `#0B1120`
*   **Brand Blue:** `#55a4ff`

### 1.2 Contrast & Dynamic Text Colors

To meet WCAG AAA accessibility contrast ratios (at least 7:1) dynamically across sections, the site employs calculated color scales:
*   **Light Foreground Text:** `#F8FAFC` (Slate-50, Light gray-white)
    *   *Lightness:* ~92-95% to prevent screen glare while maintaining crisp legibility against dark surfaces.
*   **Dark Foreground Text:** `#0F172A` (Slate-900, dark charcoal)
    *   *Lightness:* ~18-22% used exclusively in high-contrast light sections (like the white panel on Home page and Services page).

---

## 2. Typography System

The website integrates three premium Google Fonts to establish clear visual hierarchy and distinct personality across components.

### 2.1 Font Families
*   **Primary Body Font:** `Inter` (variable)
    *   *Fallback:* `Segoe UI`, `system-ui`, `-apple-system`, `sans-serif`
    *   *Usage:* Standard copy, body text, forms, and secondary text blocks.
*   **Secondary Interface Font:** `Manrope` (variable)
    *   *Usage:* Navigation items, badges, numeric labels, and micro-copy.
*   **Heading Font:** `Montserrat` (variable)
    *   *Usage:* Large display titles, section headings, and hero text (e.g., Services page).

### 2.2 Typographical Hierarchy

*   **Display Title (Hero Heading):**
    *   *Desktop size:* `4.5rem` to `6rem` (72px to 96px) | `font-bold` | `tracking-tight` | `leading-[1.1]`
    *   *Mobile size:* `2.5rem` to `3.5rem` (40px to 56px)
*   **Section Heading (H2):**
    *   *Desktop size:* `2.5rem` to `3rem` (40px to 48px) | `font-bold` | `tracking-tight` | `leading-tight`
    *   *Mobile size:* `2.0rem` (32px)
*   **Card Heading (H3):**
    *   *Size:* `1.25rem` to `1.5rem` (20px to 24px) | `font-semibold` | `tracking-tight`
*   **Body Copy (Paragraph):**
    *   *Size:* `1.0rem` (16px) | `font-medium` | `leading-relaxed` (1.6)
*   **Micro Copy (Small):**
    *   *Size:* `0.875rem` (14px) | `text-gray-400`

---

## 3. Spacing & Grid System

Spacing tokens are structured around a 4px/8px baseline grid to maintain alignment.

*   **Section Padding:**
    *   *Standard:* `py-20` (80px top & bottom padding)
    *   *Compact:* `py-12` or `py-10` (48px or 40px top & bottom padding)
    *   *Hero spacing:* `pt-32 pb-20` (128px top, 80px bottom) to clear the floating header.
*   **Grid Layouts:**
    *   *Standard Content:* 3-column grid (`grid-cols-1 md:grid-cols-3 gap-8` with 32px gutters) for services, methodologies, and pentests.
    *   *Dual Columns:* 2-column grid (`grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24`) for hero grids and contact splits.
*   **Section Dividers:** A custom component (`SectionDivider`) that renders a subtle, transparent border transition to mark the boundary between adjacent sections.

---

## 4. Recurring UI Elements

### 4.1 Buttons & Trigger Styles

The site utilizes five button variants:

1.  **Flow Button (Animated Gradient):**
    *   *Visuals:* Blue-to-white moving gradient background with hover scaling.
    *   *Usage:* Primary calls-to-action in hero sections.
2.  **Rainbow Button:**
    *   *Visuals:* A button with an animated gradient border that rotates seamlessly (`--animate-rainbow`).
    *   *Usage:* Secondary highlights in products and certificate CTAs.
3.  **Active Form Submit Button:**
    *   *Visuals:* Deep blue background (`bg-blue-600`) with hover transitioning to light blue (`hover:bg-blue-500`) and a subtle drop shadow (`shadow-blue-500/25`).
    *   *States:* Disables cursor on loading and renders spinning loader icon or validation symbols (checkmark, warning).
4.  **Text link with Arrow (ArrowLink):**
    *   *Visuals:* Simple blue text link with an inline arrow symbol (`→` or Lucide `ArrowRight`). On hover, the arrow translates 4px to the right (`group-hover:translate-x-1`).
    *   *Usage:* "Learn More" actions on cards.
5.  **Navbar Contact Link:**
    *   *Visuals:* Borderless white text with a phone icon. Fits into the dark right-hand side of the header gradient.

### 4.2 Badges & Chips

*   **Step Badges:**
    *   *Visuals:* Small, rounded-full blue pill (`bg-blue-500 border border-blue-400`) with micro-text in all-caps (`text-[9px] font-extrabold uppercase tracking-widest`).
*   **Compliance & Audit Chips:**
    *   *Visuals:* Light gray-translucent background (`bg-white/5 border border-white/10`) with cool gray text. Replaces standard tags for lists like `CEH`, `OSCP`, and technology types.
*   **Status Badges:**
    *   *Verified State:* Translucent emerald background (`bg-emerald-500/10 border-emerald-500/20 text-emerald-400`).
    *   *Active State:* Translucent blue background (`bg-blue-500/10 border-blue-500/20 text-blue-400`).

### 4.3 Custom Card Structures

1.  **Dynamic Border Card (`DynamicBorderCard`):**
    *   *Visuals:* A matte-black card core sitting inside a double border. An animated, blurred blue dot (`#3b82f6`) runs around the card edge in an 8-second infinite loop.
    *   *Interactivity:* Features a radial mouse-tracking glow. The card monitors mouse movement, updating coordinates to draw a dynamic radial light gradient that highlights the surface under the user's cursor.
2.  **Service Portfolio Card (`ServicePortfolioCard`):**
    *   *Visuals:* Rounded-full pill-style bubbles. Contains a circular icon container, a bold title, and a short description text block. On hover, the bubble scales slightly (`scale-[1.02]`), background changes to an accent highlight, and borders glow.

---

## 5. Iconography

Iconography is driven by the `lucide-react` library. Icons are styled using uniform size tokens and sit in customized containers:
*   **Standard Size:** `w-5 h-5` (20px) or `w-6 h-6` (24px) for cards.
*   **Large Size:** `w-8 h-8` (32px) or `w-10 h-10` (40px) for hero or section badges.
*   **Containers:** Icons are placed inside translucent, circular or rounded-square containers (`bg-blue-500/10 text-blue-400`) that expand and brighten on hover (`group-hover:bg-blue-500/20 group-hover:text-blue-300`).

---

## 6. Advanced Interactive Motion Patterns

The premium "wow" factor of the website is built upon several advanced CSS and Framer Motion visual patterns:

*   **Dotted Surface Backdrop (`DottedSurface`):** A geometric grid of semi-transparent dots that creates depth behind headings.
*   **Aurora Background (`AuroraBackground`):** A custom shader-like effect. It uses multiple overlapping radial gradients that interpolate and slide across the screen continuously via a 60-second infinite CSS animation loop.
*   **Cosmic Parallax Starfield:** A multi-layered background featuring three distinct sizes of glowing stars. Each layer translates vertically at different speeds (`50s`, `100s`, `150s`) to create a parallax depth of field.
*   **Earth Horizon Glow:** A huge, circular, dark globe positioned at the bottom of the page, styled with a massive blue drop-shadow and outer radial glow to simulate the earth's horizon in space.
*   **Radial Orbital Timeline:** A futuristic orbital timeline that arranges product nodes in a circular system, animating them along orbits to show relationships and status.
*   **Infinite Slider:** A marquee-style sliding track with smooth edge-fading gradients that scrolls elements horizontally using a linear, infinite transform animation.
