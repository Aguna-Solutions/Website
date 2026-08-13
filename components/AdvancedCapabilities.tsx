import {
  GitBranch,
  Cloud,
  GraduationCap,
  Lock,
  Target,
  RefreshCw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Capability {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

const capabilities: Capability[] = [
  {
    id: "devsecops",
    title: "DevSecOps Integration",
    icon: GitBranch,
    description:
      "Embed security gates into CI/CD pipelines — SAST, DAST, IaC scanning, and secret detection at every commit.",
  },
  {
    id: "cspm",
    title: "CSPM",
    icon: Cloud,
    description:
      "Cloud Security Posture Management: continuous misconfiguration detection and compliance enforcement across AWS, Azure, and GCP.",
  },
  {
    id: "awareness",
    title: "Security Awareness & Training",
    icon: GraduationCap,
    description:
      "Bespoke phishing simulations, e-learning modules, and tabletop exercises that build a security-first culture at every level.",
  },
  {
    id: "dlp",
    title: "DLP",
    icon: Lock,
    description:
      "Data Loss Prevention: classify, monitor, and enforce policy on sensitive data in motion, at rest, and in use — preventing exfiltration at the source.",
  },
  {
    id: "pentest",
    title: "Penetration Testing & Red Teaming",
    icon: Target,
    description:
      "Adversarial simulation from opportunistic scanning through to full APT-style red team operations, validating detection and response at every tier.",
  },
  {
    id: "bcdr",
    title: "BC/DR",
    icon: RefreshCw,
    description:
      "Business Continuity and Disaster Recovery: resilience planning, RTO/RPO validation, failover testing, and crisis communication rehearsal.",
  },
];

export default function AdvancedCapabilities() {
  return (
    <section
      id="advanced-capabilities"
      className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-3 font-manrope">
            Extended Portfolio
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-white">
            Advanced Capabilities
          </h2>
          <p className="mt-4 text-base text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Beyond the core — six specialised capabilities that close the gaps
            modern enterprises can no longer afford to leave open.
          </p>
        </div>

        {/* Single large card */}
        <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-8 md:p-10">
          {/* 2-column grid of capability entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.id} className="flex items-start gap-5">
                  {/* Icon badge */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="font-montserrat text-base font-semibold tracking-tight text-white mb-1.5">
                      {cap.title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-slate-400">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
