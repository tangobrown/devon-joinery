import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Props = {
  serviceTitle: string;
};

export function ServiceGallery({ serviceTitle }: Props) {
  return (
    <section className="max-w-content mx-auto px-6 pt-2 pb-8">
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {[1, 2, 3].map((n) => (
          <ImagePlaceholder
            key={n}
            label={`${serviceTitle} photo ${n}`}
            ratio="1 / 1"
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-5">
        <span className="w-2 h-2 rounded-full bg-maroon" />
        <span className="w-2 h-2 rounded-full bg-[#cfcabb]" />
      </div>
    </section>
  );
}
