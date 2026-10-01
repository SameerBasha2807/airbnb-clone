import { listing, ratingsBreakdown, reviews } from "@/data/listing";
import { Star } from "./Icons";

export default function Reviews({ onShowAll }: { onShowAll: () => void }) {
  return (
    <section className="py-8" aria-label="Reviews">
      <div className="flex items-center gap-2">
        <Star className="h-5 w-5" />
        <h3 className="text-xl font-semibold">{listing.rating} · {listing.reviewsCount} reviews</h3>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-x-8 gap-y-4">
        {ratingsBreakdown.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 text-sm">
            <span className="w-28">{r.label}</span>
            <span className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
              <span className="block h-full rounded-full bg-hof" style={{ width: `${(r.value / 5) * 100}%` }} />
            </span>
            <span>{r.value}</span>
          </div>
        ))}
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

      <button onClick={onShowAll} className="mt-8 rounded-lg border border-black px-5 py-3 text-sm font-semibold transition hover:bg-gray-100">
        Show all {listing.reviewsCount} reviews
      </button>
    </section>
  );
}