# Products Hero Component

**Source File:** [components/ProductsHero.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ProductsHero.tsx)  
**Primary Purpose:** Renders the top portion of the Products page, combining product introduction titles with a futuristic, interactive radial orbital timeline displaying 5 core products.

---

## 1. Visual Specification & Styling

*   **Background:** Sits inside a full-viewport slow-flowing gradient canvas ([Aurora Background Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/ui-effects-library.md)).
*   **Layout:** 2-column responsive grid (`grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`).
*   **Timeline Container (Right Column):** Renders the complex [Radial Orbital Timeline Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/ui-effects-library.md) (`RadialOrbitalTimeline`) that handles the 3D-like circular node layout, automatically scaling down on mobile viewports to prevent clipping.

---

## 2. Text & Copy

*   **Heading:** "Our Products" (gradient white-to-blue clip-text, Montserrat display font).
*   **Subheading Copy:** "AI-driven predictive analytics and security for specialized industries." (medium cool gray, line-height 1.6).

---

## 3. The 5 Timeline Products Data

The hero passes a list of 5 completed product nodes to the radial timeline:

1.  **Industry 4.0 (Industrial AI):** "AI-driven predictive analytics for high-value assets, optimizing fleet uptime and manufacturing yield through RUL forecasting and drift analysis." (Aerospace & Mfg, Icon: Cpu)
2.  **CCTV Anomaly Detection (Computer Vision):** "Computer vision monitors live CCTV to detect unusual behavior, unauthorized actions, and safety risks in real time." (Surveillance, Icon: Eye)
3.  **Database Monitoring (Security):** "Continuous database oversight with real-time anomaly detection, audit trails, and automated compliance reporting." (Cybersecurity, Icon: Database)
4.  **Athermind Integrity (Security):** "A comprehensive security solution ensuring integrity and trustworthiness of critical files and systems through real-time monitoring and tamper detection." (System Integrity, Icon: Fingerprint)
5.  **DMS Platform (Enterprise AI):** "Intelligent document lifecycle management with automated indexing, secure collaboration, and rigorous compliance tracking." (Governance, Icon: FileText)

---

## 4. Technical Mappings & Dependencies

*   **Library Imports:** `aos` (triggering `fade-left` scroll entries on the timeline).
*   **Component Imports:** `AuroraBackground` (flowing light), `RadialOrbitalTimeline` (orbital circles), `MotionWrapper` (fade-in).
*   **Icons Used:** `Cpu`, `Eye`, `Database`, `Fingerprint`, `FileText` (Lucide React)
*   **Used In:** [Products Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/products.md) (Hero Section)
