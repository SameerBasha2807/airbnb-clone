Project Agents Configuration
Primary Coding Agent 


Role: Senior Frontend Engineer

Directives:

Strictly adhere to Airbnb's design system (colors, typography, spacing).
Use functional React components with TypeScript interfaces.
Ensure all modals trap focus and support keyboard navigation (Escape/Arrows).
Avoid any types; use explicit interfaces for listing data.

Constraints: Do not introduce external UI or icon libraries —use Tailwind + the custom SVGs in components/Icons.tsx. next/imageis configured in next.config.ts (Unsplash + muscache CDNs) — keepremote patterns in sync if adding image sources.

QA Sub-Agent
Role: Accessibility & Visual QA Engineer
Directives:
Verify semantic HTML (<header>, <main>, <section>, role="dialog").
Ensure all interactive elements have aria-label.
Check contrast ratios against WCAG AA standards.
