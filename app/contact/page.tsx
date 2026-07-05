"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateCTA } from "@/components/EstimateCTA";
import { ContactStrip } from "@/components/ContactStrip";
import { PageHeader } from "@/components/PageHeader";
import { EmailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
          _subject: `New contact enquiry from ${form.name || "the website"}`,
          form: "Contact",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          (data && Array.isArray(data.errors) && data.errors[0]?.message) ||
            "Something went wrong sending your message.",
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
          title="Contact Us"
          size="md"
          intro="We'd love to hear from you. Please find our contact details below or fill in the contact form and one of our team will get back to you shortly."
        />

        <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <div className="space-y-5 mb-8">
              <ContactRow
                icon={<PhoneIcon className="w-5 h-5" />}
                label="Phone"
                value={
                  <a
                    href={site.phoneHref}
                    className="text-body text-[15px] hover:text-maroon"
                  >
                    {site.phone}
                  </a>
                }
              />
              <ContactRow
                icon={<EmailIcon className="w-5 h-5" />}
                label="Email"
                value={
                  <a
                    href={site.emailHref}
                    className="text-body text-[15px] hover:text-maroon break-all"
                  >
                    {site.email}
                  </a>
                }
              />
              <ContactRow
                icon={<MapPinIcon className="w-5 h-5" />}
                label="Address"
                value={
                  <div className="text-body text-[15px] leading-[1.6]">
                    Clyst Court, Blackmore Rd, Hill Barton Business Park
                    <br />
                    Clyst St. Mary, Exeter, Devon EX5 1SA
                  </div>
                }
              />
            </div>
            <div className="border border-borderCream">
              <iframe
                title="Devon Joinery on Google Maps"
                src={site.mapEmbedSrc}
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-ink mb-6">
              Send Message
            </h2>
            {sent ? (
              <p className="text-successGreen font-semibold">
                Thanks — your enquiry has been noted. We&apos;ll be in touch
                shortly.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <FormInput
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <FormInput
                  type="email"
                  label="Email Address"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <FormInput
                  type="tel"
                  label="Phone"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  required
                />
                <FormTextarea
                  label="Your Message"
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  required
                  rows={6}
                />
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
          </div>
        </section>
      </main>
      <EstimateCTA />
      <ContactStrip />
      <SiteFooter />
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-maroon text-white flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-ink text-[13px] font-semibold uppercase tracking-wide mb-1">
          {label}
        </div>
        {value}
      </div>
    </div>
  );
}

function FormInput({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-ink mb-1.5">
        {label}
        {required && <span className="text-maroon"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-borderInput px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-maroon"
      />
    </label>
  );
}

function FormTextarea({
  label,
  value,
  onChange,
  required,
  rows = 4,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-ink mb-1.5">
        {label}
        {required && <span className="text-maroon"> *</span>}
      </span>
      <textarea
        required={required}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-borderInput px-3 py-2.5 text-[14px] bg-white focus:outline-none focus:border-maroon"
      />
    </label>
  );
}
