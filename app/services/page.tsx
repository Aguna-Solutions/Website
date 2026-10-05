import type { Metadata } from "next";
import ServiceOfferings from "@/components/ServiceOfferings";
import SectionDivider from "@/components/SectionDivider";
import ServiceMethodologies from "@/components/ServiceMethodologies";
import ServiceExpertise from "@/components/ServiceExpertise";
import WhyAguna from "@/components/WhyAguna";
import Industries from "@/components/Industries";

export const metadata: Metadata = {
  title: "Cybersecurity & VAPT Service Portfolio | Aguna Solutions",
  description:
    "Comprehensive VAPT, cloud security, SOC, and compliance services for enterprise clients.",
  alternates: { canonical: "https://www.agunasolutions.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Aguna Solutions Cybersecurity Services",
            knowsAbout: [
              "VAPT",
              "Cloud Security",
              "SOC",
              "Incident Response",
              "Compliance",
              "DevSecOps",
            ],
          }),
        }}
      />
      <ServiceOfferings />
      <SectionDivider />
      <ServiceMethodologies />
      <SectionDivider />
      <ServiceExpertise />
      <SectionDivider />
      <WhyAguna />
      <SectionDivider />
      <Industries />
    </>
  );
}
