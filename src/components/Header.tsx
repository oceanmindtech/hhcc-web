import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { churchInfo, navLinks } from "../data/content";
import hhccLogo from "../assets/hhcc-logo.png";

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="border-b border-parchment-dark bg-pine text-[13px]">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 sm:px-6">
          <span className="hidden sm:inline text-brass">◆</span>
          <span className="font-medium text-parchment">
            歡迎各位參加本堂崇拜 · 願你們遇見神，心靈被提升，生命得改變
          </span>
          <span className="hidden sm:inline text-brass">◆</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-parchment-dark bg-parchment transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-pine/5 backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between sm:h-[72px]">
            <Link to="/" className="group flex items-center gap-3">
              <img
                src={hhccLogo}
                alt={churchInfo.name}
                className="h-12 w-12 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <p className="text-sm font-bold leading-tight tracking-wide text-ink">
                  {churchInfo.name}
                </p>
                <p className="font-display text-[11px] tracking-[0.16em] text-ink-soft">
                  {churchInfo.englishName}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-pine"
                      : "text-ink-soft hover:text-pine"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute inset-x-3.5 -bottom-[2px] h-0.5 rounded-full bg-brass" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:27731928"
                className="hidden xl:inline-flex items-center gap-2 rounded-full border border-pine/25 px-5 py-2 text-sm font-medium text-pine transition-colors hover:border-brass hover:text-brass"
              >
                2773 1928
              </a>
              <button
                type="button"
                className="p-2 text-ink hover:text-pine lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="開啟選單"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <nav className="animate-fade-in border-t border-parchment-dark bg-parchment pb-4 pt-2 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block border-l-2 px-5 py-3 text-sm font-medium ${
                  location.pathname === link.path
                    ? "border-brass bg-brass/10 text-pine"
                    : "border-transparent text-ink-soft hover:bg-parchment-dark/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}