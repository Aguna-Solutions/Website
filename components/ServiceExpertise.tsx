import { ShieldCheck, Search, Crosshair, AlertCircle } from "lucide-react";

const expertiseBlocks = [
  {
    icon: ShieldCheck,
    title: "Security Operations",
    description:
      "24/7 threat monitoring and detection across your entire infrastructure",
  },
  {
    icon: Search,
    title: "Proactive Services",
    description:
      "Offensive security assessments to identify vulnerabilities before attackers do",
  },
  {
    icon: Crosshair,
    title: "Proactive Threat Hunting",
    description:
      "Expert analysts searching for hidden threats and adversary presence in your environment",
  },
  {
    icon: AlertCircle,
    title: "Informed Incident Insights",
    description:
      "Detailed forensics and root-cause analysis to prevent incident recurrence",
  },
];

const certificationBadges = [
  "CEH",
  "APISec",
  "eWPT",
  "OSCP",
  "CRTP",
  "CRTE",
  "HCIPSPP",
  "ISO 27001",
  "ISO 300",
  "CyberArk (CDI)",
];

export default function ServiceExpertise() {
  return (
    <section className="py-20">
      {/* Core Expertise Grid — white background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-brand-light mb-4">
            Our Team Expertise
          </h2>
          <p className="text-slate-300/90 max-w-2xl mx-auto text-base leading-relaxed">
            Seasoned professionals with hands-on expertise across every dimension
            of enterprise cybersecurity.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle left-edge blue glow */}
          <div
            className="absolute inset-y-0 left-0 w-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at left center, rgba(85,164,255,0.08) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {expertiseBlocks.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="flex-shrink-0 bg-blue-50 text-blue-600 p-3 rounded-lg">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-montserrat text-lg font-bold text-brand-slate mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark Credentials Subsection */}
      <div className="bg-slate-900 mt-16 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-3">
            Team Certifications
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Our analysts and engineers hold industry-recognised certifications
            that validate deep technical expertise across offensive and defensive
            security disciplines.
          </p>

          {/* Floating certification badge chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {certificationBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-slate-200 bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-colors duration-200 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
