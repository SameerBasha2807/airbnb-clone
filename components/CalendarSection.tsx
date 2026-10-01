"use client";
import { useState } from "react";
import { unavailableDates } from "@/data/listing";
import { ChevronLeft } from "./Icons";
import { fmtShort, nightsBetween, sameDay, strip, toKey } from "@/lib/dates";

export interface DateRange { start: Date | null; end: Date | null; }

const TODAY = strip(new Date());

function MonthGrid({ year, month, range, onPick }: { year: number; month: number; range: DateRange; onPick: (d: Date) => void }) {
  const first = new Date(year, month, 1);
  const startDow = first.getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array.from({ length: startDow }, () => null),
    ...Array.from({ length: days }, (_, i) => new Date(year, month, i + 1)),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="w-[308px]">
      <h4 className="text-center text-base font-semibold">
        {first.toLocaleString("en-GB", { month: "long" })} {year}
      </h4>
      <div className="mt-2 grid grid-cols-7">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i} className="py-2 text-center text-[11px] font-semibold text-foggy">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((d, i) => {
          if (!d) return <span key={i} className="h-11 w-11" />;
          const disabled = d < TODAY || unavailableDates.has(toKey(d));
          const isEdge = sameDay(d, range.start) || sameDay(d, range.end);
          const inRange = !!range.start && !!range.end && d > range.start && d < range.end;
          return (
            <button key={i} type="button" disabled={disabled} onClick={() => onPick(d)} aria-label={d.toDateString()}
              className={[
                "flex h-11 w-11 items-center justify-center text-sm transition",
                disabled ? "cursor-not-allowed text-[#dddddd]" : "",
                !disabled && !isEdge ? "hover:rounded-full hover:ring-1 hover:ring-inset hover:ring-hof" : "",
                inRange ? "bg-[#f0f0f0]" : "",
                isEdge ? "rounded-full bg-hof font-semibold text-white" : "",
              ].join(" ")}>
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function CalendarSection({ range, onChange }: { range: DateRange; onChange: (r: DateRange) => void }) {
  const [view, setView] = useState(() => {
    const d = range.start ?? TODAY;
    return { y: d.getFullYear(), m: d.getMonth() };
  });

  const shift = (n: number) =>
    setView((v) => {
      const d = new Date(v.y, v.m + n, 1);
      return { y: d.getFullYear(), m: d.getMonth() };
    });

  const pick = (d: Date) => {
    if (!range.start || (range.start && range.end)) onChange({ start: d, end: null });
    else if (d > range.start) onChange({ start: range.start, end: d });
    else onChange({ start: d, end: null });
  };

  const nights = nightsBetween(range.start, range.end);
  const nextMonth = new Date(view.y, view.m + 1, 1);

  return (
    <section id="calendar" className="scroll-mt-24 border-t border-line py-8">
      <h3 className="text-2xl font-semibold">
        {nights > 0 ? `${nights} night${nights > 1 ? "s" : ""} in Candolim` : "Select dates"}
      </h3>
      <p className="mt-1 text-sm text-foggy">
        {range.start && range.end
          ? `${fmtShort(range.start)} - ${fmtShort(range.end)}`
          : "Add your travel dates for exact pricing"}
      </p>

      <div className="relative mt-8 flex justify-center gap-10">
        <button onClick={() => shift(-1)} aria-label="Previous months"
          className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button onClick={() => shift(1)} aria-label="Next months"
          className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100">
          <ChevronLeft className="h-4 w-4 rotate-180" />
        </button>
        <MonthGrid year={view.y} month={view.m} range={range} onPick={pick} />
        <MonthGrid year={nextMonth.getFullYear()} month={nextMonth.getMonth()} range={range} onPick={pick} />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-foggy">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18" /></svg>
        </span>
        <button onClick={() => onChange({ start: null, end: null })} className="text-sm font-semibold underline">
          Clear dates
        </button>
      </div>
    </section>
  );
}