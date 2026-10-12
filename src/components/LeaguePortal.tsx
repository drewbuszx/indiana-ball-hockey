import Image from "next/image";
import Link from "next/link";
import type { leagues } from "@/lib/content";

type League = (typeof leagues)[number];

export function LeaguePortal({ league }: { league: League }) {
  const isExternal = league.status === "open";

  return (
    <Link
      href={league.href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group relative flex min-h-[22rem] flex-col overflow-hidden border border-white/10 bg-arena-elevated outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-arena sm:min-h-[26rem]"
      aria-label={`${league.ctaLabel}: ${league.name}`}
    >
      <div className="absolute inset-0">
        <Image
          src={league.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arena via-arena/75 to-arena/25" />
        <div
          className="absolute inset-x-0 top-0 h-1 opacity-90 transition-opacity group-hover:opacity-100"
          style={{ backgroundColor: league.accent }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span
            className="rounded-sm px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-arena"
            style={{ backgroundColor: league.accent }}
          >
            {league.badge}
          </span>
          <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
            <Image
              src={league.logo}
              alt=""
              fill
              className="object-contain drop-shadow-xl"
              sizes="80px"
            />
          </div>
        </div>

        <div className="mt-auto pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            {league.region}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-none tracking-tight sm:text-3xl">
            {league.shortName}
          </h3>
          <p
            className="mt-1 text-sm font-medium"
            style={{ color: league.accent }}
          >
            {league.format} · {league.location}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {league.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-arena shadow-lg shadow-gold/25 transition-transform duration-300 group-hover:translate-x-1">
            {league.ctaLabel}
            <span aria-hidden="true">→</span>
          </span>
          {league.status === "interest" && (
            <p className="mt-2 text-xs text-white/45">
              Launching soon. Tell us you want in.
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
