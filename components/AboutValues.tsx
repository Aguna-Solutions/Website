import { Shield, Zap, Eye, Lock, FileCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Principle {
  title: string;
  icon: LucideIcon;
  description: string;
}

const principles: Principle[] = [
  {
    title: "Integrity of Execution",
    icon: Shield,
    description:
      "We deliver exactly what we commit to, with rigorous documentation and no hidden caveats.",
  },
  {
    title: "Operational Resilience",
    icon: Zap,
    description:
      "Our solutions are designed to function under adversarial conditions, ensuring continuity when it matters most.",
  },
  {
    title: "Decisive Clarity",
    icon: Eye,
    description:
      "We translate complex security data into clear, executive-ready intelligence that drives confident decisions.",
  },
  {
    title: "Security by Design",
    icon: Lock,
    description:
      "Security is integrated at the architecture level, not bolted on as an afterthought.",
  },
  {
    title: "Evidence-Based Rigor",
    icon: FileCheck,
    description:
      "Every finding we report is reproducible, documented, and verified before it reaches you.",
  },
  {
    title: "Direct Accountability",
    icon: Users,
    description:
      "Named engineers own every engagement. You always know who is responsible for your security.",
  },
];

export default function AboutValues() {
  return (
    <section
      id="operating-principles"
      className="bg-[#0B1120] py-20 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-3 font-manrope">
            How We Operate
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-white">
            Operating Principles
          </h2>
          <p className="mt-4 text-base text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Six commitments that define every engagement — from initial scoping
            to final debrief.
          </p>
        </div>

        {/* 2-column grid of principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="group flex items-start gap-5"
              >
                {/* Icon badge */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-lg
                             bg-blue-500/10 border border-blue-500/20
                             flex items-center justify-center
                             transition-colors duration-200
                             group-hover:bg-blue-500/20"
                >
                  <Icon
                    className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-200"
                    aria-hidden="true"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-montserrat text-base font-semibold tracking-tight text-white mb-1.5">
                    {principle.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-400">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
