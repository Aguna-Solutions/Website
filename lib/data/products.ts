import type { LucideIcon } from "lucide-react";
import { Factory, Camera, Database, Lock, FileText } from "lucide-react";

export interface Product {
  name: string;
  valueStatement: string;
  description: string;
  capabilities: string[]; // exactly 3
  impactMetric: string; // e.g. "↓ Costs by 25% | ↑ Yield by 15%"
  tags: string[];
  techSpecs: string[]; // 2 hover-reveal badges
  icon: LucideIcon;
  externalUrl?: string;
  externalLabel?: string;
}

export const products: Product[] = [
  {
    name: "Industry 4.0 Analytics",
    valueStatement: "Eliminate unplanned downtime before it costs you.",
    description:
      "AI-driven predictive maintenance platform for manufacturing environments. Continuously monitors machine telemetry, detects anomalies, and forecasts equipment failures before they occur — keeping production lines running at peak efficiency.",
    capabilities: [
      "Real-time sensor fusion and anomaly detection across OT/IT boundaries",
      "Predictive failure models trained on equipment-specific historical data",
      "Automated work-order generation integrated with CMMS systems",
    ],
    impactMetric: "↓ Downtime by 40% | ↑ OEE by 25%",
    tags: ["Industrial AI", "Predictive Maintenance"],
    techSpecs: ["Nanometer Precision", "Edge AI Processing"],
    icon: Factory,
    externalUrl: "https://www.athermind.com/products#industry-analytics",
    externalLabel: "Explore on AtherMind",
  },
  {
    name: "CCTV Anomaly Detection",
    valueStatement: "Turn every camera into an intelligent security analyst.",
    description:
      "Real-time AI surveillance platform that processes live video feeds at the edge to detect anomalies, intrusions, and behavioural threats with sub-second latency — no human monitoring required for first-pass triage.",
    capabilities: [
      "Multi-camera simultaneous inference with YOLO v8 object detection",
      "Behavioural anomaly classification for loitering, perimeter breach, and crowd density",
      "Automated alert routing with annotated video clip evidence packages",
    ],
    impactMetric: "↑ Detection Accuracy 98.5%",
    tags: ["Computer Vision", "Security AI"],
    techSpecs: ["YOLO v8 Inference", "Edge Computing"],
    icon: Camera,
    externalUrl: "https://www.athermind.com/products#cctv-anomaly",
    externalLabel: "Explore on AtherMind",
  },
  {
    name: "Database Activity Monitor",
    valueStatement: "Full visibility into every query, every user, every threat.",
    description:
      "Continuous database monitoring and threat detection solution that intercepts all database traffic in real time, identifies suspicious query patterns, and enforces access policies to prevent data exfiltration and insider threats.",
    capabilities: [
      "Agentless network-layer capture supporting Oracle, MSSQL, MySQL, and PostgreSQL",
      "ML-based baseline profiling to flag privilege abuse and anomalous query volumes",
      "Automated compliance reporting for PCI-DSS, HIPAA, and ISO 27001 mandates",
    ],
    impactMetric: "↓ Breach Risk by 85%",
    tags: ["Data Security", "Compliance"],
    techSpecs: ["AES-256 Encryption", "Real-time Alerts"],
    icon: Database,
    externalUrl: "https://www.athermind.com/products#database-monitor",
    externalLabel: "Explore on AtherMind",
  },
  {
    name: "Athermind Integrity Platform",
    valueStatement: "Immutable records. Unbreakable trust.",
    description:
      "AI-powered data integrity and audit trail platform that anchors critical business records to a distributed ledger, guaranteeing tamper-proof provenance and enabling instant regulatory compliance verification.",
    capabilities: [
      "Cryptographic hash anchoring of records to permissioned blockchain nodes",
      "AI-driven integrity drift detection across distributed data stores",
      "One-click audit report generation with verifiable chain-of-custody evidence",
    ],
    impactMetric: "100% Audit Compliance",
    tags: ["Data Integrity", "Audit"],
    techSpecs: ["Blockchain Anchoring", "Immutable Logging"],
    icon: Lock,
    externalUrl: "https://www.athermind.com/products#integrity-platform",
    externalLabel: "Explore on AtherMind",
  },
  {
    name: "Document and Workflow Governance Platform",
    valueStatement: "Intelligent document lifecycle management at enterprise scale.",
    description:
      "Document management system with AI-powered classification, zero-trust access controls, and intelligent search. Automates document ingestion, categorisation, and routing while enforcing granular permissions across every user and role.",
    capabilities: [
      "NLP-driven automatic classification and metadata tagging on ingestion",
      "Zero-trust access model with attribute-based access control (ABAC) enforcement",
      "Semantic full-text search with version history and audit trail per document",
    ],
    impactMetric: "↓ Processing Time 70%",
    tags: ["Document AI", "Enterprise"],
    techSpecs: ["NLP Classification", "Zero-trust Access"],
    icon: FileText,
    externalUrl: "https://www.athermind.com/products#document-governance",
    externalLabel: "Explore on AtherMind",
  },
];
