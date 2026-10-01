"use client";
import { useState } from "react";
import { listing } from "@/data/listing";
import { ChevronDown, Flag, Tag } from "./Icons";
import { fmtDayMonth, fmtUS } from "@/lib/dates";
import type { DateRange } from "./CalendarSection";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function PromoBanner({ claimed, onClaim }: { claimed: boolean; onClaim: () => void }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4 rounded-xl border border-line p-4 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <div className="flex items-start gap-3">
        <Tag className="mt-0.5 h-6 w-6 shrink-0 text-green-700" />
        <p className="text-sm leading-snug">
          Get 10% off your next stay.
          <br />
          <a href="#" className="font-semibold underline">Terms apply</a>
        </p>
      </div>
      <button onClick={onClaim} disabled={claimed}
        className="shrink-0 rounded-lg border border-black px-4 py-2.5 text-sm font-semibold transition hover:bg-gray-100 disabled:opacity-60">
        {claimed ? "Claimed" : "Claim"}
      </button>
    </div>
  );
}

interface Props {
  range: DateRange;
  guests: number;
  setGuests: (n: number) => void;
  nights: number;
  total: number;
  discount: number;
  onOpenReserve: () => void;
}

export default function BookingCard({ range, guests, setGuests, nights, total, discount, onOpenReserve }: Props) {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const hasDates = !!(range.start && range.end);

  return (
    <div>
      <div className="rounded-xl border border-line bg-white p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        {hasDates ? (
          <button onClick={() => setShowBreakdown((v) => !v)} className="flex items-baseline gap-1.5 text-left">
            <span className="text-xl font-semibold underline">{inr(total)}</span>
            <span>for {nights} nights</span>
          </button>
        ) : (
          <p className="text-xl"><span className="font-semibold">{inr(listing.pricePerNight)}</span> night</p>
        )}

        <div className="mt-4 overflow-hidden rounded-lg border border-line">
          <div className="grid grid-cols-2">
            <button onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
              className="border-r border-line p-3 text-left transition hover:bg-gray-50">
              <span className="block text-[10px] font-bold uppercase">Check-in</span>
              <span className="text-sm">{range.start ? fmtUS(range.start) : "Add date"}</span>
            </button>
            <button onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
              className="p-3 text-left transition hover:bg-gray-50">
              <span className="block text-[10px] font-bold uppercase">Checkout</span>
              <span className="text-sm">{range.end ? fmtUS(range.end) : "Add dates"}</span>
            </button>
          </div>
          <div className="relative border-t border-line">
            <button onClick={() => setGuestsOpen((o) => !o)} aria-expanded={guestsOpen}
              className="flex w-full items-center justify-between p-3 text-left transition hover:bg-gray-50">
              <span>
                <span className="block text-[10px] font-bold uppercase">Guests</span>
                <span className="text-sm">{guests} guest{guests > 1 ? "s" : ""}</span>
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${guestsOpen ? "rotate-180" : ""}`} />
            </button>
            {guestsOpen && (
              <div className="absolute inset-x-0 top-full z-20 mt-1 rounded-xl border border-line bg-white p-1.5 shadow-lg animate-slide-up">
                {[1, 2, 3].map((n) => (
                  <button key={n} onClick={() => { setGuests(n); setGuestsOpen(false); }}
                    className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-gray-100 ${n === guests ? "font-semibold" : ""}`}>
                    {n} guest{n > 1 ? "s" : ""}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {range.start && (
          <div className="mt-4 rounded-lg bg-[#f7f7f7] p-3 text-center text-sm">
            Free cancellation before{" "}
            <span className="font-semibold">{fmtDayMonth(new Date(range.start.getTime() - 86400000))}</span>
          </div>
        )}

        <button onClick={onOpenReserve}
          className="mt-4 w-full rounded-lg bg-rausch py-3.5 font-semibold text-white transition hover:bg-[#e31c5f]">
          Reserve
        </button>
        <p className="mt-3 text-center text-sm text-foggy">You won&apos;t be charged yet</p>

        {showBreakdown && hasDates && (
          <div className="mt-4 space-y-3 text-sm animate-slide-up">
            <div className="flex justify-between">
              <span className="underline">{inr(listing.pricePerNight)} × {nights} nights</span>
              <span>{inr(listing.pricePerNight * nights)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-700">
                <span className="underline">10% discount (claimed)</span>
                <span>-{inr(discount)}</span>
              </div>
            )}
            <div className="flex justify-between"><span>Cleaning fee</span><span>{inr(listing.cleaningFee)}</span></div>
            <div className="flex justify-between border-t border-line pt-4 font-semibold">
              <span>Total before taxes</span><span>{inr(total)}</span>
            </div>
          </div>
        )}
      </div>

      <button className="mt-5 flex items-center gap-2 text-sm font-medium hover:underline">
        <Flag className="h-4 w-4" /> Report this listing
      </button>
    </div>
  );
}