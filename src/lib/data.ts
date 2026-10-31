export const navLinks = [
  { href: "/the-resort", label: "The Resort" },
  { href: "/rooms", label: "Suites" },
  { href: "/dining", label: "Dining" },
  { href: "/wellness", label: "Wellness" },
  { href: "/gallery", label: "Gallery" },
  { href: "/offers", label: "Exclusive Offers" },
];

export const rooms = [
  {
    slug: "garden-bungalow",
    name: "Garden Bungalow",
    tag: "Intimate",
    size: "68 m²",
    guests: 2,
    beds: "King or twin",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    ],
    summary:
      "A private pavilion wrapped in tropical garden, with an outdoor rain shower and a quiet terrace for slow mornings.",
    amenities: ["Garden terrace", "Outdoor shower", "Bathtub", "Minibar", "Wi-Fi"],
  },
  {
    slug: "forest-suite",
    name: "Forest Suite",
    tag: "Signature",
    size: "92 m²",
    guests: 3,
    beds: "King + daybed",
    price: 680,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    ],
    summary:
      "Elevated among the canopy, the Forest Suite opens onto a plunge pool and long views of emerald foliage.",
    amenities: ["Private plunge pool", "Canopy view", "Lounge", "Espresso", "Butler"],
  },
  {
    slug: "ocean-villa",
    name: "Ocean Villa",
    tag: "Horizon",
    size: "148 m²",
    guests: 4,
    beds: "King + twin",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80",
    ],
    summary:
      "A secluded villa on the dune line — living pavilion, sunken lounge, and an infinity edge that disappears into the sea.",
    amenities: ["Infinity pool", "Sea terrace", "Dining sala", "Two baths", "Sunset deck"],
  },
  {
    slug: "sason-residence",
    name: "SASÓN Residence",
    tag: "Exclusive",
    size: "240 m²",
    guests: 6,
    beds: "Two kings + sofa",
    price: 1680,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
    ],
    summary:
      "The resort’s most private address: two bedrooms, a chef’s kitchen, lagoon pool, and a dedicated host.",
    amenities: ["Lagoon pool", "Private chef", "Host", "Cinema lounge", "Spa room"],
  },
];

export const offers = [
  {
    slug: "first-light",
    title: "First Light",
    season: "Year-round",
    detail: "Three nights in a Forest Suite, sunrise yoga, and a coastal picnic.",
    perk: "Daily breakfast & spa credit",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "monsoon-still",
    title: "Monsoon Still",
    season: "May — October",
    detail: "A slower season of rain, steam, and long baths. Includes two spa rituals.",
    perk: "Fourth night complimentary",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "gathering",
    title: "The Gathering",
    season: "Villa stays",
    detail: "Residence booking with a private dinner under the lantern trees.",
    perk: "Airport transfer included",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
    alt: "Resort pool at dusk",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Suite interior",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    alt: "Spa ritual",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    alt: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    alt: "Coastline",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    alt: "Forest path",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Villa terrace",
  },
];

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
