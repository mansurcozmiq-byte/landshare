import type { Metadata } from "next";
import { Manrope, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { LanguageProvider } from "@/context/LanguageContext";

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
    default: "LandShare | ভেরিফাইড প্রপার্টি শেয়ার ও ফ্ল্যাট — বাংলাদেশ",
    template: "%s | LandShare",
  },
  description:
    "বাংলাদেশের নির্বাচিত লোকেশনে ভেরিফাইড প্রপার্টি শেয়ার ও আবাসিক ফ্ল্যাট। সুযোগ খুঁজুন, বিস্তারিত বুঝুন, সরাসরি টিমের সাথে কথা বলুন।",
  keywords: [
    "verified property Bangladesh",
    "property share Bangladesh",
    "প্রপার্টি শেয়ার",
    "ফ্ল্যাট বিক্রয় ঢাকা",
    "ভেরিফাইড প্রপার্টি",
    "land share",
    "flat for sale Dhaka",
  ],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    siteName: "LandShare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${manrope.variable} ${notoBengali.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
