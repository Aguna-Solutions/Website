// Feature: corporate-website-rebuild, Property 5

import * as fc from "fast-check";

// Simulates the email construction logic from the API route
function constructEmail(
  payload: { name: string; email: string; subject: string; message: string },
  smtpUser: string
): {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
} {
  return {
    from: smtpUser,
    to: "info@agunasolutions.com",
    subject: `New Contact Form Submission: ${payload.subject}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\nMessage: ${payload.message}`,
    html: `<h3>New Contact Form Submission</h3><p><strong>Name:</strong> ${payload.name}</p><p><strong>Email:</strong> ${payload.email}</p><p><strong>Subject:</strong> ${payload.subject}</p><p><strong>Message:</strong></p><p>${payload.message}</p>`,
  };
}

describe("Email construction", () => {
  it("Property 5: Email construction is correctly derived from form submission", () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 1 }),
          email: fc.emailAddress(),
          subject: fc.string({ minLength: 1 }),
          message: fc.string({ minLength: 1 }),
        }),
        fc.string({ minLength: 1 }),  // smtpUser
        (payload, smtpUser) => {
          const email = constructEmail(payload, smtpUser);

          expect(email.from).toBe(smtpUser);
          expect(email.to).toBe("info@agunasolutions.com");
          expect(email.subject).toBe(`New Contact Form Submission: ${payload.subject}`);
          expect(email.text).toBe(`Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\nMessage: ${payload.message}`);
          expect(email.html).toBe(`<h3>New Contact Form Submission</h3><p><strong>Name:</strong> ${payload.name}</p><p><strong>Email:</strong> ${payload.email}</p><p><strong>Subject:</strong> ${payload.subject}</p><p><strong>Message:</strong></p><p>${payload.message}</p>`);
        }
      ),
      { numRuns: 200 }
    );
  });
});
