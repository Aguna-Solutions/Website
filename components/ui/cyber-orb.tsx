"use client";

import { ShieldCheck } from "lucide-react";

/**
 * CyberOrb — a decorative, animated holographic security orb.
 * Concentric rotating rings, a pulsing core, and an orbiting node give the
 * hero a fancy, futuristic cybersecurity centrepiece (not company-specific).
 */
export default function CyberOrb() {
  return (
    <div className="relative flex items-center justify-center w-full aspect-square max-w-[460px] mx-auto">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(85,164,255,0.25) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Outer dashed ring — slow spin */}
      <div
        className="absolute rounded-full border border-blue-400/20"
        style={{
          width: "100%",
          height: "100%",
          borderStyle: "dashed",
          animation: "spin 28s linear infinite",
        }}
        aria-hidden="true"
      />

      {/* Mid ring — reverse spin, with an orbiting node */}
      <div
        className="absolute rounded-full border border-blue-400/30"
        style={{
          width: "76%",
          height: "76%",
          animation: "spin 18s linear infinite reverse",
        }}
        aria-hidden="true"
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-300 shadow-[0_0_12px_4px_rgba(85,164,255,0.7)]" />
      </div>

      {/* Inner ring — forward spin, faster */}
      <div
        className="absolute rounded-full border border-cyan-300/30"
        style={{
          width: "54%",
          height: "54%",
          animation: "spin 12s linear infinite",
        }}
        aria-hidden="true"
      >
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_10px_3px_rgba(103,232,249,0.7)]" />
      </div>

      {/* Pulsing core with shield */}
      <div className="relative flex items-center justify-center w-[34%] h-[34%]">
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(85,164,255,0.55) 0%, rgba(59,130,246,0.15) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative flex items-center justify-center w-full h-full rounded-full bg-slate-900/70 border border-blue-400/40 backdrop-blur-sm">
          <ShieldCheck
            className="w-1/2 h-1/2 text-blue-300"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
