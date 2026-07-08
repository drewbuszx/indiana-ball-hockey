import { Button } from "@/components/Button";
import {
  FeatureCard,
  LeagueCard,
  QuickPathCard,
} from "@/components/LeagueCard";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import {
  galleryPhotos,
  leagues,
  quickPaths,
  siteConfig,
  whyBallHockey,
} from "@/lib/content";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Indiana Ball Hockey Association"
        title="Hockey Without The Ice."
        subtitle="Run instead of skate. Compete at Ellenberger or the rooftop. IBHA is building Indiana's ball hockey community — beginners to veterans welcome."
        primaryCta={{ label: "Find a League", href: "/leagues" }}
        secondaryCta={{
          label: "What Is Ball Hockey?",
          href: "#what-is-ball-hockey",
        }}
      />

      <Section dark={false}>
        <SectionHeader
          eyebrow="Get Started"
          title="Your Path to the Rink"
          description="Whether you're curious, competitive, or ready to sponsor — there's a lane for you."
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickPaths.map((path) => (
            <QuickPathCard key={path.title} {...path} />
          ))}
        </div>
      </Section>

      <Section id="what-is-ball-hockey" withRinkLines>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="The Sport"
              title="What Is Ball Hockey?"
              description="Ball hockey — also called dek, floor, or street hockey — is hockey you play on foot. Same intensity. Same teamwork. No skates required."
            />
            <p className="text-white/70 leading-relaxed">
              Players run instead of skate and use a ball instead of a puck. That
              makes the sport more accessible and far more affordable than ice
              hockey, while keeping the nonstop action and competitiveness that
              make hockey great.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Ball hockey has its own pace, rules, and culture — and it&apos;s
              growing fast across the country. In Indiana, IBHA is at the center
              of that growth.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Our Story
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/assets/hero-action.jpg"
              alt="Competitive ball hockey game in Indiana"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-arena/60 to-transparent" />
          </div>
        </div>
      </Section>

      <Section dark={false}>
        <SectionHeader
          eyebrow="Leagues"
          title="Two Rinks. Two Experiences."
          description="From fast 3-on-3 rooftop battles to full-size 5-on-5 at Ellenberger — pick your game."
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {leagues.map((league) => (
            <LeagueCard key={league.id} {...league} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-white/60">Not sure where to start?</p>
          <Button href="/contact" variant="ghost" className="mt-4">
            Reach Out — We&apos;ll Help You Choose
          </Button>
        </div>
      </Section>

      <Section withRinkLines>
        <SectionHeader
          eyebrow="Why Ball Hockey"
          title="All the Hockey. None of the Barriers."
          description="Accessible, affordable, and fiercely competitive — ball hockey is how more Hoosiers get on the rink."
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyBallHockey.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section dark={false}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/assets/nbhl-action.jpg"
              alt="Ball hockey players competing at Ellenberger Park"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Community"
              title="Built in Indianapolis. Growing Across Indiana."
              description="From a rooftop dream in 2011 to Ellenberger's upgraded rink and beyond — IBHA carries decades of Indy hockey history forward."
            />
            <p className="text-white/70 leading-relaxed">
              What started as a Pittsburgh transplant&apos;s vision for rooftop
              dek hockey has evolved into a statewide association with two
              active leagues, a passionate player base, and ambitions for a
              permanent year-round home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about">Read Our History</Button>
              <Button href="/contact#partners" variant="secondary">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section withRinkLines>
        <SectionHeader
          eyebrow="On the Rink"
          title="From the Community"
          description="Champions, jerseys, and game-day moments straight from @indianaballhockey."
          align="center"
          className="mx-auto"
        />
        <Gallery photos={galleryPhotos} />
        <div className="mt-10 text-center">
          <Button
            href="https://www.instagram.com/indianaballhockey"
            external
            variant="secondary"
          >
            Follow on Instagram
          </Button>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-arena to-arena-surface">
        <div className="glass-card mx-auto max-w-4xl p-8 text-center sm:p-12">
          <p className="eyebrow mb-3">Stay Connected</p>
          <h2 className="headline-lg">Join the Conversation</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Follow IBHA for league updates, game highlights, and community news.
            Questions? We&apos;re always happy to help new players find their
            rink.
          </p>
          <div className="mt-8 flex justify-center">
            <SocialLinks size="lg" />
          </div>
          <div className="mt-8">
            <Button href="/contact">Contact IBHA</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
