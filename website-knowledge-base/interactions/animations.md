# Animations & Transitions Mechanics

This document details the mathematical logic, styling tokens, and scroll-driven mechanisms that drive the website's visual effects and transitions.

---

## 1. Scroll-Driven Background Color Lerping (DJ Crossfade)

*   **File Reference:** [components/ScrollBackground.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ScrollBackground.tsx)
*   **Mechanical Concept:** Creates a smooth, continuous transition of the background color based on the user's scroll position, making the transition feel seamless and invisible.
*   **Mathematical Formula:**
    1.  *Scroll Progress:* Calculates the current scroll position as a normalized value from `0.0` to `1.0`:
        `progress = scrollY / (scrollHeight - innerHeight)`
    2.  *Color Interpolation:*
        *   **First Half (0.0 to 0.5):** Interpolates from dark navy `rgb(5, 10, 30)` to a brighter blue `rgb(20, 40, 80)` using a normalized scale `t = progress * 2`:
            *   `Red = 5 + t * 15`
            *   `Green = 10 + t * 30`
            *   `Blue = 30 + t * 50`
        *   **Second Half (0.5 to 1.0):** Interpolates from the brighter blue `rgb(20, 40, 80)` back to a dark navy `rgb(10, 20, 50)` using a normalized scale `t = (progress - 0.5) * 2`:
            *   `Red = 20 - t * 10`
            *   `Green = 40 - t * 20`
            *   `Blue = 80 - t * 30`
*   **Result:** Background color transitions smoothly and continuously with the scrollbar, avoiding sudden changes or section-based flashes.

---

## 2. Holographic Mouse-Tracking Card Borders

*   **File Reference:** [components/ui/dynamic-border-animations-card.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ui/dynamic-border-animations-card.tsx)
*   **Mechanical Concept:** Features a glowing, radial light halo that follows the user's cursor across card components, creating an interactive, glassmorphic look.
*   **Technical Implementation:**
    1.  *Mouse Movement Event:* The card container monitors mouse movement via a client-side listener (`onMouseMove`).
    2.  *Coordinate Calculation:* Calculates the cursor's coordinates relative to the card's bounding box:
        *   `x = event.clientX - card.getBoundingClientRect().left`
        *   `y = event.clientY - card.getBoundingClientRect().top`
    3.  *CSS Variables Update:* Updates local CSS variables (`--mouse-x` and `--mouse-y`) with the calculated pixel values in real-time.
    4.  *Radial Gradient Rendering:* Renders a radial gradient that tracks the cursor position using the updated CSS variables:
        `background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.15), transparent 40%)`

---

## 3. Cosmic Parallax Starfield

*   **File Reference:** [app/globals.css](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/app/globals.css) (Lines 125-167)
*   **Mechanical Concept:** Renders three layers of starry backgrounds that scroll vertically at different speeds, creating a realistic parallax depth of field.
*   **Technical Implementation:**
    *   *Star Sizes:* Defines three sizes of stars using absolute pixel dimensions:
        *   Layer 1 (Fine): `1px * 1px` (`.cosmic-stars`)
        *   Layer 2 (Medium): `2px * 2px` (`.cosmic-stars-medium`)
        *   Layer 3 (Large): `3px * 3px` (`.cosmic-stars-large`)
    *   *Parallax Scroll Speeds:* Translates the stars vertically from `0px` to `-2000px` using CSS keyframe animations at different loop durations:
        *   Layer 1: `50s` duration loop
        *   Layer 2: `100s` duration loop
        *   Layer 3: `150s` duration loop

---

## 4. Infinite Marquee (Customer Logos Slider)

*   **File Reference:** [components/TrustSection.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/TrustSection.tsx)
*   **Mechanical Concept:** Scrolls a horizontal track of customer logos continuously across the screen.
*   **Technical Implementation:**
    *   *Visual Continuity:* Duplicates the logo elements in the DOM to prevent blank spaces.
    *   *Marquee Track:* Translates the track from `translateX(0)` to `translateX(-50%)` over a `30s` loop using CSS animations:
        `animation: logo-marquee 30s linear infinite`
    *   *Seamless Blending:* Uses transparent-to-navy side gradients to mask the logos as they enter and exit the viewport.
