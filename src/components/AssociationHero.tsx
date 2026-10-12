import Image from "next/image";
import { brandAssets, siteConfig } from "@/lib/content";
import { Button } from "./Button";

export function AssociationHero() {
  return (
    <section className="relative flex min-h-[88dvh] items-end overflow-hidden bg-arena pt-24 sm:min-h-[92dvh] sm:items-center">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-action.jpg"
          alt="Ball hockey action at an IBHA rink"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arena via-arena/80 to-arena/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-arena via-arena/55 to-transparent" />
        <div className="hero-mesh absolute inset-0" aria-hidden="true" />
        <div className="grain absolute inset-0 opacity-70" aria-hidden="true" />
      </div>

      <div
        className="speed-stripe absolute inset-x-0 bottom-0 h-1.5"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-8 lg:px-12">
        <div className="max-w-3xl animate-fade-up">
          <Image
            src={brandAssets.logo}
            alt={siteConfig.name}
            width={520}
            height={180}
            className="h-auto w-full max-w-[18rem] drop-shadow-2xl sm:max-w-[22rem] lg:max-w-[26rem]"
            priority
          />
          <h1 className="sr-only">{siteConfig.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Indiana&apos;s home for ball hockey. One association. Three leagues.
            From rooftop dek to full-size Sport Court and into Northwest Indiana.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button href="/#leagues" size="lg">
              Explore Leagues
            </Button>
            <Button href="/#join" variant="secondary" size="lg">
              Join a League
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
