import Image from "next/image";
import { Search, ClipboardCheck, Target, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  badge: string;
  title: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

const steps: Step[] = [
  {
    badge: "Step 01",
    title: "Understand Your Environment",
    icon: Search,
    imageSrc: "/images/how-we-work/step1.png",
    imageAlt: "Understand Your Environment — discovery phase illustration",
    description:
      "We begin with a thorough discovery of your technology stack, business processes, and existing security controls to build an accurate risk baseline.",
  },
  {
    badge: "Step 02",
    title: "Assess & Validate Risks",
    icon: ClipboardCheck,
    imageSrc: "/images/how-we-work/step2.png",
    imageAlt: "Assess & Validate Risks — structured assessment illustration",
    description:
      "Our experts perform structured assessments to identify, classify, and validate vulnerabilities across your attack surface.",
  },
  {
    badge: "Step 03",
    title: "Act with Precision",
    icon: Target,
    imageSrc: "/images/how-we-work/step3.png",
    imageAlt: "Act with Precision — remediation execution illustration",
    description:
      "We deliver prioritised, actionable remediation plans and work alongside your team to execute fixes that eliminate real risk.",
  },
  {
    badge: "Step 04",
    title: "Strengthen & Evolve",
    icon: TrendingUp,
    imageSrc: "/images/how-we-work/step4.png",
    imageAlt: "Strengthen & Evolve — continuous improvement illustration",
    description:
      "Security is continuous. We implement monitoring, retesting, and ongoing advisory to keep your defences ahead of evolving threats.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative bg-[#070E1E] py-20 overflow-hidden border-t border-white/5">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div
          className="w-[800px] h-[400px] opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.25) 0%, rgba(34,211,238,0.1) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/25 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Our Process
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-white">
            How We Work
          </h2>
          <p className="mt-4 text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            A structured, outcome-driven engagement model built around your risk
            landscape — from first contact to continuous defence.
          </p>
        </div>

        {/* 4-column grid — collapses to 1 column below 768 px */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.badge}
                className="group relative flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                {/* Image header */}
                <div className="relative h-40 w-full flex-shrink-0">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Gradient overlay to blend image into dark card body */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />

                  {/* Step badge — top-left pill */}
                  <span
                    className="absolute top-3 left-3 z-10
                               bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 backdrop-blur-md
                               rounded-full px-2.5 py-1
                               text-[9px] font-extrabold uppercase tracking-widest
                               font-jetbrains"
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 px-5 pb-6 pt-3 gap-3">
                  {/* Icon container */}
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="font-montserrat text-base font-semibold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
