import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

interface LeagueCardProps {
  name: string;
  location: string;
  format: string;
  surface: string;
  description: string;
  audience: string;
  href: string;
  image: string;
  imageAlt: string;
  logo?: string;
  logoTile?: "light" | "dark" | "none";
  badge: string;
}

export function LeagueCard({
  name,
  location,
  format,
  surface,
  description,
  audience,
  href,
  image,
  imageAlt,
  logo,
  logoTile = "light",
  badge,
}: LeagueCardProps) {
  const isTransparentLogo = logoTile === "none";
  const isRooftop = badge === "3v3";
  const logoTileClass =
    logoTile === "dark"
      ? "border border-white/20 bg-black/90 p-3 shadow-2xl shadow-black/60 ring-1 ring-white/10"
      : logoTile === "none"
        ? "drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
        : "border border-white/25 bg-white p-3 shadow-2xl shadow-black/60 ring-1 ring-white/20";
  const logoSizeClass = isTransparentLogo
    ? "h-28 w-28 sm:h-36 sm:w-36 md:h-[11.7rem] md:w-[11.7rem]"
    : "h-24 w-24 sm:h-32 sm:w-32";
  const contentClearance = isTransparentLogo
    ? "pr-28 sm:pr-36 md:pr-44"
    : "pr-24 sm:pr-32";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-arena-elevated shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-rink-400/45 hover:shadow-2xl hover:shadow-rink-500/15">
      <div className="relative">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arena-elevated via-arena-elevated/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-rink-500/10 via-transparent to-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg ${
              isRooftop
                ? "bg-gold text-arena shadow-gold/30"
                : "bg-rink-400 text-arena shadow-rink-500/30"
            }`}
          >
            {badge}
          </span>
        </div>
        {logo && (
          <div
            className={`absolute -bottom-8 right-4 z-10 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 sm:-bottom-12 sm:right-8 ${isTransparentLogo ? "rounded-none" : "rounded-2xl"} ${logoSizeClass} ${logoTileClass}`}
          >
            <Image
              src={logo}
              alt={`${name} crest`}
              width={isTransparentLogo ? 187 : 144}
              height={isTransparentLogo ? 187 : 144}
              className="h-full w-full object-contain"
              sizes="(max-width: 640px) 112px, 187px"
              loading="lazy"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 pt-12 sm:p-8 sm:pt-14">
        <div
          className={`mb-3 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-rink-300 ${contentClearance}`}
        >
          <span className="rounded-full border border-rink-400/20 bg-rink-500/10 px-2.5 py-0.5">
            {format}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5">
            {surface}
          </span>
        </div>

        <div className={contentClearance}>
          <h3 className="font-display text-xl font-bold uppercase leading-tight sm:text-2xl">
            {name}
          </h3>
          <p className="mt-1 text-sm font-medium text-gold">{location}</p>
        </div>

        <p className={`mt-4 flex-1 prose-body ${contentClearance}`}>
          {description}
        </p>

        <p className={`mt-4 prose-muted ${contentClearance}`}>
          <span className="font-medium text-white/75">Best for: </span>
          {audience}
        </p>

        <div className="mt-6">
          <Button href={href} external className="w-full sm:w-auto">
            Register on Kreezee
          </Button>
          <p className="mt-2 text-xs text-white/40">
            Sign up, schedules &amp; rosters on Kreezee
          </p>
        </div>
      </div>
    </article>
  );
}

export function FeatureCard({
  title,
  description,
  stat,
  statLabel,
}: {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}) {
  return (
    <div className="glass-card-interactive group relative overflow-hidden p-6">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-rink-500/10 blur-2xl transition-all duration-500 group-hover:bg-gold/15"
        aria-hidden="true"
      />
      <div className="relative mb-4 flex items-baseline gap-2">
        <span className="font-display text-4xl font-bold text-rink-400 transition-colors duration-300 group-hover:text-gold">
          {stat}
        </span>
        <span className="text-xs uppercase tracking-widest text-white/40">
          {statLabel}
        </span>
      </div>
      <h3 className="relative font-display text-lg font-bold uppercase">
        {title}
      </h3>
      <p className="relative mt-2 prose-muted">{description}</p>
    </div>
  );
}

export function QuickPathCard({
  title,
  description,
  href,
  cta = "Explore",
}: {
  title: string;
  description: string;
  href: string;
  cta?: string;
}) {
  return (
    <Link
      href={href}
      className="glass-card-interactive group relative flex flex-col overflow-hidden p-6 hover:border-gold/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rink-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <h3 className="font-display text-2xl font-bold uppercase text-rink-300 transition-colors duration-300 group-hover:text-gold">
        {title}
      </h3>
      <p className="mt-2 flex-1 prose-muted">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1.5">
        {cta}
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
