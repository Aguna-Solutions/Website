import { products } from "@/lib/data/products";
import DynamicBorderCard from "@/components/ui/dynamic-border-animations-card";

export default function ProductsList() {
  return (
    <section className="bg-black relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white">
            What We Build
          </h2>
          <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto">
            Purpose-built AI platforms that solve hard problems in industrial,
            security, and enterprise domains.
          </p>
        </div>

        {/* 3-column grid — 5 cards, last row centred with 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <DynamicBorderCard key={product.name} className="h-full">
                <div className="p-8 flex flex-col gap-5 h-full">
                  {/* Header row: icon + tags */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Icon container */}
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 shrink-0">
                      <Icon size={28} className="text-blue-400" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Product name */}
                  <h3 className="font-montserrat font-bold text-white text-xl leading-snug">
                    {product.name}
                  </h3>

                  {/* Value statement */}
                  <p className="text-blue-300 text-sm font-medium leading-relaxed">
                    {product.valueStatement}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Capabilities */}
                  <ul className="flex flex-col gap-2">
                    {product.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="border-t border-white/10 mt-auto pt-4 flex flex-col gap-3">
                    {/* Impact metric */}
                    <p className="text-emerald-400 text-sm font-semibold">
                      {product.impactMetric}
                    </p>

                    {/* Tech spec badges — hidden by default, revealed on hover */}
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {product.techSpecs.map((spec) => (
                        <span
                          key={spec}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DynamicBorderCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
