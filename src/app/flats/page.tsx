import { flats } from "@/data/properties";
import FlatCard from "@/components/FlatCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flats for Sale",
  description:
    "Explore selected residential flats with verified property information across Dhaka and surrounding areas.",
};

export default function FlatsPage() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C9824B]">
            Residential Flats
          </p>
          <h1 className="mb-4 text-[36px] font-semibold tracking-tight text-[#101820] md:text-[44px]">
            Flats Available
          </h1>
          <p className="text-[16px] leading-relaxed text-[#667078] md:text-[17px]">
            Explore selected residential flats with verified property information. Speak with our team for pricing and full details.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {flats.map((flat) => (
            <FlatCard key={flat.id} flat={flat} />
          ))}
        </div>
      </div>
    </section>
  );
}
