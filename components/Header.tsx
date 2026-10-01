import { Logo, Search, Globe, Menu, HomeIcon } from "./Icons";

export default function Header() {
  return (
    <header className="border-b border-line bg-white">
      <div className="flex h-20 items-center justify-between px-10 xl:px-20">
        <a href="/" className="flex items-center gap-1.5" aria-label="Airbnb home page">
          <Logo className="h-8 w-8" />
          <span className="text-[22px] font-bold tracking-tight text-rausch">airbnb</span>
        </a>

        <div className="flex items-center divide-x divide-line rounded-full border border-line shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
          <button className="flex items-center gap-2 px-6 py-3.5 text-sm font-medium">
            <HomeIcon className="h-4 w-4 text-rausch" /> Anywhere
          </button>
          <button className="px-6 py-3.5 text-sm font-medium">Anytime</button>
          <button className="flex items-center gap-3 py-2.5 pl-5 pr-2.5 text-sm text-foggy">
            <span className="pl-2">Add guests</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rausch text-white">
              <Search className="h-4 w-4" />
            </span>
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button className="rounded-full p-3 text-sm font-medium transition hover:bg-gray-100">Become a host</button>
          <button className="rounded-full p-3 transition hover:bg-gray-100" aria-label="Choose a language">
            <Globe className="h-5 w-5" />
          </button>
          <button className="rounded-full p-3 transition hover:bg-gray-100" aria-label="Main menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}