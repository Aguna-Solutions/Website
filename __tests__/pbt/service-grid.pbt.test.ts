// Feature: corporate-website-rebuild, Property 2

import * as fc from "fast-check";
import { renderServiceGrid } from "../../components/ServiceOfferings";
import type { Service } from "../../lib/data/services";
import { Shield } from "lucide-react";

describe("Service grid", () => {
  it("Property 2: Service grid caps at exactly 12 cards", () => {
    fc.assert(
      fc.property(
        fc.array(
          fc
            .record({
              title: fc.string(),
              description: fc.string(),
              fullDescription: fc.string(),
              coverage: fc.array(fc.string()),
            })
            .map((rec) => ({ ...rec, icon: Shield }) as Service)
        ),
        (services) => {
          const { cardCount } = renderServiceGrid(services);
          expect(cardCount).toBe(Math.min(services.length, 12));
        }
      ),
      { numRuns: 200 }
    );
  });
});
