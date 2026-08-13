# Tech Partners Component

**Source File:** [components/TechPartners.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/TechPartners.tsx)  
**Primary Purpose:** Displays a directory of 8 key technology partners, cybersecurity platforms, and academic/governmental integrations on the About page.

---

## 1. Visual Specification & Styling

*   **Background:** Sits on a dark canvas (`bg-black/95`) with a top border (`border-t border-white/10`).
*   **Layout:** Renders a 2-column grid of wide cards (`grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12`).
*   **Card Container:** The cards are borderless with a very thin outline (`border border-white/5`), and transition to a frosted background on hover (`hover:bg-white/5`).
*   **Logo Roundel:** Each partner has a prominent, white circular logo container (`rounded-full bg-white h-32 w-32 relative`) that scales on hover (`hover:scale-105`) and casts a soft drop shadow (`drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]`).
*   **Object-Positioning:** Includes specific CSS `objectPosition` values (e.g., `-35px center` for NCOE) to ensure the logos are perfectly centered inside the circular containers.

---

## 2. Directory of 8 Partners

### 1. Crowdstrike
*   **Description:** "Endpoint protection, threat intelligence, and incident response using AI/ML to detect and prevent malware, ransomware, and phishing attacks."
*   **Logo File:** `/images/crowdstrike-logo-red.png`

### 2. CyberArk
*   **Description:** "Privileged Access Management (PAM) with solutions like password vaulting, session management, and credential security analytics."
*   **Logo File:** `/images/cyberark-logo-new.jpg`

### 3. Palo Alto Networks
*   **Description:** "Network and cloud security, threat prevention, and secure access management through firewalls and advanced threat tools."
*   **Logo File:** `/images/paloalto-logo-new.jpg`

### 4. Tenable
*   **Description:** "Vulnerability management including web/app scanning, risk evaluation, compliance monitoring, and proactive mitigation."
*   **Logo File:** `/images/tenable-logo-new.jpg`

### 5. NCOE (National Centre of Excellence)
*   **Description:** "The National Centre of Excellence (NCOE) in Cybersecurity Technology Development and Entrepreneurship, building a robust ecosystem for cybersecurity innovation and research."
*   **Logo File:** `/images/ncoe-logo.png` (object-position: `-35px center`)

### 6. DSCI (Data Security Council of India)
*   **Description:** "Data Security Council of India (DSCI) is a premier industry body on data protection in India, setup by NASSCOM, committed to making the cyberspace safe, secure and trusted."
*   **Logo File:** `/images/dsci-logo.png`

### 7. IIT Gandhinagar
*   **Description:** "Indian Institute of Technology (IIT) Gandhinagar, a premier academic and research institution, fostering innovation through deep-tech collaborations and advanced engineering research."
*   **Logo File:** `/images/iit-gandhinagar-logo.png`

### 8. DPIIT Recognition
*   **Description:** "Department for Promotion of Industry and Internal Trade (DPIIT) recognition, validating Aguna Solutions as a certified startup contributing to India's technology ecosystem."
*   **Logo File:** `/images/dpiit-logo.png`

---

## 3. Technical Mappings & Dependencies

*   **Utility Imports:** `next/image` (Next.js Image)
*   **Used In:** [About Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/about.md) (Ecosystem Partners Section)
