import Link from "next/link";
import Logo from "./Logo";
import { getWhatsAppLink, getGeneralMessage } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-[#D9D6CF] bg-[#101820] text-white">
      <div className="container-main section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-white">
                  <span className="text-sm font-bold tracking-tight text-[#101820]">VP</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold leading-tight tracking-tight text-white">
                    Verified Property
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8B9298]">
                    Opportunities
                  </span>
                </div>
              </div>
            </div>
            <p className="max-w-xs text-[14px] leading-relaxed text-[#8B9298]">
              A curated property opportunity platform. Discover verified shares and flats, then speak directly with our team.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8B9298]">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#property-shares" className="text-[14px] text-white/90 hover:text-[#C9824B]">
                  Property Shares
                </Link>
              </li>
              <li>
                <Link href="/#flats" className="text-[14px] text-white/90 hover:text-[#C9824B]">
                  Flats for Sale
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-[14px] text-white/90 hover:text-[#C9824B]">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[14px] text-white/90 hover:text-[#C9824B]">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8B9298]">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/list-property" className="text-[14px] text-white/90 hover:text-[#C9824B]">
                  List Your Property
                </Link>
              </li>
              <li>
                <a
                  href={getWhatsAppLink(getGeneralMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/90 hover:text-[#C9824B]"
                >
                  Contact via WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8B9298]">
              Visit Us
            </h4>
            <address className="not-italic text-[14px] leading-relaxed text-white/90">
              <p>House 12, Road 5</p>
              <p>Banani, Dhaka 1213</p>
              <p className="mt-3">Bangladesh</p>
              <p className="mt-4 text-[#8B9298]">Sat – Thu: 10:00 – 18:00</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-[13px] text-[#8B9298]">
            © {new Date().getFullYear()} Verified Property Platform. All rights reserved.
          </p>
          <p className="text-[13px] text-[#8B9298]">
            Listings are curated and verified by our internal team.
          </p>
        </div>
      </div>
    </footer>
  );
}
