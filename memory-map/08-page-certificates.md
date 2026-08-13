# 08 — Page: Certificates (`/certificates`)

**File**: `app/certificates/page.tsx`  
**Type**: Server component

## Component Stack

```
<AuroraBackground className="min-h-screen bg-black py-24">
  <div max-w-7xl two-column grid>
    <div>  ← heading + description
    <ThreeDPhotoCarousel cards={carouselCards} />  ← right column
  </div>
</AuroraBackground>
```

## SEO / Metadata

```ts
title: "Verified Compliance & Certifications | Aguna Solutions"
description: "ISO 27001:2022, SOC 2 Type I, and SOC 2 Type II certifications..."
canonical: "https://www.agunasolutions.com/certificates"
```

---

## Layout

`lg:grid-cols-2 gap-12 items-center` inside `max-w-7xl px-4`

### Left column
```tsx
<h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
  Our <span gradient>Certificates</span>
</h1>
<p className="text-slate-400 text-lg leading-relaxed">
  Independently verified security and compliance certifications...
</p>
```

### Right column
`<ThreeDPhotoCarousel cards={carouselCards} />`

---

## ThreeDPhotoCarousel (`components/ui/3d-carousel.tsx`)

**Interface:**
```ts
interface CarouselCard {
  title: string;
  imageSrc: string;
  imageAlt: string;
}
```

The carousel data is derived from `lib/data/certificates.ts` — only title, imageSrc, imageAlt are passed (description is NOT passed to carousel):
```ts
const carouselCards: CarouselCard[] = certificates.map((cert) => ({
  title: cert.title,
  imageSrc: cert.imageSrc,
  imageAlt: cert.imageAlt,
}));
```

---

## Data: `lib/data/certificates.ts`

3 certificates:

### ISO 27001:2022
- Authority: International Organization for Standardization
- Image: `/images/iso-27001.png`
- Description: Internationally recognised standard for ISMS. Validates security controls, risk management, and data protection meet global benchmarks.

### SOC 2 Type I
- Authority: AICPA (American Institute of Certified Public Accountants)
- Image: `/images/soc-type-1-final.png`
- Description: Confirms security controls are suitably *designed* to meet Trust Services Criteria at a specific point in time. Point-in-time design assessment.

### SOC 2 Type II
- Authority: AICPA
- Image: `/images/soc-type-2-final.png`
- Description: Confirms controls operate *effectively over an extended audit period*. Highest operational assurance for enterprise clients.

---

## Note: CertificatesGrid vs. Certificate Page

There are TWO certificate-related displays:
1. `CertificatesGrid` (components/CertificatesGrid.tsx) — appears on the **Home page** as the last section. Uses `DynamicBorderCard`, shows all cert metadata.
2. `ThreeDPhotoCarousel` — appears on the **/certificates page**. Shows logo images in a 3D carousel, heading only.

Both pull from the same `lib/data/certificates.ts` data file.

---

## AuroraBackground

Animated aurora gradient wraps the entire page. `min-h-screen bg-black py-24`. The aurora sits behind all content.
