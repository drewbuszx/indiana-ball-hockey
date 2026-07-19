import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { StaggerChildren } from "@/components/StaggerChildren";
import { timelineEvents, communityPhotos } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Learn about the Indiana Ball Hockey Association: our mission, Indianapolis hockey history, and vision for the future of ball hockey in Indiana.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="About IBHA"
        title="Growing the Game at Home"
        subtitle="The Indiana Ball Hockey Association is the home for competitive and recreational ball hockey in Indiana: inclusive, community-driven, and built for every skill level."
        primaryCta={{ label: "Explore Leagues", href: "/leagues" }}
        image={communityPhotos.aboutHero.src}
        imageAlt={communityPhotos.aboutHero.alt}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Mission"
              title="Indiana Ball Hockey Association"
            />
            <div className="space-y-4 prose-body">
              <p>
                IBHA exists to grow ball hockey across Indiana by creating an
                inclusive environment where players of all ages and skill levels
                come together to enjoy the game.
              </p>
              <p>
                From beginners eager to learn to seasoned athletes chasing
                competition, our leagues and events foster community,
                sportsmanship, and a genuine passion for ball hockey.
              </p>
              <p>
                Whether you&apos;re here to learn the basics, join a league, or
                connect with others who share your enthusiasm, IBHA has a place
                for you.
              </p>
            </div>
          </div>
          <div className="group media-frame aspect-[4/3]">
            <Image
              src={communityPhotos.jerseyNavy.src}
              alt={communityPhotos.jerseyNavy.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="media-frame-overlay bg-gradient-to-t from-arena/50 to-transparent" />
          </div>
        </div>
      </Section>

      <Section dark={false} withRinkLines>
        <SectionHeader
          eyebrow="History"
          title="Indy Ball Hockey History"
          description="From a donated building on the Near Eastside to Ellenberger Park's reborn rink, Indiana's ball hockey story runs deep."
          align="center"
          className="mx-auto"
        />
        <Timeline events={timelineEvents} />
      </Section>

      <Section>
        <StaggerChildren className="grid gap-8 lg:grid-cols-3" staggerMs={100}>
          <HistoryCard
            title="Indy Rooftop"
            description="Indianapolis's only rooftop hockey rink: a 60×40 ft deck born from Super Bowl Legacy funding and Pittsburgh hockey nostalgia. Home to fast 3-on-3 IRHL action for 50+ players."
            image={communityPhotos.historyRooftop}
          />
          <HistoryCard
            title="Ellenberger Park"
            description="A 42-acre Irvington landmark with a hockey history dating to the 1960s. After years dormant, upgraded Sport Court flooring and lighting made it IBHA's 5-on-5 home."
            image={communityPhotos.historyEllenberger}
          />
          <HistoryCard
            title="NBHL Chapter"
            description="Indiana competed two seasons in the National Ball Hockey League before refocusing on local growth. The NBHL relationship remains strong for players seeking national-level competition."
            image={communityPhotos.historyNbhl}
          />
        </StaggerChildren>
      </Section>

      <Section id="future" dark={false}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Vision"
              title="What Comes Next"
              description="IBHA's focus is building ball hockey in Indiana, with bigger ambitions on the horizon."
            />
            <div className="space-y-4 prose-body">
              <p>
                Withdrawing from managing an NBHL division opened the door to
                expand our 5-on-5 league at Ellenberger Park. But summer
                conditions inside the facility can become dangerous, limiting
                youth programming, beginner leagues, and year-round growth.
              </p>
              <p>
                Our long-term goal: a permanent home with at least two full-size
                rinks and two 3-on-3 rinks, enabling state, regional, and
                national tournaments, plus facility leasing for inline hockey,
                roller derby, and more.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/contact#partners">Sponsor or Partner</Button>
              <Button href="/contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="group media-frame aspect-[4/3]">
              <Image
                src={communityPhotos.rink.src}
                alt={communityPhotos.rink.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="media-frame-overlay" />
            </div>
            <div className="glass-card p-8 ring-1 ring-gold/10 transition-all duration-300 hover:border-gold/25 hover:shadow-xl hover:shadow-gold/10">
              <h3 className="font-display text-xl font-bold uppercase text-gold">
                The Dream Facility
              </h3>
              <ul className="mt-6 space-y-4">
                <VisionItem>2 full-size ball hockey rinks</VisionItem>
                <VisionItem>2 dedicated 3-on-3 rinks</VisionItem>
                <VisionItem>Year-round programming</VisionItem>
                <VisionItem>Youth & beginner leagues</VisionItem>
                <VisionItem>Tournament hosting capacity</VisionItem>
                <VisionItem>Multi-sport facility leasing</VisionItem>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function HistoryCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: { src: string; alt: string };
}) {
  return (
    <article className="glass-card-interactive group overflow-hidden">
      <div className="media-frame aspect-[16/10] rounded-b-none border-b-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
          loading="lazy"
        />
        <div className="media-frame-overlay bg-gradient-to-t from-arena-elevated via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-bold uppercase text-rink-300">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">
          {description}
        </p>
      </div>
    </article>
  );
}

function VisionItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm text-white/70">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rink-500/20 text-xs text-rink-300">
        ✓
      </span>
      {children}
    </li>
  );
}
