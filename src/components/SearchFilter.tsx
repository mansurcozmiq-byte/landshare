"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";

export default function SearchFilter() {
  const router = useRouter();
  const { t } = useLanguage();
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");

  const propertyTypes = [
    { value: "", label: t("searchPropertyType") },
    { value: "property-share", label: t("typePropertyShare") },
    { value: "flat", label: t("typeFlat") },
  ];

  const locations = [
    { value: "", label: t("searchLocation") },
    { value: "dhaka", label: t("locDhaka") },
    { value: "uttara", label: t("locUttara") },
    { value: "purbachal", label: t("locPurbachal") },
    { value: "bashundhara", label: t("locBashundhara") },
    { value: "mirpur", label: t("locMirpur") },
    { value: "other", label: t("locOther") },
  ];

  const availabilities = [
    { value: "", label: t("searchAvailability") },
    { value: "available-now", label: t("availNow") },
    { value: "new-project", label: t("availNew") },
    { value: "under-construction", label: t("availConstruction") },
    { value: "ready", label: t("availReady") },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (type) params.set("type", type);
    if (location) params.set("location", location);
    if (availability) params.set("availability", availability);
    const query = params.toString();
    if (type === "flat") {
      router.push(`/flats${query ? `?${query}` : ""}`);
    } else {
      router.push(`/property-shares${query ? `?${query}` : ""}`);
    }
  };

  const selectClass =
    "h-12 w-full appearance-none rounded-[5px] border border-[#E2E8F0] bg-white px-4 text-[14px] text-[#0F172A] focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9]";

  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-3 md:flex-row md:items-end md:gap-4">
      <div className="flex-1">
        <label htmlFor="property-type" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
          {t("searchPropertyType")}
        </label>
        <select id="property-type" value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
          {propertyTypes.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="location" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
          {t("searchLocation")}
        </label>
        <select id="location" value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
          {locations.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="availability" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.06em] text-[#94A3B8]">
          {t("searchAvailability")}
        </label>
        <select id="availability" value={availability} onChange={(e) => setAvailability(e.target.value)} className={selectClass}>
          {availabilities.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <Button type="submit" variant="primary" className="w-full md:w-auto md:min-w-[180px]">
          {t("searchButton")}
        </Button>
      </div>
    </form>
  );
}
