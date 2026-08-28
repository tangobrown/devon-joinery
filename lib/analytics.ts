/**
 * Fire a GA4 "generate_lead" event when a contact/estimate form is submitted,
 * so enquiries are countable in Google Analytics alongside sessions and device
 * split. gtag is loaded site-wide in app/layout.tsx; this no-ops if it isn't
 * present yet (e.g. before the script loads, or if the visitor blocks it).
 */
export function trackLead(formName: string): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (command: string, event: string, params?: Record<string, unknown>) => void;
  };
  w.gtag?.("event", "generate_lead", { form_name: formName });
}
