import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { LeagueCard } from "@/components/LeagueCard";
import { Section, SectionHeader } from "@/components/Section";
import { leagues } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leagues",
  description:
    "Join the Ellenberger Ball Hockey League (5-on-5) or Indy Rooftop Hockey League (3-on-3). Find your fit with IBHA in Indianapolis.",
};

export default function LeaguesPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Play"
        title="Find Your League"
        subtitle="Two distinct experiences in Indianapolis — full-size 5-on-5 competition at Ellenberger Park and lightning-fast 3-on-3 on the city's only rooftop rink."
        primaryCta={{ label: "Not Sure? Contact Us", href: "/contact" }}
        image="/assets/hero-action.jpg"
        imageAlt="Ball hockey league action"
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {leagues.map((league) => (
            <LeagueCard key={league.id} {...league} />
          ))}
        </div>
      </Section>

      <Section dark={false}>
        <SectionHeader
          eyebrow="Compare"
          title="Which League Is Right for You?"
          align="center"
          className="mx-auto"
        />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 pr-4 font-display uppercase text-white/50" scope="col">
                  &nbsp;
                </th>
                <th className="py-4 px-4 font-display uppercase text-rink-300" scope="col">
                  Ellenberger
                </th>
                <th className="py-4 pl-4 font-display uppercase text-gold" scope="col">
                  Rooftop
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <CompareRow label="Format" a="5-on-5" b="3-on-3" />
              <CompareRow label="Rink Size" a="Full-size indoor" b="60×40 ft rooftop" />
              <CompareRow label="Surface" a="Sport Court" b="Dek / outdoor surface" />
              <CompareRow label="Location" a="Ellenberger Park, Irvington" b="Near Eastside Indy" />
              <CompareRow label="Vibe" a="Standard league play" b="Fast, tight, urban" />
              <CompareRow label="Best For" a="Competitive & rec adults" b="High-tempo 3v3 players" />
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="glass-card mx-auto max-w-3xl p-8 text-center sm:p-12">
          <h2 className="headline-lg">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            New to ball hockey? Returning player? We&apos;ll point you to the
            right league. Reach out on social or through our contact page — no
            experience required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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

function CompareRow({
  label,
  a,
  b,
}: {
  label: string;
  a: string;
  b: string;
}) {
  return (
    <tr className="border-b border-white/5">
      <th className="py-4 pr-4 font-medium text-white/50" scope="row">
        {label}
      </th>
      <td className="py-4 px-4">{a}</td>
      <td className="py-4 pl-4">{b}</td>
    </tr>
  );
}
