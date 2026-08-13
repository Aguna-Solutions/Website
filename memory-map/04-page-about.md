# 04 — Page: About (`/about`)

**File**: `app/about/page.tsx`  
**Type**: Server component

## Component Stack (top → bottom)

```
<AboutMission />
<SectionDivider />
<HowWeWork />
<SectionDivider />
<AboutValues />
<SectionDivider />
<TechPartners />
```

## SEO / Metadata

```ts
title: "About Us | Aguna Solutions"
description: "Learn about Aguna Solutions — our mission, team, and commitment to enterprise cybersecurity."
canonical: "https://www.agunasolutions.com/about"
```

---

## AboutMission (`components/AboutMission.tsx`)

The hero section for the About page. Contains a video (`public/videos/about-video.mp4`) showcasing the company. Layout is typically a split or full-bleed panel with a mission statement alongside or overlaid on the video.

**Video file**: `public/videos/about-video.mp4` — must exist at this path. The user manually placed it there.

---

## HowWeWork (`components/HowWeWork.tsx`)

Four-step process section. Uses the images from `public/images/how-we-work/`:
- `step1.png` — Discovery / Assessment
- `step2.png` — Planning
- `step3.png` — Execution
- `step4.png` — Reporting / Remediation

Typically rendered as a numbered step grid with images and description text.

---

## AboutValues (`components/AboutValues.tsx`)

Company values or operating principles grid. Likely uses icon+title+description cards. Section may have `id="operating-principles"` for the Footer anchor link `about#operating-principles`.

---

## TechPartners (`components/TechPartners.tsx`)

**Tech Partners We Work With** section. Section may have `id="partners"` for the Footer anchor link `about#partners`.

Data source: `lib/data/partners.ts` — 10 partners total:

| Partner | Logo | Format |
|---|---|---|
| CrowdStrike | `/images/crowdstrike-logo-red.png` | PNG |
| CyberArk | `/images/cyberark-logo-new.jpg` | JPG |
| Palo Alto Networks | `/images/paloalto-logo-new.jpg` | JPG |
| Tenable | `/images/tenable-logo-new.jpg` | JPG |
| NCOE | `/images/ncoe-logo.png` | PNG |
| DSCI | `/images/dsci-logo.png` | PNG |
| IIT Gandhinagar | `/images/iit-gandhinagar-logo.png` | PNG |
| DPIIT | `/images/dpiit-logo.png` | PNG |
| Broadcom | `/images/broadcom-logo.webp` | **WEBP** |
| Riverbed | `/images/riverbed-logo.webp` | **WEBP** |

Each partner in `partners.ts` has: `name`, `imageSrc`, `imageAlt`, `description`.

**Note on Broadcom & Riverbed**: These were added as part of Task 4. Their logos are `.webp` format — important to use `next/image` with `unoptimized` if there's any display issue, or ensure the `next.config.mjs` doesn't restrict webp.

### Partner descriptions (brief):
- **CrowdStrike**: Falcon® EDR, AI-native threat intelligence, IOA detection
- **CyberArk**: PAM suite, least-privilege, just-in-time access, credential security
- **Palo Alto**: NGFW deployments, Prisma Cloud CSPM, Cortex XSOAR SOC orchestration
- **Tenable**: Vulnerability management (Tenable.io + OT Security), CVSS-prioritised remediation
- **NCOE**: National Centre of Excellence — indigenous security research, national threat intel
- **DSCI**: Data Security Council of India — DPDP Act compliance, data protection ecosystem
- **IIT Gandhinagar**: Research collaboration — AI-driven threat detection, intrusion detection models
- **DPIIT**: Startup India recognition — government procurement access
- **Broadcom**: Symantec Endpoint Security, DLP, proxy, email security — perimeter-to-endpoint architecture
- **Riverbed**: SD-WAN visibility, deep packet inspection, network telemetry for pentest/IR engagements
