"use client";

import Link from "next/link";
import { getWhatsAppLink, getGeneralMessage } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#E2E8F0] bg-[#0F172A] text-white">
      <div className="container-main section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#0EA5E9]">
                  <span className="text-sm font-bold tracking-tight text-white">LS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold leading-tight tracking-tight text-white">
                    LandShare
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">
                    Verified Property
                  </span>
                </div>
              </div>
            </div>
            <p className="max-w-xs text-[14px] leading-relaxed text-[#94A3B8]">
              {t("heroSubtitle").slice(0, 120)}...
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#property-shares" className="text-[14px] text-white/90 hover:text-[#0EA5E9]">
                  {t("navPropertyShares")}
                </Link>
              </li>
              <li>
                <Link href="/#flats" className="text-[14px] text-white/90 hover:text-[#0EA5E9]">
                  {t("navFlats")}
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-[14px] text-white/90 hover:text-[#0EA5E9]">
                  {t("navLocations")}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[14px] text-white/90 hover:text-[#0EA5E9]">
                  {t("navHowItWorks")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/list-property" className="text-[14px] text-white/90 hover:text-[#0EA5E9]">
                  {t("navListProperty")}
                </Link>
              </li>
              <li>
                <a
                  href={getWhatsAppLink(getGeneralMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/90 hover:text-[#0EA5E9]"
                >
                  {t("chatOnWhatsApp")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
              Visit Us
            </h4>
            <address className="not-italic text-[14px] leading-relaxed text-white/90">
              <p>House 12, Road 5</p>
              <p>Banani, Dhaka 1213</p>
              <p className="mt-3">Bangladesh</p>
              <p className="mt-4 text-[#94A3B8]">{t("officeHoursValue")}</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-[13px] text-[#94A3B8]">
            © {new Date().getFullYear()} LandShare. All rights reserved.
          </p>
          <p className="text-[13px] text-[#94A3B8]">
            Listings are curated and verified by our internal team.
          </p>
        </div>
      </div>
    </footer>
  );
}
