import Image from "next/image";
import { certificates } from "@/lib/data/certificates";
import DynamicBorderCard from "@/components/ui/dynamic-border-animations-card";

export default function CertificatesGrid() {
  return (
    <section id="certificates" className="py-20 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white">
            Our Certifications
          </h2>
          <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto">
            Independently verified compliance and security standards that
            demonstrate our commitment to protecting your organisation.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <DynamicBorderCard key={cert.title}>
              <div className="p-6 flex flex-col gap-3">
                {/* Logo row — fixed height container */}
                <div className="relative w-full h-[90px] flex items-center justify-center bg-white/5 rounded-xl overflow-hidden">
                  <Image
                    src={cert.imageSrc}
                    alt={cert.imageAlt}
                    width={110}
                    height={75}
                    className="object-contain max-h-[75px] w-auto"
                  />
                </div>

                {/* Verified badge */}
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 whitespace-nowrap">
                    ✓ Verified
                  </span>
                </div>

                {/* Certificate title */}
                <h3 className="font-bold text-white text-lg leading-tight">
                  {cert.title}
                </h3>

                {/* Authority */}
                <p className="text-gray-400 text-sm">{cert.authority}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </DynamicBorderCard>
          ))}
        </div>
      </div>
    </section>
  );
}
