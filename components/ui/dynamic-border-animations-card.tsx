"use client";

interface DynamicBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function DynamicBorderCard({
  children,
  className = "",
}: DynamicBorderCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 transition-colors duration-200 hover:border-slate-600 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
