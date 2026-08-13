export interface Partner {
  name: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

export const partners: Partner[] = [
  {
    name: "CrowdStrike",
    imageSrc: "/images/crowdstrike-logo-red.png",
    imageAlt: "CrowdStrike logo",
    description:
      "CrowdStrike Falcon® platform powers Aguna's endpoint detection and response (EDR) capabilities with AI-native threat intelligence, real-time IOA detection, and adversary-attributed threat hunting across managed and unmanaged endpoints.",
  },
  {
    name: "CyberArk",
    imageSrc: "/images/cyberark-logo-new.jpg",
    imageAlt: "CyberArk logo",
    description:
      "Aguna leverages CyberArk's Privileged Access Management (PAM) suite to enforce least-privilege principles, secure service accounts, and implement just-in-time access controls — eliminating the lateral movement risks that stem from unmanaged credentials.",
  },
  {
    name: "Palo Alto Networks",
    imageSrc: "/images/paloalto-logo-new.jpg",
    imageAlt: "Palo Alto Networks logo",
    description:
      "Through the Palo Alto Networks partnership, Aguna delivers next-generation firewall deployments, Prisma Cloud CSPM integrations, and Cortex XSOAR-driven security orchestration to accelerate client SOC response times and harden cloud-native attack surfaces.",
  },
  {
    name: "Tenable",
    imageSrc: "/images/tenable-logo-new.jpg",
    imageAlt: "Tenable logo",
    description:
      "Aguna integrates Tenable's vulnerability management platform — including Tenable.io and Tenable OT Security — to provide clients with continuous asset discovery, CVSS-prioritised remediation workflows, and exposure analytics across hybrid IT/OT environments.",
  },
  {
    name: "NCOE (National Centre of Excellence)",
    imageSrc: "/images/ncoe-logo.png",
    imageAlt: "NCOE logo",
    description:
      "As an NCOE-recognised entity, Aguna collaborates with India's National Centre of Excellence in cybersecurity to advance indigenous security research, participate in national threat intelligence programmes, and contribute to government-aligned security frameworks.",
  },
  {
    name: "DSCI (Data Security Council of India)",
    imageSrc: "/images/dsci-logo.png",
    imageAlt: "DSCI logo",
    description:
      "Aguna's DSCI membership affirms our commitment to India's data protection ecosystem. Through this partnership we engage in policy advocacy, industry best-practice dissemination, and compliance readiness initiatives aligned with the Digital Personal Data Protection (DPDP) Act.",
  },
  {
    name: "IIT Gandhinagar",
    imageSrc: "/images/iit-gandhinagar-logo.png",
    imageAlt: "IIT Gandhinagar logo",
    description:
      "Aguna's research collaboration with IIT Gandhinagar drives applied innovation in AI-driven threat detection, formal verification of security protocols, and development of next-generation intrusion detection models — bridging academic rigour with enterprise security practice.",
  },
  {
    name: "DPIIT (Dept. for Promotion of Industry and Internal Trade)",
    imageSrc: "/images/dpiit-logo.png",
    imageAlt: "DPIIT logo",
    description:
      "Aguna holds DPIIT Startup India recognition, affirming our status as an innovative technology company within India's national startup ecosystem. This recognition facilitates access to government procurement channels and validates our role in advancing India's digital security infrastructure.",
  },
  {
    name: "Broadcom",
    imageSrc: "/images/broadcom-logo.webp",
    imageAlt: "Broadcom logo",
    description:
      "Aguna leverages Broadcom's enterprise security portfolio — including Symantec Endpoint Security and Web Protection solutions — to deliver layered defence strategies for clients. Broadcom's DLP, proxy, and email security technologies complement Aguna's VAPT and SOC engagements, providing clients with a comprehensive perimeter-to-endpoint protection architecture.",
  },
  {
    name: "Riverbed",
    imageSrc: "/images/riverbed-logo.webp",
    imageAlt: "Riverbed logo",
    description:
      "Aguna integrates Riverbed's network performance management and SD-WAN visibility platform to support security assessments across distributed enterprise environments. Riverbed's deep packet inspection and application performance monitoring capabilities provide Aguna's engineers with granular network telemetry, enabling precise identification of anomalous traffic patterns and lateral movement during penetration testing and incident response engagements.",
  },
];
