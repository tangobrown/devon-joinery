import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

/** Friendly labels for known fields; anything else falls back to its key. */
const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  address: "Address",
  services: "Services",
  requirements: "Requirements",
  message: "Message",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Fields shown in the email: skip control keys (_subject, _gotcha, form) and blanks. */
function visibleEntries(body: Payload): [string, string][] {
  return Object.entries(body)
    .filter(
      ([key, value]) =>
        !key.startsWith("_") &&
        key !== "form" &&
        value != null &&
        String(value).trim() !== "",
    )
    .map(([key, value]) => [key, String(value)]);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a filled hidden field means a bot. Pretend success, send nothing.
  if (typeof body._gotcha === "string" && body._gotcha.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send enquiry email.");
    return NextResponse.json(
      { error: "Enquiries are temporarily unavailable. Please email us directly." },
      { status: 500 },
    );
  }

  const formName = typeof body.form === "string" ? body.form : "Website";
  const subject =
    typeof body._subject === "string" && body._subject.trim() !== ""
      ? body._subject
      : `New ${formName} enquiry from the website`;
  const replyTo =
    typeof body.email === "string" && body.email.trim() !== ""
      ? body.email
      : undefined;

  const entries = visibleEntries(body);
  const rows = entries
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 14px 4px 0;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(
          FIELD_LABELS[key] ?? key,
        )}</td><td style="padding:4px 0">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");
  const html = `<div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;color:#222">
    <p>New <strong>${escapeHtml(formName)}</strong> enquiry from the ${escapeHtml(site.name)} website.</p>
    <table style="border-collapse:collapse">${rows}</table>
  </div>`;
  const text = entries
    .map(([key, value]) => `${FIELD_LABELS[key] ?? key}: ${value}`)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: site.mailFrom,
        to: [site.email],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend send failed:", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your enquiry. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend request error:", err);
    return NextResponse.json(
      { error: "Could not send your enquiry. Please email us directly." },
      { status: 502 },
    );
  }
}
