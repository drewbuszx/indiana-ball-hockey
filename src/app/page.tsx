import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { FeatureCard, QuickPathCard } from "@/components/LeagueCard";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { StaggerChildren } from "@/components/StaggerChildren";
import { SocialLinks } from "@/components/SocialLinks";
import {
  communityPhotos,
  galleryPhotos,
  quickPaths,
  registerPath,
  siteConfig,
  socialLinks,
  whyBallHockey,
} from "@/lib/content";
import Image from "next/image";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Indiana Ball Hockey Association"
        title="Hockey Without The Ice."
        subtitle="Run instead of skate. Compete at Ellenberger or the rooftop. IBHA is building Indiana's ball hockey community, from beginners to veterans."
        primaryCta={{ label: "Find a League", href: "/leagues" }}
        secondaryCta={{
          label: "What Is Ball Hockey?",
          href: "#what-is-ball-hockey",
        }}
        image={communityPhotos.heroAction.src}
        imageAlt={communityPhotos.heroAction.alt}
        priority
      />

      <Section dark={false}>
        <SectionHeader
          eyebrow="Get Started"
          title="Your Path to the Rink"
          description="Whether you're curious, competitive, or ready to sponsor, there's a lane for you."
          align="center"
          className="mx-auto"
        />
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickPaths.map((path) => (
            <QuickPathCard key={path.title} {...path} />
          ))}
        </StaggerChildren>
      </Section>

      <Section id="what-is-ball-hockey" withRinkLines>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="The Sport"
              title="What Is Ball Hockey?"
              description="Ball hockey (also called dek, floor, or street hockey) is hockey you play on foot. Same intensity. Same teamwork. No skates required."
            />
            <p className="prose-body">
              Players run instead of skate and use a ball instead of a puck. That
              makes the sport more accessible and far more affordable than ice
              hockey, while keeping the nonstop action and competitiveness that
              make hockey great.
            </p>
            <p className="mt-4 prose-body">
              Ball hockey has its own pace, rules, and culture, and it&apos;s
              growing fast across the country. In Indiana, IBHA is at the center
              of that growth.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Our Story
              </Button>
            </div>
          </div>
          <div className="group media-frame aspect-[4/3]">
            <Image
              src={communityPhotos.nbhlAction.src}
              alt={communityPhotos.nbhlAction.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="media-frame-overlay bg-gradient-to-tr from-arena/60 to-transparent" />
          </div>
        </div>
      </Section>

      <Section dark={false}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="Leagues"
            title="Two Rinks. Two Experiences."
            description="Full-size 5-on-5 at Ellenberger Park or lightning-fast 3-on-3 on Indy's rooftop rink. Compare formats, then join when you're ready."
            align="center"
            className="mx-auto"
          />
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/leagues">Explore Leagues</Button>
            <Button href={registerPath} variant="secondary">
              Join a League
            </Button>
          </div>
        </div>
      </Section>

      <Section withRinkLines>
        <SectionHeader
          eyebrow="Why Ball Hockey"
          title="All the Hockey. None of the Barriers."
          description="Accessible, affordable, and fiercely competitive: ball hockey is how more Hoosiers get on the rink."
          align="center"
          className="mx-auto"
        />
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyBallHockey.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </StaggerChildren>
      </Section>

      <Section dark={false}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="group media-frame aspect-[16/10]">
            <Image
              src={communityPhotos.rooftopRink.src}
              alt={communityPhotos.rooftopRink.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="media-frame-overlay" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Community"
              title="Built in Indianapolis. Growing Across Indiana."
              description="From a rooftop dream in 2011 to Ellenberger's upgraded rink and beyond, IBHA carries decades of Indy hockey history forward."
            />
            <p className="prose-body">
              What started as a Pittsburgh transplant&apos;s vision for rooftop
              dek hockey has evolved into a statewide association with two
              active leagues, a passionate player base, and ambitions for a
              permanent year-round home.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
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
          <Button href={socialLinks.instagram} external variant="secondary">
            Follow on Instagram
          </Button>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-arena to-arena-surface">
        <div className="glass-card mx-auto max-w-4xl p-8 text-center ring-1 ring-white/10 transition-all duration-300 hover:border-rink-400/25 hover:shadow-2xl hover:shadow-rink-500/10 sm:p-12">
          <p className="eyebrow mb-3 text-gold">Stay Connected</p>
          <h2 className="headline-lg">Join the Conversation</h2>
          <p className="mx-auto mt-4 max-w-xl prose-body">
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
