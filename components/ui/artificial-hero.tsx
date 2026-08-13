"use client";

import { useEffect, useRef } from "react";

export default function ArtificialHero() {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const tRef = useRef<number>(0);

  useEffect(() => {
    const W = 80;
    const H = 40;
    const R = 14;
    const chars = ".,-~:;=!*#$@";

    function render(t: number) {
      const A = t * 0.7;
      const B = t * 0.3;
      const cosA = Math.cos(A), sinA = Math.sin(A);
      const cosB = Math.cos(B), sinB = Math.sin(B);

      const output: string[] = new Array(W * H).fill(" ");
      const zbuf: number[] = new Array(W * H).fill(0);

      for (let theta = 0; theta < Math.PI * 2; theta += 0.07) {
        for (let phi = 0; phi < Math.PI * 2; phi += 0.02) {
          const cosTheta = Math.cos(theta);
          const sinTheta = Math.sin(theta);
          const cosPhi = Math.cos(phi);
          const sinPhi = Math.sin(phi);

          const x = R * cosTheta * cosPhi;
          const y = R * cosTheta * sinPhi;
          const z = R * sinTheta;

          // Rotate around Y then X
          const x1 = x * cosB - z * sinB;
          const z1 = x * sinB + z * cosB;
          const y1 = y * cosA - z1 * sinA;
          const z2 = y * sinA + z1 * cosA;

          const ooz = 1 / (z2 + 30);
          const xp = Math.round(W / 2 + 22 * x1 * ooz);
          const yp = Math.round(H / 2 - 11 * y1 * ooz);

          // Lighting
          const L = cosPhi * cosTheta * sinB - sinTheta * cosB +
                    cosPhi * cosTheta * sinA - sinPhi * sinA + 0.7;

          if (L > 0 && xp >= 0 && xp < W && yp >= 0 && yp < H) {
            const idx = xp + yp * W;
            if (ooz > zbuf[idx]) {
              zbuf[idx] = ooz;
              const charIdx = Math.min(Math.floor(L * 8), chars.length - 1);
              output[idx] = chars[charIdx];
            }
          }
        }
      }

      // Build rows
      let result = "";
      for (let row = 0; row < H; row++) {
        result += output.slice(row * W, (row + 1) * W).join("") + "\n";
      }

      if (preRef.current) {
        preRef.current.textContent = result;
      }
    }

    function loop() {
      tRef.current += 0.05;
      render(tRef.current);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.3), transparent 70%), radial-gradient(ellipse 40% 40% at 50% 50%, rgba(99,102,241,0.2), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <pre
        ref={preRef}
        aria-hidden="true"
        className="font-mono text-[0.5rem] leading-[0.6rem] text-blue-300 select-none relative z-10"
        style={{ whiteSpace: "pre" }}
      />
    </div>
  );
}
