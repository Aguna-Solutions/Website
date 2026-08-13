"use client";

import { useRef } from "react";

interface DynamicBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function DynamicBorderCard({
  children,
  className = "",
}: DynamicBorderCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );
    e.currentTarget.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`dynamic-border-card group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 ${className}`}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Holographic mouse-tracking overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.15), transparent 40%)",
        }}
      />
      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
