Airbnb Listing Page Clone
A pixel-focused clone of an Airbnb listing page built with Next.js,reproducing the listing view plus two overlays: the full-screen Photo Tourand the Lightbox photo viewer.

Live Demo
https://airbnb-clone-pi-bay-67.vercel.app

Views
Listing Page — hero gallery, booking card with live pricing,two-month calendar with date-range picking, amenities modal, reviewsmodal, sticky section nav, Save/Share toasts.
Photo Tour — full-page scrollable gallery synced to?modal=PHOTO_TOUR_SCROLLABLE; room thumbnails smooth-scroll tosections; browser Back closes it.
Lightbox — single-photo viewer over the tour with prev/nextarrows, keyboard ←/→ navigation, wrap-around, Esc to close, andfocus restore.
Tech Stack
Next.js (App Router) + TypeScript
Tailwind CSS v4 (@theme tokens, no config file)
Custom SVG icons (no icon libraries)
Data layer with derived counts (data/listing.ts)
Run Locally
npm installnpm run dev

open http://localhost:3000
Build
npm run build && npm start

Accessibility
All overlays: role="dialog", aria-modal, Esc to close, focus moves in onopen and restores on close, body scroll lock (refcounted for stackedoverlays), keyboard paths throughout.

AI Workflow
Human-led, AI-assisted development. Prompt log: docs/ai-prompts.md.Sub-agent configs: .claude/agents/. Agent directives: AGENTS.md.Project conventions: CLAUDE.md.

Architecture
Production-scale system design: docs/architecture.png.