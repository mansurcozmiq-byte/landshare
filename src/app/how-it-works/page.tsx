import type { Metadata } from "next";
import Button from "@/components/Button";
import { getWhatsAppLink, getGeneralMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how our curated property opportunity platform works — from discovery to offline discussion with our team.",
};

const steps = [
  {
    step: "01",
    title: "Explore",
    desc: "Browse verified property shares and residential flats. Every listing has been reviewed by our internal team before publication.",
  },
  {
    step: "02",
    title: "Understand",
    desc: "Review project structure, land details, availability, verification status and what the opportunity actually includes.",
  },
  {
    step: "03",
    title: "Connect",
    desc: "Contact our team through WhatsApp with a contextual message about the property you are interested in.",
  },
  {
    step: "04",
    title: "Visit",
    desc: "Visit our physical office for detailed discussion, document review and further verification.",
  },
  {
    step: "05",
    title: "Proceed",
    desc: "Continue through the appropriate offline process and agreement. No online payment or booking on this platform.",
  },
];

export default function HowItWorksPage() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#F59E0B]">
            The Process
          </p>
          <h1 className="mb-4 text-[36px] font-semibold tracking-tight text-[#0F172A] md:text-[44px]">
            How It Works
          </h1>
          <p className="text-[16px] leading-relaxed text-[#64748B] md:text-[17px]">
            A clear path from discovery to offline discussion. The website helps you discover and understand opportunities. The real conversation happens with our team.
          </p>
        </div>

        <div className="mb-16 space-y-0">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className={`grid gap-6 border-t border-[#E2E8F0] py-10 md:grid-cols-12 md:gap-8 ${
                i === steps.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="md:col-span-2">
                <span className="text-[28px] font-semibold text-[#0EA5E9]">
                  {item.step}
                </span>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-[22px] font-semibold text-[#0F172A]">
                  {item.title}
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-[16px] leading-relaxed text-[#64748B]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[12px] bg-[#0EA5E9] p-8 text-center md:p-12">
          <h2 className="mb-4 text-[24px] font-semibold text-white md:text-[28px]">
            Ready to explore opportunities?
          </h2>
          <p className="mb-6 text-[15px] text-white/85">
            Browse verified listings or speak with our team directly.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#property-shares" variant="accent" size="large">
              Browse Property Shares
            </Button>
            <Button
              href={getWhatsAppLink(getGeneralMessage())}
              external
              variant="secondary"
              size="large"
              className="!border-white/40 !text-white hover:!bg-white hover:!text-[#0F172A]"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
