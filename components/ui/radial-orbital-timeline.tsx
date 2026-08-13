"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface OrbitalNode {
  id: string;
  label: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  sector: string;
  description: string;
}

interface RadialOrbitalTimelineProps {
  nodes: OrbitalNode[];
}

/**
 * RadialOrbitalTimeline — a 3D animated orbital system.
 *
 * The ring plane is tilted back in 3D (CSS perspective + rotateX) so the
 * concentric rings read as ellipses receding into space. Product nodes orbit
 * on a matching elliptical path: nodes at the front (bottom) of the orbit are
 * scaled up, brighter and rendered on top, while nodes at the back (top) are
 * smaller and dimmer — producing a genuine sense of depth as they revolve.
 * The pulsing core at the centre is the Aguna logo.
 */
export default function RadialOrbitalTimeline({
  nodes,
}: RadialOrbitalTimelineProps) {
  const [t, setT] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      setT((now - start) / 1000);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  if (!nodes || nodes.length === 0) return null;

  const n = nodes.length;
  // Horizontal / vertical orbit radii (percentage of container).
  // ORBIT_Y is compressed to match the tilted ring plane (cos(~58deg) ≈ 0.53).
  const ORBIT_X = 40;
  const ORBIT_Y = 21;
  const SPEED = 0.28; // radians / second

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto aspect-square select-none"
      style={{ perspective: "1100px" }}
    >
      {/* ── Tilted rotating ring plane (SVG) ── */}
      <div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(58deg)" }}
      >
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="orbCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(85,164,255,0.45)" />
              <stop offset="55%" stopColor="rgba(85,164,255,0.06)" />
              <stop offset="100%" stopColor="rgba(85,164,255,0)" />
            </radialGradient>
            <linearGradient id="orbArc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#55a4ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#55a4ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orbArc2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* faint concentric rings */}
          {[110, 175, 240].map((r, i) => (
            <circle
              key={r}
              cx="300"
              cy="300"
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
              strokeDasharray={i % 2 === 0 ? "2 8" : ""}
            />
          ))}

          {/* ambient glow */}
          <circle cx="300" cy="300" r="300" fill="url(#orbCoreGlow)" opacity="0.5" />

          {/* rotating arcs */}
          <g style={{ transformOrigin: "300px 300px", transform: `rotate(${t * 18}deg)` }}>
            <path
              d="M 300 60 A 240 240 0 0 1 540 300"
              fill="none"
              stroke="url(#orbArc)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
          <g style={{ transformOrigin: "300px 300px", transform: `rotate(${-t * 12 + 140}deg)` }}>
            <path
              d="M 125 300 A 175 175 0 0 1 300 125"
              fill="none"
              stroke="url(#orbArc2)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* ── Pulsing glowing core: Aguna logo ── */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "26%", height: "26%", zIndex: 60 }}
      >
        {/* outer pulsing halo */}
        <span
          className="absolute inset-[-25%] rounded-full animate-ping"
          style={{ background: "rgba(85,164,255,0.18)" }}
          aria-hidden="true"
        />
        <span
          className="absolute inset-[-10%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(85,164,255,0.35) 0%, transparent 70%)",
            filter: "blur(6px)",
          }}
          aria-hidden="true"
        />
        {/* logo disc */}
        <div
          className="relative flex h-full w-full items-center justify-center rounded-full border border-blue-400/30 bg-slate-950/80 backdrop-blur-sm"
          style={{
            boxShadow:
              "0 0 30px rgba(85,164,255,0.55), 0 0 60px rgba(85,164,255,0.25), inset 0 0 20px rgba(85,164,255,0.15)",
          }}
        >
          <Image
            src="/aguna-logo.png"
            alt="Aguna Solutions"
            width={120}
            height={131}
            unoptimized
            className="h-[72%] w-auto object-contain drop-shadow-[0_0_8px_rgba(85,164,255,0.5)]"
          />
        </div>
      </div>

      {/* ── Orbiting nodes (depth-sorted, 3D scaled) ── */}
      {nodes.map((node, i) => {
        const angle = (2 * Math.PI / n) * i - Math.PI / 2 + t * SPEED;
        const x = 50 + ORBIT_X * Math.cos(angle);
        const y = 50 + ORBIT_Y * Math.sin(angle);
        // depth: +1 = front (bottom), -1 = back (top)
        const depth = Math.sin(angle);
        const d = (depth + 1) / 2; // 0..1
        const scale = 0.62 + 0.55 * d; // back small → front large
        const opacity = 0.45 + 0.55 * d;
        const zIndex = 10 + Math.round(d * 40);
        const Icon = node.icon;
        const blink = 0.55 + 0.45 * Math.sin(t * 1.4 + i);

        return (
          <div
            key={node.id}
            className="group absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              zIndex,
              opacity,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transition: "filter 0.3s",
            }}
            title={node.description}
          >
            <div className="relative flex flex-col items-center gap-1.5">
              {/* glow ring */}
              <span
                className="absolute top-0 h-12 w-12 rounded-full transition-all duration-300 group-hover:h-16 group-hover:w-16"
                style={{
                  background: "rgba(85,164,255,0.20)",
                  opacity: blink * 0.7,
                  filter: "blur(3px)",
                }}
                aria-hidden="true"
              />
              {/* icon disc — pops & brightens on hover */}
              <div
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/40 bg-slate-900/85 backdrop-blur-sm transition-all duration-300 ease-out group-hover:scale-[1.45] group-hover:border-cyan-300 group-hover:bg-slate-800"
                style={{
                  boxShadow: `0 0 ${10 + blink * 12}px rgba(85,164,255,${0.22 + blink * 0.25})`,
                }}
              >
                <Icon
                  size={20}
                  className="text-blue-300 transition-colors duration-300 group-hover:text-cyan-200"
                />
              </div>
              {/* label */}
              <div className="text-center transition-transform duration-300 group-hover:scale-110">
                <p className="font-jetbrains text-[10px] font-semibold leading-tight text-slate-100 whitespace-nowrap drop-shadow group-hover:text-white">
                  {node.label}
                </p>
                <p className="font-jetbrains text-[8px] tracking-wider text-slate-500 leading-tight whitespace-nowrap uppercase group-hover:text-blue-300">
                  {node.sector}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
