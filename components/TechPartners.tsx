import Image from "next/image";
import { partners } from "../lib/data/partners";

export default function TechPartners() {
  return (
    <section
      id="partners"
      className="bg-[#0B1120] pb-20 pt-10"
    >
      {/* Centered subtle separator */}
      <div className="w-1/2 md:w-1/3 mx-auto border-t border-white/5 mb-16" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-3 font-manrope">
            Ecosystem
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight text-white">
            Tech Partners We Work With
          </h2>
          <p className="mt-4 text-base text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            We build on best-in-class platforms and collaborate with leading
            academic and governmental bodies to deliver enterprise-grade security.
          </p>
        </div>

        {/* 2-column grid of partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="group flex items-start gap-6 p-6
                         border border-white/5 rounded-2xl
                         transition-colors duration-200 hover:bg-white/5"
            >
              {/* Circular logo roundel */}
              <div
                className="flex-shrink-0 rounded-full overflow-hidden bg-white
                           border border-gray-200 w-20 h-20
                           flex items-center justify-center
                           transition-transform duration-200 group-hover:scale-105
                           drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
              >
                <Image
                  src={partner.imageSrc}
                  alt={partner.imageAlt}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Partner details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-montserrat text-base font-semibold tracking-tight text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-400">
                  {partner.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
