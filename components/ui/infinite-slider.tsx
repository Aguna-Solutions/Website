"use client";

interface InfiniteSliderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  ariaLabel?: string;
}

export default function InfiniteSlider({
  children,
  duration = 30,
  className = "",
  ariaLabel,
}: InfiniteSliderProps) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      aria-label={ariaLabel}
    >
      <div
        className="flex w-max"
        style={{
          animation: `marquee-slide ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {/* Original set */}
        <div className="flex items-center gap-8 pr-8">{children}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-8 pr-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
