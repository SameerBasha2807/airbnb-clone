"use client";
import { useEffect, useRef } from "react";
import { listing, ratingsBreakdown, reviews } from "@/data/listing";
import { Star, X } from "./Icons";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

export default function ReviewsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    lockScroll();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); unlockScroll(); };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="All reviews" onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 animate-fade-in">
      <div onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-[900px] overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl animate-zoom-in">
        <button ref={closeRef} onClick={onClose} aria-label="Close"
          className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100">
          <X className="h-5 w-5" />
        </button>

        <div className="pl-12">
          <h2 className="flex items-center gap-3 text-3xl font-semibold">
            <Star className="h-7 w-7" /> {listing.rating}
            <span className="text-xl font-normal text-foggy">· {listing.reviewsCount} reviews</span>
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-x-16 gap-y-4 pb-6">
            {ratingsBreakdown.map((r) => (
              <div key={r.label} className="flex items-center justify-between gap-4 text-sm">
                <span className="w-32">{r.label}</span>
                <span className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <span className="block h-full rounded-full bg-hof" style={{ width: `${(r.value / 5) * 100}%` }} />
                </span>
                <span className="w-7 text-right">{r.value}</span>
              </div>
            ))}
          </div>
          <hr className="border-line" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-16 gap-y-10">
          {reviews.map((r) => (
            <article key={r.name}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rausch text-sm font-semibold text-white">
                  {r.name[0]}
                </span>
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-foggy">{r.date}</p>
                </div>
              </div>
              <p className="mt-3 flex items-center gap-0.5 text-sm">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3" />)}
              </p>
              <p className="mt-2 leading-relaxed text-hof/90">“{r.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}