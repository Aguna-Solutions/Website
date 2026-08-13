import { CheckCircle2 } from "lucide-react";

interface CapabilityDomain {
  id: string;
  heading: string;
  accentColor: string;
  subServices: string[];
}

const domains: CapabilityDomain[] = [
  {
    id: "advisory",
    heading: "Advisory & Consulting",
    accentColor: "text-blue-400",
    subServices: [
      "Risk Assessment",
      "Compliance & Governance",
      "Security Architecture Review",
      "vCISO Services",
      "Security Awareness Training",
    ],
  },
  {
    id: "detection",
    heading: "Detection & Protection",
    accentColor: "text-purple-400",
    subServices: [
      "Managed SOC",
      "Threat Intelligence",
      "EDR / XDR",
      "SIEM Management",
      "Incident Response",
    ],
  },
  {
    id: "infrastructure",
    heading: "Infrastructure & Network Security",
    accentColor: "text-emerald-400",
    subServices: [
      "Network Penetration Testing",
      "Cloud Security",
      "Firewall Management",
      "VPN Security",
      "Zero Trust Architecture",
    ],
  },
];

export default function CyberCapabilities() {
  return (
    <section className="bg-[#0B1120] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-3 font-manrope">
            Service Domains
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-white">
            Cybersecurity Capabilities
          </h2>
          <p className="mt-4 text-base text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            A comprehensive domain map covering every dimension of modern
            enterprise security — from strategic advisory to operational
            defence.
          </p>
        </div>

        {/* 3-column domain map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="rounded-2xl border border-white/10 bg-slate-800/40 p-8"
            >
              {/* Domain heading */}
              <h3
                className={`font-montserrat text-lg font-bold tracking-tight mb-6 ${domain.accentColor}`}
              >
                {domain.heading}
              </h3>

              {/* Sub-service list */}
              <ul className="space-y-3">
                {domain.subServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0 text-slate-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-slate-300 leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
