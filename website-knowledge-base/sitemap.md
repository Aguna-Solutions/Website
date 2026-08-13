# Website Sitemap & Internal Link Architecture

This document maps the page hierarchy, navigation nodes, and internal linking structure of the Aguna Solutions website. It details how the pages connect to each other and provides the structural flow of the site.

---

## 1. Visual Sitemap Hierarchy

The site is organized as a flat-to-shallow hierarchy. All primary pages are accessible directly from the main header navigation, while specific subsections and deep sections are linked via hashes in the footer and main landing page calls-to-action (CTAs).

```
Home (/)
├── Cybersecurity Services (Dropdown)
│   ├── Services (/services)
│   │   ├── Service Portfolio (#services-portfolio)
│   │   ├── VAPT Assessment Types (#vapt-assessment-types)
│   │   └── Methodologies & Standards (#methodologies)
│   │
│   └── Cyber Security (/cyber-security)
│       ├── Our Foundational Pillars (#pillars)
│       ├── Advanced Operations (#advances-operations)
│       ├── Penetration Testing (#pentest-types)
│       └── Advanced Capabilities (#advanced-capabilities)
│
├── Products (/products)
├── About (/about)
│   ├── Operating Principles (#operating-principles)
│   └── Tech Partners (#partners)
│
├── Certificates (/certificates)
└── Contact (/contact)
```

---

## 2. Page Directory

Below is the index of all route pages, their source files, and primary sections:

1.  **Home Page (`/`)**
    *   *File:* `app/page.tsx`
    *   *Sections:* Hero, Warning (Is Your Company Secure?), Help/Capabilities grid, Customer Logos marquee, What Sets Us Apart differentiators, Compliances list, Certificates grid.
2.  **About Page (`/about`)**
    *   *File:* `app/about/page.tsx`
    *   *Sections:* Who We Are description, Digital Transformation vision, Corporate Video player, One Team, How We Work 4-step process, Operating Principles list, Tech Partners cards.
3.  **Services Page (`/services`)**
    *   *File:* `app/services/page.tsx`
    *   *Sections:* Service Portfolio (12 interactive cards with pop-up overlays), VAPT Assessment Types, Methodologies & Standards (PTES, OWASP, OSSTMM), Expertise list, Team certifications, Why Aguna list, Industries marquee.
4.  **Products Page (`/products`)**
    *   *File:* `app/products/page.tsx`
    *   *Sections:* Products Hero (title & description), Radial Orbital Timeline (interactive 5-product node map), Products List (detailed product cards with hover-reveal details).
5.  **Cyber Security Page (`/cyber-security`)**
    *   *File:* `app/cyber-security/page.tsx`
    *   *Sections:* Foundational Pillars (Infrastructure & Security Operations), Introductory Summary, Cybersecurity Domains grid, Advanced Security Operations (6 detailed cards with popup modals), Why Cybersecurity Matters callout, Penetration Testing Types (7 cards), Advanced Capabilities list.
6.  **Certifications Page (`/certificates`)**
    *   *File:* `app/certificates/page.tsx`
    *   *Sections:* Certificates Showcase layout, 3D Photo Carousel.
7.  **Contact Page (`/contact`)**
    *   *File:* `app/contact/page.tsx`
    *   *Sections:* Contact Cards (Email & Location), Contact Form, Artificial Hero (looping ASCII sphere background).

---

## 3. Internal Linking Matrix

The following table lists where internal links reside and their targets, demonstrating the navigation flows built into the website:

| Source Page | Source Section / Element | Link Text / Trigger | Destination Route | Target Anchored Element / Section |
| :--- | :--- | :--- | :--- | :--- |
| **Global Header** | Desktop Menu | Home | `/` | Page Top |
| **Global Header** | Desktop Menu (Dropdown) | Services | `/services` | Page Top |
| **Global Header** | Desktop Menu (Dropdown) | Cyber Security | `/cyber-security` | Page Top |
| **Global Header** | Desktop Menu | Products | `/products` | Page Top |
| **Global Header** | Desktop Menu | About | `/about` | Page Top |
| **Global Header** | Right Side Header Button | Contact | `/contact` | Page Top |
| **Global Footer** | Column 2 (Quick Links) | Home | `/` | Page Top |
| **Global Footer** | Column 2 (Quick Links) | About Us | `/about` | Page Top |
| **Global Footer** | Column 2 (Quick Links) | Services | `/services` | Page Top |
| **Global Footer** | Column 2 (Quick Links) | Services Portfolio | `/services#services-portfolio` | `services-portfolio` section |
| **Global Footer** | Column 2 (Quick Links) | Our Products | `/products` | Page Top |
| **Global Footer** | Column 2 (Quick Links) | Contact Us | `/contact` | Page Top |
| **Global Footer** | Column 3 (Trust Links) | Cyber security | `/cyber-security` | Page Top |
| **Global Footer** | Column 3 (Trust Links) | Our Compliances | `/#our-compliances` | `our-compliances` section |
| **Global Footer** | Column 3 (Trust Links) | VAPT: Vuln Assess & Pentest | `/services#vapt-assessment-types` | `vapt-assessment-types` section |
| **Global Footer** | Column 3 (Trust Links) | VAPT methodologies | `/services#methodologies` | `methodologies` section |
| **Global Footer** | Column 3 (Trust Links) | Our Foundation Pillars | `/cyber-security#pillars` | `pillars` section |
| **Global Footer** | Column 3 (Trust Links) | Our Certificates | `/#certificates` | `certificates` section |
| **Global Footer** | Column 4 (Tech Links) | Advanced Operations | `/cyber-security#advances-operations` | `advances-operations` section |
| **Global Footer** | Column 4 (Tech Links) | Penetration Testing | `/cyber-security#pentest-types` | `pentest-types` section |
| **Global Footer** | Column 4 (Tech Links) | Advanced Capabilities | `/cyber-security#advanced-capabilities` | `advanced-capabilities` (cyber page) |
| **Global Footer** | Column 4 (Tech Links) | Operating Principles | `/about#operating-principles` | `operating-principles` section |
| **Global Footer** | Column 4 (Tech Links) | Our Partners | `/about#partners` | `partners` section |
| **Services Page** | VAPT Assessment Types | Learn More | `/cyber-security#pentest-types` | `pentest-types` section |

---

## 4. User Journey Analysis

### Flow 1: Lead Acquisition
1.  User lands on **Home (`/`)**, reads typewriter headline and is prompted by the **Security Warning Banner** ("Is Your Company Secure?").
2.  User scrolls down, views **Certificates Grid** and **Customer Logos** to establish trust.
3.  User clicks the **Contact** button in the header or the **Contact Us** link in the footer.
4.  User is redirected to **Contact Page (`/contact`)**, fills out the form, and submits an inquiry.

### Flow 2: Service Verification
1.  User navigates to **Services Page (`/services`)** via header dropdown, reviews the **12-Service Portfolio**, and clicks a card to inspect capabilities.
2.  User scrolls to **VAPT Assessment Types** and clicks **Learn More**.
3.  User is redirected to the **Cyber Security Page (`/cyber-security#pentest-types`)**, where they inspect specific penetration testing types and advanced security operations (SOC, TDIR, GRC).
4.  User scrolls down to **Advanced Capabilities** at the bottom, verifying DevSecOps and CSPM offerings.
