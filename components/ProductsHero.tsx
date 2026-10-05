"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { products } from "@/lib/data/products";
import AuroraBackground from "@/components/ui/aurora-background";
import BinaryRain from "@/components/ui/binary-rain";

export default function ProductsHero() {
  return (
    <AuroraBackground className="min-h-screen w-full">
      {/* Binary rain depth layer — sits above the aurora gradient, behind content */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-60">
        <BinaryRain />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-28">
        {/* Heading + subtext */}
        <div className="max-w-3xl flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 font-jetbrains text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            AI-Driven Product Suite
          </span>

          <h1 className="font-grotesk font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Products
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            AI-driven predictive analytics and security for{" "}
            <span className="font-fraunces italic text-slate-200">specialized industries</span>.
          </p>

          {/* AtherMind website redirect section */}
          <div className="flex flex-col gap-3 pt-1">
            <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed max-w-xl">
              To explore our full live product suite, interactive telemetry consoles, and technical architectures, visit our dedicated product platform:
            </p>
            <div>
              <a
                href="https://www.athermind.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/15 hover:bg-cyan-500/25 px-7 py-3.5 font-jetbrains text-sm md:text-base font-semibold text-cyan-200 hover:text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                </span>
                <span>Explore AtherMind Product Ecosystem</span>
                <ExternalLink
                  size={16}
                  className="text-cyan-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* Decorative rule */}
          <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent" />
        </div>

        {/* ── Product tiles row ── */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => {
            const Icon = product.icon;
            const CardTag = product.externalUrl ? "a" : "div";
            const linkProps = product.externalUrl
              ? {
                  href: product.externalUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  title: `Visit ${product.name} on AtherMind`,
                }
              : {};

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <CardTag
                  {...linkProps}
                  className={`group relative flex flex-col h-full gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:border-cyan-300/50 hover:bg-slate-800/80 hover:shadow-[0_0_30px_rgba(85,164,255,0.25)] ${
                    product.externalUrl ? "cursor-pointer" : ""
                  }`}
                >
                  {/* icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition-colors duration-300 group-hover:bg-blue-500/25">
                      <Icon
                        size={24}
                        className="text-blue-400 transition-colors duration-300 group-hover:text-cyan-200"
                      />
                    </div>
                    {product.externalUrl && (
                      <span className="flex items-center gap-1 rounded-full bg-cyan-500/20 px-2 py-0.5 font-jetbrains text-[9px] font-bold text-cyan-300 border border-cyan-400/40">
                        <span>LIVE</span>
                        <ExternalLink size={9} />
                      </span>
                    )}
                  </div>

                  {/* name */}
                  <h3 className="font-grotesk text-sm font-bold leading-snug text-white">
                    {product.name}
                  </h3>

                  {/* value statement */}
                  <p className="font-jetbrains text-[11px] leading-relaxed text-slate-400 group-hover:text-slate-300">
                    {product.valueStatement}
                  </p>

                  {/* hover accent bar */}
                  <div className="mt-auto h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </CardTag>
              </motion.div>
            );
          })}
        </div>
      </section>
    </AuroraBackground>
  );
}
