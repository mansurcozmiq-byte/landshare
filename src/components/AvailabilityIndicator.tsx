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
  const bookedPct = total > 0 ? (booked / total) * 100 : 0;
  const availablePct = total > 0 ? (available / total) * 100 : 0;

  return (
    <div className={compact ? "space-y-1.5" : "space-y-2"}>
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-[#D9D6CF]">
        <div
          className="h-full bg-[#101820] transition-all"
          style={{ width: `${bookedPct}%` }}
        />
        <div
          className="h-full bg-[#C9824B] transition-all"
          style={{ width: `${availablePct}%` }}
        />
      </div>
      <div className={`flex justify-between ${compact ? "text-[12px]" : "text-[13px]"}`}>
        <span className="text-[#667078]">
          <span className="font-medium text-[#101820]">{booked}</span> Booked
        </span>
        <span className="text-[#667078]">
          <span className="font-medium text-[#C9824B]">{available}</span> Available
        </span>
      </div>
    </div>
  );
}
