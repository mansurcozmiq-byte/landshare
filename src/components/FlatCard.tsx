import Image from "next/image";
import Link from "next/link";
import { Flat } from "@/data/properties";

type Props = {
  flat: Flat;
};

export default function FlatCard({ flat }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[10px] border border-[#D9D6CF] bg-white transition-shadow hover:shadow-[0_4px_24px_rgba(16,24,32,0.06)]">
      <Link href={`/flats/${flat.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={flat.image}
          alt={flat.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-4 top-4">
          <span className="inline-block rounded-[4px] bg-[#101820] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white">
            Flat for Sale
          </span>
        </div>
        {flat.verified && (
          <div className="absolute right-4 top-4">
            <span className="inline-flex items-center gap-1 rounded-[4px] bg-white/95 px-2 py-1 text-[11px] font-medium text-[#4D7657]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Verified
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-1">
          <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#C9824B]">
            {flat.status}
          </span>
        </div>
        <Link href={`/flats/${flat.slug}`}>
          <h3 className="mb-1 text-[20px] font-semibold leading-tight tracking-tight text-[#101820] transition-colors group-hover:text-[#C9824B] md:text-[22px]">
            {flat.title}
          </h3>
        </Link>
        <p className="mb-4 text-[14px] text-[#667078]">{flat.location}</p>

        <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-[#667078]">
          <span className="font-medium text-[#101820]">{flat.size}</span>
          <span>{flat.bedrooms} Bed</span>
          <span>{flat.bathrooms} Bath</span>
          <span>{flat.floor}</span>
          {flat.parking > 0 && <span>{flat.parking} Parking</span>}
        </div>

        <div className="mt-auto">
          <Link
            href={`/flats/${flat.slug}`}
            className="inline-flex items-center text-[14px] font-medium text-[#101820] transition-colors hover:text-[#C9824B]"
          >
            Get Price & Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
