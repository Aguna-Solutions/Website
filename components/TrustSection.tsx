"use client";

import Image from "next/image";
import { CheckCircle, Award } from "lucide-react";
import InfiniteSlider from "@/components/ui/infinite-slider";

// ─── Data ────────────────────────────────────────────────────────────────────

const customerLogos = [
  { src: "/images/Our Customers/as_gnfc.png", alt: "GNFC" },
  { src: "/images/Our Customers/as_margoncloud.png", alt: "Margoncloud" },
  { src: "/images/Our Customers/as_musashi.png", alt: "Musashi" },
  { src: "/images/Our Customers/as_npst.png", alt: "NPST" },
  { src: "/images/Our Customers/as_ntn.png", alt: "NTN" },
  { src: "/images/Our Customers/as_orange.png", alt: "Orange" },
  { src: "/images/Our Customers/as_starair.png", alt: "Star Air" },
  { src: "/images/Our Customers/as_tynor.png", alt: "Tynor" },
  { src: "/images/Our Customers/as_zones.png", alt: "Zones" },
];

const capabilityPanels = [
  {
    title: "Clarity over uncertainty",
    subtitle: "Understand what truly puts your business at risk—and what doesn't.",
    image: "/images/clarity-over-uncertainty.png",
    alt: "Clarity over uncertainty",
  },
  {
    title: "Security without disruption",
    subtitle: "Protect systems and data without slowing teams down.",
    image: "/images/security-without-disruption.png",
    alt: "Security without disruption",
  },
  {
    title: "Prepared not surprised",
    subtitle: "Respond to incidents with structure, speed, and confidence.",
    image: "/images/prepared-not-surprised.png",
    alt: "Prepared not surprised",
  },
  {
    title: "Security that supports growth",
    subtitle: "Align protection with business priorities and compliance needs.",
    image: "/images/security-that-supports-growth.jpg",
    alt: "Security that supports growth",
  },
];

const differentiators = [
  "Certified expertise across VAPT, cloud, and compliance domains",
  "Evidence-based security with full reporting transparency",
  "Rapid response SLAs with dedicated account management",
  "Proven track record with enterprise and government clients",
  "End-to-end coverage from assessment through remediation",
];

const complianceCertifications = [
  "CEH",
  "OSCP",
  "eWPT",
  "CRTP",
  "CRTE",
  "ISO 27001",
  "CyberArk (CDI)",
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function TrustSection() {
  return (
    <section className="w-full">
      {/* ── 1. How We Can Help — 2×2 Capability Grid ─────────────────────── */}
      <div className="py-20 px-4 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Our Approach
            </p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-brand-light tracking-tight">
              How We Can Help?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilityPanels.map((panel) => (
              <div
                key={panel.title}
                className="group relative overflow-hidden rounded-2xl min-h-[320px] cursor-default"
              >
                {/* Background image */}
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-300 group-hover:from-black/70" />

                {/* Text content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="font-montserrat text-2xl font-bold text-white mb-2 tracking-tight">
                    {panel.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed translate-y-2 opacity-80 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {panel.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. Our Customers — Infinite Slider Marquee ─────────────────────── */}
      <div className="relative py-20 bg-brand-dark overflow-hidden">
        {/* Section heading overlay */}
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Trusted By
          </p>
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-brand-light tracking-tight">
            Our Customers
          </h2>
        </div>

        {/* Edge-fade gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
          style={{
            background:
              "linear-gradient(to right, #0B1120 0%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
          style={{
            background:
              "linear-gradient(to left, #0B1120 0%, transparent 100%)",
          }}
        />

        <InfiniteSlider
          duration={30}
          ariaLabel="Our customers"
          className="py-4"
        >
          {customerLogos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="object-contain h-10 w-auto filter brightness-90 hover:brightness-110 transition-all duration-200"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>

      {/* ── 3. What Sets Us Apart — Differentiators Grid ─────────────────── */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Edge
            </p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-brand-slate tracking-tight">
              What Sets Us Apart?
            </h2>
            <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
              More than a vendor — a committed security partner with real-world expertise and measurable results.
            </p>
          </div>

          {/* Centered flex layout — 3 per row, last row centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {differentiators.map((statement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-700 hover:border-blue-500/40 transition-colors duration-300 w-full md:w-[calc(33.333%-1rem)]"
              >
                <CheckCircle
                  className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-gray-200 font-medium leading-relaxed text-sm">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
