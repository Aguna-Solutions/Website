// Feature: corporate-website-rebuild, Property 6

import * as fc from "fast-check";
import { computeColor } from "../../components/ScrollBackground";

describe("ScrollBackground color interpolation", () => {
  it("Property 6: Color interpolation is mathematically exact", () => {
    // Chained arbitraries: innerHeight < scrollHeight, scrollY in [0, scrollHeight - innerHeight]
    const arb = fc.integer({ min: 200, max: 800 }).chain((innerHeight) =>
      fc.integer({ min: innerHeight + 1, max: innerHeight + 5000 }).chain((scrollHeight) =>
        fc.integer({ min: 0, max: scrollHeight - innerHeight }).map((scrollY) => ({
          scrollY,
          scrollHeight,
          innerHeight,
        }))
      )
    );

    fc.assert(
      fc.property(arb, ({ scrollY, scrollHeight, innerHeight }) => {
        const maxScroll = scrollHeight - innerHeight;
        const progress = scrollY / maxScroll;
        const color = computeColor(scrollY, scrollHeight, innerHeight);

        if (progress <= 0.5) {
          const t = progress * 2;
          const r = Math.round(5 + t * 15);
          const g = Math.round(10 + t * 30);
          const b = Math.round(30 + t * 50);
          expect(color).toBe(`rgb(${r}, ${g}, ${b})`);
        } else {
          const t = (progress - 0.5) * 2;
          const r = Math.round(20 - t * 10);
          const g = Math.round(40 - t * 20);
          const b = Math.round(80 - t * 30);
          expect(color).toBe(`rgb(${r}, ${g}, ${b})`);
        }
      }),
      { numRuns: 1000 }
    );
  });

  it("Continuity at progress=0.5 produces rgb(20,40,80)", () => {
    // At exactly progress=0.5: both branches should yield rgb(20,40,80)
    // scrollY = maxScroll * 0.5 → set scrollHeight=1000, innerHeight=0 → maxScroll=1000 → scrollY=500
    const color = computeColor(500, 1000, 0);
    expect(color).toBe("rgb(20, 40, 80)");
  });
});
