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
  logoTile?: "light" | "dark";
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
  const logoTileClass =
    logoTile === "dark"
      ? "border-white/15 bg-black p-2"
      : "border-white/20 bg-white p-3";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-arena-elevated transition-all duration-300 hover:border-rink-400/40 hover:shadow-2xl hover:shadow-rink-500/10 hover:-translate-y-1">
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
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-arena">
          {badge}
        </span>
        {logo && (
          <div
            className={`absolute -bottom-10 right-5 flex h-32 w-32 items-center justify-center rounded-2xl border shadow-2xl shadow-black/50 transition-transform duration-300 group-hover:scale-105 sm:right-8 sm:h-36 sm:w-36 ${logoTileClass}`}
          >
            <Image
              src={logo}
              alt={`${name} crest`}
              width={144}
              height={144}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 pt-8 sm:p-8">
        <div className="mb-3 flex flex-wrap gap-2 pr-28 text-xs uppercase tracking-wider text-rink-300 sm:pr-32">
          <span>{format}</span>
          <span aria-hidden="true">·</span>
          <span>{surface}</span>
        </div>

        <h3 className="max-w-[70%] font-display text-2xl font-bold uppercase leading-tight">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gold">{location}</p>

        <p className="mt-4 flex-1 text-white/70 leading-relaxed">
          {description}
        </p>

        <p className="mt-4 text-sm text-white/50">
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
    <div className="glass-card group p-6 transition-all duration-300 hover:border-rink-400/30 hover:bg-arena-elevated">
      <div className="mb-4 flex items-baseline gap-2">
        <span className="font-display text-4xl font-bold text-rink-400 transition-colors group-hover:text-gold">
          {stat}
        </span>
        <span className="text-xs uppercase tracking-widest text-white/40">
          {statLabel}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold uppercase">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
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
      className="glass-card group flex flex-col p-6 transition-all duration-300 hover:border-gold/40 hover:bg-arena-elevated hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400"
    >
      <span className="font-display text-2xl font-bold uppercase text-rink-300 transition-colors group-hover:text-gold">
        {title}
      </span>
      <p className="mt-2 flex-1 text-sm text-white/65">{description}</p>
      <span className="mt-4 text-sm font-semibold text-gold transition-transform group-hover:translate-x-1">
        Explore →
      </span>
    </Link>
  );
}
