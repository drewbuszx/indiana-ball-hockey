import type { Metadata } from "next";
import Image from "next/image";
import { AssociationHero } from "@/components/AssociationHero";
import { Button } from "@/components/Button";
import { LeaguePortal } from "@/components/LeaguePortal";
import { RegisterSection } from "@/components/RegisterSection";
import { Section, SectionHeader } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import { SponsorSection } from "@/components/SponsorSection";
import { StaggerChildren } from "@/components/StaggerChildren";
import {
  communityPhotos,
  externalLinks,
  leagues,
  siteConfig,
} from "@/lib/content";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <AssociationHero />

      <Section id="leagues" className="!py-12 sm:!py-14 lg:!py-16">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Our Leagues"
            title="Three Ways to Play"
            description="IBHA oversees leagues across Indiana. Pick your rink, then jump into registration or express interest."
            className="mb-0"
          />
          <Button href="/leagues" variant="secondary" className="shrink-0 self-start sm:self-auto">
            League Details
          </Button>
        </div>
        <StaggerChildren
          className="grid gap-3 lg:grid-cols-3 lg:gap-4"
          staggerMs={90}
        >
          {leagues.map((league) => (
            <LeaguePortal key={league.id} league={league} />
          ))}
        </StaggerChildren>
      </Section>

      <div className="speed-stripe h-1.5 w-full" aria-hidden="true" />

      <RegisterSection dark={false} />

      <SponsorSection />

      <Section className="!py-12 sm:!py-14">
        <div className="grid items-center gap-8 overflow-hidden border border-white/10 bg-arena-elevated lg:grid-cols-2">
          <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[20rem]">
            <Image
              src={communityPhotos.storeHeroBg.src}
              alt={communityPhotos.storeHeroBg.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-arena-elevated/40 max-lg:bg-gradient-to-t max-lg:from-arena-elevated max-lg:to-transparent" />
          </div>
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <p className="eyebrow mb-3">Official Merch</p>
            <h2 className="headline-lg">Wear the Association</h2>
            <p className="mt-3 max-w-md prose-body">
              Jerseys, league swag, and IBHA brand gear through Hagan Custom
              Sports. Support the sport every time you pull on the colors.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href={externalLinks.store} external>
                Shop the Store
              </Button>
              <Button href="/store" variant="secondary">
                Merch Overview
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section dark={false} className="!py-12 sm:!py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="The Association"
            title="Built for Indiana Ball Hockey"
            description="IBHA connects players, partners, and communities under one brand. No skates required. Just hockey."
            align="center"
            className="mx-auto"
          />
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/about" variant="secondary">
              Our Story
            </Button>
            <Button href="/contact">Contact IBHA</Button>
          </div>
          <div className="mt-8 flex justify-center">
            <SocialLinks size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}
