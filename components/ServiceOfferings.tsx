"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  CheckCircle,
  ArrowRight,
  Shield,
  Cloud,
  Network,
  Globe,
  Smartphone,
  Code2,
  Target,
  Monitor,
  Search,
  FileCheck,
  GraduationCap,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import LampContainer from "@/components/ui/lamp-container";
import { services, type Service } from "@/lib/data/services";

// ---------------------------------------------------------------------------
// Pure function — exported for property-based testing (Task 9.2)
// ---------------------------------------------------------------------------
export function renderServiceGrid(services: Service[]): { cardCount: number } {
  return { cardCount: Math.min(services.length, 12) };
}

// ---------------------------------------------------------------------------
// VAPT assessment types (6 items)
// ---------------------------------------------------------------------------
const VAPT_TYPES = [
  { label: "Web Application Testing", icon: Globe },
  { label: "Network Penetration Testing", icon: Network },
  { label: "Cloud Security Assessment", icon: Cloud },
  { label: "Mobile Application Testing", icon: Smartphone },
  { label: "API Security Testing", icon: Code2 },
  { label: "Source Code Review", icon: Shield },
] as const;

// ---------------------------------------------------------------------------
// ServicePortfolioCard
// ---------------------------------------------------------------------------
interface ServicePortfolioCardProps {
  service: Service;
  index: number;
  onClick: () => void;
}

function ServicePortfolioCard({
  service,
  index,
  onClick,
}: ServicePortfolioCardProps) {
  const Icon = service.icon;
  const layoutId = `card-${service.title}-${index}`;

  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-brand-blue/40 hover:bg-white/10"
    >
      {/* Icon */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
        <Icon size={24} />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-brand-blue transition-colors duration-200">
        {service.title}
      </h3>

      {/* Short description */}
      <p className="text-sm leading-relaxed text-slate-400 line-clamp-3">
        {service.description}
      </p>

      {/* Hover cue */}
      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-blue opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span>View details</span>
        <ArrowRight size={12} />
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// ServiceModal — full-screen overlay
// ---------------------------------------------------------------------------
interface ServiceModalProps {
  service: Service;
  index: number;
  onClose: () => void;
}

function ServiceModal({ service, index, onClose }: ServiceModalProps) {
  const Icon = service.icon;
  const layoutId = `card-${service.title}-${index}`;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal card — shares layoutId with the source card */}
      <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          key="modal"
          layoutId={layoutId}
          className="pointer-events-auto relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Icon size={28} />
              </div>
              <h2 className="text-2xl font-bold text-white leading-tight">
                {service.title}
              </h2>
            </div>

            {/* Full description */}
            <p className="mb-6 text-base leading-relaxed text-slate-300">
              {service.fullDescription}
            </p>

            {/* Coverage list */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-blue">
                Key Capabilities &amp; Coverage
              </h3>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.coverage.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle
                      size={15}
                      className="mt-0.5 shrink-0 text-brand-blue"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// ArrowLink helper
// ---------------------------------------------------------------------------
function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function ServiceOfferings() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const displayedServices = services.slice(0, 12);

  const activeService =
    activeIndex !== null ? displayedServices[activeIndex] : null;

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Service Portfolio section                                            */}
      {/* ------------------------------------------------------------------ */}
      <section id="services-portfolio" aria-labelledby="services-heading">
        <LampContainer className="bg-black pt-20">
          {/* Heading block */}
          <div className="mx-auto max-w-3xl px-4 pb-12 text-center">
            <h1
              id="services-heading"
              className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              Our Service Portfolio
            </h1>
            <p className="text-lg italic text-slate-400">
              End-to-end cybersecurity and technology services — tailored to
              protect, empower, and scale your organisation.
            </p>
          </div>
        </LampContainer>

        {/* Card grid — with background image */}
        <div
          className="relative"
          style={{
            backgroundImage: "url('/images/service-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay so cards remain readable over the bg image */}
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayedServices.map((service, index) => (
                <ServicePortfolioCard
                  key={service.title}
                  service={service}
                  index={index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* VAPT Assessment Types panel                                          */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="vapt-assessment-types"
        aria-labelledby="vapt-heading"
        className="relative bg-[#070E1E] py-20 overflow-hidden border-t border-white/5"
      >
        {/* Subtle ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div
            className="w-[700px] h-[350px] opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, rgba(34,211,238,0.1) 50%, transparent 70%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left column — title + intro */}
            <div className="flex flex-col justify-center gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/25 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  VAPT
                </span>
                <h2
                  id="vapt-heading"
                  className="font-montserrat text-3xl md:text-4xl font-bold text-white tracking-tight"
                >
                  Assessment Types
                </h2>
              </div>
              <p className="text-base leading-relaxed text-slate-300">
                Our VAPT engagements span the full attack surface — from
                external-facing web applications to internal network
                infrastructure — giving you a comprehensive picture of your
                security posture.
              </p>
              <div>
                <ArrowLink href="/cyber-security#pentest-types">
                  Explore Pentest Types
                </ArrowLink>
              </div>
            </div>

            {/* Right two columns — 2×3 grid of assessment type cards */}
            <div className="col-span-1 lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {VAPT_TYPES.map(({ label, icon: TypeIcon }) => (
                  <div
                    key={label}
                    className="group flex items-start gap-3.5 rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 transition-colors duration-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
                      <TypeIcon size={19} />
                    </div>
                    <p className="text-sm font-medium leading-snug text-slate-200 group-hover:text-white transition-colors pt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Modal portal                                                         */}
      {/* ------------------------------------------------------------------ */}
      <AnimatePresence>
        {activeService !== null && activeIndex !== null && (
          <ServiceModal
            key={activeService.title}
            service={activeService}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
