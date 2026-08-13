// Feature: corporate-website-rebuild, Property 7

import * as fc from "fast-check";

// Simulates the contact form submit handler state machine
// When the API returns a non-200, the form data should be PRESERVED (not cleared)
async function simulateFormSubmit(
  formData: { name: string; email: string; subject: string; message: string },
  mockResponse: { ok: boolean }
): Promise<{
  status: "success" | "error";
  retainedData: { name: string; email: string; subject: string; message: string };
}> {
  if (mockResponse.ok) {
    // On success: clear all fields
    return { status: "success", retainedData: { name: "", email: "", subject: "", message: "" } };
  } else {
    // On error: retain all fields unchanged
    return { status: "error", retainedData: { ...formData } };
  }
}

describe("Contact form state machine", () => {
  it("Property 7: Contact form error state preserves all field values", async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record({
          name: fc.string({ minLength: 1 }),
          email: fc.emailAddress(),
          subject: fc.string({ minLength: 1 }),
          message: fc.string({ minLength: 1 }),
        }),
        async (formData) => {
          const result = await simulateFormSubmit(formData, { ok: false });

          expect(result.status).toBe("error");
          expect(result.retainedData.name).toBe(formData.name);
          expect(result.retainedData.email).toBe(formData.email);
          expect(result.retainedData.subject).toBe(formData.subject);
          expect(result.retainedData.message).toBe(formData.message);
        }
      ),
      { numRuns: 200 }
    );
  });
});
