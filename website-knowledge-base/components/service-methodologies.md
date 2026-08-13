# Service Methodologies Component

**Source File:** [components/ServiceMethodologies.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ServiceMethodologies.tsx)  
**Primary Purpose:** Explains the three globally recognized frameworks (PTES, OWASP, and OSSTMM) that Aguna aligns all testing and auditing against, displaying them on the Services page.

---

## 1. Visual Specification & Styling

*   **Background:** Sits on a dark canvas (`bg-black relative`) with an anchor target (`id="methodologies"`) for hash-route scrolling.
*   **Layout:** 3-column responsive grid (`grid-cols-1 md:grid-cols-3 gap-8`).
*   **Card Container:** The cards use a dark surface (`bg-gray-900/50 border border-gray-800 rounded-2xl`) that transitions to a brighter background on hover (`hover:bg-gray-900/80`).
*   **Image Stage:** Each card features a curved header graphic (`h-48 relative overflow-hidden rounded-xl`).
    *   *Visual Effect:* The images are semi-transparent (`opacity-80`) with a blue overlay tint (`bg-blue-600/10`). On hover, the container scales up slightly (`group-hover:scale-[1.02]`), the overlay fades to transparent, and the image brightens to full opacity.

---

## 2. The 3 Methodologies

### 1. PTES (Penetration Testing Execution Standard)
*   **Subtitle:** Penetration Testing Execution Standard (rendered in bright blue `text-blue-400 font-mono`)
*   **Description:** "We use PTES to conduct structured, real-world penetration testing—simulating attacker behavior to identify exploitable vulnerabilities and assess actual business risk."
*   **Graphic Asset:** `/images/methodology.jpg`

### 2. OWASP (Open Web Application Security Project)
*   **Subtitle:** Web & API risk alignment
*   **Description:** "Our application and API security testing are aligned with OWASP frameworks to uncover critical vulnerabilities, validate security controls, and reduce exposure to common attack vectors."
*   **Graphic Asset:** `/images/owasp.jpg`

### 3. OSSTMM (Open Source Security Testing Methodology Manual)
*   **Subtitle:** Security testing measurement standard
*   **Description:** "We apply OSSTMM principles to objectively evaluate the effectiveness of security controls across networks and systems, providing measurable and repeatable security insights."
*   **Graphic Asset:** `/images/osstmm.jpg`

---

## 3. Technical Mappings & Dependencies

*   **Library Imports:** `aos` (fade-in transitions), `framer-motion` (via motion wrappers).
*   **Used In:** [Services Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/services.md) (Methodologies Section)
