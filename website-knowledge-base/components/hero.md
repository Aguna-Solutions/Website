# Hero Component

**Source File:** [components/Hero.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/Hero.tsx)  
**Primary Purpose:** Renders the main title section on the Home page, grabbing user attention and listing primary certifications upon load.

---

## 1. Visual Specification & Styling

*   **Background:** Sits on a deep navy canvas (`bg-[#0B1120]`) and stretches across the full viewport height (`min-h-screen relative`).
*   **Grid Backdrop:** Integrates the [Dotted Surface Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/ui-effects-library.md) (`DottedSurface`) to overlay a subtle, futuristic dot matrix grid, combined with a transparent overlay to ensure typographical contrast.
*   **Layout:** 2-column responsive layout (`max-w-7xl grid lg:grid-cols-2 gap-12 items-center`). The left column holds text and badges, while the right side is left open for structural symmetry and scroll room.

---

## 2. Copy & Typographical Assets

*   **Main Title:** "Securing the" (bold white, Montserrat display font).
*   **Typewriter Text Rotator:** Renders a rotating, animated text block that cycles through:
    1.  `World's Data`
    2.  `Digital Future`
    3.  `Cloud Assets`
    4.  `Enterprise`
    *   *Visuals:* Styled in a vibrant, high-contrast cyan gradient (`bg-gradient-to-r from-accent to-white`) with a typewriter flashing cursor symbol (`_`).
*   **Subheading Copy:** "Aguna delivers immutable data protection and cyber resilience for enterprise cloud infrastructure. Recover instantly, ensuring business continuity in the face of any threat." (medium cool gray, line-height 1.6).

---

## 3. Trust Badges & Icons

Below the copy, the Hero displays three horizontal trust badges demonstrating primary engineering credentials:
1.  **SOC2 Certified:** Styled with a green checkmark shield icon (Lucide `ShieldCheck` in green-500).
2.  **Cloud Native:** Styled with a blue cloud icon (Lucide `Cloud` in blue-400).
3.  **Immutable Storage:** Styled with a purple database icon (Lucide `Database` in purple-400).

---

## 4. Dependencies & Technical Mappings

*   **Library Imports:** `aos` (for scroll fade-in effects), `framer-motion` (via motion wrappers).
*   **Component Imports:** `Typewriter` (rotating text), `MotionWrapper` (fade-in), `DottedSurface` (dot grid).
*   **Icons Used:** `ShieldCheck`, `Cloud`, `Database` (Lucide React)
*   **Used In:** [Home Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/home.md) (Hero Section)
