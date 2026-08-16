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

/** Site maroon, matched to the on-site brand colour. */
const BRAND = "#7c1616";

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

  const token = process.env.POSTMARK_SERVER_TOKEN;
  if (!token) {
    console.error("POSTMARK_SERVER_TOKEN is not set — cannot send enquiry email.");
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
        `<tr><td style="padding:6px 16px 6px 0;font-weight:600;vertical-align:top;white-space:nowrap;color:#555">${escapeHtml(
          FIELD_LABELS[key] ?? key,
        )}</td><td style="padding:6px 0;color:#222">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;border:1px solid #eee;border-radius:6px;overflow:hidden">
    <div style="background:${BRAND};color:#fff;padding:16px 20px;font-size:16px;font-weight:bold">
      ${escapeHtml(site.name)} — New ${escapeHtml(formName)} enquiry
    </div>
    <div style="padding:20px 24px">
      <table style="border-collapse:collapse;width:100%;font-size:15px">${rows}</table>
    </div>
  </div>`;
  const text = entries
    .map(([key, value]) => `${FIELD_LABELS[key] ?? key}: ${value}`)
    .join("\n");

  try {
    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": token,
      },
      body: JSON.stringify({
        From: site.mailFrom,
        To: site.email,
        ...(replyTo ? { ReplyTo: replyTo } : {}),
        Subject: subject,
        HtmlBody: html,
        TextBody: text,
        MessageStream: site.postmarkMessageStream,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Postmark send failed:", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your enquiry. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Postmark request error:", err);
    return NextResponse.json(
      { error: "Could not send your enquiry. Please email us directly." },
      { status: 502 },
    );
  }
}
