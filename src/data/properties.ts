export type PropertyShare = {
  id: string;
  type: "property-share";
  slug: string;
  title: string;
  location: string;
  area: string;
  landArea: string;
  totalFlats: number;
  totalShares: number;
  bookedShares: number;
  availableShares: number;
  status: "Under Construction" | "New Project" | "Ready" | "Available Now";
  expectedCompletion?: string;
  verified: boolean;
  lastVerified: string;
  image: string;
  gallery: string[];
  description: string;
  whatYouGet: string[];
  projectDetails: {
    floors?: number;
    flatSizes?: string;
    unitTypes?: string;
    parking?: string;
    lift?: boolean;
    security?: boolean;
    utilities?: string;
    developer?: string;
  };
  verificationItems: string[];
  nearbyLandmarks?: string[];
};

export type Flat = {
  id: string;
  type: "flat";
  slug: string;
  title: string;
  location: string;
  area: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  balconies?: number;
  parking: number;
  floor: string;
  facing?: string;
  status: "Ready" | "Under Construction" | "Available Now";
  verified: boolean;
  lastVerified: string;
  image: string;
  gallery: string[];
  description: string;
  apartmentDetails: Record<string, string | boolean>;
  verificationItems: string[];
  nearbyLandmarks?: string[];
};

export const propertyShares: PropertyShare[] = [
  {
    id: "ps-001",
    type: "property-share",
    slug: "green-valley-residency",
    title: "Green Valley Residency",
    location: "Purbachal, Dhaka",
    area: "Purbachal",
    landArea: "10 Katha",
    totalFlats: 40,
    totalShares: 40,
    bookedShares: 10,
    availableShares: 30,
    status: "Under Construction",
    expectedCompletion: "2028",
    verified: true,
    lastVerified: "September 2025",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    ],
    description:
      "A carefully planned residential project on 10 Katha land in Purbachal with 40 participation units. Designed for modern family living with thoughtful amenities and clear project structure.",
    whatYouGet: [
      "Participation interest in the project as defined by the legal agreement",
      "Rights associated with the allocated share unit",
      "Access to common areas and amenities as per project documents",
      "Transfer rights subject to the project's agreement terms",
    ],
    projectDetails: {
      floors: 10,
      flatSizes: "1,200 – 1,650 sq ft",
      unitTypes: "2BHK, 3BHK",
      parking: "Dedicated parking available",
      lift: true,
      security: true,
      utilities: "Electricity, Gas, Water connections planned",
      developer: "Reviewed developer information on file",
    },
    verificationItems: [
      "Owner / Developer Information Reviewed",
      "Property Documents Reviewed",
      "Location Verified",
      "Project Details Reviewed",
      "Availability Confirmed",
    ],
    nearbyLandmarks: ["Purbachal Expressway", "Future commercial hubs", "Planned green spaces"],
  },
  {
    id: "ps-002",
    type: "property-share",
    slug: "bashundhara-heights",
    title: "Bashundhara Heights",
    location: "Bashundhara, Dhaka",
    area: "Bashundhara",
    landArea: "8 Katha",
    totalFlats: 32,
    totalShares: 32,
    bookedShares: 18,
    availableShares: 14,
    status: "Under Construction",
    expectedCompletion: "2027",
    verified: true,
    lastVerified: "August 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
    ],
    description:
      "A premium mid-rise residential project in Bashundhara offering clear share structure and strong location advantages within a well-established residential zone.",
    whatYouGet: [
      "Defined project participation rights per legal documents",
      "Interest in the residential building and associated land as structured",
      "Common facility access according to project rules",
      "Structured transfer process as outlined in the agreement",
    ],
    projectDetails: {
      floors: 8,
      flatSizes: "1,100 – 1,500 sq ft",
      unitTypes: "2BHK, 3BHK",
      parking: "Basement parking",
      lift: true,
      security: true,
      utilities: "Full utility connections",
      developer: "Verified developer profile",
    },
    verificationItems: [
      "Owner / Developer Information Reviewed",
      "Property Documents Reviewed",
      "Location Verified",
      "Project Details Reviewed",
      "Availability Confirmed",
    ],
    nearbyLandmarks: ["Bashundhara City area", "Educational institutions", "Shopping & dining"],
  },
  {
    id: "ps-003",
    type: "property-share",
    slug: "uttara-lakeview",
    title: "Uttara Lakeview Residences",
    location: "Uttara, Dhaka",
    area: "Uttara",
    landArea: "6 Katha",
    totalFlats: 24,
    totalShares: 24,
    bookedShares: 8,
    availableShares: 16,
    status: "New Project",
    expectedCompletion: "2029",
    verified: true,
    lastVerified: "September 2025",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    ],
    description:
      "A thoughtfully designed new residential project near Uttara's established infrastructure, offering transparent share participation and modern living standards.",
    whatYouGet: [
      "Project participation interest as defined in the legal structure",
      "Associated rights to the property and common areas",
      "Clear documentation of share allocation",
      "Transfer and usage conditions governed by the project agreement",
    ],
    projectDetails: {
      floors: 7,
      flatSizes: "1,050 – 1,400 sq ft",
      unitTypes: "2BHK, 3BHK",
      parking: "Ground + basement",
      lift: true,
      security: true,
      utilities: "Electricity, water, gas planned",
      developer: "Information reviewed",
    },
    verificationItems: [
      "Owner / Developer Information Reviewed",
      "Property Documents Reviewed",
      "Location Verified",
      "Project Details Reviewed",
      "Availability Confirmed",
    ],
    nearbyLandmarks: ["Uttara sector amenities", "Transport links", "Lake proximity"],
  },
];

export const flats: Flat[] = [
  {
    id: "fl-001",
    type: "flat",
    slug: "modern-3br-uttara",
    title: "Modern 3 Bedroom Apartment",
    location: "Uttara, Dhaka",
    area: "Uttara",
    size: "1,450 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    parking: 1,
    floor: "8th Floor",
    facing: "South",
    status: "Ready",
    verified: true,
    lastVerified: "September 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-82890adeba25?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    ],
    description:
      "A well-finished ready apartment in Uttara with excellent natural light, practical layout and convenient access to local amenities.",
    apartmentDetails: {
      Flooring: "Tiles",
      Kitchen: "Modern fitted kitchen",
      Bathrooms: "3 attached bathrooms",
      Windows: "Large aluminum windows",
      Doors: "Solid wood doors",
      Electricity: "Full connection",
      Gas: "Pipeline gas",
      Water: "24/7 supply",
      Lift: true,
      Generator: true,
      Security: "24-hour security",
      Parking: "1 reserved parking",
    },
    verificationItems: [
      "Owner Information Reviewed",
      "Property Documents Reviewed",
      "Location Verified",
      "Flat Details Reviewed",
      "Availability Confirmed",
    ],
    nearbyLandmarks: ["Uttara markets", "Schools", "Hospitals", "Transport"],
  },
  {
    id: "fl-002",
    type: "flat",
    slug: "spacious-2br-mirpur",
    title: "Spacious 2 Bedroom Flat",
    location: "Mirpur, Dhaka",
    area: "Mirpur",
    size: "1,100 sq ft",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    parking: 1,
    floor: "5th Floor",
    facing: "East",
    status: "Ready",
    verified: true,
    lastVerified: "August 2025",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-82890adeba25?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    ],
    description:
      "A practical and bright 2-bedroom apartment in a well-connected Mirpur location, ready for immediate move-in.",
    apartmentDetails: {
      Flooring: "Ceramic tiles",
      Kitchen: "Functional kitchen",
      Bathrooms: "2 bathrooms",
      Windows: "Good ventilation",
      Electricity: "Full connection",
      Gas: "Available",
      Water: "Regular supply",
      Lift: true,
      Generator: true,
      Security: "Building security",
      Parking: "1 parking space",
    },
    verificationItems: [
      "Owner Information Reviewed",
      "Property Documents Reviewed",
      "Location Verified",
      "Flat Details Reviewed",
      "Availability Confirmed",
    ],
    nearbyLandmarks: ["Mirpur DOHS area", "Shopping centers", "Metro access"],
  },
  {
    id: "fl-003",
    type: "flat",
    slug: "family-3br-bashundhara",
    title: "Family 3 Bedroom Residence",
    location: "Bashundhara, Dhaka",
    area: "Bashundhara",
    size: "1,600 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    parking: 1,
    floor: "6th Floor",
    facing: "South-East",
    status: "Ready",
    verified: true,
    lastVerified: "September 2025",
    image: "https://images.unsplash.com/photo-1493809842364-82890adeba25?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-82890adeba25?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    ],
    description:
      "A generous family-sized apartment in Bashundhara with quality finishes and excellent community amenities nearby.",
    apartmentDetails: {
      Flooring: "Premium tiles",
      Kitchen: "Modern kitchen with cabinets",
      Bathrooms: "3 bathrooms with modern fittings",
      Windows: "Floor-to-ceiling in living",
      Electricity: "Full connection + backup",
      Gas: "Pipeline",
      Water: "24/7",
      Lift: true,
      Generator: true,
      Security: "Gated community security",
      Parking: "1 reserved + visitor",
    },
    verificationItems: [
      "Owner Information Reviewed",
      "Property Documents Reviewed",
      "Location Verified",
      "Flat Details Reviewed",
      "Availability Confirmed",
    ],
    nearbyLandmarks: ["Bashundhara residential zone", "Schools", "Parks", "Shopping"],
  },
];

export function getPropertyShareBySlug(slug: string): PropertyShare | undefined {
  return propertyShares.find((p) => p.slug === slug);
}

export function getFlatBySlug(slug: string): Flat | undefined {
  return flats.find((f) => f.slug === slug);
}
