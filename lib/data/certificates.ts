export interface Certificate {
  title: string;
  authority: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const certificates: Certificate[] = [
  {
    title: "ISO 27001:2022",
    authority: "International Organization for Standardization",
    description:
      "Aguna Solutions holds ISO 27001:2022 certification — the internationally recognised standard for Information Security Management Systems (ISMS). This certification validates that our security controls, risk management processes, and data protection practices meet the most rigorous global benchmarks.",
    imageSrc: "/images/iso-27001.png",
    imageAlt: "ISO 27001:2022 Certificate",
  },
  {
    title: "SOC 2 Type I",
    authority: "American Institute of Certified Public Accountants (AICPA)",
    description:
      "Our SOC 2 Type I certification, issued by the AICPA, confirms that Aguna's security controls are suitably designed to meet the Trust Services Criteria for security, availability, and confidentiality at a specific point in time — providing clients with independent assurance of our control design.",
    imageSrc: "/images/soc-type-1-final.png",
    imageAlt: "SOC 2 Type I Certificate",
  },
  {
    title: "SOC 2 Type II",
    authority: "American Institute of Certified Public Accountants (AICPA)",
    description:
      "Aguna's SOC 2 Type II certification demonstrates that our security, availability, and confidentiality controls have been independently verified to operate effectively over an extended audit period. This is the highest level of operational assurance for enterprise clients evaluating our trust posture.",
    imageSrc: "/images/soc-type-2-final.png",
    imageAlt: "SOC 2 Type II Certificate",
  },
];
