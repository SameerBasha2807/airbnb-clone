```markdown
# Project
Airbnb listing-page clone (take-home task). Desktop only. Three views:
listing page, Photo Tour (full-page overlay, URL-synced
?modal=PHOTO_TOUR_SCROLLABLE), Lightbox (←/→ keyboard nav).

# Stack
Next.js App Router · TypeScript · Tailwind v4 (@theme in globals.css,
NO tailwind.config.ts) · next/image · no UI/icon libraries (custom SVGs).

# Conventions
- Single source of truth: data/listing.ts. All counts derived
  (reviewsCount = reviews.length; totalAmenities = sum of amenitySections).
- Overlays use lib/scrollLock.ts (refcounted) and follow the dialog pattern:
  role=dialog, aria-modal, focus-in on open, restore on close, Esc closes.
- Money formatted via `₹` + toLocaleString("en-IN"); totals computed in
  app/page.tsx and passed down (booking card, Reserve modal, StickyNav).
- Before committing: run `npm run build` — it must be clean.