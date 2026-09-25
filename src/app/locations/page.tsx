import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Explore verified property opportunities across selected locations in Bangladesh including Dhaka, Uttara, Purbachal, Bashundhara and Mirpur.",
};

const locations = [
  {
    name: "Purbachal",
    desc: "A major planned residential and mixed-use area east of Dhaka with growing infrastructure and long-term development potential.",
    focus: "Property Shares",
  },
  {
    name: "Bashundhara",
    desc: "An established residential zone with strong amenities, educational institutions and commercial activity.",
    focus: "Shares & Flats",
  },
  {
    name: "Uttara",
    desc: "A well-connected northern residential area with mature infrastructure and good transport links.",
    focus: "Flats & Shares",
  },
  {
    name: "Mirpur",
    desc: "A dense and accessible residential area with diverse housing options and improving connectivity.",
    focus: "Flats",
  },
  {
    name: "Dhaka (Selected)",
    desc: "Curated opportunities across selected pockets of greater Dhaka based on verification and project quality.",
    focus: "Selective",
  },
];

export default function LocationsPage() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C9824B]">
            Areas We Cover
          </p>
          <h1 className="mb-4 text-[36px] font-semibold tracking-tight text-[#101820] md:text-[44px]">
            Locations
          </h1>
          <p className="text-[16px] leading-relaxed text-[#667078] md:text-[17px]">
            We focus on carefully selected locations where we can meaningfully review and verify property opportunities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-[10px] border border-[#D9D6CF] bg-white p-6 md:p-8"
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[22px] font-semibold text-[#101820]">
                  {loc.name}
                </h2>
                <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#C9824B]">
                  {loc.focus}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-[#667078]">
                {loc.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#property-shares"
            className="inline-flex items-center text-[15px] font-medium text-[#101820] hover:text-[#C9824B]"
          >
            View all property opportunities →
          </Link>
        </div>
      </div>
    </section>
  );
}
