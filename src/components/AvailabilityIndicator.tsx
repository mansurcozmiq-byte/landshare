"use client";

import { useLanguage } from "@/context/LanguageContext";

type Props = {
  booked: number;
  available: number;
  total: number;
  compact?: boolean;
};

export default function AvailabilityIndicator({
  booked,
  available,
  total,
  compact = false,
}: Props) {
  const { t } = useLanguage();
  const bookedPct = total > 0 ? (booked / total) * 100 : 0;
  const availablePct = total > 0 ? (available / total) * 100 : 0;

  return (
    <div className={compact ? "space-y-1.5" : "space-y-2"}>
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-[#E2E8F0]">
        <div className="h-full bg-[#0F172A] transition-all" style={{ width: `${bookedPct}%` }} />
        <div className="h-full bg-[#F59E0B] transition-all" style={{ width: `${availablePct}%` }} />
      </div>
      <div className={`flex justify-between ${compact ? "text-[12px]" : "text-[13px]"}`}>
        <span className="text-[#64748B]">
          <span className="font-medium text-[#0F172A]">{booked}</span> {t("booked")}
        </span>
        <span className="text-[#64748B]">
          <span className="font-medium text-[#F59E0B]">{available}</span> {t("available")}
        </span>
      </div>
    </div>
  );
}
