import { Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Heading */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Let&apos;s Create Together
          </span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Have a project in mind? We&apos;d love to hear about it. Send us a
          message and we&apos;ll respond as soon as possible.
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email card */}
        <div className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-200">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500/10 text-blue-400 p-2 rounded-lg group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-colors duration-200 flex-shrink-0">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-1">
                Email
              </p>
              <a
                href="mailto:info@agunasolutions.com"
                className="text-sm text-white hover:text-blue-400 transition-colors duration-200 break-all"
              >
                info@agunasolutions.com
              </a>
            </div>
          </div>
        </div>

        {/* Location card */}
        <div className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-200">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500/10 text-blue-400 p-2 rounded-lg group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-colors duration-200 flex-shrink-0">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-1">
                Location
              </p>
              <p className="text-sm text-white">Noida, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
