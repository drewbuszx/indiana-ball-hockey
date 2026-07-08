import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { LeagueCard } from "@/components/LeagueCard";
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
        subtitle="Two distinct experiences in Indianapolis — full-size 5-on-5 competition at Ellenberger Park and lightning-fast 3-on-3 on the city's only rooftop rink."
        primaryCta={{ label: "Not Sure? Contact Us", href: "/contact" }}
        image={communityPhotos.leaguesHero.src}
        imageAlt={communityPhotos.leaguesHero.alt}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Leagues"
          title="Ellenberger & Rooftop"
          description="Two distinct Indianapolis experiences — full-size 5-on-5 at Ellenberger Park and fast 3-on-3 on the city's only rooftop rink."
          align="center"
          className="mx-auto mb-8"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {leagues.map((league) => (
            <LeagueCard key={league.id} {...league} />
          ))}
        </div>
      </Section>

      <Section dark={false}>
        <div className="mx-auto max-w-4xl space-y-16">
          <LeagueTeamLogos {...leagueTeamLogos.ellenberger} />
          <div className="border-t border-white/10" aria-hidden="true" />
          <LeagueTeamLogos {...leagueTeamLogos.rooftop} />
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Compare"
          title="Which League Is Right for You?"
          align="center"
          className="mx-auto"
        />
        <p className="mb-4 text-center text-xs text-white/50 md:hidden">
          Swipe to compare leagues →
        </p>
        <div className="glass-card relative overflow-hidden">
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
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            communityPhotos.ellen3,
            communityPhotos.rooftopKreezeeBg,
            communityPhotos.orange,
          ].map((photo) => (
            <div key={photo.src} className="media-frame aspect-[16/10]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass-card mx-auto max-w-3xl p-8 text-center sm:p-12">
          <h2 className="headline-lg">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-4 max-w-lg prose-body">
            New to ball hockey? Returning player? We&apos;ll point you to the
            right league. Reach out on social or through our contact page — no
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
