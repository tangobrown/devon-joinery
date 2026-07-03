import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";

type Props = {
  withIntro?: boolean;
  id?: string;
};

export function ExpertiseGrid({ withIntro = false, id }: Props) {
  return (
    <>
      {withIntro && (
        <section className="max-w-article mx-auto px-6 pt-14 md:pt-16 pb-2 text-center">
          <p className="text-[18px] md:text-[20px] font-medium leading-[1.55] text-[#2b333c]">
            Devon Joinery crafts bespoke kitchens, fitted wardrobes, windows,
            doors, and architectural joinery. Discover how we can transform
            your entire space with the same dedication to quality and
            craftsmanship.
          </p>
        </section>
      )}
      <section
        id={id}
        className="max-w-content mx-auto px-6 pt-10 md:pt-12 pb-5"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-[18px]">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
