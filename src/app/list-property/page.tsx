"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function ListPropertyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    propertyType: "",
    location: "",
    landSize: "",
    projectStatus: "",
    available: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to a backend API
    console.log("Property submission:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-lg text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4D7657]/10">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M26 8L12 22L6 16" stroke="#4D7657" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h1 className="mb-4 text-[28px] font-semibold text-[#101820]">
              Thank you
            </h1>
            <p className="text-[16px] leading-relaxed text-[#667078]">
              Our team will contact you for verification. We review every opportunity before publishing it on the platform.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputClass =
    "h-12 w-full rounded-[5px] border border-[#D9D6CF] bg-white px-4 text-[15px] text-[#101820] placeholder:text-[#8B9298] focus:border-[#101820] focus:outline-none focus:ring-1 focus:ring-[#101820]";

  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="mx-auto max-w-xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C9824B]">
            Submit for Review
          </p>
          <h1 className="mb-4 text-[36px] font-semibold tracking-tight text-[#101820] md:text-[42px]">
            Have a Property Opportunity to List?
          </h1>
          <p className="mb-10 text-[16px] leading-relaxed text-[#667078]">
            We review every opportunity before publishing it on our platform. Submit your property details and our team will contact you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-[#101820]">Name</label>
              <input
                required
                type="text"
                className={inputClass}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-[#101820]">Phone</label>
                <input
                  required
                  type="tel"
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-[#101820]">WhatsApp</label>
                <input
                  type="tel"
                  className={inputClass}
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-[#101820]">Property Type</label>
              <select
                required
                className={inputClass}
                value={form.propertyType}
                onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
              >
                <option value="">Select type</option>
                <option value="property-share">Property Share</option>
                <option value="flat">Flat for Sale</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-[#101820]">Location</label>
              <input
                required
                type="text"
                className={inputClass}
                placeholder="e.g. Purbachal, Dhaka"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-[#101820]">Land Size</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. 10 Katha"
                  value={form.landSize}
                  onChange={(e) => setForm({ ...form, landSize: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-[#101820]">Project Status</label>
                <select
                  className={inputClass}
                  value={form.projectStatus}
                  onChange={(e) => setForm({ ...form, projectStatus: e.target.value })}
                >
                  <option value="">Select status</option>
                  <option value="new">New Project</option>
                  <option value="under-construction">Under Construction</option>
                  <option value="ready">Ready</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-[#101820]">Available Shares / Flats</label>
              <input
                type="text"
                className={inputClass}
                value={form.available}
                onChange={(e) => setForm({ ...form, available: e.target.value })}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-[#101820]">Short Description</label>
              <textarea
                rows={4}
                className="w-full rounded-[5px] border border-[#D9D6CF] bg-white px-4 py-3 text-[15px] text-[#101820] placeholder:text-[#8B9298] focus:border-[#101820] focus:outline-none focus:ring-1 focus:ring-[#101820]"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <Button type="submit" variant="primary" size="large" fullWidth>
              Submit Property Details
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
