import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  type: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    // ── Validation ────────────────────────────────────────────────
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: "NAME_IDENTIFIER must be at least 2 characters." },
        { status: 400 }
      );
    }
    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "UPLINK_SOURCE is not a valid email address." },
        { status: 400 }
      );
    }
    if (!body.message || body.message.trim().length < 10) {
      return NextResponse.json(
        { error: "ENCRYPTED_MESSAGE must be at least 10 characters." },
        { status: 400 }
      );
    }

    // ── Email dispatch ─────────────────────────────────────────────
    // To wire up real email sending, install and configure one of:
    //   - Resend:     npm install resend
    //   - Nodemailer: npm install nodemailer
    //   - Postmark:   npm install postmark
    //
    // Example with Resend:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'wilmarx@stappl.io',
    //   subject: `[Portfolio] ${body.type} — ${body.name}`,
    //   text: `From: ${body.name} <${body.email}>\n\n${body.message}`,
    // });

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("[contact] Received transmission:", {
        name: body.name,
        email: body.email,
        type: body.type,
        message: body.message.slice(0, 80),
      });
    }

    return NextResponse.json(
      {
        status: "TRANSMISSION_RECEIVED",
        message: "Your message has been received. Response incoming within 24h.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "SYSTEM_ERROR: Failed to process transmission." },
      { status: 500 }
    );
  }
}
