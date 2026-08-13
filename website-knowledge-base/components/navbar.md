# Navbar Component

**Source File:** [components/Navbar.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/Navbar.tsx)  
**Primary Purpose:** Handles the global navigation, route switching, active link states, and responsive menus. It provides seamless transit across all pages.

---

## 1. Visual Specification & Styling

The Navbar sits fixed at the top of the viewport (`fixed w-full z-50 top-0 start-0`) and uses a unique gradient background that transitions across three distinct zones:
1.  **Left Zone (White/Light):** Sitting on the left where the corporate logo resides, it has a solid white backdrop with an extra semi-transparent white glow (`bg-white/50 blur-3xl`) to ensure the dark logo has perfect contrast.
2.  **Center Zone (Light Blue):** The navigation menu sits on a soft, semi-transparent light blue backdrop (`rgba(225,247,255,0.95)`).
3.  **Right Zone (Dark Translucent):** The right side transitions to a dark navy (`rgba(5,10,20,0.8)`), providing a high-contrast background for the white Contact button.
*   **Bottom Border:** A customized 1px line that follows the gradient, fading from solid white on the left to transparent on the right:
    `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)`

---

## 2. Menu Structure & Links

The navbar organizes the site's primary routes:

*   **Logo Link:** Redirects to `/` (renders `aguna-logo.png` with scale-up hover transition `group-hover:scale-105`).
*   **Main Navigation Nodes (Centered Pill):**
    *   *Home:* `/` (Direct link)
    *   *Cybersecurity Services:* (Dropdown menu)
        *   `Services` -> `/services`
        *   `Cyber Security` -> `/cyber-security`
    *   *Products:* `/products` (Direct link)
    *   *About:* `/about` (Direct link)
*   **Contact Trigger (Right Side):**
    *   *Contact:* `/contact` (Direct link with Lucide `Phone` icon)

---

## 3. Interaction & Behavioral Logic

*   **Active Route Highlight:** Uses the Next.js `usePathname` hook to evaluate the active route.
    *   *Desktop:* Highlights active links in bold dark blue (`text-blue-900 font-bold`) and default links in neutral charcoal (`text-slate-900`).
    *   *Mobile:* Highlights active routes in bright cyan (`text-blue-400`).
*   **Desktop Dropdown Mechanism:** The "Cybersecurity Services" menu uses a hover-activated dropdown container. On hover (`group-hover` classes), the menu fades in and translates upwards slightly using CSS transitions, revealing the `Services` and `Cyber Security` links.
*   **Responsive Mobile Overlay:** On viewports under `768px`, the navbar renders a mobile menu button (presents `Menu` or `X` icon). When clicked:
    *   A full-screen overlay slides out in semi-transparent dark slate (`bg-slate-900/95 backdrop-blur-xl`).
    *   Links are displayed vertically. The "Cybersecurity Services" dropdown is converted into an accordion block that expands vertically upon clicking.
    *   Clicking any link automatically toggles the menu state back to closed (`setIsOpen(false)`), allowing smooth route transition.

---

## 4. Dependencies & Technical Mappings

*   **Icons Used:** `Menu`, `X`, `Search`, `Globe`, `Mail`, `Phone`, `ChevronDown` (Lucide React)
*   **Utility Imports:** `next/link`, `next/image`, `next/navigation` (Next.js components)
*   **Used In:** Global layout, rendered at the top of every page route.
