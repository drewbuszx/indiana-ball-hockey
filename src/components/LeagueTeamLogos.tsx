import Image from "next/image";

interface LeagueTeamLogosProps {
  title: string;
  logos: readonly { src: string; alt: string }[];
}

export function LeagueTeamLogos({ title, logos }: LeagueTeamLogosProps) {
  return (
    <div>
      <h3 className="mb-5 text-center font-display text-sm font-bold uppercase tracking-widest text-white/50">
        {title}
      </h3>
      <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        {logos.map((logo) => (
          <li key={logo.src}>
            <div className="relative h-20 w-20 rounded-xl bg-black/50 p-2.5 sm:h-24 sm:w-24 sm:p-3">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-1"
                sizes="96px"
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
