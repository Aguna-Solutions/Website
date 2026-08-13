# 05 — Page: Services (`/services`)

**File**: `app/services/page.tsx`  
**Type**: Server component

## Component Stack (top → bottom)

```
<ServiceOfferings />      ← LampContainer bg, 12-service grid with modal
<SectionDivider />
<ServiceMethodologies />  ← PTES/OWASP/OSSTMM methodology cards
<SectionDivider />
<ServiceExpertise />      ← Expertise stats/highlights
<SectionDivider />
<WhyAguna />              ← Why choose Aguna section
<SectionDivider />
<Industries />            ← Industry verticals with InfiniteSlider
```

## SEO / Metadata

```ts
title: "Cybersecurity & VAPT Service Portfolio | Aguna Solutions"
description: "Comprehensive VAPT, cloud security, SOC, and compliance services for enterprise clients."
canonical: "https://www.agunasolutions.com/services"
```

JSON-LD: `@type: "ProfessionalService"`, `knowsAbout: ["VAPT","Cloud Security","SOC","Incident Response","Compliance","DevSecOps"]`

---

## ServiceOfferings (`components/ServiceOfferings.tsx`)

**The main services section.** Uses `LampContainer` as background.  
`id="services-portfolio"` — Footer anchor target.

### Data source: `lib/data/services.ts`

12 services, each with:
```ts
interface Service {
  title: string;
  description: string;       // short — shown on card
  fullDescription: string;   // long — shown in modal
  icon: LucideIcon;
  coverage: string[];        // 6 bullet points
}
```

### The 12 services:
1. Vulnerability Assessment & Penetration Testing — `Shield`
2. Cloud Security Assessment — `Cloud`
3. Network Security — `Network`
4. Web Application Security — `Globe`
5. Mobile Application Security — `Smartphone`
6. API Security Testing — `Code2`
7. Red Team Operations — `Target`
8. Security Operations Center (SOC) — `Monitor`
9. Incident Response & Forensics — `Search`
10. Compliance & Risk Management — `FileCheck`
11. Security Awareness Training — `GraduationCap`
12. DevSecOps Integration — `GitBranch`

### Modal behavior
Clicking a service card opens a modal showing `fullDescription` and the 6 `coverage` bullets.

---

## ServiceMethodologies (`components/ServiceMethodologies.tsx`)

`id="methodologies"` — Footer anchor target.

Showcases security testing methodologies. Uses images from `public/images/`:
- `methodology.jpg`
- `owasp.jpg`
- `osstmm.jpg`

Methodologies covered: PTES (Penetration Testing Execution Standard), OWASP (web/mobile), OSSTMM (Open Source Security Testing Methodology Manual).

`id="vapt-assessment-types"` — Footer anchor target for "VAPT Types" link.

---

## ServiceExpertise (`components/ServiceExpertise.tsx`)

Expertise/stats section. Likely contains metrics, certifications held by the team, or service delivery highlights.

---

## WhyAguna (`components/WhyAguna.tsx`)

"Why Aguna?" section — differentiators specific to the services context. May overlap thematically with TrustSection's "What Sets Us Apart" but is tailored for the services buyer audience.

---

## Industries (`components/Industries.tsx`)

Industry verticals section using `<InfiniteSlider>`.

**Note**: The `durationOnHover` prop was removed from InfiniteSlider in the bug fix. Do not pass it here.

Likely industries covered: Manufacturing, Healthcare, BFSI, Government, Telecom, Retail, etc.
