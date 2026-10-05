import type { Metadata } from "next";
import AuroraBackground from "@/components/ui/aurora-background";
import ThreeDPhotoCarousel, { type CarouselCard } from "@/components/ui/3d-carousel";
import { certificates } from "@/lib/data/certificates";

export const metadata: Metadata = {
  title: "Verified Compliance & Certifications | Aguna Solutions",
  description:
    "ISO 27001:2022, SOC 2 Type I, and SOC 2 Type II certifications demonstrating Aguna's security compliance.",
  alternates: { canonical: "https://www.agunasolutions.com/certificates" },
};

export default function CertificatesPage() {
  const carouselCards: CarouselCard[] = certificates.map((cert) => ({
    title: cert.title,
    imageSrc: cert.imageSrc,
    imageAlt: cert.imageAlt,
  }));

  return (
    <>
      <AuroraBackground className="min-h-screen bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: heading + description */}
            <div>
              <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                  Certificates
                </span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Independently verified security and compliance certifications that demonstrate our commitment to the highest standards of information security management.
              </p>
            </div>
            {/* Right: 3D carousel */}
            <div className="flex justify-center">
              <ThreeDPhotoCarousel cards={carouselCards} />
            </div>
          </div>
        </div>
      </AuroraBackground>
    </>
  );
}
