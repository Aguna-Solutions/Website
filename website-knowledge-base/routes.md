# Next.js Routes Specification

This document maps all public URLs, API routes, page source files, and navigation entry points of the Aguna Solutions website.

---

## 1. Public Page Routes

| Route (URL) | Next.js Source File | Description & Target Role | Navigation Entry Points (Sources) |
| :--- | :--- | :--- | :--- |
| `/` | `app/page.tsx` | **Home Page:** Serves as the primary landing page. Sets corporate tone, summarizes capabilities, lists compliance signals, and hosts verified certificates grid. | Global Header Logo, Header "Home" link, Footer "Home" link, Footer "Quick Links" |
| `/about` | `app/about/page.tsx` | **About Page:** Focuses on company identity, mission statement, "How We Work" engagement lifecycle, "Operating Principles," and "Tech Partners." | Header "About" link, Footer "About Us" link, Footer "Operating Principles" link, Footer "Our Partners" link |
| `/services` | `app/services/page.tsx` | **Services Page:** Main interactive catalog showcasing the 12 core services, VAPT assessment types, and industrial frameworks (PTES, OWASP, OSSTMM). | Header "Cybersecurity Services" dropdown, Footer "Services" link, Footer "Services Portfolio" link |
| `/products` | `app/products/page.tsx` | **Products Page:** Highlights proprietary solutions including Industrial AI, Computer Vision anomaly detection, Database auditing, and Document management. | Header "Products" link, Footer "Our Products" link |
| `/cyber-security` | `app/cyber-security/page.tsx` | **Cybersecurity Detail Page:** Dedicated route for high-fidelity cybersecurity domains (24/7 Managed SOC, TDIR, IAM, GRC) and penetration testing deep-dives. | Header "Cybersecurity Services" dropdown, Footer "Cyber security" link, Footer "Our Foundation Pillars" link, Footer "Advanced Operations" link, Footer "Penetration Testing" link, Footer "Advanced Capabilities" link |
| `/certificates` | `app/certificates/page.tsx` | **Certificates Showcase:** Displays an interactive, floating 3D carousel of compliance certifications (ISO 27001, SOC 2 Type I & II) in a high-tech theme. | Footer "Our Certificates" link, and homepage grid redirection triggers |
| `/contact` | `app/contact/page.tsx` | **Contact Page:** A dedicated lead collection interface containing email/location detail cards, a secure email form, and an interactive ASCII sphere. | Header "Contact" button, Footer "Contact Us" link, Warning Banner button triggers |

---

## 2. Server-Side API Routes

| Route (URL) | Next.js Source File | Method | Description | Input / Output |
| :--- | :--- | :--- | :--- | :--- |
| `/api/contact` | `app/api/contact/route.ts` | `POST` | Processes contact form submissions on the server. Checks SMTP environment variables, instantiates a `nodemailer` client, and routes mail notifications to `info@agunasolutions.com`. | **Input:** JSON payload `{ name, email, subject, message }`<br>**Output (Success):** `200 OK` `{ message: "Email sent successfully" }`<br>**Output (Fail):** `500 Server Error` `{ error: "Server configuration error" }` or `{ error: "Failed to send email" }` |

---

## 3. Hash Anchored Scroll Routes

The website maps specific navigation items directly to internal section elements using CSS ID selectors. The `SmoothScroll` component intercepts these routes on mount and triggers a smooth scroll to the target element.

*   `/#our-compliances` -> Navigates to the homepage and scrolls to the **Our Compliances** award section (`id="our-compliances"`).
*   `/#certificates` -> Navigates to the homepage and scrolls to the **Certificates Grid** section (`id="certificates"`).
*   `/about#operating-principles` -> Navigates to the About page and scrolls to the **Operating Principles** grid (`id="operating-principles"`).
*   `/about#partners` -> Navigates to the About page and scrolls to the **Tech Partners We Work With** section (`id="partners"`).
*   `/services#services-portfolio` -> Navigates to the Services page and scrolls to the **Service Portfolio** Lamp wrapper (`id="services-portfolio"`).
*   `/services#vapt-assessment-types` -> Navigates to the Services page and scrolls to the **VAPT Assessment Types** white card (`id="vapt-assessment-types"`).
*   `/services#methodologies` -> Navigates to the Services page and scrolls to the **Methodologies & Standards** section (`id="methodologies"`).
*   `/cyber-security#pillars` -> Navigates to the Cyber Security page and scrolls to the **Foundational Pillars** section (`id="pillars"`).
*   `/cyber-security#advances-operations` -> Navigates to the Cyber Security page and scrolls to the **Advanced Security Operations** section (`id="advances-operations"`).
*   `/cyber-security#pentest-types` -> Navigates to the Cyber Security page and scrolls to the **Types of Penetration Testing** section (`id="pentest-types"`).
*   `/cyber-security#advanced-capabilities` -> Navigates to the Cyber Security page and scrolls to the **Advanced Capabilities** section (`id="advanced-capabilities"`).
