import type { Metadata } from "next";
import ArtificialHero from "@/components/ui/artificial-hero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Secure Operations | Aguna Solutions",
  description:
    "Get in touch with Aguna Solutions for enterprise cybersecurity, VAPT, and AI solutions.",
  alternates: { canonical: "https://www.agunasolutions.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#0B1120]">
      {/* ASCII sphere background */}
      <ArtificialHero />
      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
