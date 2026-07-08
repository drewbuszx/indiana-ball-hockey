import Image from "next/image";
import { Button } from "./Button";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  image?: string;
  imageAlt?: string;
  compact?: boolean;
  priority?: boolean;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image = "/assets/hero-action.jpg",
  imageAlt = "Ball hockey action in Indiana",
  compact = false,
  priority = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-start overflow-hidden bg-arena sm:items-center ${
        compact
          ? "min-h-0 py-28 sm:min-h-[50vh]"
          : "min-h-[100dvh] pt-24"
      }`}
    >
      <div className="absolute inset-0 bg-rink-glow" aria-hidden="true" />
      <div className="absolute inset-0 bg-arena-lights" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arena via-arena/80 to-arena/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-arena via-transparent to-arena/60" />
      </div>

      <HeroRinkMarkings />

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${
          compact ? "pb-12 pt-4" : "pb-16 pt-8 sm:pb-20"
        }`}
      >
        <div className="max-w-4xl animate-fade-up">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="headline-xl text-balance">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  external={primaryCta.external}
                  size="lg"
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  external={secondaryCta.external}
                  variant="secondary"
                  size="lg"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {!compact && (
          <>
            <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
              <StatPill label="Format" value="3v3 & 5v5" />
              <StatPill label="Location" value="Indianapolis" />
              <StatPill label="Skill Level" value="All Welcome" />
              <StatPill label="Equipment" value="Run, Don't Skate" />
            </div>
            <div className="mt-16 hidden items-end justify-between border-t border-white/10 pt-8 lg:flex">
              <StatPill label="Format" value="3v3 & 5v5" />
              <StatPill label="Location" value="Indianapolis" />
              <StatPill label="Skill Level" value="All Welcome" />
              <StatPill label="Equipment" value="Run, Don't Skate" />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card px-4 py-3 sm:px-6 sm:py-4">
      <p className="text-xs uppercase tracking-widest text-rink-300">{label}</p>
      <p className="mt-1 font-display text-sm font-bold uppercase sm:text-lg">
        {value}
      </p>
    </div>
  );
}

function HeroRinkMarkings() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 w-full text-rink-300 opacity-20"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 60 H1440"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="20 10"
      />
      <circle
        cx="720"
        cy="60"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
