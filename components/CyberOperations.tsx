"use client";

import { useState } from "react";
import {
  Monitor,
  Zap,
  RefreshCw,
  Shield,
  KeyRound,
  FileCheck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DynamicBorderCard from "@/components/ui/dynamic-border-animations-card";
import type { LucideIcon } from "lucide-react";

interface Operation {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string[];
}

const operations: Operation[] = [
  {
    id: "soc",
    title: "24/7 Managed SOC",
    icon: Monitor,
    summary: "Round-the-clock security monitoring and threat response.",
    details: [
      "Continuous 24/7/365 monitoring across all attack surfaces",
      "Real-time alert triage, correlation, and escalation workflows",
      "Dedicated analyst team with tiered L1/L2/L3 response capability",
      "Integration with existing SIEM, EDR, and ticketing systems",
      "Monthly executive reporting with risk posture trending",
    ],
  },
  {
    id: "tdir",
    title: "Next-Gen TDIR",
    icon: Zap,
    summary: "Threat detection, investigation, and rapid containment.",
    details: [
      "Behavioural analytics and ML-driven anomaly detection",
      "Automated playbooks reducing mean-time-to-respond (MTTR)",
      "Deep threat hunting across endpoint, network, and cloud telemetry",
      "Threat intelligence integration from 20+ global feed sources",
      "Forensic investigation capability with chain-of-custody documentation",
    ],
  },
  {
    id: "vuln",
    title: "Continuous Vulnerability Management",
    icon: RefreshCw,
    summary: "Persistent identification and remediation of attack surface weaknesses.",
    details: [
      "Continuous asset discovery and vulnerability scanning",
      "Risk-based prioritisation using CVSS, EPSS, and business context",
      "Patch management workflow integration and tracking",
      "Exposure trending dashboards for security posture visibility",
      "Remediation SLA enforcement with verified re-scan closure",
    ],
  },
  {
    id: "edr",
    title: "Holistic EDR Orchestration",
    icon: Shield,
    summary: "Unified endpoint protection, detection, and automated response.",
    details: [
      "Centralised EDR deployment and policy management",
      "Endpoint telemetry normalisation across heterogeneous environments",
      "Automated containment of compromised endpoints on detection",
      "Integration with CrowdStrike, SentinelOne, and CyberArk CDI",
      "Rollback and recovery orchestration post-incident containment",
    ],
  },
  {
    id: "iam",
    title: "Robust IAM Governance",
    icon: KeyRound,
    summary: "Identity-centric access governance and privileged account protection.",
    details: [
      "Privileged Access Management (PAM) implementation and operation",
      "Zero Standing Privilege (ZSP) enforcement and just-in-time access",
      "Identity lifecycle management with automated joiner-mover-leaver flows",
      "Multi-factor authentication rollout and policy enforcement",
      "Access recertification campaigns and SoD conflict detection",
    ],
  },
  {
    id: "grc",
    title: "Integrated GRC Frameworks",
    icon: FileCheck,
    summary: "Governance, risk, and compliance unified into a single operational framework.",
    details: [
      "ISO 27001, SOC 2, and NIST CSF compliance programme management",
      "Continuous control monitoring with automated evidence collection",
      "Risk register management with quantitative risk scoring",
      "Audit-ready reporting and regulator liaison support",
      "Policy library authoring, version control, and exception management",
    ],
  },
];

export default function CyberOperations() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const activeOperation = operations.find((op) => op.id === activeCard) ?? null;

  return (
    <section
      id="advances-operations"
      className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 font-manrope">
            Operational Excellence
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Advanced Security Operations
          </h2>
          <p className="mt-4 text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Six integrated operational pillars delivering end-to-end security
            coverage — from detection to governance.
          </p>
        </div>

        {/* 3-column grid of DynamicBorderCard items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operations.map((op) => {
            const Icon = op.icon;
            return (
              <DynamicBorderCard
                key={op.id}
                className="bg-white/80 border-slate-200 hover:border-blue-300 transition-colors duration-200"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 border border-blue-100">
                    <Icon
                      className="w-6 h-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="font-montserrat text-base font-bold tracking-tight text-slate-900 mb-2">
                    {op.title}
                  </h3>
                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {op.summary}
                  </p>
                  {/* Learn More */}
                  <button
                    onClick={() => setActiveCard(op.id)}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-150"
                    aria-label={`Learn more about ${op.title}`}
                  >
                    Learn More
                    <span className="ml-1" aria-hidden="true">→</span>
                  </button>
                </div>
              </DynamicBorderCard>
            );
          })}
        </div>
      </div>

      {/* Modal overlay */}
      <AnimatePresence>
        {activeOperation && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/70 backdrop-blur-sm"
              onClick={() => setActiveCard(null)}
              aria-hidden="true"
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-label={activeOperation.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
                {/* Close button */}
                <button
                  onClick={() => setActiveCard(null)}
                  className="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors duration-150"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>

                {/* Icon + title */}
                {(() => {
                  const ModalIcon = activeOperation.icon;
                  return (
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <ModalIcon
                          className="w-6 h-6 text-blue-400"
                          aria-hidden="true"
                        />
                      </div>
                      <h2 className="font-montserrat text-xl font-bold text-white">
                        {activeOperation.title}
                      </h2>
                    </div>
                  );
                })()}

                {/* Details list */}
                <ul className="space-y-3">
                  {activeOperation.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
