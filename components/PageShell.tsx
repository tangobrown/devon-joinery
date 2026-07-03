import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateCTA } from "@/components/EstimateCTA";
import { ContactStrip } from "@/components/ContactStrip";

type Props = {
  children: ReactNode;
  header?: "solid" | "none";
};

export function PageShell({ children, header = "solid" }: Props) {
  return (
    <>
      {header === "solid" && <SiteHeader />}
      <main className="bg-cream">{children}</main>
      <EstimateCTA />
      <ContactStrip />
      <SiteFooter />
    </>
  );
}
