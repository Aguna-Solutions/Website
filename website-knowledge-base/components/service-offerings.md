# Service Offerings Component

**Source File:** [components/ServiceOfferings.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ServiceOfferings.tsx)  
**Primary Purpose:** Renders the primary service portfolio catalog on the Services page, containing a LampContainer header, a grid of 12 interactive cards with detail modals, and a VAPT assessment types section.

---

## 1. Visual Specification & Styling

*   **Header Stage (`LampContainer`):** A custom layout wrapper that projects a futuristic glow beam downward from the top of the viewport (`pt-20 relative z-10 bg-black`).
*   **Services Grid Container:** A 3-column responsive grid overlaid on the high-contrast matrix graphic `/images/service-background.png`.
*   **Pill Cards (`ServicePortfolioCard`):** Renders service options as rounded bubble containers. Each bubble scales up slightly (`hover:scale-[1.02]`), shifts background, and highlights borders on hover.
*   **VAPT Assessment Panel:** A high-contrast white block (`bg-white rounded-2xl p-12 mt-8 border border-gray-200`) with a 3-column split. The right side features a 2-column grid of black cards containing blue bullet points.

---

## 2. Interactive Modals & Data Lifecycle

*   **Framer Motion Layout ID:** Cards use matching `layoutId` properties (`card-${service.title}-${index}`) to animate smoothly when expanding into modals.
*   **Overlay & Backdrop:** When a service card is clicked, a semi-transparent dark backdrop (`bg-black/60 backdrop-blur-sm z-40`) fades in.
*   **Modal Card:** Renders a high-contrast card (`bg-[#0a0a0a] border border-white/10 rounded-2xl max-w-2xl max-h-[90vh]`) containing:
    *   An icon container, title, and detailed description.
    *   A "Key Capabilities & Coverage" panel displaying a grid of bulleted items.
    *   A curved close button (`absolute top-4 right-4 rounded-full bg-white/5 hover:bg-white/10`).

---

## 3. The 12 Services Specifications

1.  **Application Security:** Focuses on securing modern web apps, APIs, and cloud-native systems. (Icon: Shield, Coverage: Web Applications, APIs, Cloud-Native Applications)
2.  **Infrastructure Security:** Hardens networks and systems via vulnerability scanning and monitoring. (Icon: Server, Coverage: Vulnerability Management, IDS & IPS, Security & Integrity Monitoring, Security Policy Management)
3.  **VAPT:** Proactive penetration testing. (Icon: Search, Coverage: Web, Mobile, Cloud, Network, API, Code Review)
4.  **Governance & Compliance:** Auditing risk frameworks. (Icon: FileCheck, Coverage: Risk Assessments, Internal Audits, Compliance Monitoring & Reporting)
5.  **Cloud Security:** Secures private, public, and hybrid workloads. (Icon: Cloud, Coverage: Private, Public, and Hybrid Cloud Environments)
6.  **Consulting:** Strategic guidance, forensics, and policy design. (Icon: Users, Coverage: Digital Forensics, Policy & Plan Development, Security Strategy and Design)
7.  **Product Development:** Custom secure software and app design. (Icon: Code2, Coverage: Requirement Analysis, Full Stack Development, iOS & Android Apps, Maintenance & QA)
8.  **Implementation & Support:** Stack deployment, tuning, and 24/7 help. (Icon: Headphones, Coverage: System Integration, 24/7 Technical Support, Performance Tuning, Updates & Patching)
9.  **Data Services:** Centralizes data lakes and data modeling. (Icon: Database, Coverage: Data Modeling, ETL Processes, Data Migration, Business Intelligence Integration)
10. **SOC-As-A-Service:** Continuous 24/7 threat detection. (Icon: Eye, Coverage: Real-time Monitoring, Threat Detection, Incident Response, Log Management)
11. **Robotic Process Automation (RPA):** Automates workflows and business processes. (Icon: Bot, Coverage: Process Discovery, Bot Development, Workflow Automation, ROI Analysis)
12. **IT Audit & Forensics:** Digital investigation and evidence recovery. (Icon: FileSearch, Coverage: Compliance Audits, Incident Investigation, Evidence Recovery, Root Cause Analysis)

---

## 4. VAPT Assessment Types Grid

The bottom of the component lists 6 vulnerability assessment types:
*   Internal Penetration Testing, External Penetration Testing, Application Penetration Testing (Web & Mobile), Cloud Security Assessment, Network Configuration Assessment, Risk Assessment.
*   *Action:* Includes a "Learn More" link pointing to `/cyber-security#pentest-types`.

---

## 5. Technical Mappings & Dependencies

*   **Component Imports:** `LampContainer` (glowing effect), `ServicePortfolioCard` (bubble lists), `framer-motion` (animations).
*   **Icons Used:** `Shield`, `Server`, `Search`, `FileCheck`, `Cloud`, `Users`, `Code2`, `Headphones`, `Database`, `Eye`, `Bot`, `FileSearch`, `X` (Lucide React)
*   **Used In:** [Services Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/services.md) (Service Portfolio Section)
