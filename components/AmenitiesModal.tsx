"use client";
import { useEffect, useRef } from "react";
import { amenitySections } from "@/data/listing";
import { AmenityIcon, X } from "./Icons";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

export default function AmenitiesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
    <div role="dialog" aria-modal="true" aria-label="What this place offers" onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 animate-fade-in">
      <div onClick={(e) => e.stopPropagation()}
        className="relative max-h-[80vh] w-[620px] overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl animate-zoom-in">
        <button ref={closeRef} onClick={onClose} aria-label="Close"
          className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100">
          <X className="h-5 w-5" />
        </button>
        <h2 className="pl-12 text-2xl font-semibold">What this place offers</h2>

        {amenitySections.map((section) => (
          <div key={section.title} className="mt-8">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <ul className="mt-2">
              {section.items.map((item, i) => (
                <li key={`${item.label}-${i}`}
                  className={`flex items-center gap-4 border-b border-line py-4 last:border-0 ${item.unavailable ? "text-foggy" : ""}`}>
                  <AmenityIcon name={item.icon} className="h-6 w-6 shrink-0" />
                  <span className={item.unavailable ? "line-through" : ""}>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}