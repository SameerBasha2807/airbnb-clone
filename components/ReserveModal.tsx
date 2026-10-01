"use client";
import { useEffect, useRef } from "react";
import { listing } from "@/data/listing";
import { X } from "./Icons";
import { fmtShort } from "@/lib/dates";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

interface Props {
  open: boolean;
  onClose: () => void;
  start: Date | null;
  end: Date | null;
  guests: number;
  nights: number;
  total: number;
  discount: number;
  onConfirm: () => void;
}

export default function ReserveModal({ open, onClose, start, end, guests, nights, total, discount, onConfirm }: Props) {
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
    <div role="dialog" aria-modal="true" aria-label="Request to book" onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 animate-fade-in">
      <div onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-[460px] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl animate-zoom-in">
        <button ref={closeRef} onClick={onClose} aria-label="Close"
          className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-gray-100">
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-semibold">Request to book</h2>
        <p className="mt-1 text-sm text-foggy">Your request will be sent to {listing.host.name} to confirm.</p>

        <div className="mt-5 rounded-xl border border-line p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase">Dates</p>
              <p className="mt-1 text-sm">{start && end ? `${fmtShort(start)} - ${fmtShort(end)}` : "Add dates"}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase">Guests</p>
              <p className="mt-1 text-sm">{guests} guest{guests > 1 ? "s" : ""}</p>
            </div>
          </div>
        </div>

        {nights > 0 && (
          <div className="mt-5 space-y-3 text-sm">
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
            <div className="flex justify-between border-t border-line pt-3 font-semibold"><span>Total before taxes</span><span>{inr(total)}</span></div>
          </div>
        )}

        <button onClick={onConfirm} className="mt-5 w-full rounded-lg bg-rausch py-3.5 font-semibold text-white transition hover:bg-[#e31c5f]">
          Submit request
        </button>
        <p className="mt-3 text-center text-xs text-foggy">You won&apos;t be charged yet</p>
      </div>
    </div>
  );
}