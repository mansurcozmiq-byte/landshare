"use client";

import Image from "next/image";
import Link from "next/link";
import { PropertyShare } from "@/data/properties";
import AvailabilityIndicator from "./AvailabilityIndicator";
import { getWhatsAppLink, getPropertyShareMessage } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

type Props = { property: PropertyShare };

export default function PropertyShareCard({ property }: Props) {
  const { t } = useLanguage();

  return (
    <article className="group flex flex-col overflow-hidden rounded-[10px] border border-[#E2E8F0] bg-white transition-shadow hover:shadow-[0_4px_24px_rgba(14,165,233,0.08)]">
      <Link href={`/property-shares/${property.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-4 top-4">
          <span className="inline-block rounded-[4px] bg-[#0EA5E9] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white">
            {t("propertyShareLabel")}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-1">
          <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#F59E0B]">
            {property.status}
          </span>
        </div>
        <Link href={`/property-shares/${property.slug}`}>
          <h3 className="mb-1 text-[22px] font-semibold leading-tight tracking-tight text-[#0F172A] transition-colors group-hover:text-[#0EA5E9] md:text-[24px]">
            {property.title}
          </h3>
        </Link>
        <p className="mb-5 text-[14px] text-[#64748B]">{property.location}</p>

        <div className="mb-5 grid grid-cols-3 gap-3 border-y border-[#E2E8F0] py-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">{t("land")}</p>
            <p className="mt-0.5 text-[15px] font-semibold text-[#0F172A]">{property.landArea}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">{t("totalShares")}</p>
            <p className="mt-0.5 text-[15px] font-semibold text-[#0F172A]">{property.totalShares}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">{t("available")}</p>
            <p className="mt-0.5 text-[15px] font-semibold text-[#F59E0B]">{property.availableShares}</p>
          </div>
        </div>

        <AvailabilityIndicator
          booked={property.bookedShares}
          available={property.availableShares}
          total={property.totalShares}
          compact
        />

        <div className="mt-6 flex items-center gap-3">
          <Link
            href={`/property-shares/${property.slug}`}
            className="flex-1 rounded-[5px] bg-[#0EA5E9] py-3 text-center text-[14px] font-medium text-white transition-colors hover:bg-[#0284C7]"
          >
            {t("viewProject")}
          </Link>
          <a
            href={getWhatsAppLink(getPropertyShareMessage(property.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[5px] border border-[#E2E8F0] px-4 py-3 text-[13px] font-medium text-[#64748B] transition-colors hover:border-[#0EA5E9] hover:text-[#0EA5E9]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
