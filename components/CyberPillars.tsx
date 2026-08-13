"use client";

import { Server, ShieldCheck } from "lucide-react";
import AuroraBackground from "@/components/ui/aurora-background";

interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const pillars: Pillar[] = [
  {
    id: "infra",
    title: "Infrastructure Management Engineering",
    description:
      "End-to-end lifecycle management of enterprise infrastructure — from provisioning and hardening to continuous monitoring and capacity optimisation across on-premise, hybrid, and multi-cloud environments.",
    icon: Server,
    gradient:
      "from-blue-900/80 via-slate-800/80 to-blue-950/80",
  },
  {
    id: "security",
    title: "Advanced Security Operations",
    description:
      "Proactive, intelligence-driven security operations combining 24/7 monitoring, threat hunting, and rapid incident response to protect every layer of your organisation before threats materialise.",
    icon: ShieldCheck,
    gradient:
      "from-purple-900/80 via-slate-800/80 to-indigo-950/80",
  },
];

export default function CyberPillars() {
  return (
    <section id="pillars" className="relative">
      <AuroraBackground className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1120]">
        {/* Section header */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-3 font-manrope">
              Our Core Pillars
            </p>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-white">
              Foundational Pillars
            </h2>
            <p className="mt-4 text-base text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
              Two integrated disciplines form the backbone of every Aguna
              engagement — infrastructure mastery and advanced security
              operations.
            </p>
          </div>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${pillar.gradient} p-8 transition-transform duration-300 hover:-translate-y-1`}
                >
                  {/* Subtle glow accent */}
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-30"
                    style={{
                      background:
                        pillar.id === "infra"
                          ? "radial-gradient(circle, #3b82f6, transparent)"
                          : "radial-gradient(circle, #8b5cf6, transparent)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Icon badge */}
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/20">
                    <Icon
                      className="w-7 h-7 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text */}
                  <h3 className="font-montserrat text-xl font-bold tracking-tight text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
