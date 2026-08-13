# Certificates Page

**URL:** `/certificates`  
**Source File:** [app/certificates/page.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/app/certificates/page.tsx)  
**Purpose:** Serves as a dedicated showcase of the company's verified compliance credentials. It presents the ISO 27001, SOC 2 Type I, and SOC 2 Type II audits in an interactive, floating 3D rotating cylinder.

---

## SEO & Metadata

*   **SEO Title:** Verified Compliance & Certifications | Aguna Solutions
*   **Meta Description:** Verify our commitment to security. View our active and audited compliance credentials including ISO 27001, SOC 2 Type I, and SOC 2 Type II.
*   **Canonical URL:** `https://www.agunasolutions.com/certificates`
*   **Navigation Position:** Secondary Route (Accessed via homepage grid clicks and footer "Our Certificates" links)
*   **Breadcrumbs:** `Home` > `Certificates`

---

## Page Summary

The Certificates page is a high-impact visual trust signal. It operates inside a full-viewport `AuroraBackground` layout that renders slow-moving, colorful fluid light patterns. The page uses a dual-column layout: the left side displays a bold, stacked title and copy, while the right side displays a custom `ThreeDPhotoCarousel` which allows users to spin, expand, and verify the firm's compliance certificates.

---

## Sections

### 1. Header (Global Navbar)
*   **Component:** [Navbar Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/navbar.md)

---

### 2. Certificates Showcase Hero
*   **Component:** `ThreeDPhotoCarousel` inside `AuroraBackground`
*   **Visuals:** A slow-moving, animated fluid light shader (`AuroraBackground`) in deep black, with high-contrast text and a large 3D interactive stage on the right.
*   **Copy & Typography:**
    *   *Heading:* "Our Certificates" (Rendered in Montserrat, with "Certificates" highlighted in a white-to-blue gradient).
    *   *Description:* "We are committed to maintaining the highest standards of security, compliance, and trust. Explore our verified certifications to see how we protect your data."
*   **3D Carousel Interface:**
    *   *Mechanical Structure:* Features a cylindrical stage rotating in 3D space (`perspective: 1000px`, `transformStyle: preserve-3d`).
    *   *Interaction:* Displays 3 floating, holographic certificate cards. Users click left/right arrow buttons in the control dock to rotate the cylinder, bringing different certificates into view.
    *   *The 3 Certificates:*
        1.  **ISO 27001:** "International standard for information security management." (Date: "Certified", HSL Blue gradient, Icon: ISO 27001 logo `/images/iso-27001.png`)
        2.  **SOC Type 1:** "Evaluates the design of security controls at a specific point in time." (Date: "Verified", Blue-to-cyan gradient, Icon: SOC 2 Type I logo `/images/soc-type-1-final.png`)
        3.  **SOC Type 2:** "Evaluates the operating effectiveness of security controls over a period of time." (Date: "Verified", Indigo gradient, Icon: SOC 2 Type II logo `/images/soc-type-2-final.png`)
*   **Purpose:** Build corporate trust by presenting compliance audits in an interactive, visually impressive showcase.

---

### 3. Footer (Global Footer)
*   **Component:** [Footer Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/footer.md)
