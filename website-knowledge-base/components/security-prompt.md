# Security Prompt Component

**Source File:** [components/SecurityPrompt.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/SecurityPrompt.tsx)  
**Primary Purpose:** Renders a high-contrast, glowing red warning banner on the Home page to prompt users to evaluate their security posture.

---

## 1. Visual Specification & Styling

The component is designed to feel like a critical system alert, using a high-intensity red palette that breaks up the deep navy theme of the page.

*   **Card Container:** Rounded card (`rounded-2xl`) with a 2px padding overlay that reveals a sharp gradient border:
    `bg-gradient-to-br from-red-500 via-orange-500 to-red-600`
*   **Background:** Deep crimson red (`bg-red-900`).
*   **Glow Effects:**
    *   *Outer Glow:* A heavy red drop shadow that expands on hover:
        `shadow-[0_0_50px_-5px_rgba(239,68,68,0.6)] hover:shadow-[0_0_80px_-5px_rgba(239,68,68,0.8)]`
    *   *Inner Glow:* A light-red gradient overlay radiating from the left edge (`bg-gradient-to-r from-red-500/40 to-transparent`).
*   **Accent Stripe:** A solid 6px vertical border on the left edge (`bg-gradient-to-b from-red-300 via-red-400 to-red-300`).
*   **Layout:** Responsive grid transitioning from a stacked column on mobile to a side-by-side row on desktop (`flex flex-col md:flex-row items-center justify-between gap-8`).

---

## 2. Text & Graphic Assets

*   **Heading:** "Is Your Company Secure?" (bold white Montserrat).
*   **Description:** "Many organizations believe they are secure—until a vulnerability is exploited. Proactively identifying risks is the first step toward building a resilient security posture." (rendered in light pink-red `text-red-100` for contrast).
*   **Warning Graphic (Right Side):**
    *   *Format:* Custom vector SVG illustration.
    *   *Shapes:* A yellow-stroked warning triangle (`stroke-yellow-400`) containing a white-stroked exclamation point (`stroke-white`).
    *   *Visual Effect:* Outer yellow drop-shadow glow (`drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]`).

---

## 3. Technical Mappings & Dependencies

*   **Library Imports:** `aos` (triggering `fade-up` scroll entry with an 800ms duration).
*   **Icons Used:** Custom inline SVG code.
*   **Used In:** [Home Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/home.md) (Warning Banner Section)
