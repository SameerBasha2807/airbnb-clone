type P = React.SVGProps<SVGSVGElement>;
const base = (p: P) => ({ fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, ...p });

export const Logo = (p: P) => (
  <svg viewBox="0 0 32 32" {...p}>
    <path fill="#FF385C" d="M16 1c2 0 3.4 1.2 4.7 3.6 2.4 4.5 8 15 9.6 18.4.5 1 .8 1.9.8 2.8 0 2.9-2.3 5.2-5.2 5.2-2 0-4.1-1.1-6.3-3.4l-3.6-3.7-3.6 3.7C10.2 30.9 8.1 32 6.1 32 3.2 32 .9 29.7.9 26.8c0-.9.3-1.8.8-2.8C3.3 20.6 8.9 10.1 11.3 5.6 12.6 3.2 14 2 16 2zm0 3.4c-.7 0-1.4.7-2.2 2.2C11.4 12 5.8 22.5 4.2 25.9c-.3.6-.4 1-.4 1 0 1.2 1 2.2 2.3 2.2 1.1 0 2.6-.8 4.3-2.6l3.6-3.7-2-2.1c-1.3-1.4-1.9-2.6-1.9-3.8 0-2 1.6-3.7 3.9-3.7s3.9 1.7 3.9 3.7c0 1.2-.6 2.4-1.9 3.8l-2 2.1 3.6 3.7c1.7 1.8 3.2 2.6 4.3 2.6 1.3 0 2.3-1 2.3-2.2 0-.1-.1-.5-.4-1C26.2 22.5 20.6 12 18.2 6.6c-.8-1.5-1.5-2.2-2.2-2.2zm0 11.6c-.9 0-1.6.7-1.6 1.5 0 .5.3 1.1 1 1.9l.6.7.6-.7c.7-.8 1-1.4 1-1.9 0-.8-.7-1.5-1.6-1.5z"/>
  </svg>
);
export const Search = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>);
export const Globe = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>);
export const Menu = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="M4 7h16M4 12h16M4 17h16"/></svg>);
export const Share = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="M12 3v12M12 3 8 7m4-4 4 4M4 13v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/></svg>);
export const Heart = ({ filled, ...p }: P & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 21s-8-5.5-8-11a4.7 4.7 0 0 1 8-3.3A4.7 4.7 0 0 1 20 10c0 5.5-8 11-8 11z"/>
  </svg>
);
export const Bookmark = ({ filled, ...p }: P & { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3.5L6 21V4.5z" />
  </svg>
);
export const Star = (p: P) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.3 5.8 21l1.6-7L2 9.3l7.1-.7L12 2z"/></svg>);
export const Grid = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><rect x="3" y="3" width="7.5" height="7.5" rx="1"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1"/></svg>);
export const X = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="M6 6l12 12M18 6 6 18"/></svg>);
export const ArrowLeft = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="M19 12H5m7-7-7 7 7 7"/></svg>);
export const ArrowRight = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="M5 12h14m-7-7 7 7-7 7"/></svg>);
export const Info = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><circle cx="12" cy="12" r="10"/><path d="M12 16v-5M12 8h.01"/></svg>);
export const ChevronDown = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="m6 9 6 6 6-6"/></svg>);
export const ChevronLeft = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="m15 5-7 7 7 7"/></svg>);
export const HomeIcon = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="m3 10.5 9-7.5 9 7.5"/><path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5"/><path d="M9.5 21v-6h5v6"/></svg>);
export const Flame = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="M12 2.5s5.5 4.6 5.5 9.7a5.5 5.5 0 0 1-11 0c0-2 1-3.7 2.2-5 .1 1.6 1 2.6 2.1 2.8-.9-2.9-.2-5.6 1.2-7.5z"/></svg>);
export const Fan = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><circle cx="12" cy="12" r="1.6"/><path d="M12 10c0-3.6-1.3-6-3.6-6C6.7 4 5.5 5.3 5.5 7c0 2.3 3 3 6.5 3z"/><path d="M14 12c3.6 0 6-1.3 6-3.6 0-1.7-1.3-2.9-3-2.9-2.3 0-3 3-3 6.5z"/><path d="M12 14c0 3.6 1.3 6 3.6 6 1.7 0 2.9-1.3 2.9-3 0-2.3-3-3-6.5-3z"/><path d="M10 12c-3.6 0-6 1.3-6 3.6 0 1.7 1.3 2.9 3 2.9 2.3 0 3-3 3-6.5z"/></svg>);
export const Door = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="M4 21h16"/><path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><path d="M13.5 12h.01"/></svg>);
export const Laurel = (p: P) => (<svg viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" {...p}><path d="M13.5 3C7 8.5 5.5 20 11 29"/><path d="M12.8 7.2 8.6 5.4M12.2 10.8l-4.7-1M12 14.4l-4.8-.2M12.4 18l-4.5 1M13.3 21.5l-4 2M14.6 25l-3.4 2.7"/></svg>);
export const Flag = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="M5 21V4"/><path d="M5 4h13l-2.5 4L18 12H5"/></svg>);
export const Tag = (p: P) => (<svg viewBox="0 0 24 24" {...base(p)}><path d="M3 11V4a1 1 0 0 1 1-1h7l10 10-8 8L3 11z"/><path d="M8 8h.01"/></svg>);

export const AmenityIcon = ({ name, ...p }: P & { name: string }) => {
  const paths: Record<string, React.ReactNode> = {
    wifi: <><path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0"/><path d="M12 20h.01"/></>,
    car: <><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14a1 1 0 0 1 1 1v4h-2M5 11a1 1 0 0 0-1 1v4h2m14 0a2 2 0 1 1-4 0m-8 0a2 2 0 1 1-4 0m4 0h8"/></>,
    pool: <><path d="M2 18c2 0 2.5-1.5 5-1.5S9.5 18 12 18s2.5-1.5 5-1.5S19.5 18 22 18"/><path d="M8 16V4a2 2 0 0 1 4 0M16 16V4a2 2 0 0 1 4 0M8 8h8M8 12h8"/></>,
    hottub: <><path d="M4 12h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z"/><path d="M2 12h20M9 9c-1-1.5 1-2.5 0-4m4 4c-1-1.5 1-2.5 0-4"/></>,
    ac: <><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3"/></>,
    tv: <><rect x="2" y="5" width="20" height="13" rx="2"/><path d="M8 21h8"/></>,
    kitchen: <><path d="M7 3v8a2 2 0 0 0 4 0V3M9 3v18M17 3c-1.5 2-2 5-2 7h4c0-2-.5-5-2-7zM17 10v11"/></>,
    washer: <><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M8 6.5h.01M12 6.5h.01"/></>,
    desk: <><path d="M3 9h18M4 9v11m16-11v11M12 9v4m-9-8h18"/><path d="M9 9v11h6"/></>,
    pets: <><circle cx="7" cy="9" r="1.5"/><circle cx="11" cy="6.5" r="1.5"/><circle cx="15.5" cy="8" r="1.5"/><circle cx="18" cy="12" r="1.5"/><path d="M12 11c-2.5 0-5 2-5 4.5 0 1.4 1 2.5 2.4 2.5 1 0 1.7-.5 2.6-.5s1.6.5 2.6.5c1.4 0 2.4-1.1 2.4-2.5C17 13 14.5 11 12 11z"/></>,
    alarm: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2"/><path d="M12 4v2M20 12h-2M12 20v-2M4 12h2"/></>,
    hairdryer: <><path d="M4 8.5A3.5 3.5 0 0 1 7.5 5H17v8H7.5A3.5 3.5 0 0 1 4 9.5v-1z"/><path d="M17 7h3M17 11h3M9.5 13 8 21"/></>,
    spray: <><rect x="8" y="9" width="8" height="12" rx="1.5"/><path d="M10.5 9V6.5h3V9"/><path d="M12 6.5V4h4"/><path d="M18 4h.01M20 6h.01"/></>,
    shampoo: <><path d="M9.5 7h5M10.5 7V4h3v3M13.5 4h4"/><rect x="8" y="7" width="8" height="14" rx="2"/></>,
    hotwater: <><path d="M8.5 3c0 1.8-1.8 2-1.8 3.8S8.5 9 8.5 10.8M14.5 3c0 1.8-1.8 2-1.8 3.8s1.8 2 1.8 3.8"/><path d="M4.5 14h15l-1.4 5.4A2 2 0 0 1 16.2 21H7.8a2 2 0 0 1-1.9-1.6L4.5 14z"/></>,
    gel: <><rect x="8.5" y="7" width="7" height="14" rx="2"/><path d="M10.5 7V5h3v2"/><circle cx="19" cy="5" r="1"/><circle cx="21" cy="8.5" r="1"/></>,
    dryer: <><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M9.5 13c1-1.2 2-1.2 2.5 0s1.5 1.2 2.5 0M7.5 6.5h2"/></>,
    towel: <><rect x="4" y="4" width="12" height="6" rx="1"/><rect x="8" y="13" width="12" height="6" rx="1"/><path d="M16 7h2M12 16h2"/></>,
    hanger: <><path d="M12 7a2 2 0 1 0-2-2"/><path d="M12 7 3.7 13.2A1.4 1.4 0 0 0 4.6 15.7h14.8a1.4 1.4 0 0 0 .9-2.5L12 7z"/></>,
    iron: <><path d="M3.5 15h13a5.5 5.5 0 0 0-5.5-5.5h-.7l.9-3H18"/><path d="M3.5 15v3H17"/></>,
    speaker: <><rect x="6.5" y="3" width="11" height="18" rx="2"/><circle cx="12" cy="14.5" r="3.2"/><circle cx="12" cy="7.5" r="1.2"/></>,
    book: <><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5v-17z"/><path d="M19 15H7.5A2.5 2.5 0 0 0 5 17.5"/></>,
    gym: <><path d="M6.5 6.5v11M3.5 8.5v7M17.5 6.5v11M20.5 8.5v7M6.5 12h11"/></>,
    extinguisher: <><rect x="8" y="8" width="7" height="13" rx="2"/><path d="M10 8V6h3.5V8M11.5 6V4h5M16.5 4 19 6M8.5 12H6a2 2 0 0 0-2 2"/></>,
    firstaid: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M12 11v5M9.5 13.5h5"/></>,
  };
  return <svg viewBox="0 0 24 24" {...base(p)}>{paths[name] ?? paths.wifi}</svg>;
};