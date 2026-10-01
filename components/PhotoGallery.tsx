"use client";
import Image from "next/image";
import { rooms } from "@/data/listing";
import { Grid } from "./Icons";

export default function PhotoGallery({ onOpen }: { onOpen: () => void }) {
  const main = rooms[0];
  const side = [rooms[1], rooms[2], rooms[3], rooms[6]];
  return (
    <section className="relative" aria-label="Photo gallery">
      <div className="grid h-[450px] grid-cols-2 gap-2 overflow-hidden rounded-xl">
        <button onClick={onOpen} className="group relative cursor-zoom-in" aria-label="Open photo tour — living room">
          <Image src={main.src} alt={main.alt} fill priority sizes="50vw" className="object-cover transition duration-300 group-hover:brightness-90" />
        </button>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {side.map((p) => (
            <button key={p.name} onClick={onOpen} className="group relative cursor-zoom-in" aria-label={`Open photo tour — ${p.name}`}>
              <Image src={p.src} alt={p.alt} fill sizes="25vw" className="object-cover transition duration-300 group-hover:brightness-90" />
            </button>
          ))}
        </div>
      </div>
      <button onClick={onOpen}
        className="absolute bottom-5 right-5 flex items-center gap-1.5 rounded-lg border border-black bg-white px-3.5 py-2 text-sm font-semibold shadow-sm transition duration-200 hover:scale-105 hover:bg-gray-100">
        <Grid className="h-4 w-4" /> Show all photos
      </button>
    </section>
  );
}