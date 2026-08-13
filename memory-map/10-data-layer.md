# 10 — Data Layer

All data is static TypeScript. No database, no CMS, no API calls for content. Files live in `lib/data/`.

---

## `lib/data/products.ts`

### Interface
```ts
interface Product {
  name: string;
  valueStatement: string;  // one-liner for tile/orbital tooltip
  description: string;     // paragraph for ProductsList
  capabilities: string[];  // exactly 3 bullet points
  impactMetric: string;    // e.g. "↓ Costs by 25% | ↑ Yield by 15%"
  tags: string[];          // [category, sub-category] — used for orbital node.category and node.sector
  techSpecs: string[];     // exactly 2 — hover-reveal badges on ProductsList cards
  icon: LucideIcon;        // used in ProductsList; overridden by orbitalIconMap in ProductsHero
}
```

### The 5 products

**Industry 4.0 Analytics**
- Icon: `Factory`
- Tags: `["Industrial AI", "Predictive Maintenance"]`
- TechSpecs: `["Nanometer Precision", "Edge AI Processing"]`
- Capabilities: sensor fusion + anomaly detection, predictive failure models, automated work-order generation (CMMS integration)
- Impact: `↓ Downtime by 40% | ↑ OEE by 25%`

**CCTV Anomaly Detection**
- Icon: `Camera`
- Tags: `["Computer Vision", "Security AI"]`
- TechSpecs: `["YOLO v8 Inference", "Edge Computing"]`
- Capabilities: multi-camera YOLO v8 inference, behavioural anomaly classification, automated alert routing with video clips
- Impact: `↑ Detection Accuracy 98.5%`

**Database Activity Monitor**
- Icon: `Database`
- Tags: `["Data Security", "Compliance"]`
- TechSpecs: `["AES-256 Encryption", "Real-time Alerts"]`
- Capabilities: agentless network-layer capture (Oracle/MSSQL/MySQL/PostgreSQL), ML baseline profiling, automated compliance reporting (PCI-DSS/HIPAA/ISO 27001)
- Impact: `↓ Breach Risk by 85%`

**Athermind Integrity Platform**
- Icon: `Lock`
- Tags: `["Data Integrity", "Audit"]`
- TechSpecs: `["Blockchain Anchoring", "Immutable Logging"]`
- Capabilities: cryptographic hash anchoring to permissioned blockchain, AI integrity drift detection, one-click audit report generation
- Impact: `100% Audit Compliance`

**DMS Platform**
- Icon: `FileText`
- Tags: `["Document AI", "Enterprise"]`
- TechSpecs: `["NLP Classification", "Zero-trust Access"]`
- Capabilities: NLP auto-classification + metadata tagging, zero-trust ABAC enforcement, semantic full-text search + version history
- Impact: `↓ Processing Time 70%`

---

## `lib/data/services.ts`

### Interface
```ts
interface Service {
  title: string;
  description: string;      // short card text
  fullDescription: string;  // modal long text
  icon: LucideIcon;
  coverage: string[];       // exactly 6 bullet points
}
```

### The 12 services (title → icon mapping)
| Title | Icon |
|---|---|
| Vulnerability Assessment & Penetration Testing | `Shield` |
| Cloud Security Assessment | `Cloud` |
| Network Security | `Network` |
| Web Application Security | `Globe` |
| Mobile Application Security | `Smartphone` |
| API Security Testing | `Code2` |
| Red Team Operations | `Target` |
| Security Operations Center (SOC) | `Monitor` |
| Incident Response & Forensics | `Search` |
| Compliance & Risk Management | `FileCheck` |
| Security Awareness Training | `GraduationCap` |
| DevSecOps Integration | `GitBranch` |

Full `description` and `fullDescription` text is substantial — see the file directly for the exact copy.

---

## `lib/data/certificates.ts`

### Interface
```ts
interface Certificate {
  title: string;
  authority: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}
```

### The 3 certificates
| Title | Authority | Image |
|---|---|---|
| ISO 27001:2022 | International Organization for Standardization | `/images/iso-27001.png` |
| SOC 2 Type I | AICPA | `/images/soc-type-1-final.png` |
| SOC 2 Type II | AICPA | `/images/soc-type-2-final.png` |

**Important**: `soc-type-1-final.png` and `soc-type-2-final.png` are the correct filenames (with `-final` suffix). There are also `soc-type-1.png` and `soc-type-2.png` in public/images but those are NOT used.

---

## `lib/data/partners.ts`

### Interface
```ts
interface Partner {
  name: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}
```

### The 10 partners
| Name | Image path | Format |
|---|---|---|
| CrowdStrike | `/images/crowdstrike-logo-red.png` | PNG |
| CyberArk | `/images/cyberark-logo-new.jpg` | JPG |
| Palo Alto Networks | `/images/paloalto-logo-new.jpg` | JPG |
| Tenable | `/images/tenable-logo-new.jpg` | JPG |
| NCOE | `/images/ncoe-logo.png` | PNG |
| DSCI | `/images/dsci-logo.png` | PNG |
| IIT Gandhinagar | `/images/iit-gandhinagar-logo.png` | PNG |
| DPIIT | `/images/dpiit-logo.png` | PNG |
| Broadcom | `/images/broadcom-logo.webp` | **WEBP** ← added in Task 4 |
| Riverbed | `/images/riverbed-logo.webp` | **WEBP** ← added in Task 4 |

---

## Important notes for future agents

1. **No runtime data fetching** — all content changes require editing the TypeScript files in `lib/data/` and rebuilding.
2. **Icons are LucideIcon instances** — the icon field in `products.ts` and `services.ts` holds a Lucide component reference, not a string. In `ProductsHero.tsx`, an `orbitalIconMap` provides different icons for the orbital display (the `Product.icon` icons are larger/bold factory-style; the orbital overrides use more generic UI icons like `Cpu`, `Eye` etc.).
3. **Tags array convention for products**: `tags[0]` = category (used as `OrbitalNode.category`), `tags[1]` = sub-category (used as `OrbitalNode.sector` — the small uppercase label under the node icon).
4. **Adding new data**: add to the array in the relevant `.ts` file. TypeScript will catch missing required fields. Run `npx tsc --noEmit` after.
