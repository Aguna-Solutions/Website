"use client";

import React from "react";

interface LampContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function LampContainer({
  children,
  className = "",
}: LampContainerProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Downward spotlight glow — radial gradient centred at 50% 0% */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0"
        style={{
          height: "60%",
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(85,164,255,0.25) 0%, rgba(85,164,255,0.08) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Horizontal lamp beam line at the top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(85,164,255,0.6) 30%, rgba(85,164,255,0.9) 50%, rgba(85,164,255,0.6) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Content sits above the glow layers */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
