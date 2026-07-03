import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Props = {
  serviceTitle: string;
  images?: string[];
};

export function ServiceGallery({ serviceTitle, images }: Props) {
  const slots = [0, 1, 2];
  return (
    <section className="max-w-content mx-auto px-6 pt-2 pb-8">
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {slots.map((i) => (
          <ImagePlaceholder
            key={i}
            label={`${serviceTitle} photo ${i + 1}`}
            src={images?.[i]}
            alt={`${serviceTitle} ${i + 1}`}
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
