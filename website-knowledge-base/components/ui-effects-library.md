# UI Effects & Animation Library

This document provides specialized documentation for the advanced visual animations, CSS shaders, interactive elements, and custom effects that give the Aguna Solutions website its premium, enterprise-grade, high-tech aesthetic.

---

## 1. 3D Photo Carousel (`ThreeDPhotoCarousel`)

*   **Source File:** [components/ui/3d-carousel.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ui/3d-carousel.tsx)
*   **Visual Effect:** Arranges certificate cards in a floating 3D cylindrical carousel that rotates dynamically in space.
*   **Mathematical Principles:**
    *   *Circumference:* Calculated based on card face count (`cards.length`) and card face width (`faceWidth` is `360px` on desktop, `260px` on mobile):
        `cylinderWidth = faceWidth * faceCount`
    *   *Radius:* Determines the cylinder's depth in 3D space, positioning the cards along the cylinder wall:
        `radius = cylinderWidth / (2 * Math.PI)`
    *   *3D Rotation:* Uses Framer Motion's `useMotionValue` to update rotation angles dynamically:
        `transform = rotate3d(0, 1, 0, ${rotation}deg)`
    *   *Perspective:* Sits inside a perspective stage (`perspective: 1000px`, `transformStyle: preserve-3d`) to render depth.
*   **Interactivity:** Controls (prev/next buttons) increment or decrement the rotation state by a step size calculated from the card count:
    `targetRotation = currentRotation ± (360 / faceCount)`
*   **Used In:** [Certificates Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/certificates.md)

---

## 2. Aurora Background (`AuroraBackground`)

*   **Source File:** [components/ui/aurora-background.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ui/aurora-background.tsx)
*   **Visual Effect:** Renders slow-moving, colorful fluid light patterns that slide across the screen to simulate the northern lights.
*   **Technical Implementation:**
    *   *CSS Gradients:* Employs a complex stack of radial gradients that blend into the dark canvas.
    *   *Keyframe Animation:* Translates background position from `50% 50%` to `350% 50%` over a slow `60s` linear, infinite loop (`--animate-aurora`).
*   **Used In:** [Certificates Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/certificates.md), [Products Hero Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/products-hero.md), [Cyber Pillars Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/cyber-pillars.md).

---

## 3. Artificial Hero ASCII Sphere (`ArtificialHero`)

*   **Source File:** [components/ui/artificial-hero.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ui/artificial-hero.tsx)
*   **Visual Effect:** An interactive, looping, and responsive ASCII art sphere that rotates dynamically.
*   **Technical Implementation:**
    *   *Math & Logic:* Uses custom mathematical coordinates to compute the projection of a 3D sphere onto a 2D plane of text characters in real-time, rendering it inside a high-speed loop.
*   **Used In:** [Contact Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/contact.md) (Background layer)

---

## 4. Radial Orbital Timeline (`RadialOrbitalTimeline`)

*   **Source File:** [components/ui/radial-orbital-timeline.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ui/radial-orbital-timeline.tsx)
*   **Visual Effect:** Displays product nodes arranged in concentric orbital paths around a glowing central axis.
*   **Technical Implementation:**
    *   *Layout:* Uses absolute positioning and trig calculations to position product icons along circular orbits.
    *   *Animations:* Rotates orbits at different speeds, combined with pulse (`animate-pulse`) and ping (`animate-ping`) effects on active nodes to draw focus.
*   **Used In:** [Products Hero Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/products-hero.md)

---

## 5. Infinite Slider Marquee (`InfiniteSlider`)

*   **Source File:** [components/ui/infinite-slider.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ui/infinite-slider.tsx)
*   **Visual Effect:** Horizontal sliding track that scrolls elements continuously, fading them out at the edges.
*   **Technical Implementation:**
    *   *Marquee Track:* Uses CSS transforms to slide elements horizontally. It duplicates the track width, moving from `translateX(0)` to `translateX(-50%)` over a `40s` linear loop.
    *   *Interactivity:* Hovering over the track slows down the scroll speed to `100s` (`durationOnHover={100}`) to let users read and interact with elements.
*   **Used In:** [Industries Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/industries.md)

---

## 6. Typewriter Text Rotator (`Typewriter`)

*   **Source File:** [components/ui/typewriter.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ui/typewriter.tsx)
*   **Visual Effect:** Types out words character-by-character, pauses, deletes them, and types the next word in the list.
*   **Technical Implementation:**
    *   *Logic:* Runs a state machine to track typing progress. It increments character length at `70ms` per character, pauses for `1500ms`, and deletes character-by-character at `40ms` per character, updating the local string. Renders an blinking vertical block cursor (`_`).
*   **Used In:** [Hero Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/hero.md)

---

## 7. Dotted Surface Grid (`DottedSurface`)

*   **Source File:** [components/ui/dotted-surface.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ui/dotted-surface.tsx)
*   **Visual Effect:** Overlays a clean, high-precision dot matrix grid onto backgrounds.
*   **Technical Implementation:** Renders an SVG with pattern tags to overlay small, semi-transparent dots at regular pixel intervals, creating a high-tech blueprint feel.
*   **Used In:** [Hero Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/hero.md)

---

## 8. Dynamic Border Card (`DynamicBorderCard`)

*   **Source File:** [components/ui/dynamic-border-animations-card.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ui/dynamic-border-animations-card.tsx)
*   **Visual Effect:** A card with a blurred blue dot (`#3b82f6`) that animates around its borders in an 8-second infinite loop.
*   **Holographic Mouse-Tracking:**
    *   *Logic:* The card tracks mouse movement, updating coordinates (`--mouse-x` and `--mouse-y`) to draw a radial light gradient that highlights the surface under the user's cursor:
        `background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.15), transparent 40%)`
*   **Used In:** [Cyber Security Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/cyber-security.md) (Operations and Pentest cards)
