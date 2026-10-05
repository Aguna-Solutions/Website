import { ShieldCheck } from "lucide-react";

export default function WhyCyber() {
  return (
    <section className="relative bg-[#070E1E] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Centered ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div
          className="w-[600px] h-[300px] opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, rgba(34,211,238,0.15) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Centred icon */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/25 text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            <ShieldCheck
              className="w-8 h-8"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          Why Cybersecurity Matters
        </h2>

        {/* Paragraph */}
        <p className="text-base md:text-lg font-medium leading-relaxed text-slate-300">
          Cybersecurity threats are no longer isolated incidents — they are
          continuous, sophisticated, and targeting every layer of your
          organization. A proactive security posture is the only effective
          defense.
        </p>
      </div>
    </section>
  );
}
