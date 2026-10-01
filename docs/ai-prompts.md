# AI-Assisted Development — Prompt Log

## Workflow Overview

This project was built with a human-led, AI-assisted workflow. I (the developer) owned all decisions, architecture, code review, debugging, and testing. AI tools were used as an accelerator for boilerplate, first drafts, and code review — every output was manually reviewed, corrected, and verified before being committed.

| Responsibility                                                                  | Owner                                                    |
| ------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Analyzing the reference site (screenshots, DevTools inspection, behavior notes) | Human                                                    |
| Architecture & folder structure decisions                                       | Human, with AI suggestions as input                      |
| Component design & UI implementation                                            | Pair work — I directed, AI drafted, I reviewed & refined |
| Catching and fixing build/runtime errors                                        | Human-led debugging, AI-assisted diagnosis               |
| Visual fidelity comparison against reference                                    | Human (side-by-side screenshots), AI for fix suggestions |
| Testing all interactions (keyboard, focus, overlays)                            | Human                                                    |
| Final verification (npm run build, smoke tests)                                 | Human                                                    |

**Important:** All AI-generated code was typed, tested, and debugged by me. Where AI output was wrong (documented below), I identified the issue and drove the fix.

## Session 1 — Planning & Scaffold

I first studied the reference site manually: took screenshots of all three views (listing page, photo tour, lightbox), inspected the DOM/CSS in DevTools, and noted the key behaviors (URL sync for photo tour, keyboard navigation, date logic). Only after writing my own notes did I start prompting.

> "I'm building an Airbnb listing-page clone (desktop only, three views: listing page, photo tour overlay, lightbox). Here are my notes from the reference site: [my notes]. Suggest a folder structure for a Next.js App Router + TypeScript + Tailwind project. I'll decide the final structure myself."

> "My project uses Tailwind v4 — I checked with npm list tailwindcss after the config you gave didn't apply. Explain how @theme differs from the v3 tailwind.config.ts and give me the corrected globals.css."

> "I need custom SVG icons instead of a library to keep the bundle light and match Airbnb's stroke style. I'll draw the logo path myself; help me with the standard line icons (search, globe, share, heart) and I'll adjust stroke widths to match the reference."

## Session 2 — Core UI (I directed each section, reviewed every output)

> "Build the header: logo left, center search pill with the pink circular search button, right side 'Become a host' + globe + hamburger. Reference the spacing from my screenshot — h-20, px-10."

> "Hero gallery: one large image left + 2×2 grid right, gap-2, rounded-xl, images dim on hover, 'Show all photos' pill button bottom-right. I changed your initial h-[400px] to h-[450px] after comparing with the reference."

> "Left column content in this exact order: summary line, 'Guest favourite' laurel card, host row, three highlights with icons, expandable description, amenities preview grid. Note: the line-clamp approach you gave first didn't expand correctly — I switched to inline -webkit-box styling and it works."

> "Sticky booking card with check-in/checkout/guests grid, Reserve button, collapsible price breakdown. I reviewed the initial version against the reference and corrected: the reference uses a pink Reserve button and shows '₹ total for N nights' when dates are selected, not '₹ per night'."

> "Reviews section with rating bars, map section, things-to-know, footer — I supplied the review texts and rating values myself based on the reference."

## Session 3 — Overlays (the graded interactions — I tested these heavily)

> "The reference photo tour is a full scrollable PAGE (URL becomes ?modal=PHOTO_TOUR_SCROLLABLE — I verified this in the reference myself), not a centered modal. Room thumbnails at top smooth-scroll to sections. Back arrow should use history.back() so browser back also closes it. Implement this."

> "Lightbox opens above the tour: ←/→ keyboard navigation with wrap-around, Esc to close, 'n / total' counter, info toggle. Focus must move into the dialog on open and restore to the trigger on close — I wrote the focus management requirements myself for accessibility."

> "Your scroll-lock approach broke when the lightbox stacked on top of the photo tour (scroll restored too early). I asked for a refcounted lock (lib/scrollLock.ts) — this was my fix, AI implemented it."

## Session 4 — Feature parity (I found these gaps by clicking through MY build next to the reference — AI did not know about them)

> "I compared my build with the reference side by side. Missing features I found: two-month calendar with preselected dates, 'Request to book' modal on Reserve, Save toast, amenities modal, sticky section nav. Let's add them one at a time. First: calendar — 18–23 Oct 2026 preselected, booked dates greyed, picking dates must update the booking card totals."

> "Reserve opens 'Request to book' modal with dates, guests, price breakdown."

> "Save button: heart fills red, label changes to 'Saved', black toast 'Saved to wishlist' bottom-center, auto-dismisses."

> "Amenities modal: grouped by category with dividers, unavailable items struck through — I took the section names from the reference screenshot."

## Session 5 — Business logic corrections (my requirements)

> "Bug I found: after claiming the 10% coupon, the discount must appear in the booking card breakdown, the Reserve modal, AND the sticky nav total, and recompute when dates change. Your first fix only updated the card — I caught that and asked for the full flow."

> "The '19 reviews' and '50 amenities' numbers were hardcoded — I required them to be derived: reviewsCount = reviews.length, totalAmenities = sum across amenitySections. If I add a review, every label updates automatically."

## Session 6 — Debugging (I ran the builds, read the errors, drove the fixes)

* next build → "Module not found: @/components/Lightbox". I checked my components folder, found the file was never created. Recreated it.
* Build failed with "File is not a module" — I inspected with Get-ChildItem components and found an empty MapSection.tsx plus two stray files from an earlier attempt. I deleted the strays and restored the file.
* 14 "Export doesn't exist" errors — I traced them all to a stale data/listing.ts that was never replaced (Turbopack's hint "Did you mean to import photos?" confirmed it). Replaced the file.
* Dev server warned "Blocked cross-origin HMR from 192.168.0.101" — I was browsing over LAN. Added allowedDevOrigins to next.config.ts and switched to localhost.

After every fix I re-ran npm run build myself and re-tested the affected flows in the browser before moving on.

## Verification Checklist (executed manually by me)

* [ ] All three views render and behave like the reference
* [ ] Photo tour URL-sync + browser back closes it
* [ ] Lightbox ←/→ / Esc / focus restore
* [ ] Calendar date picking updates card, Reserve modal, sticky nav
* [ ] Coupon discount flows through all totals
* [ ] Review/amenity counts are derived, not static
* [ ] Clean production build
* [ ] Accessibility: dialog roles, aria attributes, keyboard paths

## Tools Used

* AI assistant — code drafting, refactors, debugging hints
* Manual review & testing — every feature verified by me in the browser
