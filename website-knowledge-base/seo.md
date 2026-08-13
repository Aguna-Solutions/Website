# Search Engine Optimization (SEO) & Metadata Specification

This document details the search engine optimization, Open Graph, Twitter Cards, canonical URL schemas, and structured microdata mappings for the Aguna Solutions website.

---

## 1. Global Baseline Metadata

The website currently uses the Next.js App Router metadata API inside the root layout (`app/layout.tsx`). Unless overridden in sub-routes, all pages inherit these global parameters:

*   **Global Title:** `Aguna Solutions`
*   **Global Description:** `Advanced AI & Security Solutions`
*   **Global Content-Type:** `text/html; charset=utf-8`
*   **Global Viewport:** `width=device-width, initial-scale=1`
*   **Global Robots:** `index, follow`

---

## 2. Page-Specific SEO & Metadata Specifications

To achieve maximum enterprise-level search discoverability and rich social sharing, the following target metadata is mapped to each route:

### 2.1 Home Page (`/`)
*   **Meta Title:** Aguna Solutions | Advanced AI & Security Solutions
*   **Meta Description:** Aguna delivers immutable data protection, cyber resilience, and custom AI analytics for enterprise cloud infrastructure. Achieve immediate recovery and zero-trust operations.
*   **Keywords:** cybersecurity, enterprise data protection, cloud security, cyber resilience, immutable storage, SOC 2 compliance, VAPT, Aguna Solutions.
*   **Canonical URL:** `https://www.agunasolutions.com/`
*   **Open Graph (OG) Tags:**
    *   `og:title`: Aguna Solutions | Advanced AI & Security Solutions
    *   `og:description`: Protect your enterprise cloud infrastructure with Aguna's immutable data protection and advanced threat analytics.
    *   `og:url`: `https://www.agunasolutions.com/`
    *   `og:image`: `https://www.agunasolutions.com/images/aguna-logo.png`
    *   `og:type`: website
*   **Twitter Tags:**
    *   `twitter:card`: summary_large_image
    *   `twitter:title`: Aguna Solutions | Advanced AI & Security Solutions
    *   `twitter:description`: Immutable data protection and cyber resilience for enterprise cloud.
    *   `twitter:image`: `https://www.agunasolutions.com/images/aguna-logo.png`

### 2.2 About Page (`/about`)
*   **Meta Title:** About Us | Aguna Solutions
*   **Meta Description:** Learn about Aguna's mission to fuel digital innovation through operating principles of integrity, resilience, and technical precision. Meet our elite partners and academic integrations.
*   **Keywords:** about aguna, cybersecurity firm, DSCI partner, NCOE cyber, IIT Gandhinagar startup, cybersecurity operating principles.
*   **Canonical URL:** `https://www.agunasolutions.com/about`
*   **Open Graph (OG) Tags:**
    *   `og:title`: About Us | Aguna Solutions
    *   `og:description`: Discover the principles, team, and tech partners driving Aguna's cybersecurity and enterprise AI initiatives.
    *   `og:url`: `https://www.agunasolutions.com/about`
    *   `og:type`: website

### 2.3 Services Page (`/services`)
*   **Meta Title:** Cybersecurity & VAPT Service Portfolio | Aguna Solutions
*   **Meta Description:** Browse our comprehensive security services: Application & Cloud Security, VAPT, compliance auditing, data warehousing, and custom software development.
*   **Keywords:** cybersecurity services, web penetration testing, mobile VAPT, API security, GRC compliance audit, PTES methodology, OWASP testing.
*   **Canonical URL:** `https://www.agunasolutions.com/services`
*   **Open Graph (OG) Tags:**
    *   `og:title`: Cybersecurity & VAPT Service Portfolio | Aguna Solutions
    *   `og:description`: Enterprise-grade security services, auditing, and VAPT aligned with PTES, OWASP, and OSSTMM frameworks.
    *   `og:url`: `https://www.agunasolutions.com/services`

### 2.4 Products Page (`/products`)
*   **Meta Title:** AI-Driven Industrial & Security Products | Aguna Solutions
*   **Meta Description:** Specialized products: Predictive Maintenance for Industry 4.0, CCTV Anomaly Detection, Database Activity Monitoring, System Integrity, and DMS platforms.
*   **Keywords:** predictive maintenance AI, CCTV computer vision, database auditing tool, file integrity monitoring, document management system.
*   **Canonical URL:** `https://www.agunasolutions.com/products`
*   **Open Graph (OG) Tags:**
    *   `og:title`: AI-Driven Industrial & Security Products | Aguna Solutions
    *   `og:description`: Maximize asset uptime and secure operational integrity with Aguna's specialized AI and database monitoring products.
    *   `og:url`: `https://www.agunasolutions.com/products`

### 2.5 Cybersecurity Detail Page (`/cyber-security`)
*   **Meta Title:** Advanced Security Operations & Managed SOC | Aguna Solutions
*   **Meta Description:** Deep dive into our 24/7 Managed SOC, threat detection (TDIR), holistic EDR orchestration, identity governance (IAM), and integrated GRC frameworks.
*   **Keywords:** managed SOC, threat detection and response, SOAR integration, EDR orchestration, IAM governance, security compliance frameworks.
*   **Canonical URL:** `https://www.agunasolutions.com/cyber-security`
*   **Open Graph (OG) Tags:**
    *   `og:title`: Advanced Security Operations & Managed SOC | Aguna Solutions
    *   `og:description`: Secure your digital frontier with around-the-clock SOC-as-a-Service, automated incident containment, and robust GRC readiness.
    *   `og:url`: `https://www.agunasolutions.com/cyber-security`

### 2.6 Certificates Page (`/certificates`)
*   **Meta Title:** Verified Compliance & Certifications | Aguna Solutions
*   **Meta Description:** Verify our commitment to security. View our active and audited compliance credentials including ISO 27001, SOC 2 Type I, and SOC 2 Type II.
*   **Keywords:** ISO 27001 certified, SOC 2 Type I audited, SOC 2 Type II compliance, verified cybersecurity certifications.
*   **Canonical URL:** `https://www.agunasolutions.com/certificates`

### 2.7 Contact Page (`/contact`)
*   **Meta Title:** Contact Secure Operations | Aguna Solutions
*   **Meta Description:** Connect with our security team to discuss your VAPT, infrastructure protection, or custom software project. Submit a secure inquiry today.
*   **Keywords:** contact cybersecurity, hire pentester, security consulting inquiry, Noida cybersecurity company.
*   **Canonical URL:** `https://www.agunasolutions.com/contact`

---

## 3. Structured Data & Schema.org Mappings

To enable rich snippets in search results, the following JSON-LD schemas must be embedded in the home page:

### 3.1 Corporate Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  "name": "Aguna Solutions",
  "url": "https://www.agunasolutions.com",
  "logo": "https://www.agunasolutions.com/images/aguna-logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/aguna-solutions/posts/?feedView=all"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@agunasolutions.com",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7th floor, Eco Tower, Sector 125",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  }
}
```

### 3.2 Professional Service (Cybersecurity Services) Schema
This schema should be embedded on the `/services` page to highlight core business offerings:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Aguna Solutions Cybersecurity Services",
  "image": "https://www.agunasolutions.com/images/service-background.png",
  "priceRange": "$$$",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7th floor, Eco Tower, Sector 125",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "knowsAbout": [
    "Vulnerability Assessment and Penetration Testing (VAPT)",
    "Application Security",
    "Infrastructure Protection",
    "Cloud Security Auditing",
    "Managed Security Operations Center (SOC)",
    "Governance, Risk, and Compliance (GRC)"
  ]
}
```
