import Image from "next/image";
import { propertyShares, flats } from "@/data/properties";
import PropertyShareCard from "@/components/PropertyShareCard";
import FlatCard from "@/components/FlatCard";
import Button from "@/components/Button";
import { getWhatsAppLink, getGeneralMessage } from "@/lib/whatsapp";
import SearchFilter from "@/components/SearchFilter";

export default function HomePage() {
  return (
    <>
      {/* SECTION 01 — HERO + SEARCH */}
      <section className="relative overflow-hidden border-b border-[#D9D6CF]">
        <div className="container-main">
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
            <div className="lg:col-span-6">
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C9824B]">
                Verified Property Opportunities
              </p>
              <h1 className="mb-6 text-[42px] font-semibold leading-[1.05] tracking-tight text-[#101820] md:text-[56px] lg:text-[64px]">
                Find Property Opportunities Worth Exploring.
              </h1>
              <p className="mb-8 max-w-lg text-[17px] leading-relaxed text-[#667078] md:text-[18px]">
                Explore carefully reviewed property shares and residential flats across selected locations in Bangladesh. Find an opportunity, understand the details, then speak directly with our team.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="#property-shares" variant="primary" size="large">
                  Explore Opportunities
                </Button>
                <Button
                  href={getWhatsAppLink(getGeneralMessage())}
                  external
                  variant="secondary"
                  size="large"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
                  alt="Modern residential architecture in Bangladesh"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Search Panel */}
        <div className="border-t border-[#D9D6CF] bg-white">
          <div className="container-main py-6 md:py-8">
            <SearchFilter />
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROPERTY SHARES */}
      <section id="property-shares" className="section-padding">
        <div className="container-main">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#101820] md:text-[40px] lg:text-[44px]">
              Verified Property Shares
            </h2>
            <p className="text-[16px] leading-relaxed text-[#667078] md:text-[17px]">
              Explore selected projects with clearly presented land, property and availability information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {propertyShares.map((property) => (
              <PropertyShareCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — FLATS FOR SALE */}
      <section id="flats" className="section-padding border-t border-[#D9D6CF] bg-white">
        <div className="container-main">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#101820] md:text-[40px] lg:text-[44px]">
              Flats Available
            </h2>
            <p className="text-[16px] leading-relaxed text-[#667078] md:text-[17px]">
              Explore selected residential flats with verified property information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {flats.map((flat) => (
              <FlatCard key={flat.id} flat={flat} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHY VERIFIED */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#101820] md:text-[40px] lg:text-[44px]">
              Not Every Property Becomes a Listing.
            </h2>
            <p className="text-[16px] leading-relaxed text-[#667078] md:text-[17px]">
              Every opportunity goes through our review process before appearing on the platform.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Owner / Developer Reviewed",
                desc: "Identity and ownership information are reviewed by our team.",
              },
              {
                title: "Documents Reviewed",
                desc: "Relevant property and project documentation is checked.",
              },
              {
                title: "Location Verified",
                desc: "The listed property location is confirmed.",
              },
              {
                title: "Availability Confirmed",
                desc: "Current share or flat availability is confirmed before publication.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[10px] border border-[#D9D6CF] bg-white p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#101820]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M15 4.5L6.75 12.75L3 9"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-[17px] font-semibold text-[#101820]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#667078]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — HOW IT WORKS */}
      <section className="section-padding border-t border-[#D9D6CF] bg-white">
        <div className="container-main">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#101820] md:text-[40px] lg:text-[44px]">
              How It Works
            </h2>
            <p className="text-[16px] leading-relaxed text-[#667078] md:text-[17px]">
              A clear path from discovery to offline discussion. No online payments or bookings.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[#D9D6CF]" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {[
                { step: "01", title: "Explore", desc: "Browse verified property opportunities." },
                { step: "02", title: "Understand", desc: "Review project, property and availability details." },
                { step: "03", title: "Connect", desc: "Contact our team through WhatsApp." },
                { step: "04", title: "Visit", desc: "Visit our physical office for detailed discussion." },
                { step: "05", title: "Proceed", desc: "Continue through the offline process and agreement." },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D9D6CF] bg-white text-[18px] font-semibold text-[#101820] lg:relative lg:z-10">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-[18px] font-semibold text-[#101820]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#667078]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHATSAPP CTA */}
      <section className="section-padding bg-[#101820]">
        <div className="container-main">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-white md:text-[40px] lg:text-[44px]">
              Have a Property in Mind? Let&apos;s Talk.
            </h2>
            <p className="mb-8 text-[16px] leading-relaxed text-[#8B9298] md:text-[17px]">
              Ask about availability, pricing, documents or project details directly through WhatsApp.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={getWhatsAppLink(getGeneralMessage())}
                external
                variant="whatsapp"
                size="large"
              >
                Chat on WhatsApp
              </Button>
              <Button
                href="tel:+8801712345678"
                variant="secondary"
                size="large"
                className="!border-white/30 !text-white hover:!bg-white hover:!text-[#101820]"
              >
                Call Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — PHYSICAL OFFICE */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#101820] md:text-[40px]">
                Prefer to Discuss It in Person?
              </h2>
              <p className="mb-8 text-[16px] leading-relaxed text-[#667078] md:text-[17px]">
                Visit our office and speak directly with our property team. Important discussions happen face to face.
              </p>

              <div className="mb-8 space-y-4">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8B9298]">
                    Address
                  </p>
                  <p className="mt-1 text-[16px] text-[#101820]">
                    House 12, Road 5, Banani<br />
                    Dhaka 1213, Bangladesh
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8B9298]">
                    Hours
                  </p>
                  <p className="mt-1 text-[16px] text-[#101820]">
                    Saturday – Thursday: 10:00 – 18:00
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8B9298]">
                    Contact
                  </p>
                  <p className="mt-1 text-[16px] text-[#101820]">
                    +880 1712-345678
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  href="https://maps.google.com/?q=Banani+Dhaka"
                  external
                  variant="primary"
                >
                  Get Directions
                </Button>
                <Button
                  href={getWhatsAppLink(getGeneralMessage())}
                  external
                  variant="secondary"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] border border-[#D9D6CF] bg-[#D9D6CF]">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.683981234567!2d90.4043!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzM3LjMiTiA5MMKwMjQnMTUuNSJF!5e0!3m2!1sen!2sbd!4v1"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
