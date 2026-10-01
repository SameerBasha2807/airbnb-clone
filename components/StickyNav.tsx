"use client";
import { useEffect, useState } from "react";
import { listing } from "@/data/listing";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function StickyNav({ nights, total, onReserve }: { nights: number; total: number; onReserve: () => void }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("photos");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 680);
      let current = "photos";
      for (const t of TABS) {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top <= 130) current = t.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 top-0 z-40 border-b border-line bg-white transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-10">
        <nav className="flex items-center gap-8" aria-label="Page sections">
          {TABS.map((t) => (
            <button key={t.id} onClick={() => document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth" })}
              aria-current={active === t.id ? "true" : undefined}
              className={`border-b-2 py-4 text-sm font-semibold transition ${
                active === t.id ? "border-hof text-hof" : "border-transparent text-hof/70 hover:border-gray-300 hover:text-hof"
              }`}>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <div className="text-right">
            <p className="text-sm font-semibold">
              {nights > 0
                ? <><span className="underline">{inr(total)}</span> for {nights} nights</>
                : <><span className="underline">{inr(listing.pricePerNight)}</span> night</>}
            </p>
            <p className="text-xs text-hof/80">★ {listing.rating} · {listing.reviewsCount} reviews</p>
          </div>
          <button onClick={onReserve} className="rounded-lg bg-rausch px-6 py-3 font-semibold text-white transition hover:bg-[#e31c5f]">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}