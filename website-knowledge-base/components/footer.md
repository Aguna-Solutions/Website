# Footer Component

**Source File:** [components/Footer.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/Footer.tsx)  
**Primary Purpose:** Renders the global corporate footer, displaying contact details, office location, social media profiles, and 3 columns of structured internal navigation links.

---

## 1. Visual Specification & Styling

In contrast to the dark theme of the website, the Footer uses a high-contrast, clean white backdrop to mark the end of pages, ensuring absolute legibility for fine-print corporate links.

*   **Background:** Solid white with 80% opacity and thick backdrop blur (`bg-white/80 backdrop-blur-md`).
*   **Text Color:** Deep black (`text-black`) for primary headings, and dark charcoal (`text-zinc-900`) for links.
*   **Borders:** Subtle top border in light gray (`border-t border-gray-200`).
*   **Layout:** 12-column responsive grid (`grid-cols-1 md:grid-cols-12 gap-6`).

---

## 2. Structured Content Columns

### Column 1: Corporate Contact & Socials (Span 3 Columns)
*   **Company Name:** Aguna Solutions (bold, text-black)
*   **Address Card:** 
    *   *Text:* `7th floor, Eco Tower, Sector 125, Noida.`
    *   *Icon:* MapPin (styled in emerald green `text-emerald-600`)
*   **Email Card:**
    *   *Link:* `info@agunasolutions.com` (clickable mailto link)
    *   *Icon:* Mail (styled in emerald green `text-emerald-600`)
*   **Social Network Profiles:**
    *   *Platform:* LinkedIn
    *   *Link:* `https://www.linkedin.com/company/aguna-solutions/posts/?feedView=all`
    *   *Styling:* Rendered as a square button in corporate blue (`bg-[#0077b5]`) that shifts to a darker blue on hover, hosting a white LinkedIn logo.

### Column 2: Quick Links (Span 3 Columns)
Provides direct links to primary routes and page-anchored scroll zones:
*   `Home` -> `/`
*   `About Us` -> `/about`
*   `Services` -> `/services`
*   `Services Portfolio` -> `/services#services-portfolio`
*   `Our Products` -> `/products`
*   `Contact Us` -> `/contact`

### Column 3: Trust & Compliance Links (Span 3 Columns)
Promotes cybersecurity credentials, methodology pages, and pillars:
*   `Cyber security` -> `/cyber-security`
*   `Our Compliances` -> `/#our-compliances`
*   `VAPT: Vulnerability Assessment and Penetration Testing` -> `/services#vapt-assessment-types`
*   `VAPT methodologies` -> `/services#methodologies`
*   `Our Foundation Pillars` -> `/cyber-security#pillars`
*   `Our Certificates` -> `/#certificates`

### Column 4: Tech & Operations Links (Span 3 Columns)
Deep-dives into advanced technology grids, principles, and partnerships:
*   `Advanced Operations` -> `/cyber-security#advances-operations`
*   `Penetration Testing` -> `/cyber-security#pentest-types`
*   `Advanced Capabilities` -> `/cyber-security#advanced-capabilities`
*   `Operating Principles` -> `/about#operating-principles`
*   `Our Partners` -> `/about#partners`

---

## 3. Technical Mappings & Dependencies

*   **Icons Used:** `MapPin`, `Mail`, `Linkedin` (Lucide React)
*   **Utility Imports:** `next/link` (Next.js Link)
*   **Used In:** Global layout, rendered at the bottom of all routes.
