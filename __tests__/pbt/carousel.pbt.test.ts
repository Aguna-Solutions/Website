// Feature: corporate-website-rebuild, Property 3

import * as fc from "fast-check";
import { computeCarouselRadius, computeRotationStep } from "../../components/ui/3d-carousel";

describe("Carousel 3D mathematics", () => {
  it("Property 3: Carousel 3D mathematics correctness", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 20 }),
        fc.float({ min: 100, max: 1000, noNaN: true }),
        (faceCount, faceWidth) => {
          const radius = computeCarouselRadius(faceWidth, faceCount);
          const step = computeRotationStep(faceCount);

          // Radius formula check
          expect(radius).toBeCloseTo((faceWidth * faceCount) / (2 * Math.PI), 10);
          // Step formula check
          expect(step).toBeCloseTo(360 / faceCount, 10);
          // step * faceCount ≈ 360
          expect(Math.abs(step * faceCount - 360)).toBeLessThan(0.0001);
        }
      ),
      { numRuns: 500 }
    );
  });
});
