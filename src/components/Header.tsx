"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { getWhatsAppLink, getGeneralMessage } from "@/lib/whatsapp";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#property-shares", label: "Property Shares" },
  { href: "/#flats", label: "Flats" },
  { href: "/locations", label: "Locations" },
  { href: "/how-it-works", label: "How It Works" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9D6CF] bg-[#F5F3EE]/95 backdrop-blur-sm">
      <div className="container-main">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[#101820] transition-colors hover:text-[#C9824B]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/list-property"
              className="text-[14px] font-medium text-[#667078] transition-colors hover:text-[#101820]"
            >
              List Your Property
            </Link>
            <Button
              href={getWhatsAppLink(getGeneralMessage())}
              external
              variant="primary"
              className="!h-10 !px-4 !text-[13px]"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-[4px] text-[#101820] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#D9D6CF] bg-[#F5F3EE] lg:hidden">
          <div className="container-main py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[4px] px-3 py-3 text-[15px] font-medium text-[#101820]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/list-property"
                className="rounded-[4px] px-3 py-3 text-[15px] font-medium text-[#667078]"
                onClick={() => setMobileOpen(false)}
              >
                List Your Property
              </Link>
              <div className="mt-4">
                <Button
                  href={getWhatsAppLink(getGeneralMessage())}
                  external
                  variant="primary"
                  fullWidth
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
