import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { LeagueCard } from "@/components/LeagueCard";
import { LeagueTeamLogos } from "@/components/LeagueTeamLogos";
import { RegisterSection } from "@/components/RegisterSection";
import { Section, SectionHeader } from "@/components/Section";
import { StaggerChildren } from "@/components/StaggerChildren";
import {
  communityPhotos,
  leagueCompare,
  leagueTeamLogos,
  leagues,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Leagues",
  description:
    "Explore IBHA leagues: Ellenberger (5-on-5), Indy Rooftop (3-on-3), and Northwest Indiana Ball Hockey. Find your fit and join.",
  path: "/leagues",
});

export default function LeaguesPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Play"
        title="Find Your League"
        subtitle="Three IBHA experiences across Indiana: full-size 5-on-5 at Ellenberger, lightning-fast rooftop 3-on-3, and a new chapter in Northwest Indiana."
        primaryCta={{ label: "Join a League", href: "#join" }}
        secondaryCta={{ label: "Compare Leagues", href: "#compare" }}
        image={communityPhotos.leaguesHero.src}
        imageAlt={communityPhotos.leaguesHero.alt}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Leagues"
          title="Ellenberger, Rooftop & Northwest"
          description="One association. Distinct rinks and formats. Pick the experience that fits how you want to play."
          align="center"
          className="mx-auto mb-8"
        />
        <StaggerChildren className="grid gap-6 lg:grid-cols-3" staggerMs={100}>
          {leagues.map((league) => (
            <LeagueCard key={league.id} {...league} />
          ))}
        </StaggerChildren>
      </Section>

      <RegisterSection dark={false} />

      <Section dark={false}>
        <div className="mx-auto max-w-4xl space-y-16">
          <LeagueTeamLogos {...leagueTeamLogos.ellenberger} />
          <div className="border-t border-white/10" aria-hidden="true" />
          <LeagueTeamLogos {...leagueTeamLogos.rooftop} />
        </div>
      </Section>

      <Section id="compare">
        <SectionHeader
          eyebrow="Compare"
          title="Which League Is Right for You?"
          align="center"
          className="mx-auto"
        />
        <p className="mb-4 text-center text-xs text-white/50 md:hidden">
          Swipe to compare leagues →
        </p>
        <div className="overflow-hidden border border-white/10 bg-arena-elevated/80">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-arena">
                  <th className="py-5 pr-4 font-display uppercase text-white/50" scope="col">
                    &nbsp;
                  </th>
                  <th className="px-4 py-5 font-display text-sm uppercase text-[#dc8f28] sm:text-base" scope="col">
                    Ellenberger
                  </th>
                  <th className="px-4 py-5 font-display text-sm uppercase text-[#c42b3e] sm:text-base" scope="col">
                    Rooftop
                  </th>
                  <th className="py-5 pl-4 font-display text-sm uppercase text-[#4da8f5] sm:text-base" scope="col">
                    Northwest
                  </th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                {leagueCompare.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/5 even:bg-white/[0.02]"
                  >
                    <th className="py-4 pr-4 font-medium text-white/50" scope="row">
                      {row.label}
                    </th>
                    <td className="px-4 py-4">{row.ellenberger}</td>
                    <td className="px-4 py-4">{row.rooftop}</td>
                    <td className="py-4 pl-4">{row.northwest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section>
        <StaggerChildren className="grid gap-3 sm:grid-cols-3" staggerMs={80}>
          {[
            communityPhotos.ellen3,
            communityPhotos.irhlCover,
            communityPhotos.nwibhlCover,
          ].map((photo) => (
            <div key={photo.src} className="group relative aspect-[16/10] overflow-hidden border border-white/10">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arena/50 to-transparent" />
            </div>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl border border-white/10 bg-arena-elevated/60 p-8 text-center sm:p-12">
          <h2 className="headline-lg">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-4 max-w-lg prose-body">
            New to ball hockey? Returning player? We&apos;ll point you to the
            right league. Reach out. No experience required.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Button href="/contact">Contact IBHA</Button>
            <Button href="/about" variant="secondary">
              Our Story
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
