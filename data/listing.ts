const U = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export interface RoomPhoto { name: string; features: string; src: string; alt: string; }

export const rooms: RoomPhoto[] = [
  { name: "Living room 1", features: "Sofa · Air conditioning · Ceiling fan · TV", src: U("photo-1600210492486-724fe5c67fb0"), alt: "Living room with sofa, AC and ceiling fan" },
  { name: "Living room 2", features: "Sofa bed · Coffee table · Wall decor", src: U("photo-1522708323590-d24dbb6b0267"), alt: "Second living area with sofa" },
  { name: "Full kitchen", features: "Refrigerator · Microwave · Kettle · Gas stove", src: U("photo-1556909114-f6e7ad7d3136"), alt: "Fully equipped kitchen" },
  { name: "Bedroom", features: "1 king bed · Wardrobe · Blackout curtains", src: U("photo-1505693416388-ac5ce068fe85"), alt: "Bedroom with king bed" },
  { name: "Full bathroom", features: "Shower · Geyser · Free toiletries", src: U("photo-1552321554-5fefe8c9ef14"), alt: "Bathroom with shower" },
  { name: "Gym", features: "Treadmill · Dumbbells · Yoga mats", src: U("photo-1534438327276-14e5300c3a48"), alt: "Shared gym" },
  { name: "Exterior", features: "Building entrance · Free parking", src: U("photo-1512917774080-9991f1c4c750"), alt: "Building exterior" },
  { name: "Pool", features: "Outdoor pool · Sun loungers", src: U("photo-1571896349842-33c89424de2d"), alt: "Outdoor swimming pool" },
];

export const additionalPhotos: { src: string; alt: string }[] = [
  { src: U("photo-1584132967334-10e028bd69f7"), alt: "Private jacuzzi" },
  { src: U("photo-1600585154340-be6161a56a0c"), alt: "Exterior view of the building" },
  { src: U("photo-1617806118233-18e1de247200"), alt: "Dining area" },
  { src: U("photo-1560448204-e02f11c3d0e2"), alt: "Bedroom detail" },
  { src: U("photo-1600585152220-90363fe7e115"), alt: "Kitchen counter" },
  { src: U("photo-1493809842364-78817add7ffb"), alt: "Reading nook" },
  { src: U("photo-1449247709967-d4461a6a6103"), alt: "Dining detail" },
  { src: U("photo-1595526114035-0d45ed16cfbf"), alt: "Bedroom corner" },
];

export const allPhotos = [
  ...rooms.map((r) => ({ src: r.src, alt: r.alt, label: r.name })),
  ...additionalPhotos.map((p) => ({ src: p.src, alt: p.alt, label: "Additional photos" })),
];


export const reviews = [
  { name: "Arshiya", date: "August 2026", text: "The private jacuzzi was the highlight of our trip. Spotlessly clean and a short walk from Candolim beach. Mirashya Homes was super responsive." },
  { name: "Meera", date: "July 2026", text: "Beautiful apartment, exactly as shown in photos. Check-in was seamless with the building staff. Would definitely stay again!" },
  { name: "Rohan", date: "June 2026", text: "Great value for money. Quiet lane but close to everything — restaurants, beach, and grocery stores. The kitchen is fully equipped." },
  { name: "Ananya", date: "June 2026", text: "Perfect romantic getaway. The jacuzzi in the evening was magical. Highly recommend for couples." },
  { name: "Ishaan", date: "May 2026", text: "Mirashya Homes made everything effortless. The pool area is well maintained and the gym was a bonus we didn't expect." },
  { name: "Kavya", date: "April 2026", text: "Walkable to Candolim beach and tons of great food nearby. The apartment is spotless and exactly as pictured." },
  { name: "Arjun", date: "March 2026", text: "Quiet building, comfortable king bed, and the AC + ceiling fan combo handled the Goa heat perfectly." },
  { name: "Diya", date: "February 2026", text: "We booked last minute and check-in was still smooth. The jacuzzi on the terrace is the real deal — book it!" },
];

export const ratingsBreakdown = [
  { label: "Cleanliness", value: 5.0 },
  { label: "Accuracy", value: 4.9 },
  { label: "Check-in", value: 5.0 },
  { label: "Communication", value: 5.0 },
  { label: "Location", value: 4.9 },
  { label: "Value", value: 4.8 },
];

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  roomType: "Entire serviced apartment in Candolim, India",
  location: "Candolim, Goa, India",
  guests: 3, bedrooms: 1, beds: 1, baths: 1,
  rating: 4.95,
  reviewsCount: reviews.length,      
  pricePerNight: 5499,
  cleaningFee: 1004,
  defaultNights: 5,
  host: { name: "Mirashya Homes", yearsHosting: 2 },
};

function rangeKeys(y: number, m: number, from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, i) => `${y}-${m}-${from + i}`);
}
export const unavailableDates = new Set([
  ...rangeKeys(2026, 10, 18, 24),
  ...rangeKeys(2026, 10, 29, 30),
]);

export const amenities: { icon: string; label: string; unavailable?: boolean }[] = [
  { icon: "wifi", label: "Fast wifi – 135 Mbps" },
  { icon: "kitchen", label: "Kitchen" },
  { icon: "desk", label: "Dedicated workspace" },
  { icon: "car", label: "Free parking on premises" },
  { icon: "pool", label: "Shared pool" },
  { icon: "hottub", label: "Private hot tub" },
  { icon: "pets", label: "Pets allowed" },
  { icon: "ac", label: "Air conditioning" },
  { icon: "tv", label: '55" HDTV' },
  { icon: "alarm", label: "Carbon monoxide alarm", unavailable: true },
];

export const amenitySections: { title: string; items: { icon: string; label: string; unavailable?: boolean }[] }[] = [
  { title: "Bathroom", items: [
    { icon: "hairdryer", label: "Hairdryer" }, { icon: "spray", label: "Cleaning products" },
    { icon: "shampoo", label: "Shampoo" }, { icon: "hotwater", label: "Hot water" }, { icon: "gel", label: "Shower gel" },
  ]},
  { title: "Bedroom and laundry", items: [
    { icon: "washer", label: "Washing machine" }, { icon: "dryer", label: "Dryer" },
    { icon: "towel", label: "Essentials" }, { icon: "hanger", label: "Hangers" }, { icon: "iron", label: "Iron" },
  ]},
  { title: "Entertainment", items: [
    { icon: "tv", label: '55" HDTV' }, { icon: "speaker", label: "Bluetooth speaker" }, { icon: "book", label: "Books and reading material" },
  ]},
  { title: "Heating and cooling", items: [
    { icon: "ac", label: "Air conditioning" }, { icon: "fan", label: "Ceiling fan" },
  ]},
  { title: "Outdoor", items: [
    { icon: "pool", label: "Shared pool" }, { icon: "hottub", label: "Private hot tub" }, { icon: "gym", label: "Shared gym" },
  ]},
  { title: "Home safety", items: [
    { icon: "alarm", label: "Smoke alarm" }, { icon: "firstaid", label: "First aid kit" },
    { icon: "extinguisher", label: "Fire extinguisher" }, { icon: "alarm", label: "Carbon monoxide alarm", unavailable: true },
  ]},
];

export const totalAmenities = amenitySections.reduce((sum, s) => sum + s.items.length, 0);