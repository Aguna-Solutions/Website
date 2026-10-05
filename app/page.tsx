import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import SecurityPrompt from "@/components/SecurityPrompt";
import TrustSection from "@/components/TrustSection";
import CertificatesGrid from "@/components/CertificatesGrid";

export const metadata: Metadata = {
  title: "Aguna Solutions | Advanced AI & Security Solutions",
  description:
    "Aguna delivers immutable data protection, enterprise VAPT, cloud security, and custom AI software for the demands of modern business.",
  keywords: [
    "cybersecurity",
    "enterprise data protection",
    "VAPT",
    "cloud security",
    "AI solutions",
  ],
  alternates: { canonical: "https://www.agunasolutions.com/" },
  openGraph: {
    title: "Aguna Solutions | Advanced AI & Security Solutions",
    description:
      "Protect your enterprise cloud infrastructure with Aguna's immutable data protection and cyber resilience solutions.",
    url: "https://www.agunasolutions.com/",
    siteName: "Aguna Solutions",
    images: [{ url: "https://www.agunasolutions.com/aguna-logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aguna Solutions | Advanced AI & Security Solutions",
    description:
      "Immutable data protection and cyber resilience for enterprise cloud.",
    images: ["https://www.agunasolutions.com/aguna-logo.png"],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentService",
            name: "Aguna Solutions",
            url: "https://www.agunasolutions.com",
            logo: "https://www.agunasolutions.com/aguna-logo.png",
            sameAs: [
              "https://www.linkedin.com/company/aguna-solutions/posts/?feedView=all",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@agunasolutions.com",
              contactType: "customer service",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Noida",
              addressCountry: "IN",
            },
          }),
        }}
      />
      <Hero />
      <SectionDivider />
      <SecurityPrompt />
      <SectionDivider />
      <TrustSection />
      <CertificatesGrid />
    </>
  );
}
