# Trust Section Component

**Source File:** [components/TrustSection.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/TrustSection.tsx)  
**Primary Purpose:** Combines four major branding and social proof elements into a unified section: a 2x2 capabilities grid, an infinite customer logo marquee, a high-contrast differentiators grid, and a compliance list.

---

## 1. Subcomponents & Structural Breakdown

The component is divided into four distinct sections that scroll sequentially:

### 1.1 "How We Can Help" Capabilities Grid
*   **Visuals:** 2x2 grid of wide cards. Each card has a semi-transparent background image, an overlay, and centered text. On hover, the image scales and the subtext slides up.
*   **Content Cards:**
    1.  **Clarity over uncertainty:** "Understand what truly puts your business at risk—and what doesn’t." (Image: dashboard `photo-1551288049-bebda4e38f71`)
    2.  **Security without disruption:** "Protect systems and data without slowing teams down." (Image: padlock `images/lock-v2.jpg`)
    3.  **Prepared, not surprised:** "Respond to incidents with structure, speed, and confidence." (Image: team meeting `photo-1551836022-d5d88e9218df`)
    4.  **Security that supports growth:** "Align protection with business priorities and compliance needs." (Image: digital globe `photo-1451187580459-43490279c0fa`)

### 1.2 "Our Customers" Marquee
*   **Visuals:** A massive section heading overlaying a horizontal marquee track. Left and right edges feature transparent-to-navy gradients to mask the logos as they slide in and out of the viewport.
*   **Logic:** Combines the list of 9 logo files, duplicates them to prevent gaps, and runs an infinite CSS linear translation loop (`--animate-logo-marquee` at `30s` duration).
*   **Logos:** GNFC, Margoncloud, Musashi, NPST, NTN, Orange, Star Air, Tynor, Zones.

### 1.3 "What Sets Us Apart" Differentiators
*   **Visuals:** High-contrast white background block with bold black text. Displays a 3-column grid of dark slate cards featuring green checkmark badges.
*   **The 5 Differentiators:**
    *   "We Protect, Detect, and Respond — Not Just Assess"
    *   "Security Built Around Your Reality, Not a Template"
    *   "Human Expertise Where Automation Falls Short"
    *   "Findings You Can Act On, Not Just Read"
    *   "Proactive by Design, Not Reactive by Accident"

### 1.4 "Our Compliances" Badge Deck
*   **Visuals:** Centralized layout featuring a gold-glowing award badge (Lucide `Award` in amber-400), subtext, and a floating deck of compliance badges.
*   **Compliance Chips:** `CEH`, `OSCP`, `eWPT`, `CRTP`, `CRTE`, `ISO 27001`, `CyberArk (CDI)`

---

## 2. Technical Mappings & Dependencies

*   **Library Imports:** `next/image`, `aos` (scroll animation triggers), `lucide-react`.
*   **Icons Used:** `Shield`, `Search`, `Cloud`, `AlertTriangle`, `CheckCircle2`, `Award` (Lucide React)
*   **Used In:** [Home Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/home.md) (Trust & Capabilities Section)
