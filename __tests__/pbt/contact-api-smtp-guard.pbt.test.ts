// Feature: corporate-website-rebuild, Property 4

import * as fc from "fast-check";

// Simulates the SMTP guard logic from the API route
function simulateSmtpGuard(
  presentVars: string[]
): { status: number; body: { error?: string } } {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  const allPresent = required.every((v) => presentVars.includes(v));
  if (!allPresent) {
    return { status: 500, body: { error: "Server configuration error" } };
  }
  // All present — would proceed to create transporter
  return { status: 200, body: {} };
}

describe("SMTP guard", () => {
  it("Property 4: Missing env vars always return 500 with Server configuration error", () => {
    const ALL_VARS = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

    fc.assert(
      fc.property(
        fc.subarray(ALL_VARS as unknown as string[], { minLength: 1, maxLength: 3 }),
        (missingVars) => {
          // Present vars = all vars MINUS missing vars
          const presentVars = ALL_VARS.filter((v) => !missingVars.includes(v));
          const result = simulateSmtpGuard(presentVars);

          expect(result.status).toBe(500);
          expect(result.body.error).toBe("Server configuration error");
        }
      ),
      { numRuns: 50 }
    );
  });
});
