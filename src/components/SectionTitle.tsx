interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  eyebrow?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  eyebrow,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-jade">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-2xl font-bold text-pine sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-base">{subtitle}</p>
      )}
      <div
        className={`mt-4 flex items-center gap-1.5 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-10 bg-brass" />
        <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
        <span className="h-px w-4 bg-brass/50" />
      </div>
    </div>
  );
}