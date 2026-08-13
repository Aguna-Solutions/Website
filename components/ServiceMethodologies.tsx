import Image from "next/image";

interface Methodology {
  key: string;
  name: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

const methodologies: Methodology[] = [
  {
    key: "ptes",
    name: "PTES",
    subtitle: "Penetration Testing Execution Standard",
    description:
      "We use PTES to conduct structured, real-world penetration testing—simulating attacker behavior to identify exploitable vulnerabilities and assess actual business risk.",
    imageSrc: "/images/methodology.jpg",
  },
  {
    key: "owasp",
    name: "OWASP",
    subtitle: "Open Web Application Security Project",
    description:
      "Our application and API security testing are aligned with OWASP frameworks to uncover critical vulnerabilities, validate security controls, and reduce exposure to common attack vectors.",
    imageSrc: "/images/owasp.jpg",
  },
  {
    key: "osstmm",
    name: "OSSTMM",
    subtitle: "Open Source Security Testing Methodology Manual",
    description:
      "We apply OSSTMM principles to objectively evaluate the effectiveness of security controls across networks and systems, providing measurable and repeatable security insights.",
    imageSrc: "/images/osstmm.jpg",
  },
];

export default function ServiceMethodologies() {
  return (
    <section
      id="methodologies"
      className="bg-black relative py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Testing Methodologies
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Aguna aligns all engagements against three globally recognised
          security frameworks to guarantee rigour, consistency, and measurable
          outcomes.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {methodologies.map((methodology) => (
          <div
            key={methodology.key}
            className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden transition-colors duration-300 hover:bg-gray-900/80"
          >
            {/* Image stage */}
            <div className="h-48 relative overflow-hidden rounded-t-2xl">
              <Image
                src={methodology.imageSrc}
                alt={`${methodology.name} methodology`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Card body */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {methodology.name}
              </h3>
              <p className="text-blue-400 font-mono text-sm mb-3">
                {methodology.subtitle}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {methodology.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
