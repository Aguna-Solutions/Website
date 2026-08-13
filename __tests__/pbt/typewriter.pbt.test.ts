// Feature: corporate-website-rebuild, Property 1

import * as fc from "fast-check";
import { simulateTypewriterMachine } from "../../components/ui/typewriter";

describe("Typewriter state machine", () => {
  it("Property 1: Typewriter completes full cycle for any word list", () => {
    fc.assert(
      fc.property(
        fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
        (words) => {
          const sm = simulateTypewriterMachine(words);
          for (const word of words) {
            expect(sm.peakFor(word)).toBe(word);
          }
        }
      ),
      { numRuns: 200 }
    );
  });
});
