import type { Metadata } from "next";
import CyberPillars from "@/components/CyberPillars";
import SectionDivider from "@/components/SectionDivider";
import CyberCapabilities from "@/components/CyberCapabilities";
import CyberOperations from "@/components/CyberOperations";
import WhyCyber from "@/components/WhyCyber";
import PentestTypes from "@/components/PentestTypes";
import AdvancedCapabilities from "@/components/AdvancedCapabilities";

export const metadata: Metadata = {
  title: "Advanced Security Operations & Managed SOC | Aguna Solutions",
  description:
    "24/7 managed SOC, TDIR, EDR orchestration, and IAM governance for enterprise security.",
  alternates: { canonical: "https://www.agunasolutions.com/cyber-security" },
};

export default function CyberSecurityPage() {
  return (
    <main>
      <CyberPillars />
      <SectionDivider />
      <CyberCapabilities />
      <SectionDivider />
      <CyberOperations />
      <div className="w-full bg-gray-100 flex justify-center">
        <div className="h-px w-1/2 max-w-3xl bg-slate-400/30 shadow-[0_1px_2px_rgba(0,0,0,0.1)] rounded-full" />
      </div>
      <WhyCyber />
      <div className="w-full bg-[#0B1120] flex justify-center">
        <div className="h-px w-1/2 max-w-3xl bg-slate-700/50 shadow-[0_1px_2px_rgba(0,0,0,0.3)] rounded-full" />
      </div>
      <PentestTypes />
      <div className="w-full bg-slate-900 flex justify-center">
        <div className="h-px w-1/2 max-w-3xl bg-slate-700/50 shadow-[0_1px_2px_rgba(0,0,0,0.3)] rounded-full" />
      </div>
      <AdvancedCapabilities />
    </main>
  );
}
