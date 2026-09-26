import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#0EA5E9]">
        <span className="text-sm font-bold tracking-tight text-white">LS</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] font-semibold leading-tight tracking-tight text-[#0F172A]">
          LandShare
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#64748B]">
          Verified Property
        </span>
      </div>
    </Link>
  );
}
