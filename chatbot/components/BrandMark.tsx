import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 text-left"
      aria-label="Retour a la page d'accueil BMM Guide"
    >
      <span className="flex size-11 items-center justify-center rounded-2xl border border-brand-bronze/40 bg-brand-ink text-sm font-semibold tracking-[0.28em] text-brand-ivory shadow-card transition-transform duration-200 group-hover:-translate-y-0.5">
        BMM
      </span>
      <span className="flex flex-col">
        <span className="font-display text-lg leading-none text-foreground">
          BMM Guide
        </span>
        {!compact ? (
          <span className="text-sm text-muted-foreground">
            Black Med Mentorship
          </span>
        ) : null}
      </span>
    </Link>
  );
}
