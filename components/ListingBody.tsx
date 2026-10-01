"use client";
import { useState } from "react";
import { amenities, listing, totalAmenities } from "@/data/listing";
import { AmenityIcon, Door, Fan, Flame, Laurel, Star } from "./Icons";

export default function ListingBody({ onShowAllAmenities }: { onShowAllAmenities: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[22px] font-semibold">{listing.roomType}</h2>
        <p className="mt-1 text-[15px]">
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.baths} bathroom
        </p>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-line px-5 py-4 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 pr-4">
          <div className="flex items-center gap-0.5">
            <Laurel className="h-9 w-6 -scale-x-100" />
            <span className="text-center text-[13px] font-semibold leading-tight">Guest<br />favourite</span>
            <Laurel className="h-9 w-6" />
          </div>
          <p className="max-w-[230px] text-sm leading-snug">One of the most loved homes on Airbnb, according to guests</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-center">
            <p className="text-xl font-semibold">{listing.rating}</p>
            <p className="flex justify-center gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3" />)}</p>
          </div>
          <div className="h-12 w-px bg-line" />
          <div className="text-center">
            <p className="text-xl font-semibold">{listing.reviewsCount}</p>
            <p className="text-xs">Reviews</p>
          </div>
        </div>
      </div>
      <hr className="border-line" />

      <div className="flex items-center gap-4">
        <span aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#254b3c] text-[6.5px] font-bold tracking-[0.18em] text-white">MIRASHYA</span>
        <div>
          <p className="font-semibold">Hosted by {listing.host.name}</p>
          <p className="text-sm text-foggy">{listing.host.yearsHosting} years hosting</p>
        </div>
      </div>
      <hr className="border-line" />

      <div className="space-y-5">
        {[
          { Icon: Flame, title: "Outdoor entertainment", desc: "The pool and alfresco dining are great for summer trips." },
          { Icon: Fan, title: "Designed for staying cool", desc: "Beat the heat with the A/C and ceiling fan." },
          { Icon: Door, title: "Self check-in", desc: "You can check in with the building staff." },
        ].map(({ Icon, title, desc }) => (
          <div key={title} className="flex gap-5">
            <Icon className="mt-0.5 h-7 w-7 shrink-0" />
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-hof/80">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-line" />

      <div>
        <p className="leading-relaxed"
          style={expanded ? undefined : { display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {`Escape to this romantic 1BHK serviced apartment in the heart of Candolim, Goa. Unwind in your own private open-air jacuzzi after a day at the beach — just an 8-minute walk away.\n\nThe apartment features a plush king bed, a fully equipped modular kitchen, high-speed wifi, and a cozy living area with a 55" HDTV. Mirashya is tucked into a quiet lane yet minutes from Candolim's best restaurants, beach shacks, and nightlife. The building also has a shared pool and gym.\n\nPerfect for couples and small families looking for a serene Goan getaway with all the comforts of home.`}
        </p>
        <button onClick={() => setExpanded((v) => !v)} className="mt-2 rounded p-1 font-semibold underline transition hover:bg-gray-100">
          Show {expanded ? "less" : "more"}
        </button>
      </div>
      <hr className="border-line" />

      <section id="amenities" className="scroll-mt-24">
        <h3 className="mb-6 text-[22px] font-semibold">What this place offers</h3>
        <div className="grid grid-cols-2 gap-y-4">
          {amenities.map((a) => (
            <div key={a.label} className={`flex items-center gap-4 ${a.unavailable ? "text-foggy" : ""}`}>
              <AmenityIcon name={a.icon} className="h-6 w-6 shrink-0" />
              <span className={a.unavailable ? "line-through" : ""}>{a.label}</span>
            </div>
          ))}
        </div>
        <button onClick={onShowAllAmenities} className="mt-8 rounded-lg border border-black px-5 py-3 text-sm font-semibold transition hover:bg-gray-100">
          Show all {totalAmenities} amenities
        </button>
      </section>
    </div>
  );
}