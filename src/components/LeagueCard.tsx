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
      ? "border border-white/15 bg-black p-3 shadow-2xl shadow-black/50"
      : logoTile === "none"
        ? "drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]"
        : "border border-white/20 bg-white p-3 shadow-2xl shadow-black/50";
  const logoSizeClass = isTransparentLogo
    ? "h-28 w-28 sm:h-36 sm:w-36 md:h-[11.7rem] md:w-[11.7rem]"
    : "h-24 w-24 sm:h-32 sm:w-32";
  const contentClearance = isTransparentLogo
    ? "pr-28 sm:pr-36 md:pr-44"
    : "pr-24 sm:pr-32";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-arena-elevated transition-all duration-300 hover:-translate-y-1 hover:border-rink-400/40 hover:shadow-2xl hover:shadow-rink-500/10">
      <div className="relative">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arena-elevated via-arena-elevated/20 to-transparent" />
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
              isRooftop ? "bg-gold text-arena" : "bg-rink-400 text-arena"
            }`}
          >
            {badge}
          </span>
        </div>
        {logo && (
          <div
            className={`absolute -bottom-8 right-4 z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:-bottom-12 sm:right-8 ${isTransparentLogo ? "rounded-none" : "rounded-2xl"} ${logoSizeClass} ${logoTileClass}`}
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
          <span>{format}</span>
          <span aria-hidden="true">·</span>
          <span>{surface}</span>
        </div>

        <div className={contentClearance}>
          <h3 className="font-display text-xl font-bold uppercase leading-tight sm:text-2xl">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gold">{location}</p>
        </div>

        <p className={`mt-4 flex-1 prose-body ${contentClearance}`}>
          {description}
        </p>

        <p className={`mt-4 prose-muted ${contentClearance}`}>
          <span className="font-medium text-white/70">Best for: </span>
          {audience}
        </p>

        <div className="mt-6">
          <Button href={href} external variant="secondary" className="w-full sm:w-auto">
            View League on Kreezee
          </Button>
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
    <div className="glass-card-interactive group p-6">
      <div className="mb-4 flex items-baseline gap-2">
        <span className="font-display text-4xl font-bold text-rink-400 transition-colors group-hover:text-gold">
          {stat}
        </span>
        <span className="text-xs uppercase tracking-widest text-white/40">
          {statLabel}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold uppercase">{title}</h3>
      <p className="mt-2 prose-muted">{description}</p>
    </div>
  );
}

export function QuickPathCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="glass-card-interactive group flex flex-col p-6 hover:border-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400"
    >
      <h3 className="font-display text-2xl font-bold uppercase text-rink-300 transition-colors group-hover:text-gold">
        {title}
      </h3>
      <p className="mt-2 flex-1 prose-muted">{description}</p>
      <span className="mt-4 text-sm font-semibold text-gold transition-transform group-hover:translate-x-1">
        Explore →
      </span>
    </Link>
  );
}
