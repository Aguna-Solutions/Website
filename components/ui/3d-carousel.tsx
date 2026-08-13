"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Pure math helpers (exported for property-based testing) ─────────────────

/**
 * Computes the cylinder radius so that `faceCount` cards of `faceWidth` pixels
 * tile perfectly around the circumference.
 *
 * radius = (faceWidth * faceCount) / (2 * Math.PI)
 */
export function computeCarouselRadius(faceWidth: number, faceCount: number): number {
  return (faceWidth * faceCount) / (2 * Math.PI);
}

/**
 * Computes the Y-rotation step (in degrees) between adjacent faces.
 *
 * rotationStep = 360 / faceCount
 */
export function computeRotationStep(faceCount: number): number {
  return 360 / faceCount;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CarouselCard {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

interface ThreeDPhotoCarouselProps {
  cards: CarouselCard[];
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ThreeDPhotoCarousel({ cards }: ThreeDPhotoCarouselProps) {
  // Responsive face width: 260px mobile, 360px md and above
  const [faceWidth, setFaceWidth] = useState(260);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setFaceWidth(e.matches ? 360 : 260);
    };

    // Set initial value
    handleChange(mq);

    // Listen for viewport changes
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const faceCount = cards.length;
  const radius = computeCarouselRadius(faceWidth, faceCount);
  const rotationStep = computeRotationStep(faceCount);

  // Framer Motion rotation value (in degrees); increments/decrements indefinitely
  const rotation = useMotionValue(0);

  // Convert the numeric rotation value to a CSS transform string
  const cylinderTransform = useTransform(rotation, (r) => `rotateY(${r}deg)`);

  function handleNext() {
    animate(rotation, rotation.get() - rotationStep, {
      duration: 0.6,
      ease: "easeInOut",
    });
  }

  function handlePrev() {
    animate(rotation, rotation.get() + rotationStep, {
      duration: 0.6,
      ease: "easeInOut",
    });
  }

  return (
    <div className="flex flex-col items-center gap-8 select-none">
      {/* 3D Stage — outer perspective container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          perspective: "1000px",
          width: `${faceWidth}px`,
          height: "420px",
        }}
      >
        {/* Rotating cylinder — preserve-3d inner container driven by Framer Motion */}
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            transform: cylinderTransform,
            width: `${faceWidth}px`,
            height: "100%",
            position: "relative",
          }}
        >
          {cards.map((card, index) => {
            const angle = rotationStep * index;

            return (
              <div
                key={card.title}
                className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] shadow-2xl"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  width: `${faceWidth}px`,
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Certificate image */}
                <div className="relative h-64 w-full overflow-hidden bg-white/5">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-contain p-6"
                    sizes={`${faceWidth}px`}
                  />
                </div>

                {/* Certificate title */}
                <div className="flex items-center justify-center px-4 py-5">
                  <h3 className="text-center text-base font-semibold leading-snug text-white">
                    {card.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center gap-6">
        <button
          onClick={handlePrev}
          aria-label="Previous certificate"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next certificate"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
