# Certificates Grid Component

**Source File:** [components/CertificatesGrid.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/CertificatesGrid.tsx)  
**Primary Purpose:** Displays a 3-column grid showcasing verified security compliance certifications (ISO 27001, SOC 2 Type I, and SOC 2 Type II) to build trust.

---

## 1. Visual Specification & Styling

The grid uses a clean, semi-transparent layout that fits into the dark theme of the home page.

*   **Layout:** 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).
*   **Card Styling:** Rounded borders (`rounded-2xl`), frosted glass background (`bg-white/5 backdrop-blur-sm`), and a subtle border (`border-white/10`).
*   **Hover Effects:** On hover, the border changes to blue (`hover:border-blue-500/50`), the background brightens (`hover:bg-white/10`), and a soft blue gradient fades in behind the text (`bg-gradient-to-br from-blue-500/5 via-transparent to-transparent`).
*   **Verified Badge:** Displays a clean green badge in the top right of each card (`bg-emerald-500/10 border-emerald-500/20 text-emerald-400`).

---

## 2. Card Content & Credentials

The component maps three verified certifications:

### 1. ISO 27001:2022
*   **Authority:** International Organization for Standardization
*   **Description:** "The international standard for Information Security Management Systems (ISMS), ensuring data security best practices."
*   **Graphic Asset:** `/images/iso-27001.png` (rendered in a small box with a light border)

### 2. SOC 2 Type I
*   **Authority:** AICPA (American Institute of Certified Public Accountants)
*   **Description:** "Report on the design and implementation of controls relevant to security, availability, processing integrity, confidentiality, and privacy."
*   **Graphic Asset:** `/images/soc-type-1.png`

### 3. SOC 2 Type II
*   **Authority:** AICPA
*   **Description:** "Audited report demonstrating effective controls over security, availability, processing integrity, confidentiality, and privacy."
*   **Graphic Asset:** `/images/soc-type-2-final.png`

---

## 3. Technical Mappings & Dependencies

*   **Utility Imports:** `next/image` (Next.js Image), `lucide-react`.
*   **Icons Used:** `Shield`, `FileCheck`, `Globe`, `Lock`, `CheckCircle2`, `Cloud` (Lucide React, used as fallbacks if images fail to load).
*   **Used In:** [Home Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/home.md) (Compliance Grid Section)
