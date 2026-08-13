import { CheckCircle } from "lucide-react";

const valueStatements: string[] = [
  "Certified ethical hackers with proven real-world experience",
  "Comprehensive coverage from network to application layer",
  "Detailed, actionable reports with clear remediation guidance",
  "Post-remediation retesting included at no additional cost",
  "Flexible engagement models from one-time assessment to continuous monitoring",
];

export default function WhyAguna() {
  return (
    <section className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Aguna?
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver security that goes beyond compliance — built around your
            business, your risk, and your goals.
          </p>
        </div>

        {/* Frosted-glass card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <ul className="space-y-5">
            {valueStatements.map((statement, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle
                  className="text-blue-600 mt-0.5 shrink-0"
                  size={22}
                  aria-hidden="true"
                />
                <span className="text-gray-800 text-base leading-relaxed">
                  {statement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
