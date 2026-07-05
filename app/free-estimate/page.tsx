"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateCTA } from "@/components/EstimateCTA";
import { ContactStrip } from "@/components/ContactStrip";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

const SERVICE_OPTIONS = [
  "Ballustrades",
  "Doors",
  "Gates",
  "Media Unit",
  "Reception / Kiosk",
  "Staircase",
  "Wardrobes or Storage",
  "Windows",
  "Other",
];

export default function FreeEstimatePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: new Set<string>(),
    requirements: "",
    _gotcha: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleService = (s: string) => {
    const next = new Set(form.services);
    if (next.has(s)) next.delete(s);
    else next.add(s);
    setForm({ ...form, services: next });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Free estimate request from ${form.name || "the website"}`,
          _gotcha: form._gotcha,
          form: "Free Estimate",
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          services: Array.from(form.services).join(", "),
          requirements: form.requirements,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          (data && Array.isArray(data.errors) && data.errors[0]?.message) ||
            "Something went wrong sending your request.",
        );
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const sent = status === "sent";
  const sending = status === "sending";

  return (
    <>
      <SiteHeader />
      <main className="bg-creamHome">
        <PageHeader
          title="Free Estimate"
          size="md"
          intro="Please fill in the form below with as much detail as possible and we'll be in touch with your free estimation:"
        />

        <section className="max-w-form mx-auto px-6 pb-16">
          {sent ? (
            <p className="text-successGreen font-semibold text-center">
              Thanks — your request has been noted. We&apos;ll be in touch with
              your free estimate shortly.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form._gotcha}
                onChange={(e) =>
                  setForm({ ...form, _gotcha: e.target.value })
                }
                className="absolute -left-[10000px] w-px h-px opacity-0"
              />
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-borderInput px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-maroon"
                  />
                </Field>
                <Field label="Email Address" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-borderInput px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-maroon"
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-borderInput px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-maroon"
                  />
                </Field>
                <Field label="Address">
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    className="w-full border border-borderInput px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-maroon"
                  />
                </Field>
              </div>

              <fieldset>
                <legend className="block text-[13px] font-semibold text-ink mb-2.5">
                  What are you looking for us to do?{" "}
                  <span className="text-maroon">*</span>
                </legend>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                  {SERVICE_OPTIONS.map((s) => (
                    <label
                      key={s}
                      className="flex items-center gap-2 text-[14px] text-body cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={form.services.has(s)}
                        onChange={() => toggleService(s)}
                        className="w-4 h-4"
                        style={{ accentColor: "#7c1616" }}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field label="Your Requirements" required>
                <textarea
                  required
                  rows={6}
                  placeholder="Please enter as much detail as possible"
                  value={form.requirements}
                  onChange={(e) =>
                    setForm({ ...form, requirements: e.target.value })
                  }
                  className="w-full border border-borderInput px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-maroon"
                />
              </Field>

              <button
                type="submit"
                disabled={sending}
                className="bg-maroon-button text-white text-[15px] font-semibold btn-lift px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Enquiry"}
              </button>
              {status === "error" && (
                <p className="text-maroon text-[14px] mt-2">
                  {errorMsg ?? "Something went wrong. Please try again or email us directly."}
                </p>
              )}
            </form>
          )}
        </section>
      </main>
      <EstimateCTA />
      <ContactStrip />
      <SiteFooter />
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-ink mb-1.5">
        {label}
        {required && <span className="text-maroon"> *</span>}
      </span>
      {children}
    </label>
  );
}
