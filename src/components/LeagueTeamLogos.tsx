import Image from "next/image";

interface LeagueTeamLogosProps {
  title: string;
  logos: readonly { src: string; alt: string }[];
}

export function LeagueTeamLogos({ title, logos }: LeagueTeamLogosProps) {
  return (
    <div>
      <h3 className="eyebrow mb-5 text-center">{title}</h3>
      <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
        {logos.map((logo) => (
          <li key={logo.src}>
            <div className="glass-card flex h-16 w-16 items-center justify-center p-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-rink-400/30 sm:h-24 sm:w-24 sm:p-3">
              <div className="relative h-full w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 64px, 96px"
                  loading="lazy"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
