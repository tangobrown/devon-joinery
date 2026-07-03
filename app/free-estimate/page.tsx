"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateCTA } from "@/components/EstimateCTA";
import { ContactStrip } from "@/components/ContactStrip";
import { PageHeader } from "@/components/PageHeader";

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
  });
  const [sent, setSent] = useState(false);

  const toggleService = (s: string) => {
    const next = new Set(form.services);
    if (next.has(s)) next.delete(s);
    else next.add(s);
    setForm({ ...form, services: next });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
                className="bg-maroon-button text-white text-[13px] font-semibold px-6 py-3"
              >
                Send Enquiry
              </button>
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
