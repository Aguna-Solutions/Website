import type { LucideIcon } from "lucide-react";
import {
  Shield,
  Cloud,
  Network,
  Globe,
  Smartphone,
  Code2,
  Target,
  Monitor,
  Search,
  FileCheck,
  GraduationCap,
  GitBranch,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  coverage: string[];
}

export const services: Service[] = [
  {
    title: "Vulnerability Assessment & Penetration Testing",
    description:
      "Identify and exploit security weaknesses across your entire attack surface before adversaries do. Our VAPT engagements combine automated scanning with expert-led manual testing for maximum coverage.",
    fullDescription:
      "Our VAPT service delivers a comprehensive security evaluation of your infrastructure, applications, and network assets using industry-standard methodologies including PTES, OWASP, and OSSTMM. Experienced security engineers perform both black-box and white-box assessments to uncover vulnerabilities that automated tools miss. Every engagement concludes with a detailed report mapping findings to CVSS severity scores, business risk context, and prioritised remediation guidance. We re-test all critical and high findings post-remediation at no additional cost to confirm closure.",
    icon: Shield,
    coverage: [
      "Web application penetration testing",
      "Network & infrastructure penetration testing",
      "Cloud environment penetration testing",
      "Mobile application penetration testing",
      "API security penetration testing",
      "Source code review & static analysis",
    ],
  },
  {
    title: "Cloud Security Assessment",
    description:
      "Evaluate the security posture of your AWS, Azure, or GCP environments against CIS Benchmarks and cloud-native threat models. We uncover misconfigurations, privilege escalations, and data exposure risks.",
    fullDescription:
      "Cloud environments introduce unique attack vectors including misconfigured storage buckets, over-privileged IAM roles, and insecure serverless functions that traditional security tools are unable to detect. Our Cloud Security Assessment maps your entire cloud footprint, evaluates identity and access controls, reviews network segmentation policies, and validates encryption configurations. Findings are prioritised by exploitability and blast radius, and we provide infrastructure-as-code remediation templates wherever applicable. Post-assessment, we offer a Cloud Security Architecture Review to embed security controls into your provisioning pipelines.",
    icon: Cloud,
    coverage: [
      "AWS, Azure, and GCP configuration review",
      "IAM policy and privilege escalation analysis",
      "Storage and data exposure assessment",
      "Serverless and container security review",
      "Cloud network segmentation validation",
      "Compliance mapping to CIS Cloud Benchmarks",
    ],
  },
  {
    title: "Network Security",
    description:
      "Harden your network perimeter and internal segments against lateral movement, eavesdropping, and denial-of-service attacks. We assess firewall rules, VPN configurations, and segmentation controls.",
    fullDescription:
      "Network infrastructure forms the backbone of every enterprise environment, and weaknesses here can allow attackers to move laterally across systems undetected. Our Network Security service combines passive reconnaissance, active scanning, and protocol-level analysis to identify exposed services, insecure configurations, and weak authentication mechanisms. We assess perimeter firewalls, internal segmentation, wireless networks, and remote access solutions against industry best practices. Deliverables include a network topology risk map, prioritised vulnerability list, and hardening recommendations aligned with NIST SP 800-115.",
    icon: Network,
    coverage: [
      "Firewall rule base review and optimisation",
      "Internal network segmentation assessment",
      "VPN and remote access security review",
      "Wireless network security testing",
      "IDS/IPS configuration validation",
      "Network device hardening (routers, switches)",
    ],
  },
  {
    title: "Web Application Security",
    description:
      "Secure your web applications against the OWASP Top 10 and beyond with expert manual testing backed by automated DAST tooling. We cover authentication flaws, injection vulnerabilities, and business logic issues.",
    fullDescription:
      "Web applications are the primary interface between your business and its customers, making them a high-value target for attackers. Our Web Application Security service goes beyond automated scanners to perform deep manual testing of authentication mechanisms, session management, access controls, and business logic workflows. We test for injection flaws, broken object-level authorisation, insecure deserialization, SSRF, and all OWASP Top 10 categories. Our testers replicate real-world attack scenarios to demonstrate the tangible impact of each vulnerability. Every report includes reproduction steps, proof-of-concept payloads, and developer-friendly remediation guidance.",
    icon: Globe,
    coverage: [
      "OWASP Top 10 vulnerability testing",
      "Authentication and session management testing",
      "Broken access control and privilege escalation",
      "Injection and XSS vulnerability assessment",
      "Business logic flaw analysis",
      "API endpoint security validation",
    ],
  },
  {
    title: "Mobile Application Security",
    description:
      "Assess iOS and Android applications for insecure data storage, improper platform usage, and client-side vulnerabilities. We test both static code and dynamic runtime behaviour.",
    fullDescription:
      "Mobile applications often store sensitive data on-device and communicate with backend APIs in ways that introduce significant security risks. Our Mobile Application Security service follows the OWASP Mobile Security Testing Guide (MSTG) to evaluate both the application binary and its runtime behaviour on real devices. We perform reverse engineering to identify hardcoded secrets, test insecure inter-process communication channels, and intercept API traffic to discover backend vulnerabilities. Testing covers both rooted/jailbroken and standard device configurations. Findings are reported with OWASP MASVS compliance mapping and actionable developer guidance.",
    icon: Smartphone,
    coverage: [
      "Static analysis and binary reverse engineering",
      "Insecure data storage and local cache testing",
      "Network communication and certificate pinning review",
      "Authentication and session management testing",
      "Platform-specific security misconfiguration (iOS/Android)",
      "OWASP MASVS compliance assessment",
    ],
  },
  {
    title: "API Security Testing",
    description:
      "Identify broken object-level authorisation, mass assignment, and injection vulnerabilities across REST, GraphQL, and SOAP APIs. We test authentication, rate limiting, and data exposure risks.",
    fullDescription:
      "Modern applications rely heavily on APIs that expose sensitive business logic and data, yet API security is frequently overlooked in standard security programmes. Our API Security Testing service comprehensively evaluates REST, GraphQL, gRPC, and SOAP endpoints against the OWASP API Security Top 10. We test for broken authentication, excessive data exposure, lack of rate limiting, injection attacks, and improper asset management by directly interacting with live API surfaces. We also review API gateway configurations, OAuth token flows, and JWT implementation weaknesses. All findings include request and response evidence with remediation steps tailored for development teams.",
    icon: Code2,
    coverage: [
      "OWASP API Security Top 10 assessment",
      "REST and GraphQL endpoint enumeration and testing",
      "Authentication and authorisation bypass testing",
      "Rate limiting and resource exhaustion testing",
      "JWT and OAuth 2.0 implementation review",
      "API gateway and schema validation testing",
    ],
  },
  {
    title: "Red Team Operations",
    description:
      "Simulate advanced persistent threat (APT) campaigns against your organisation to test detection, response, and resilience capabilities under realistic attack conditions.",
    fullDescription:
      "Red Team Operations go beyond traditional penetration testing by simulating full kill-chain attack scenarios modelled on real-world threat actors targeting your industry. Our red teamers use MITRE ATT&CK-aligned tactics to conduct covert initial access, lateral movement, privilege escalation, and objective attainment campaigns against your live environment. The engagement tests not only technical controls but also people and process — including phishing resilience, physical security, and incident response effectiveness. Engagements conclude with a detailed adversary simulation report, ATT&CK technique mapping, and a purple team session to improve your detection and response capabilities.",
    icon: Target,
    coverage: [
      "Full kill-chain adversary simulation",
      "MITRE ATT&CK technique mapping",
      "Phishing and social engineering campaigns",
      "Physical security breach simulation",
      "Detection and response capability assessment",
      "Purple team debrief and control improvement",
    ],
  },
  {
    title: "Security Operations Center (SOC)",
    description:
      "24/7 managed threat detection and response powered by a dedicated SOC team and enterprise SIEM platform. We monitor your environment continuously and respond to threats before they become incidents.",
    fullDescription:
      "Our SOC-as-a-Service delivers enterprise-grade continuous monitoring without the capital expenditure of building an in-house operation. Our analysts work around the clock across three shifts to monitor security events, correlate alerts, and investigate anomalies using an enterprise SIEM platform enriched with curated threat intelligence feeds. When a genuine threat is confirmed, our incident response team engages immediately to contain and eradicate it. We provide monthly threat reporting, regular service reviews, and continuous tuning of detection rules to reduce false positives and improve signal fidelity over time.",
    icon: Monitor,
    coverage: [
      "24/7 real-time security event monitoring",
      "SIEM platform management and rule tuning",
      "Threat intelligence feed integration",
      "Alert triage and threat confirmation",
      "Incident escalation and response coordination",
      "Monthly security posture reporting",
    ],
  },
  {
    title: "Incident Response & Forensics",
    description:
      "Rapid containment, investigation, and recovery from security breaches. Our forensics team collects court-admissible evidence and conducts root-cause analysis to prevent recurrence.",
    fullDescription:
      "When a security incident occurs, speed and precision are critical to minimising damage. Our Incident Response team is available 24/7 for emergency retainer engagements and provides on-site or remote response within agreed SLAs. We perform triage to contain the threat, followed by a thorough digital forensics investigation using forensically sound evidence collection procedures that preserve chain of custody. Our analysis covers malware reverse engineering, timeline reconstruction, attacker infrastructure mapping, and data exfiltration assessment. We deliver an incident report suitable for regulatory notification, legal proceedings, and executive briefing, along with a remediation roadmap to harden against future attacks.",
    icon: Search,
    coverage: [
      "Emergency incident containment and triage",
      "Digital forensics evidence collection and preservation",
      "Malware analysis and reverse engineering",
      "Attack timeline reconstruction",
      "Data exfiltration scope assessment",
      "Post-incident hardening and remediation roadmap",
    ],
  },
  {
    title: "Compliance & Risk Management",
    description:
      "Navigate complex regulatory frameworks including ISO 27001, SOC 2, GDPR, and PCI-DSS with expert guidance on gap assessment, control implementation, and audit preparation.",
    fullDescription:
      "Regulatory compliance is a baseline expectation for enterprise vendors, and failing an audit can result in contract loss, fines, or reputational damage. Our Compliance & Risk Management service guides organisations through the full compliance lifecycle — from initial gap assessment against target frameworks to control implementation, evidence collection, and certification audit support. We have helped clients achieve ISO 27001:2022 certification, SOC 2 Type II reports, and PCI-DSS compliance. Our risk management approach integrates quantitative risk scoring with business impact analysis to help security leaders communicate risk in language that resonates with boards and executive leadership.",
    icon: FileCheck,
    coverage: [
      "ISO 27001:2022 gap assessment and certification support",
      "SOC 2 Type I and Type II readiness",
      "GDPR and data protection impact assessment",
      "PCI-DSS compliance assessment",
      "Risk register development and quantitative risk scoring",
      "Internal audit programme design",
    ],
  },
  {
    title: "Security Awareness Training",
    description:
      "Build a security-first culture through role-based training programmes, simulated phishing campaigns, and hands-on workshops designed for all staff levels from end users to executives.",
    fullDescription:
      "Human error remains the leading cause of security breaches, making security awareness training one of the highest-ROI investments an organisation can make. Our training programme combines instructor-led workshops, e-learning modules, and simulated phishing campaigns to create a measurable improvement in security behaviours across your workforce. Programmes are tailored by role — different content for end users, IT staff, developers, and C-suite executives. We track phishing click rates, training completion, and knowledge retention scores over time, providing quarterly reports that demonstrate programme effectiveness and highlight departments requiring additional attention.",
    icon: GraduationCap,
    coverage: [
      "Role-based security awareness e-learning modules",
      "Simulated phishing and social engineering campaigns",
      "Executive and board-level cybersecurity briefings",
      "Developer secure coding training",
      "Incident reporting culture development",
      "Phishing click-rate and KPI tracking reports",
    ],
  },
  {
    title: "DevSecOps Integration",
    description:
      "Embed security controls into your CI/CD pipeline with SAST, DAST, SCA, and secrets detection tooling. We help engineering teams ship secure code faster without sacrificing velocity.",
    fullDescription:
      "Traditional security testing at the end of the development cycle creates costly rework and slows delivery. Our DevSecOps Integration service shifts security left by embedding automated security controls directly into your CI/CD pipeline using best-of-breed open-source and commercial tooling. We configure and tune static application security testing (SAST), software composition analysis (SCA), dynamic testing (DAST), container image scanning, and secrets detection gates that block insecure code before it reaches production. We train your engineering teams on interpreting and remediating findings, and establish a vulnerability management workflow that integrates with Jira, GitHub, or GitLab. The result is a measurable reduction in security debt and faster, safer releases.",
    icon: GitBranch,
    coverage: [
      "CI/CD pipeline security gate configuration",
      "SAST and SCA tool integration and tuning",
      "Container image and dependency vulnerability scanning",
      "Secrets detection and prevention controls",
      "Infrastructure-as-code security scanning",
      "Developer security training and workflow integration",
    ],
  },
];
