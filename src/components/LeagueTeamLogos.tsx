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
            <div className="relative h-16 w-16 sm:h-24 sm:w-24">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 64px, 96px"
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
