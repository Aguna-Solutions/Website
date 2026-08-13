import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const { name, email, subject, message } = await request.json();

    // Check all four SMTP env vars — any missing → 500 Server configuration error
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    try {
      // Create Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: false,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      // Send email
      await transporter.sendMail({
        from: SMTP_USER,
        to: "info@agunasolutions.com",
        subject: `New Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        html: `<h3>New Contact Form Submission</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message}</p>`,
      });

      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch {
      console.error("Failed to send email via SMTP");
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch {
    // Outer catch: handles JSON parse errors and any other unexpected exceptions
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(null, { status: 405 });
}

export async function PUT() {
  return NextResponse.json(null, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json(null, { status: 405 });
}

export async function PATCH() {
  return NextResponse.json(null, { status: 405 });
}
