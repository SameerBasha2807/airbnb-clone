"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { additionalPhotos, rooms } from "@/data/listing";
import { ChevronLeft, Heart, Share } from "./Icons";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

interface Props {
  open: boolean;
  suspended: boolean; // true while the lightbox is open above
  saved: boolean;
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
  onToggleSave: () => void;
  onShare: () => void;
}

export default function PhotoTour({ open, suspended, saved, onClose, onOpenLightbox, onToggleSave, onShare }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const prevFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    prevFocus.current = document.activeElement as HTMLElement;
    lockScroll();
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (suspended) return;
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      unlockScroll();
      prevFocus.current?.focus();
    };
  }, [open, suspended, onClose]);

  if (!open) return null;

  const scrollToRoom = (i: number) =>
    document.getElementById(`room-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div role="dialog" aria-modal="true" aria-label="Photo tour"
      className="fixed inset-0 z-50 overflow-y-auto bg-white animate-fade-in">
      <div className="sticky top-0 z-20 flex h-16 items-center justify-between bg-white px-6">
        <button ref={closeRef} onClick={onClose} aria-label="Back to listing"
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="absolute left-1/2 -translate-x-1/2 text-base font-semibold">Photo tour</p>
        <div className="flex items-center gap-1">
          <button onClick={onShare} aria-label="Share"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100">
            <Share className="h-5 w-5" />
          </button>
          <button onClick={onToggleSave} aria-label={saved ? "Remove from wishlist" : "Save to wishlist"} aria-pressed={saved}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 ${saved ? "text-rausch" : ""}`}>
            <Heart className="h-5 w-5" filled={saved} />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-10 pb-24">
        <nav className="grid grid-cols-8 gap-4 pb-8 pt-4" aria-label="Jump to room">
          {rooms.map((r, i) => (
            <button key={r.name} onClick={() => scrollToRoom(i)} className="group text-left">
              <span className="block h-24 w-full overflow-hidden rounded-lg">
                <Image src={r.src} alt={r.alt} width={220} height={128} className="h-24 w-full object-cover transition duration-200 group-hover:brightness-90" />
              </span>
              <span className="mt-2 block text-sm leading-snug">{r.name}</span>
            </button>
          ))}
          <button onClick={() => scrollToRoom(rooms.length)} className="group text-left">
            <span className="block h-24 w-full overflow-hidden rounded-lg">
              <Image src={additionalPhotos[0].src} alt="Additional photos" width={220} height={128} className="h-24 w-full object-cover transition duration-200 group-hover:brightness-90" />
            </span>
            <span className="mt-2 block text-sm leading-snug">Additional photos</span>
          </button>
        </nav>

        {rooms.map((r, i) => (
          <section key={r.name} id={`room-${i}`} className="grid scroll-mt-20 grid-cols-[1fr_1.5fr] items-start gap-16 py-10">
            <div className="pt-2">
              <h2 className="text-4xl font-semibold">{r.name}</h2>
              <p className="mt-4 text-foggy">{r.features}</p>
            </div>
            <button onClick={() => onOpenLightbox(i)} aria-label={`Open ${r.name} in lightbox`}
              className="relative h-[460px] w-full cursor-zoom-in overflow-hidden rounded-xl">
              <Image src={r.src} alt={r.alt} fill sizes="60vw" className="object-cover transition duration-300 hover:brightness-95" />
            </button>
          </section>
        ))}

        <section id={`room-${rooms.length}`} className="scroll-mt-20 py-10">
          <h2 className="text-4xl font-semibold">Additional photos</h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {additionalPhotos.map((p, j) => (
              <button key={p.src} onClick={() => onOpenLightbox(rooms.length + j)} aria-label={`Open photo ${j + 1} in lightbox`}
                className="relative h-[340px] w-full cursor-zoom-in overflow-hidden rounded-xl">
                <Image src={p.src} alt={p.alt} fill sizes="50vw" className="object-cover transition duration-300 hover:brightness-95" />
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}