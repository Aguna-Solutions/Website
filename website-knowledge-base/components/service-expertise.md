# Service Expertise Component

**Source File:** [components/ServiceExpertise.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ServiceExpertise.tsx)  
**Primary Purpose:** Showcases the firm's technical proficiency on the Services page, detailing four operational areas and listing the team's 10 professional certifications.

---

## 1. Visual Specification & Styling

The component is divided into two distinct sections:

### 1.1 Core Expertise Grid (Top Section)
*   **Card Container:** Renders as a large, high-contrast white card (`bg-white border border-gray-200 rounded-2xl p-12 shadow-sm`) sitting against a dark background with a left-edge blue radial gradient glow (`bg-gradient-to-r from-blue-500/10 to-transparent`).
*   **Layout:** 2-column grid (`grid grid-cols-1 md:grid-cols-2 gap-12`).
*   **Items Layout:** Each item has a circular blue icon container (`bg-blue-50 text-blue-600 p-3 rounded-lg`) on the left, with bold black titles and gray description text on the right.

### 1.2 Team Expertise & Certifications (Bottom Section)
*   **Visuals:** Dark background with a centered title and description, displaying a horizontal floating deck of 10 certification badges.
*   **Badge Styling:** Translucent gray containers (`bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2`) that transition to a blue border on hover (`hover:border-blue-500`).

---

## 2. Structural Content

### 2.1 The 4 Core Expertise Blocks:
1.  **Security Operations Expertise:** "Our team brings deep hands-on experience in security operations, threat detection, and incident response across complex enterprise environments." (Icon: ShieldCheck)
2.  **Proactive Services:** "We take a proactive approach to security by continuously monitoring environments, performing preventive maintenance, and conducting regular health checks." (Icon: Activity)
3.  **Proactive Threat Hunting:** "Daily threat hunting activities to identify suspicious behavior, hidden threats, and advanced attack techniques before they escalate." (Icon: Binoculars)
4.  **Informed Incident Insights:** "We cut through alert noise to clearly determine what happened, assess impact, and define the right corrective actions." (Icon: Search)

### 2.2 The 10 Team Certifications:
`CEH` (Certified Ethical Hacker), `APISec` (API Security Certified), `eWPT` (Certified Web Penetration Tester), `OSCP` (Offensive Security Certified Professional), `CRTP` (Certified Red Team Professional), `CRTE` (Certified Red Team Expert), `HCIPSPP` (Huawei Certified ICT Professional Security), `ISO 27001` (ISMS Lead Auditor), `ISO 300` (ISO 300 Lead Auditor), `CyberArk (CDI)` (CyberArk Certified Delivery Engineer).

---

## 3. Technical Mappings & Dependencies

*   **Icons Used:** `ShieldCheck`, `Activity`, `Binoculars`, `Search` (Lucide React)
*   **Used In:** [Services Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/services.md) (Expertise Section)
