import Image from "next/image";
import type { LeagueStatus } from "@/lib/content";
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
  status?: LeagueStatus;
  accent?: string;
  ctaLabel?: string;
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
  status = "open",
  accent = "#ff6a1f",
  ctaLabel,
}: LeagueCardProps) {
  const isTransparentLogo = logoTile === "none";
  const isOpen = status === "open";
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
  const buttonLabel = ctaLabel ?? (isOpen ? "Register on Kreezee" : "Express Interest");

  return (
    <article className="group relative flex flex-col overflow-hidden border border-white/10 bg-arena-elevated shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10">
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
          <span
            className="absolute left-4 top-4 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-arena shadow-lg"
            style={{ backgroundColor: accent }}
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
          <span className="border border-rink-400/20 bg-rink-500/10 px-2.5 py-0.5">
            {format}
          </span>
          <span className="border border-white/10 bg-white/5 px-2.5 py-0.5">
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
          <Button
            href={href}
            external={isOpen}
            className="w-full rounded-sm sm:w-auto"
            variant={isOpen ? "primary" : "secondary"}
          >
            {buttonLabel}
          </Button>
          <p className="mt-2 text-xs text-white/40">
            {isOpen
              ? "Sign up, schedules & rosters on Kreezee"
              : "Launching soon. Reach out to get involved."}
          </p>
        </div>
      </div>
    </article>
  );
}
