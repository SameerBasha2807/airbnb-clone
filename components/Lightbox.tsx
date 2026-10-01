"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { allPhotos } from "@/data/listing";
import { ArrowLeft, ArrowRight, Info, X } from "./Icons";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

interface Props {
  index: number | null;
  onClose: () => void;
  onNav: (delta: number) => void;
}

export default function Lightbox({ index, onClose, onNav }: Props) {
  const [showInfo, setShowInfo] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const prevFocus = useRef<HTMLElement | null>(null);
  const open = index !== null;
  const photo = open ? allPhotos[index] : null;

  useEffect(() => {
    if (!open) return;
    prevFocus.current = document.activeElement as HTMLElement;
    lockScroll();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") { onNav(1); setShowInfo(false); }
      if (e.key === "ArrowLeft") { onNav(-1); setShowInfo(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockScroll();
      prevFocus.current?.focus();
    };
  }, [open, onClose, onNav]);

  if (!open || !photo) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 animate-fade-in">
      <button ref={closeRef} onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close"
        className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:scale-110">
        <X className="h-5 w-5" />
      </button>

      <p className="absolute right-6 top-6 text-sm font-medium text-white">{index + 1} / {allPhotos.length}</p>

      <button onClick={(e) => { e.stopPropagation(); onNav(-1); setShowInfo(false); }} aria-label="Previous photo"
        className="absolute left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110">
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNav(1); setShowInfo(false); }} aria-label="Next photo"
        className="absolute right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110">
        <ArrowRight className="h-5 w-5" />
      </button>

      <figure onClick={(e) => e.stopPropagation()} className="animate-zoom-in">
        <Image key={photo.src} src={photo.src} alt={photo.alt} width={1600} height={1000} priority
          className="max-h-[82vh] w-auto rounded-lg object-contain" />
        {showInfo && (
          <figcaption className="mx-auto mt-4 w-fit rounded-full bg-white px-5 py-2.5 text-sm shadow-lg animate-slide-up">
            <span className="font-semibold">{photo.label}</span>
            <span className="text-foggy"> — {photo.alt}</span>
          </figcaption>
        )}
      </figure>

      <button onClick={(e) => { e.stopPropagation(); setShowInfo((v) => !v); }} aria-label="Photo info" aria-expanded={showInfo}
        className="absolute bottom-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:scale-110">
        <Info className="h-5 w-5" />
      </button>
    </div>
  );
}