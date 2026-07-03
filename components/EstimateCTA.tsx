import { ReviewBadge } from "@/components/ReviewBadge";

export function EstimateCTA() {
  return (
    <section className="mx-auto max-w-content px-6 pt-14">
      <div className="bg-gradient-to-b from-maroon to-maroon-dark px-6 pt-11 pb-10 text-center text-white">
        <div className="mb-[22px] flex justify-center">
          <ReviewBadge size="sm" variant="dark" />
        </div>
        <h2 className="text-[30px] md:text-[34px] font-bold mb-3.5">
          Get Your Free Estimate
        </h2>
        <p className="max-w-[520px] mx-auto text-[15px] leading-[1.6] text-white/90">
          Getting started with Devon Joinery is easy and hassle-free. Simply
          send us your requirements and we&apos;ll provide an obligation-free
          estimate.
        </p>
      </div>
    </section>
  );
}
