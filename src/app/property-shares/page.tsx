import { propertyShares } from "@/data/properties";
import PropertyShareCard from "@/components/PropertyShareCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Shares",
  description:
    "Explore verified property share opportunities across selected locations in Bangladesh. Clear land, share and availability information.",
};

export default function PropertySharesPage() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C9824B]">
            Curated Opportunities
          </p>
          <h1 className="mb-4 text-[36px] font-semibold tracking-tight text-[#101820] md:text-[44px]">
            Verified Property Shares
          </h1>
          <p className="text-[16px] leading-relaxed text-[#667078] md:text-[17px]">
            Explore selected projects with clearly presented land, property and availability information. Every listing has been reviewed by our team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {propertyShares.map((property) => (
            <PropertyShareCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
