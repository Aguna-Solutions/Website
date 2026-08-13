# 07 — Page: Cyber Security (`/cyber-security`)

**File**: `app/cyber-security/page.tsx`  
**Type**: Server component

## Component Stack (top → bottom)

```
<CyberPillars />          id="pillars"
<SectionDivider />
<CyberCapabilities />
<SectionDivider />
<CyberOperations />       modal-based operations grid
<SectionDivider />
<WhyCyber />
<SectionDivider />
<PentestTypes />          id="pentest-types"
<SectionDivider />
<AdvancedCapabilities />  id="advanced-capabilities" + id="advances-operations"
```

## SEO / Metadata

```ts
title: "Advanced Security Operations & Managed SOC | Aguna Solutions"
description: "24/7 managed SOC, TDIR, EDR orchestration, and IAM governance for enterprise security."
canonical: "https://www.agunasolutions.com/cyber-security"
```

---

## CyberPillars (`components/CyberPillars.tsx`)

`id="pillars"` — Footer anchor target.

The four fundamental pillars of Aguna's cybersecurity approach. Likely: Identify, Protect, Detect, Respond (or similar framework-aligned pillars). Each pillar has an icon, title, and description.

---

## CyberCapabilities (`components/CyberCapabilities.tsx`)

Capability highlight cards for the cyber security service. May cover areas like:
- Threat Detection & Incident Response (TDIR)
- Endpoint Detection & Response (EDR)
- Identity & Access Management (IAM)
- Cloud Security Posture Management (CSPM)

---

## CyberOperations (`components/CyberOperations.tsx`)

`id="advances-operations"` — Footer anchor target ("Advanced Operations").

Grid of operations/service offerings with a **modal** — clicking an operation card opens a detail panel. Similar pattern to ServiceOfferings modal on the Services page.

---

## WhyCyber (`components/WhyCyber.tsx`)

"Why Cybersecurity?" or "Why Managed SOC?" — contextual section explaining the business case for professional cybersecurity services. Likely stats-driven (e.g., average breach cost, time to detect without SOC, etc.).

---

## PentestTypes (`components/PentestTypes.tsx`)

`id="pentest-types"` — Footer anchor target.

Types of penetration testing explained. Covers:
- Black Box — no prior knowledge
- White Box — full knowledge
- Grey Box — partial knowledge
- External vs. Internal network
- Web application, mobile, API, red team variants

---

## AdvancedCapabilities (`components/AdvancedCapabilities.tsx`)

`id="advanced-capabilities"` — Footer anchor target.

Advanced security operations capabilities. Likely covers:
- Threat hunting
- Digital forensics
- Malware analysis
- Threat intelligence integration
- SOAR/SIEM orchestration
