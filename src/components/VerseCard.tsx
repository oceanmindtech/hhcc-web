interface VerseCardProps {
  text: string;
  reference: string;
  className?: string;
}

export function VerseCard({ text, reference, className = "" }: VerseCardProps) {
  return (
    <blockquote
      className={`relative border border-brass/30 bg-white/80 px-8 py-10 text-center shadow-[0_24px_70px_-30px_rgba(30,74,63,0.35)] sm:px-12 ${className}`}
    >
      <span
        className="pointer-events-none absolute left-4 top-2 font-serif text-7xl leading-none text-brass/30"
        aria-hidden
      >
        “
      </span>
      <p className="font-serif text-lg leading-relaxed text-pine sm:text-xl">{text}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-brass">
        {reference}
      </p>
    </blockquote>
  );
}