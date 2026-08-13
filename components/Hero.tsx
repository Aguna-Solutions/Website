"use client";

import { ShieldCheck, Cloud, Lock } from "lucide-react";
import DottedSurface from "@/components/ui/dotted-surface";
import Typewriter from "@/components/ui/typewriter";
import BinaryRain from "@/components/ui/binary-rain";
import CyberOrb from "@/components/ui/cyber-orb";

const TYPEWRITER_WORDS = ["World's Data", "Digital Future", "Cloud Assets", "Enterprise"];

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    label: "SOC2 Certified",
    iconClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Cloud,
    label: "Cloud Native",
    iconClass: "text-blue-400",
    bgClass: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Lock,
    label: "Immutable Storage",
    iconClass: "text-purple-400",
    bgClass: "bg-purple-500/10 border-purple-500/20",
  },
] as const;

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[#0B1120] pt-36 pb-24 overflow-hidden flex items-center"
      aria-label="Hero section"
    >
      {/* Binary matrix rain — deepest background layer */}
      <BinaryRain />

      {/* Dotted surface overlay for added texture */}
      <DottedSurface />

      {/* Radial vignette so text stays readable over the rain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 35% 45%, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.75) 45%, rgba(11,17,32,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column: text + badges */}
          <div className="flex flex-col gap-10">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Enterprise Cyber Defense
            </span>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white leading-[1.1] tracking-tight">
                Securing the
              </h1>
              <h1
                className="font-montserrat font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight
                           bg-gradient-to-r from-brand-blue via-cyan-300 to-white bg-clip-text text-transparent"
                aria-live="polite"
              >
                <Typewriter words={TYPEWRITER_WORDS} />
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-xl">
              Enterprise-grade cybersecurity, VAPT, and cloud security solutions
              built for the demands of modern business.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {TRUST_BADGES.map(({ icon: Icon, label, iconClass, bgClass }) => (
                <div
                  key={label}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium text-white backdrop-blur-sm ${bgClass}`}
                >
                  <Icon size={16} className={iconClass} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: animated cyber orb */}
          <div className="hidden lg:flex items-center justify-center">
            <CyberOrb />
          </div>
        </div>
      </div>
    </section>
  );
}
