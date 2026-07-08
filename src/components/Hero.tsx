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
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden bg-arena ${compact ? "min-h-[50vh] pt-28" : "min-h-screen pt-24"}`}
    >
      <div className="absolute inset-0 bg-rink-glow" aria-hidden="true" />
      <div className="absolute inset-0 bg-arena-lights" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arena via-arena/80 to-arena/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-arena via-transparent to-arena/60" />
      </div>

      <HeroRinkMarkings />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-12">
        <div className="max-w-4xl animate-fade-up">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="headline-xl text-balance">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
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
          <div className="mt-16 hidden items-end justify-between border-t border-white/10 pt-8 lg:flex">
            <StatPill label="Format" value="3v3 & 5v5" />
            <StatPill label="Location" value="Indianapolis" />
            <StatPill label="Skill Level" value="All Welcome" />
            <StatPill label="Equipment" value="Run, Don't Skate" />
          </div>
        )}
      </div>
    </section>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card px-6 py-4">
      <p className="text-xs uppercase tracking-widest text-rink-300">{label}</p>
      <p className="mt-1 font-display text-lg font-bold uppercase">{value}</p>
    </div>
  );
}

function HeroRinkMarkings() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 w-full opacity-20"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 60 H1440"
        stroke="#4da8f5"
        strokeWidth="2"
        strokeDasharray="20 10"
      />
      <circle cx="720" cy="60" r="30" fill="none" stroke="#4da8f5" strokeWidth="2" />
    </svg>
  );
}
