import type { Metadata } from "next";
import { Manrope, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Verified Property Opportunities | Property Share & Flats in Bangladesh",
    template: "%s | Verified Property Platform",
  },
  description:
    "Discover carefully reviewed property shares and residential flats across selected locations in Bangladesh. Verified opportunities. Speak directly with our team.",
  keywords: [
    "verified property Bangladesh",
    "property share Bangladesh",
    "land share",
    "flat for sale Dhaka",
    "verified real estate",
    "residential project Bangladesh",
    "property opportunity",
  ],
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Verified Property Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoBengali.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
