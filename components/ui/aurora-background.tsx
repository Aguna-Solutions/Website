"use client";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Aurora animated gradient layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 40% 40% at 40% 40%, rgba(59,130,246,0.3), transparent)",
            "radial-gradient(ellipse 40% 40% at 60% 40%, rgba(99,102,241,0.25), transparent)",
            "radial-gradient(ellipse 40% 40% at 50% 60%, rgba(16,185,129,0.2), transparent)",
            "radial-gradient(ellipse 30% 30% at 30% 60%, rgba(139,92,246,0.2), transparent)",
          ].join(", "),
          backgroundSize: "200% 200%",
          animation: "aurora-shift 60s linear infinite",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
