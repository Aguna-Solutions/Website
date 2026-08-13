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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3">
            Our Process
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            How We Work
          </h2>
          <p className="mt-4 text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
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
                className="relative flex flex-col bg-white border border-blue-900/20 rounded-2xl overflow-hidden
                           transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10"
              >
                {/* Image header */}
                <div className="relative h-40 w-full flex-shrink-0">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Gradient overlay to blend image into card body */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />

                  {/* Step badge — top-left pill */}
                  <span
                    className="absolute top-3 left-3 z-10
                               bg-blue-500 border border-blue-400 text-white
                               rounded-full px-2.5 py-1
                               text-[9px] font-extrabold uppercase tracking-widest
                               font-manrope"
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 px-5 pb-6 pt-3 gap-3">
                  {/* Icon container */}
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>

                  <h3 className="font-montserrat text-base font-semibold tracking-tight text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium leading-relaxed text-slate-600">
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
