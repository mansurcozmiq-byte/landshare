"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { getWhatsAppLink, getGeneralMessage } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/#property-shares", label: t("navPropertyShares") },
    { href: "/#flats", label: t("navFlats") },
    { href: "/locations", label: t("navLocations") },
    { href: "/how-it-works", label: t("navHowItWorks") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-sm">
      <div className="container-main">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[#0F172A] transition-colors hover:text-[#0EA5E9]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center rounded-[5px] border border-[#E2E8F0] p-0.5 text-[13px] font-medium">
              <button
                type="button"
                onClick={() => setLang("bn")}
                className={`rounded-[4px] px-2.5 py-1.5 transition-colors ${
                  lang === "bn"
                    ? "bg-[#0EA5E9] text-white"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                বাং
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-[4px] px-2.5 py-1.5 transition-colors ${
                  lang === "en"
                    ? "bg-[#0EA5E9] text-white"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="/list-property"
              className="text-[14px] font-medium text-[#64748B] transition-colors hover:text-[#0F172A]"
            >
              {t("navListProperty")}
            </Link>
            <Button
              href={getWhatsAppLink(getGeneralMessage())}
              external
              variant="primary"
              className="!h-10 !px-4 !text-[13px]"
            >
              {t("navWhatsApp")}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center rounded-[5px] border border-[#E2E8F0] p-0.5 text-[12px] font-medium">
              <button
                type="button"
                onClick={() => setLang("bn")}
                className={`rounded-[4px] px-2 py-1 transition-colors ${
                  lang === "bn" ? "bg-[#0EA5E9] text-white" : "text-[#64748B]"
                }`}
              >
                বাং
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-[4px] px-2 py-1 transition-colors ${
                  lang === "en" ? "bg-[#0EA5E9] text-white" : "text-[#64748B]"
                }`}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[4px] text-[#0F172A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#E2E8F0] bg-white lg:hidden">
          <div className="container-main py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[4px] px-3 py-3 text-[15px] font-medium text-[#0F172A]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/list-property"
                className="rounded-[4px] px-3 py-3 text-[15px] font-medium text-[#64748B]"
                onClick={() => setMobileOpen(false)}
              >
                {t("navListProperty")}
              </Link>
              <div className="mt-4">
                <Button
                  href={getWhatsAppLink(getGeneralMessage())}
                  external
                  variant="primary"
                  fullWidth
                >
                  {t("chatOnWhatsApp")}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
