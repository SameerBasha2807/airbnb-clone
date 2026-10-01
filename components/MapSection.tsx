import Image from "next/image";
import { listing } from "@/data/listing";

export default function MapSection() {
  return (
    <section className="py-8 border-t border-line">
      <h3 className="text-xl font-semibold">Where you&apos;ll be</h3>
      <p className="mt-2 text-foggy">{listing.location}</p>
      <div className="relative mt-4 h-96 overflow-hidden rounded-xl">
        <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80"
          alt="Map of Candolim, Goa" fill sizes="100vw" className="object-cover" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-rausch ring-4 ring-white shadow-lg" />
      </div>
    </section>
  );
}