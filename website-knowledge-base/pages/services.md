# Services Page

**URL:** `/services`  
**Source File:** [app/services/page.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/app/services/page.tsx)  
**Purpose:** Serves as the primary commercial catalog of the company. It documents the 12 core services, VAPT assessment structures, regulatory methodologies, engineering expertise, team certifications, and target industry verticals.

---

## SEO & Metadata

*   **SEO Title:** Cybersecurity & VAPT Service Portfolio | Aguna Solutions
*   **Meta Description:** Browse our comprehensive security services: Application & Cloud Security, VAPT, compliance auditing, data warehousing, and custom software development.
*   **Canonical URL:** `https://www.agunasolutions.com/services`
*   **Navigation Position:** Cybersecurity Services Dropdown > Services (Sub-item 1 in Header)
*   **Breadcrumbs:** `Home` > `Services`

---

## Page Summary

The Services page is a rich, highly detailed index of Aguna's technical offerings. It opens with an atmospheric `LampContainer` introducing the Service Portfolio. It displays 12 interactive cards representing the firm's core capabilities, which expand into detailed modals on click. The page then details the VAPT assessment types, aligns the firm's testing with 3 global methodologies (PTES, OWASP, OSSTMM), lists the team's operational expertise and 10 technical certifications, summarizes 5 key value reasons, and finishes with a scrolling marquee of 6 target industries.

---

## Sections

### 1. Header (Global Navbar)
*   **Component:** [Navbar Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/navbar.md)

---

### 2. Service Portfolio Hero
*   **Component:** [Service Offerings Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/service-offerings.md) (Hero)
*   **Visuals:** Premium `LampContainer` that projects a soft, high-tech glow downward from the top of the page.
*   **Copy:**
    *   *Heading:* "Our Service Portfolio"
    *   *Subtext:* "Comprehensive security services tailored to your needs" (rendered in an elegant, italicized font).
*   **Purpose:** Set a refined, premium visual tone at the start of the services directory.

---

### 3. Core Services Grid (12 Interactive Cards)
*   **Component:** [Service Offerings Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/service-offerings.md) (Grid)
*   **Visuals:** Custom grid layout set against the high-contrast matrix graphic `images/service-background.png`. Service options are presented as rounded bubbles (`ServicePortfolioCard`) that scale and glow on hover, and open as detailed overlay pop-ups on click.
*   **The 12 Services Directory:**
    1.  **Application Security**
        *   *Description:* "We help secure modern applications across the development and deployment lifecycle. Our services identify vulnerabilities, validate security controls, and reduce application risk."
        *   *Coverage:* Web Applications, APIs, Cloud-Native Applications
        *   *Icon:* Shield (Lucide Shield)
    2.  **Infrastructure Security**
        *   *Description:* "We protect enterprise infrastructure by identifying weaknesses, monitoring threats, and enforcing security controls across networks and systems."
        *   *Coverage:* Vulnerability Management, IDS & IPS, Security & Integrity Monitoring, Security Policy Management
        *   *Icon:* Server (Lucide Server)
    3.  **VAPT (Vulnerability Assessment & Penetration Testing)**
        *   *Description:* "Our VAPT services identify, validate, and prioritize exploitable vulnerabilities before attackers can misuse them. We conduct risk-based testing aligned with industry standards."
        *   *Coverage:* Web, Mobile, Cloud, Network, API, Code Review
        *   *Icon:* Search (Lucide Search)
    4.  **Governance & Compliance**
        *   *Description:* "We support organizations in meeting regulatory and security compliance requirements by strengthening governance frameworks and control effectiveness."
        *   *Coverage:* Risk Assessments, Internal Audits, Compliance Monitoring & Reporting
        *   *Icon:* FileCheck (Lucide FileCheck)
    5.  **Cloud Security**
        *   *Description:* "We secure cloud environments by addressing configuration risks, access controls, and workload security across diverse deployment models."
        *   *Coverage:* Private, Public, and Hybrid Cloud Environments
        *   *Icon:* Cloud (Lucide Cloud)
    6.  **Consulting**
        *   *Description:* "Our consulting services provide strategic and technical guidance to help organizations design, improve, and mature their security programs."
        *   *Coverage:* Digital Forensics, Policy & Plan Development, Security Strategy and Design
        *   *Icon:* Users (Lucide Users)
    7.  **Product Development**
        *   *Description:* "End-to-end development of secure, scalable custom software and mobile applications tailored to your unique business requirements."
        *   *Coverage:* Requirement Analysis, Full Stack Development, iOS & Android Apps, Maintenance & QA
        *   *Icon:* Code2 (Lucide Code2)
    8.  **Implementation & Support**
        *   *Description:* "Professional deployment and ongoing support services to ensure your technology stack operates at peak performance."
        *   *Coverage:* System Integration, 24/7 Technical Support, Performance Tuning, Updates & Patching
        *   *Icon:* Headphones (Lucide Headphones)
    9.  **Data Services**
        *   *Description:* "Robust data warehousing and lake solutions to centralize your data for advanced analytics and business intelligence."
        *   *Coverage:* Data Modeling, ETL Processes, Data Migration, Business Intelligence Integration
        *   *Icon:* Database (Lucide Database)
    10.  **SOC-As-A-Service**
        *   *Description:* "24/7 security monitoring and incident response service to detect and neutralize threats in real-time."
        *   *Coverage:* Real-time Monitoring, Threat Detection, Incident Response, Log Management
        *   *Icon:* Eye (Lucide Eye)
    11.  **Robotic Process Automation**
        *   *Description:* "Automate repetitive business processes to improve efficiency, reduce errors, and free up human resources."
        *   *Coverage:* Process Discovery, Bot Development, Workflow Automation, ROI Analysis
        *   *Icon:* Bot (Lucide Bot)
    12.  **IT Audit & Forensics**
        *   *Description:* "In-depth IT audits and digital forensics to investigate incidents, ensure compliance, and uncover root causes."
        *   *Coverage:* Compliance Audits, Incident Investigation, Evidence Recovery, Root Cause Analysis
        *   *Icon:* FileSearch (Lucide FileSearch)
*   **Purpose:** Detail every core service offered by Aguna, allowing users to drill down into specific capabilities via pop-up modals.

---

### 4. VAPT Assessment Grid
*   **Component:** [Service Offerings Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/service-offerings.md) (VAPT Subsection)
*   **Visuals:** A clean, high-contrast white panel featuring a 3-column split. The left column contains black text details, while the right displays 6 dark badges with blue bullet points.
*   **Copy:**
    *   *Heading:* "VAPT Assessment Types"
    *   *Subtext:* "Comprehensive security assessments to identify vulnerabilities across your infrastructure."
    *   *Call-to-Action Link:* "Learn More" -> Redirects to `/cyber-security#pentest-types`
*   **6 Assessment Types Listed:**
    *   Internal Penetration Testing, External Penetration Testing, Application Penetration Testing (Web & Mobile), Cloud Security Assessment, Network Configuration Assessment, Risk Assessment.
*   **Purpose:** Provide structured, technical lists of vulnerability assessments for compliance and corporate safety.

---

### 5. Methodologies & Standards
*   **Component:** [Service Methodologies Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/service-methodologies.md)
*   **Visuals:** Dark section with a 3-column grid of gray-900 cards. Each contains a header graphic with a blue-hued overlay that reveals full color on hover.
*   **Copy:**
    *   *Heading:* "Methodologies & Standards"
    *   *Description:* "Aligned with globally recognized frameworks"
*   **3 Methodology Blocks:**
    1.  **PTES (Penetration Testing Execution Standard):** "We use PTES to conduct structured, real-world penetration testing—simulating attacker behavior to identify exploitable vulnerabilities and assess actual business risk." (Image: `images/methodology.jpg`)
    2.  **OWASP (Web & API risk alignment):** "Our application and API security testing are aligned with OWASP frameworks to uncover critical vulnerabilities, validate security controls, and reduce exposure to common attack vectors." (Image: `images/owasp.jpg`)
    3.  **OSSTMM (Security testing measurement standard):** "We apply OSSTMM principles to objectively evaluate the effectiveness of security controls across networks and systems, providing measurable and repeatable security insights." (Image: `images/osstmm.jpg`)
*   **Purpose:** Prove adherence to structured, globally verified methodologies for penetration testing and auditing.

---

### 6. Team Credentials & Operational Expertise
*   **Component:** [Service Expertise Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/service-expertise.md)
*   **Visuals:** White block in the top containing 4 expertise items, followed by a dark theme section in the bottom displaying 10 technical certifications.
*   **Copy:**
    *   *Heading:* "Expertise"
    *   *Subtext:* "Deep industry knowledge and technical proficiency"
*   **4 Expertise Blocks:**
    1.  **Security Operations Expertise:** "Our team brings deep hands-on experience in security operations, threat detection, and incident response across complex enterprise environments." (Icon: ShieldCheck)
    2.  **Proactive Services:** "We take a proactive approach to security by continuously monitoring environments, performing preventive maintenance, and conducting regular health checks." (Icon: Activity)
    3.  **Proactive Threat Hunting:** "Daily threat hunting activities to identify suspicious behavior, hidden threats, and advanced attack techniques before they escalate." (Icon: Binoculars)
    4.  **Informed Incident Insights:** "We cut through alert noise to clearly determine what happened, assess impact, and define the right corrective actions." (Icon: Search)
*   **Team Credentials Subsection:**
    *   *Heading:* "Team Expertise"
    *   *Subtext:* "Our certified professionals bring extensive real-world experience across industry-recognized standards and technologies:"
    *   *Floating Certification Badges:* `CEH`, `APISec`, `eWPT`, `OSCP`, `CRTP`, `CRTE`, `HCIPSPP`, `ISO 27001`, `ISO 300`, `CyberArk (CDI)`
*   **Purpose:** Detail the team's hands-on credentials, operational capabilities, and verified certifications.

---

### 7. Why Aguna Section
*   **Component:** [Why Aguna Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/why-aguna.md)
*   **Visuals:** Light blue-200 background containing a centralized, white frosted-glass card with a drop shadow.
*   **Copy:**
    *   *Heading:* "Why Aguna Solutions"
    *   *Subtext:* "Building trust through excellence"
*   **5 Value Statements (with blue CheckCircle icons):**
    *   Risk-based, outcome-driven security approach
    *   Manual and automated testing expertise
    *   Clear, actionable reporting and remediation guidance
    *   Proactive security mindset, not reactive support
    *   Solutions tailored to your business and environment
*   **Purpose:** Summarize the core value propositions that make Aguna a reliable security partner.

---

### 8. Target Industries Cover
*   **Component:** [Industries Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/industries.md)
*   **Visuals:** Dark background with an infinite horizontal scrolling track of industry bubbles sliding between fading edge gradients.
*   **Copy:**
    *   *Heading:* "Industries We Cover"
    *   *Subtext:* "Diverse industries, comprehensive expertise"
*   **6 Target Industries (with custom icons and borders):**
    *   Financial (Landmark icon), Educational (GraduationCap icon), Healthcare (Building2 icon), Broadcasting (Tv icon), Governmental (LandPlot icon), Gaming (Gamepad2 icon).
*   **Purpose:** Highlight horizontal industry experience across multiple verticals.

---

### 9. Footer (Global Footer)
*   **Component:** [Footer Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/footer.md)
