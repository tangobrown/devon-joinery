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
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <SiteHeader />
      <main className="bg-cream">
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
                  <div className="text-body text-[14px] leading-[1.6]">
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
            <h2 className="text-[24px] md:text-[30px] font-bold text-ink mb-6">
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
                  className="bg-maroon-button text-white text-[13px] font-semibold px-6 py-3"
                >
                  Send Enquiry
                </button>
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
