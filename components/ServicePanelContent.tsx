import { MaroonPanel, renderBoldMarkdown } from "@/components/MaroonPanel";
import type { MaroonPanelContent } from "@/lib/service-content";

type Props = {
  panel: MaroonPanelContent;
  cta?: { label: string; href: string };
};

export function ServicePanelSection({
  panel,
  cta = { label: "Free Estimate", href: "/free-estimate" },
}: Props) {
  return (
    <MaroonPanel
      heading={panel.heading}
      imagePosition={panel.imagePosition}
      imageLabel={panel.imageLabel}
      imageSrc={panel.imageSrc}
      cta={cta}
    >
      {panel.boldLead && (
        <p className="font-semibold text-white">
          {renderBoldMarkdown(panel.boldLead)}
        </p>
      )}
      {panel.paragraphs?.map((p, i) => (
        <p key={i}>{renderBoldMarkdown(p)}</p>
      ))}
      {panel.bullets && (
        <ul className="list-disc pl-5 space-y-2">
          {panel.bullets.map((b, i) => (
            <li key={i}>{renderBoldMarkdown(b)}</li>
          ))}
        </ul>
      )}
    </MaroonPanel>
  );
}
