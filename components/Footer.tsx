import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Cyber Security", href: "/cyber-security" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact Us", href: "/contact" },
];

const trustLinks = [

  { label: "Certificates", href: "/#certificates" },
  { label: "Operating Principles", href: "/about#operating-principles" },
  { label: "Partners", href: "/about#partners" },
  { label: "Methodologies", href: "/services#methodologies" },
  { label: "VAPT Types", href: "/services#vapt-assessment-types" },
];

const techLinks = [
  { label: "Services Portfolio", href: "/services#services-portfolio" },
  { label: "Security Pillars", href: "/cyber-security#pillars" },
  { label: "Pentest Types", href: "/cyber-security#pentest-types" },
  { label: "Advanced Operations", href: "/cyber-security#advances-operations" },
  { label: "Advanced Capabilities", href: "/cyber-security#advanced-capabilities" },
];

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Four-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Corporate contact (span 3) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-black font-bold text-lg">Aguna Solutions</h3>

            {/* Address */}
            <div className="flex items-start gap-2 text-zinc-700 text-sm">
              <MapPin className="text-emerald-600 mt-0.5 shrink-0" size={16} />
              <span>7th floor, Eco Tower, Sector 125, Noida.</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-zinc-700 text-sm">
              <Mail className="text-emerald-600 shrink-0" size={16} />
              <a
                href="mailto:info@agunasolutions.com"
                className="hover:text-emerald-600 transition-colors"
              >
                info@agunasolutions.com
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <a
                href="https://www.linkedin.com/company/aguna-solutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aguna Solutions on LinkedIn"
                className="inline-flex items-center justify-center bg-[#0077b5] hover:bg-[#005f91] text-white p-2 rounded transition-colors"
              >
                {/* LinkedIn SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452H17.01v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.583V9h3.305v1.561h.046c.461-.872 1.584-1.791 3.26-1.791 3.487 0 4.133 2.296 4.133 5.28v6.402zM5.337 7.433a1.932 1.932 0 1 1 0-3.864 1.932 1.932 0 0 1 0 3.864zm1.659 13.019H3.678V9h3.318v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.277V1.723C24 .771 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (span 3) */}
          <div className="md:col-span-3">
            <h4 className="text-black font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-900 text-sm hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Trust & Compliance (span 3) */}
          <div className="md:col-span-3">
            <h4 className="text-black font-bold text-sm uppercase tracking-wider mb-4">
              Trust &amp; Compliance
            </h4>
            <ul className="flex flex-col gap-2">
              {trustLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-900 text-sm hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tech & Operations (span 3) */}
          <div className="md:col-span-3">
            <h4 className="text-black font-bold text-sm uppercase tracking-wider mb-4">
              Tech &amp; Operations
            </h4>
            <ul className="flex flex-col gap-2">
              {techLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-900 text-sm hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Aguna Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
