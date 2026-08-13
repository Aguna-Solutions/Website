"use client";

import { Cpu, Eye, Database, Fingerprint, FileText } from "lucide-react";
import { products } from "@/lib/data/products";
import AuroraBackground from "@/components/ui/aurora-background";
import BinaryRain from "@/components/ui/binary-rain";
import RadialOrbitalTimeline, {
  type OrbitalNode,
} from "@/components/ui/radial-orbital-timeline";

// Map the icon from products.ts to a Lucide icon that suits the orbital display.
// We cast to the narrower OrbitalNode icon type; Lucide icons are structurally
// compatible at runtime — only the `size` prop type is slightly wider in Lucide.
type OrbitalIconType = OrbitalNode["icon"];

const orbitalIconMap: Record<string, OrbitalIconType> = {
  "Industry 4.0 Analytics": Cpu as unknown as OrbitalIconType,
  "CCTV Anomaly Detection": Eye as unknown as OrbitalIconType,
  "Database Activity Monitor": Database as unknown as OrbitalIconType,
  "Athermind Integrity Platform": Fingerprint as unknown as OrbitalIconType,
  "Document and Workflow Governance Platform": FileText as unknown as OrbitalIconType,
};

const orbitalNodes: OrbitalNode[] = products.map((p) => ({
  id: p.name,
  label: p.name,
  category: p.tags[0],
  icon: orbitalIconMap[p.name] ?? p.icon,
  sector: p.tags[1] ?? "",
  description: p.valueStatement,
}));

export default function ProductsHero() {
  return (
    <AuroraBackground className="min-h-screen w-full">
      {/* Binary rain depth layer — sits above the aurora gradient, behind content */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-60">
        <BinaryRain />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column — heading + subtext */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 font-jetbrains text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              AI-Driven Product Suite
            </span>

            <h1 className="font-grotesk font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                Products
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
              AI-driven predictive analytics and security for{" "}
              <span className="font-fraunces italic text-slate-200">specialized industries</span>.
            </p>

            {/* Decorative rule */}
            <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent" />
          </div>

          {/* Right column — radial orbital timeline */}
          <div className="w-full flex items-center justify-center">
            <RadialOrbitalTimeline nodes={orbitalNodes} />
          </div>
        </div>

        {/* ── Product tiles row — fills the empty space beneath the hero ── */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="group relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.04] hover:border-cyan-300/50 hover:bg-slate-800/60 hover:shadow-[0_0_30px_rgba(85,164,255,0.25)]"
              >
                {/* icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition-colors duration-300 group-hover:bg-blue-500/25">
                  <Icon
                    size={24}
                    className="text-blue-400 transition-colors duration-300 group-hover:text-cyan-200"
                  />
                </div>

                {/* name */}
                <h3 className="font-grotesk text-sm font-bold leading-snug text-white">
                  {product.name}
                </h3>

                {/* value statement */}
                <p className="font-jetbrains text-[11px] leading-relaxed text-slate-400 group-hover:text-slate-300">
                  {product.valueStatement}
                </p>

                {/* hover accent bar */}
                <div className="mt-auto h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </section>
    </AuroraBackground>
  );
}
