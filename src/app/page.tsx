"use client";

import Image from "next/image";
import { propertyShares, flats } from "@/data/properties";
import PropertyShareCard from "@/components/PropertyShareCard";
import FlatCard from "@/components/FlatCard";
import Button from "@/components/Button";
import { getWhatsAppLink, getGeneralMessage } from "@/lib/whatsapp";
import SearchFilter from "@/components/SearchFilter";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* SECTION 01 — HERO FULL WIDTH BG */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=85"
            alt="Modern residential architecture"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/70 to-[#0F172A]/40" />
        </div>

        <div className="container-main relative z-10 flex min-h-[85vh] flex-col justify-center py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F59E0B]">
              {t("heroEyebrow")}
            </p>
            <h1 className="mb-6 text-[40px] font-semibold leading-[1.08] tracking-tight text-white md:text-[52px] lg:text-[64px]">
              {t("heroTitle")}
            </h1>
            <p className="mb-8 max-w-lg text-[16px] leading-relaxed text-white/85 md:text-[18px]">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#property-shares" variant="accent" size="large">
                {t("heroCtaExplore")}
              </Button>
              <Button
                href={getWhatsAppLink(getGeneralMessage())}
                external
                variant="secondary"
                size="large"
                className="!border-white/40 !text-white hover:!bg-white hover:!text-[#0F172A]"
              >
                {t("heroCtaWhatsApp")}
              </Button>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10 bg-white">
          <div className="container-main py-6 md:py-8">
            <SearchFilter />
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROPERTY SHARES */}
      <section id="property-shares" className="section-padding">
        <div className="container-main">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#0F172A] md:text-[40px] lg:text-[44px]">
              {t("propertySharesTitle")}
            </h2>
            <p className="text-[16px] leading-relaxed text-[#64748B] md:text-[17px]">
              {t("propertySharesSubtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {propertyShares.map((property) => (
              <PropertyShareCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — FLATS */}
      <section id="flats" className="section-padding border-t border-[#E2E8F0] bg-white">
        <div className="container-main">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#0F172A] md:text-[40px] lg:text-[44px]">
              {t("flatsTitle")}
            </h2>
            <p className="text-[16px] leading-relaxed text-[#64748B] md:text-[17px]">
              {t("flatsSubtitle")}
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
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#0F172A] md:text-[40px] lg:text-[44px]">
              {t("whyTitle")}
            </h2>
            <p className="text-[16px] leading-relaxed text-[#64748B] md:text-[17px]">
              {t("whySubtitle")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              { title: t("why1Title"), desc: t("why1Desc") },
              { title: t("why2Title"), desc: t("why2Desc") },
              { title: t("why3Title"), desc: t("why3Desc") },
              { title: t("why4Title"), desc: t("why4Desc") },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[10px] border border-[#E2E8F0] bg-white p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#0EA5E9]">
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
                <h3 className="mb-2 text-[17px] font-semibold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#64748B]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — HOW IT WORKS */}
      <section className="section-padding border-t border-[#E2E8F0] bg-white">
        <div className="container-main">
          <div className="mb-12 max-w-2xl md:mb-16">
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#0F172A] md:text-[40px] lg:text-[44px]">
              {t("howTitle")}
            </h2>
            <p className="text-[16px] leading-relaxed text-[#64748B] md:text-[17px]">
              {t("howSubtitle")}
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[#E2E8F0]" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {[
                { step: "01", title: t("how1Title"), desc: t("how1Desc") },
                { step: "02", title: t("how2Title"), desc: t("how2Desc") },
                { step: "03", title: t("how3Title"), desc: t("how3Desc") },
                { step: "04", title: t("how4Title"), desc: t("how4Desc") },
                { step: "05", title: t("how5Title"), desc: t("how5Desc") },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#E2E8F0] bg-white text-[18px] font-semibold text-[#0EA5E9] lg:relative lg:z-10">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-[18px] font-semibold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#64748B]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHATSAPP CTA */}
      <section className="section-padding bg-[#0EA5E9]">
        <div className="container-main">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-white md:text-[40px] lg:text-[44px]">
              {t("waTitle")}
            </h2>
            <p className="mb-8 text-[16px] leading-relaxed text-white/85 md:text-[17px]">
              {t("waSubtitle")}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={getWhatsAppLink(getGeneralMessage())}
                external
                variant="whatsapp"
                size="large"
              >
                {t("chatOnWhatsApp")}
              </Button>
              <Button
                href="tel:+8801712345678"
                variant="secondary"
                size="large"
                className="!border-white/40 !text-white hover:!bg-white hover:!text-[#0F172A]"
              >
                {t("waCall")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — OFFICE */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-4 text-[32px] font-semibold tracking-tight text-[#0F172A] md:text-[40px]">
                {t("officeTitle")}
              </h2>
              <p className="mb-8 text-[16px] leading-relaxed text-[#64748B] md:text-[17px]">
                {t("officeSubtitle")}
              </p>

              <div className="mb-8 space-y-4">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
                    {t("officeAddress")}
                  </p>
                  <p className="mt-1 text-[16px] text-[#0F172A]">
                    House 12, Road 5, Banani<br />
                    Dhaka 1213, Bangladesh
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
                    {t("officeHours")}
                  </p>
                  <p className="mt-1 text-[16px] text-[#0F172A]">
                    {t("officeHoursValue")}
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
                    {t("officeContact")}
                  </p>
                  <p className="mt-1 text-[16px] text-[#0F172A]">
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
                  {t("getDirections")}
                </Button>
                <Button
                  href={getWhatsAppLink(getGeneralMessage())}
                  external
                  variant="secondary"
                >
                  {t("whatsappUs")}
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-[#E2E8F0]">
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
