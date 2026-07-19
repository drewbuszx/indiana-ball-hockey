import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { LeagueCard } from "@/components/LeagueCard";
import { RegisterSection } from "@/components/RegisterSection";
import { Section, SectionHeader } from "@/components/Section";
import {
  leagues,
  communityPhotos,
  leagueTeamLogos,
  leagueCompare,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { LeagueTeamLogos } from "@/components/LeagueTeamLogos";
import { StaggerChildren } from "@/components/StaggerChildren";

export const metadata: Metadata = pageMetadata({
  title: "Leagues",
  description:
    "Join the Ellenberger Ball Hockey League (5-on-5) or Indy Rooftop Hockey League (3-on-3). Find your fit with IBHA in Indianapolis.",
  path: "/leagues",
});

export default function LeaguesPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Play"
        title="Find Your League"
        subtitle="Two distinct experiences in Indianapolis: full-size 5-on-5 competition at Ellenberger Park and lightning-fast 3-on-3 on the city's only rooftop rink."
        primaryCta={{ label: "Join a League", href: "#register" }}
        secondaryCta={{ label: "Compare Leagues", href: "#compare" }}
        image={communityPhotos.leaguesHero.src}
        imageAlt={communityPhotos.leaguesHero.alt}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Leagues"
          title="Ellenberger & Rooftop"
          description="Two distinct Indianapolis experiences: full-size 5-on-5 at Ellenberger Park and fast 3-on-3 on the city's only rooftop rink."
          align="center"
          className="mx-auto mb-8"
        />
        <StaggerChildren className="grid gap-8 lg:grid-cols-2" staggerMs={120}>
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
        <div className="glass-card relative overflow-hidden ring-1 ring-white/5">
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-arena-elevated to-transparent md:hidden" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-arena-elevated/80">
                  <th
                    className="py-5 pr-4 font-display uppercase text-white/50"
                    scope="col"
                  >
                    &nbsp;
                  </th>
                  <th
                    className="py-5 px-4 font-display text-sm uppercase text-rink-300 sm:text-base"
                    scope="col"
                  >
                    Ellenberger
                  </th>
                  <th
                    className="py-5 pl-4 font-display text-sm uppercase text-gold sm:text-base"
                    scope="col"
                  >
                    Rooftop
                  </th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                {leagueCompare.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/5 even:bg-white/[0.02]"
                  >
                    <th
                      className="py-4 pr-4 font-medium text-white/50"
                      scope="row"
                    >
                      {row.label}
                    </th>
                    <td className="py-4 px-4">{row.ellenberger}</td>
                    <td className="py-4 pl-4">{row.rooftop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section>
        <StaggerChildren className="grid gap-4 sm:grid-cols-3" staggerMs={80}>
          {[
            communityPhotos.ellen3,
            communityPhotos.rooftopKreezeeBg,
            communityPhotos.orange,
          ].map((photo) => (
            <div key={photo.src} className="group media-frame aspect-[16/10]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="media-frame-overlay" />
            </div>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <div className="glass-card mx-auto max-w-3xl p-8 text-center ring-1 ring-rink-400/10 transition-all duration-300 hover:border-rink-400/25 hover:shadow-2xl hover:shadow-rink-500/10 sm:p-12">
          <h2 className="headline-lg">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-4 max-w-lg prose-body">
            New to ball hockey? Returning player? We&apos;ll point you to the
            right league. Reach out on social or through our contact page. No
            experience required.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Button href="/contact">Contact IBHA</Button>
            <Button href="/#what-is-ball-hockey" variant="secondary">
              Learn About Ball Hockey
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
