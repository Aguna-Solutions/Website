import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function SecurityPrompt() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Outer subtle border */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-slate-600/30 to-blue-400/20 shadow-[0_0_40px_-8px_rgba(59,130,246,0.25)]">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900">
            {/* Subtle left accent stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/60 via-blue-500/40 to-blue-400/20" />

            {/* Very subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12">
              {/* Left: text block */}
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-3">
                  <ShieldAlert
                    className="text-blue-400 shrink-0"
                    size={32}
                    strokeWidth={2}
                  />
                  <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white leading-tight">
                    Is Your Company Secure?
                  </h2>
                </div>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                  Many organizations believe they are secure—until a vulnerability
                  is exploited. The modern threat landscape evolves faster than
                  most internal teams can track: ransomware, zero-days, supply
                  chain attacks, and insider risks are constant. Proactively
                  identifying and remediating risks is the first step toward
                  building a resilient security posture. Aguna&apos;s experts assess
                  your entire attack surface and deliver actionable, prioritized
                  findings before adversaries find them first.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white font-semibold px-6 py-3 text-sm hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/30"
                >
                  <ShieldAlert size={16} />
                  Get a Free Security Assessment
                </Link>
              </div>

              {/* Right: shield icon graphic */}
              <div className="shrink-0 opacity-20">
                <ShieldAlert size={120} className="text-blue-400" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
