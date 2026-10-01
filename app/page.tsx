"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import PhotoGallery from "@/components/PhotoGallery";
import ListingBody from "@/components/ListingBody";
import BookingCard, { PromoBanner } from "@/components/BookingCard";
import CalendarSection, { type DateRange } from "@/components/CalendarSection";
import Reviews from "@/components/Reviews";
import ReviewsModal from "@/components/ReviewsModal";
import MapSection from "@/components/MapSection";
import ThingsToKnow from "@/components/ThingsToKnow";
import Footer from "@/components/Footer";
import PhotoTour from "@/components/PhotoTour";
import Lightbox from "@/components/Lightbox";
import StickyNav from "@/components/StickyNav";
import AmenitiesModal from "@/components/AmenitiesModal";
import ReserveModal from "@/components/ReserveModal";
import Toast from "@/components/Toast";
import { Heart, Share,Star } from "@/components/Icons";
import { allPhotos, listing } from "@/data/listing";
import { nightsBetween } from "@/lib/dates";

const DEFAULT_RANGE: DateRange = { start: new Date(2026, 9, 18), end: new Date(2026, 9, 23) };

export default function Page() {
  const [range, setRange] = useState<DateRange>(DEFAULT_RANGE);
  const [guests, setGuests] = useState(2);
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [promoClaimed, setPromoClaimed] = useState(false);

  const nights = nightsBetween(range.start, range.end);
  const discount = promoClaimed && nights > 0
    ? Math.round(listing.pricePerNight * nights * 0.1)
    : 0;
  const total = nights > 0 ? listing.pricePerNight * nights + listing.cleaningFee - discount : 0;

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  const toggleSave = useCallback(() => {
    setSaved((s) => {
      if (!s) showToast("Saved to wishlist");
      return !s;
    });
  }, [showToast]);

  const handleShare = useCallback(() => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    showToast("Link copied");
  }, [showToast]);

  // Photo tour <-> URL (?modal=PHOTO_TOUR_SCROLLABLE), browser back closes it
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("modal") === "PHOTO_TOUR_SCROLLABLE") setTourOpen(true);
  }, []);
  useEffect(() => {
    if (tourOpen) window.history.pushState({ tour: true }, "", "?modal=PHOTO_TOUR_SCROLLABLE");
  }, [tourOpen]);
  useEffect(() => {
    const onPop = () => setTourOpen(false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const closeTour = useCallback(() => {
    if (window.history.state?.tour) window.history.back();
    else setTourOpen(false);
  }, []);

  const navLightbox = useCallback((delta: number) => {
    setLightboxIndex((i) => (i === null ? 0 : (i + delta + allPhotos.length) % allPhotos.length));
  }, []);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1280px] px-10 pb-16">
        <div id="photos" className="scroll-mt-24 pt-4">
          <div className="flex items-start justify-between gap-4 pb-4">
            <h1 className="text-2xl font-semibold">{listing.title}</h1>
            <div className="flex shrink-0 gap-2 pt-1">
              <button onClick={handleShare} className="flex items-center gap-1.5 rounded-lg p-2 text-sm font-semibold underline transition hover:bg-gray-100">
                <Share className="h-4 w-4" /> Share
              </button>
              <button onClick={toggleSave} aria-pressed={saved}
                className="flex items-center gap-1.5 rounded-lg p-2 text-sm font-semibold underline transition hover:bg-gray-100">
                <Heart className={`h-4 w-4 ${saved ? "text-rausch" : ""}`} filled={saved} />
                {saved ? "Saved" : "Save"}
              </button>
            </div>
          </div>
          <PhotoGallery onOpen={() => setTourOpen(true)} />
        </div>

        <div className="mt-6 grid grid-cols-[1fr_372px] gap-x-16">
          <div className="border-r border-line pr-16">
            <ListingBody onShowAllAmenities={() => setAmenitiesOpen(true)} />
            <CalendarSection range={range} onChange={setRange} />
          </div>
          <div>
            <div className="sticky top-6">
              <PromoBanner claimed={promoClaimed}
                onClaim={() => { setPromoClaimed(true); showToast("Coupon claimed — 10% off your next stay"); }} />
              <BookingCard range={range} guests={guests} setGuests={setGuests}
                nights={nights} total={total} discount={discount}
                onOpenReserve={() => setReserveOpen(true)} />
            </div>
          </div>
        </div>

        <hr className="my-8 border-line" />
        <div id="reviews" className="scroll-mt-24"><Reviews onShowAll={() => setReviewsOpen(true)} /></div>
        <div id="location" className="scroll-mt-24"><MapSection /></div>
        <ThingsToKnow />
      </main>
      <Footer />

      <StickyNav nights={nights} total={total} onReserve={() => setReserveOpen(true)} />
      <PhotoTour open={tourOpen} suspended={lightboxIndex !== null} saved={saved}
        onClose={closeTour} onOpenLightbox={(i) => setLightboxIndex(i)}
        onToggleSave={toggleSave} onShare={handleShare} />
      <Lightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNav={navLightbox} />
      <AmenitiesModal open={amenitiesOpen} onClose={() => setAmenitiesOpen(false)} />
      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)}
        start={range.start} end={range.end} guests={guests} nights={nights} total={total}
        discount={discount}
        onConfirm={() => { setReserveOpen(false); showToast("Request sent to Mirashya Homes"); }} />
      <ReviewsModal open={reviewsOpen} onClose={() => setReviewsOpen(false)} />
      {toast && <Toast message={toast} />}
    </>
  );
}