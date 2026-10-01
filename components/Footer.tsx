const cols = [
  { h: "Support", links: ["Help Centre", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options"] },
  { h: "Hosting", links: ["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibly"] },
  { h: "Airbnb", links: ["Newsroom", "New features", "Careers", "Investors", "Gift cards"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#f7f7f7]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-3 gap-8 px-10 py-12">
        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="font-semibold">{c.h}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {c.links.map((l) => <li key={l}><a href="#" className="hover:underline">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-10 py-6 text-sm">
          <p>© 2025 Airbnb, Inc. · Terms · Sitemap · Privacy · Your Privacy Choices</p>
          <p className="font-semibold">English (IN) · ₹ INR</p>
        </div>
      </div>
    </footer>
  );
}