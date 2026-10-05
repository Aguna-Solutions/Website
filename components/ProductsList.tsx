"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/data/products";
import { ArrowUpRight } from "lucide-react";

export default function ProductsList() {
  return (
    <section className="bg-black relative py-20 md:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[600px] w-[900px] rounded-full bg-cyan-600/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 font-jetbrains">
            Enterprise Solutions
          </p>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-white tracking-tight">
            What We Build
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
            Purpose-built AI platforms that solve hard problems in industrial,
            security, and enterprise domains. Click any platform to explore the live system.
          </p>
        </div>

        {/* Rectangular Alternating Scroll Cards List */}
        <div className="flex flex-col gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            // Card 1, 3, 5 (indices 0, 2, 4) slide in from left to right: card -->
            // Card 2, 4 (indices 1, 3) slide in from right to left: <-- card
            const isEven = index % 2 === 0;
            const initialX = isEven ? -60 : 60;

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: initialX, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ willChange: "transform, opacity" }}
                className="w-full"
              >
                {/* Clickable Card wrapping entire rectangular unit */}
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explore ${product.name} on AtherMind`}
                  className="group relative block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-7 backdrop-blur-md transition-all duration-500 ease-out hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] hover:-translate-y-1 cursor-pointer"
                >
                  {/* Subtle hover gradient accent */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Left: Icon + Main Info */}
                    <div className="flex items-start sm:items-center gap-5 flex-1 min-w-0">
                      {/* Icon with index indicator */}
                      <div className="relative shrink-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/25 group-hover:text-cyan-200 transition-all duration-500 ease-out">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="absolute -top-2 -left-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 border border-slate-700 font-jetbrains text-[10px] font-bold text-slate-400 group-hover:border-cyan-400/50 group-hover:text-cyan-300 transition-colors duration-300">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 space-y-1.5">
                        {/* Title & Tags */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="font-montserrat font-bold text-lg md:text-xl text-white group-hover:text-cyan-200 transition-colors duration-300 flex items-center gap-2">
                            <span>{product.name}</span>
                            <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-out md:hidden" />
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {product.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-slate-800/90 border border-slate-700/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-300 transition-colors duration-300 group-hover:border-slate-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Value Statement */}
                        <p className="text-sm font-semibold text-cyan-400">
                          {product.valueStatement}
                        </p>

                        {/* Concise Description */}
                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed line-clamp-2 md:line-clamp-none max-w-2xl">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Metrics & Tech Badges (No button needed) */}
                    <div className="flex flex-wrap md:flex-col items-start md:items-end justify-between md:justify-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800/80 md:pl-6">
                      <div className="flex items-center gap-2.5">
                        {/* Impact Metric */}
                        <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 px-3 py-1.5 text-xs md:text-sm font-semibold text-emerald-400 whitespace-nowrap transition-colors duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/20">
                          <span>{product.impactMetric}</span>
                        </div>

                        {/* Desktop subtle redirect arrow */}
                        <div className="hidden md:flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-400 group-hover:text-cyan-200 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/15 transition-all duration-300 ease-out">
                          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
                        </div>
                      </div>

                      {/* Tech specs */}
                      <div className="flex flex-wrap gap-1.5 md:justify-end">
                        {product.techSpecs.map((spec) => (
                          <span
                            key={spec}
                            className="text-[10px] md:text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-400 group-hover:text-slate-200 group-hover:border-slate-600 transition-colors duration-300"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
