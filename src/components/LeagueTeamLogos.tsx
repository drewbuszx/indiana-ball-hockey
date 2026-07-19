import Image from "next/image";
import { StaggerChildren } from "./StaggerChildren";

interface LeagueTeamLogosProps {
  title: string;
  logos: readonly { src: string; alt: string }[];
}

export function LeagueTeamLogos({ title, logos }: LeagueTeamLogosProps) {
  return (
    <div>
      <h3 className="eyebrow eyebrow-center mb-6 text-center">{title}</h3>
      <StaggerChildren
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        staggerMs={50}
      >
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="glass-card flex h-16 w-16 items-center justify-center p-2 transition-all duration-300 hover:-translate-y-1 hover:border-rink-400/35 hover:shadow-lg hover:shadow-rink-500/15 sm:h-24 sm:w-24 sm:p-3"
          >
            <div className="relative h-full w-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 64px, 96px"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </StaggerChildren>
    </div>
  );
}
