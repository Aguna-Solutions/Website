"use client";

import { useEffect, useRef } from "react";

/**
 * BinaryRain — a full-coverage animated canvas of falling/blinking 0s and 1s.
 * Multiple depth layers create a parallax 3D effect: far columns are small,
 * dim and slow; near columns are large, bright and fast.
 */
export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    // Depth layers: [fontSize, speed, opacity]
    const layers = [
      { fontSize: 10, speed: 0.4, opacity: 0.25 }, // far
      { fontSize: 14, speed: 0.8, opacity: 0.45 }, // mid
      { fontSize: 20, speed: 1.4, opacity: 0.7 }, // near
    ];

    interface Column {
      x: number;
      y: number;
      layer: (typeof layers)[number];
      chars: string[];
      blinkSeed: number;
    }

    let columns: Column[] = [];

    function buildColumns() {
      columns = [];
      layers.forEach((layer) => {
        const colWidth = layer.fontSize * 1.4;
        const count = Math.ceil(width / colWidth);
        for (let i = 0; i < count; i++) {
          // Skip some columns randomly so layers don't fully overlap
          if (Math.random() > 0.55) continue;
          const trail = Math.floor(Math.random() * 14) + 6;
          const chars: string[] = [];
          for (let c = 0; c < trail; c++) {
            chars.push(Math.random() > 0.5 ? "1" : "0");
          }
          columns.push({
            x: i * colWidth + Math.random() * colWidth * 0.3,
            y: Math.random() * height,
            layer,
            chars,
            blinkSeed: Math.random() * 1000,
          });
        }
      });
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildColumns();
    }

    let frame = 0;

    function draw() {
      frame++;
      // Fade trail effect — translucent dark overlay each frame
      ctx!.fillStyle = "rgba(11, 17, 32, 0.18)";
      ctx!.fillRect(0, 0, width, height);

      for (const col of columns) {
        const { layer } = col;
        ctx!.font = `${layer.fontSize}px "Courier New", monospace`;

        for (let i = 0; i < col.chars.length; i++) {
          const charY = col.y - i * layer.fontSize * 1.2;
          if (charY < -layer.fontSize || charY > height) continue;

          // Occasionally flip the digit to simulate blinking
          if (Math.random() > 0.985) {
            col.chars[i] = col.chars[i] === "1" ? "0" : "1";
          }

          // Head of the trail is brightest (cyan-white), tail fades to blue
          const isHead = i === 0;
          const fade = 1 - i / col.chars.length;
          const blink =
            0.6 + 0.4 * Math.sin((frame + col.blinkSeed) * 0.08 + i);

          if (isHead) {
            ctx!.fillStyle = `rgba(180, 230, 255, ${layer.opacity * blink})`;
            ctx!.shadowColor = "rgba(85, 164, 255, 0.8)";
            ctx!.shadowBlur = 8;
          } else {
            ctx!.fillStyle = `rgba(85, 164, 255, ${
              layer.opacity * fade * blink
            })`;
            ctx!.shadowBlur = 0;
          }

          ctx!.fillText(col.chars[i], col.x, charY);
        }
        ctx!.shadowBlur = 0;

        // Advance the column downward
        col.y += layer.speed;

        // Reset column when it scrolls fully off the bottom
        if (col.y - col.chars.length * layer.fontSize * 1.2 > height) {
          col.y = -Math.random() * 200;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ display: "block" }}
    />
  );
}
