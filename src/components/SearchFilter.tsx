"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const propertyTypes = [
  { value: "", label: "Property Type" },
  { value: "property-share", label: "Property Share" },
  { value: "flat", label: "Flat for Sale" },
];

const locations = [
  { value: "", label: "Location" },
  { value: "dhaka", label: "Dhaka" },
  { value: "uttara", label: "Uttara" },
  { value: "purbachal", label: "Purbachal" },
  { value: "bashundhara", label: "Bashundhara" },
  { value: "mirpur", label: "Mirpur" },
  { value: "other", label: "Other locations" },
];

const availabilities = [
  { value: "", label: "Availability" },
  { value: "available-now", label: "Available Now" },
  { value: "new-project", label: "New Project" },
  { value: "under-construction", label: "Under Construction" },
  { value: "ready", label: "Ready" },
];

export default function SearchFilter() {
  const router = useRouter();
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");

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
    "h-12 w-full appearance-none rounded-[5px] border border-[#D9D6CF] bg-white px-4 text-[14px] text-[#101820] focus:border-[#101820] focus:outline-none focus:ring-1 focus:ring-[#101820]";

  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-3 md:flex-row md:items-end md:gap-4">
      <div className="flex-1">
        <label htmlFor="property-type" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.06em] text-[#8B9298]">
          Property Type
        </label>
        <select
          id="property-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={selectClass}
        >
          {propertyTypes.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="location" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.06em] text-[#8B9298]">
          Location
        </label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={selectClass}
        >
          {locations.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="availability" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.06em] text-[#8B9298]">
          Availability
        </label>
        <select
          id="availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className={selectClass}
        >
          {availabilities.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="md:pb-0">
        <Button type="submit" variant="primary" className="w-full md:w-auto md:min-w-[180px]">
          Search Opportunities
        </Button>
      </div>
    </form>
  );
}
