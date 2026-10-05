// Server component — no "use client"

export default function AboutMission() {
  return (
    <section className="bg-black relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Dual-column grid with balanced proportions and vertical centering */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left column — copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Who We Are */}
            <div>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
                Who We Are
              </h2>
              <div className="h-1 w-16 bg-[#55a4ff] rounded-full mb-5" />
              <p className="text-slate-300 text-base leading-relaxed">
                Our vision is to fuel the future of digital innovation through inspired creativity.
                A new world unbounded by traditional software and systems, where the creative
                potential in every organization is unleashed.
              </p>
            </div>

            {/* Digital Transformation */}
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Digital Transformation for Enterprise Performance
              </h3>
              <div className="h-1 w-16 bg-[#55a4ff] rounded-full mb-5" />
              <p className="text-slate-300 text-base leading-relaxed">
                We are building a future where connected leaders and teams are able to constantly
                adapt, transform and reinvent their businesses. We make it possible to share
                actionable insights, empower and unleash creativity, and drive innovation. With
                Aguna Solutions, systematically orchestrating business performance transforms
                challenge to advantage.
              </p>
            </div>

            {/* One Team – One Goal */}
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
                One Team – One Goal
              </h3>
              <p className="text-slate-300 text-base leading-relaxed italic">
                &ldquo;We enable decisive action in dynamic conditions, turning complexity into
                clarity and alignment.&rdquo;
              </p>
            </div>
          </div>

          {/* Right column — correctly sized video (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-h-[480px] object-cover rounded-2xl"
                src="/videos/about-video.mp4"
              />
              {/* Cyan-to-purple gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
