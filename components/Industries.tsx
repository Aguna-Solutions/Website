"use client";

import { Landmark, GraduationCap, Heart, Radio, Building2, Gamepad2 } from "lucide-react";
import InfiniteSlider from "@/components/ui/infinite-slider";

interface Industry {
  name: string;
  icon: React.ReactNode;
  colorClasses: string;
}

const industries: Industry[] = [
  {
    name: "Financial",
    icon: <Landmark size={20} aria-hidden="true" />,
    colorClasses: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  },
  {
    name: "Educational",
    icon: <GraduationCap size={20} aria-hidden="true" />,
    colorClasses: "border-indigo-500/20 bg-indigo-500/10 text-indigo-400",
  },
  {
    name: "Healthcare",
    icon: <Heart size={20} aria-hidden="true" />,
    colorClasses: "border-sky-500/20 bg-sky-500/10 text-sky-400",
  },
  {
    name: "Broadcasting",
    icon: <Radio size={20} aria-hidden="true" />,
    colorClasses: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
  },
  {
    name: "Governmental",
    icon: <Building2 size={20} aria-hidden="true" />,
    colorClasses: "border-blue-600/20 bg-blue-600/10 text-blue-300",
  },
  {
    name: "Gaming",
    icon: <Gamepad2 size={20} aria-hidden="true" />,
    colorClasses: "border-indigo-400/20 bg-indigo-400/10 text-indigo-300",
  },
];

export default function Industries() {
  return (
    <section className="bg-black border-t border-white/10 py-20 px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Aguna delivers security expertise across critical industry verticals,
          protecting the organisations that underpin modern society.
        </p>
      </div>

      {/* Infinite slider with edge masks */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />

        <InfiniteSlider
          duration={20}
          ariaLabel="Industries served by Aguna Solutions"
        >
          {industries.map((industry) => (
            <div
              key={industry.name}
              className={`flex items-center gap-3 rounded-full px-6 py-3 min-w-[200px] border ${industry.colorClasses} transition-transform duration-300 hover:scale-105`}
            >
              {industry.icon}
              <span className="font-medium text-sm whitespace-nowrap">
                {industry.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
