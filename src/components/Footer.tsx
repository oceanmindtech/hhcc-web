import { Link } from "react-router-dom";
import { churchInfo, navLinks, moreLinks } from "../data/content";
import { BibleIcon, CrossIcon, MapPinIcon, PhoneIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pine-dark text-parchment/70">
      <div className="h-1 bg-gradient-to-r from-transparent via-brass to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-parchment/10 ring-1 ring-brass/40">
                <CrossIcon className="h-5 w-5 text-brass-light" />
              </div>
              <div>
                <p className="font-bold text-parchment">{churchInfo.name}</p>
                <p className="font-display text-[11px] tracking-[0.16em] text-parchment/45">
                  {churchInfo.englishName}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed">{churchInfo.tagline}</p>
            <p className="mt-5 flex items-start gap-2 text-sm">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
              <span>{churchInfo.address}</span>
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm">
              <PhoneIcon className="h-4 w-4 shrink-0 text-brass" />
              <span>{churchInfo.phones.join("、")}</span>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-parchment">快速連結</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-2 text-sm transition-colors hover:text-brass-light"
                  >
                    <span className="h-px w-3 bg-brass/60" />
                    {link.label}
                  </Link>
                </li>
              ))}
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-2 text-sm transition-colors hover:text-brass-light"
                  >
                    <span className="h-px w-3 bg-brass/60" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wider text-parchment">
              <BibleIcon className="h-4 w-4 text-brass" />
              經文分享
            </h3>
            <blockquote className="text-sm leading-relaxed text-parchment/75">
              「我來了，是要叫羊得生命，並且得的更豐盛。」
            </blockquote>
            <p className="mt-2 text-xs text-brass-light">— 約翰福音 10:10</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-parchment/10 pt-6 text-sm sm:flex-row">
          <p>版權所有 © {year} {churchInfo.name}</p>
          <p className="text-parchment/40">願你認識耶穌基督，得著豐盛的生命</p>
        </div>
      </div>
    </footer>
  );
}