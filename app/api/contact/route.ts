import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, quoteSchema } from "@/lib/schemas";

function formatEmailBody(data: Record<string, any>) {
  return Object.entries(data)
    .map(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, " $1") // camelCase -> spaced
        .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
      return `${label}: ${value}`;
    })
    .join("\n");
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const isQuote = "propertyType" in body;

  const parsed = isQuote ? quoteSchema.safeParse(body) : contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  try {
    if (apiKey && toEmail && fromEmail) {
      const resend = new Resend(apiKey);
      const subject = isQuote
        ? `New quote request from ${parsed.data.name}`
        : `New contact form message from ${parsed.data.name}`;

      const heading = isQuote
        ? "You've received a new quote request"
        : "You've received a new contact form message";

      await resend.emails.send({
        from: `Vicmanny Integrated <${fromEmail}>`,
        to: toEmail,
        replyTo: parsed.data.email,
        subject,
        text: `${heading}\n\n${formatEmailBody(parsed.data)}`,
      });
    } else {
      // No email provider configured yet — log so local dev still works.
      console.log("[contact form submission]", parsed.data);
    }

    // Optional CRM webhook — fires only if configured, never blocks the response.
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      }).catch((err) => console.error("[crm webhook error]", err));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact form error]", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}