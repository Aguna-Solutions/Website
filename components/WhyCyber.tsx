import { ShieldCheck } from "lucide-react";

export default function WhyCyber() {
  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Centred icon */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border border-blue-200">
            <ShieldCheck
              className="w-8 h-8 text-blue-600"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
          Why Cybersecurity Matters
        </h2>

        {/* Paragraph */}
        <p className="text-base md:text-lg font-medium leading-relaxed text-slate-700">
          Cybersecurity threats are no longer isolated incidents — they are
          continuous, sophisticated, and targeting every layer of your
          organization. A proactive security posture is the only effective
          defense.
        </p>
      </div>
    </section>
  );
}
