import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-parchment-dark bg-heritage text-ink">
      <div className="absolute inset-0 hero-wash" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16">
        <nav className="mb-6 flex items-center gap-2 text-xs text-ink-soft/70">
          <Link to="/" className="transition-colors hover:text-brass">
            首頁
          </Link>
          <span>/</span>
          <span className="text-brass">{breadcrumb}</span>
        </nav>
        <h1 className="font-serif text-3xl font-bold text-pine sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
          {subtitle}
        </p>
        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-14 bg-brass" />
          <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
          <span className="h-px w-8 bg-brass/50" />
        </div>
      </div>
    </section>
  );
}