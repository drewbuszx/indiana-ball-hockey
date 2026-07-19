import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import {
  externalLinks,
  communityPhotos,
  contactConnectPhotos,
  contactAudiences,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { StaggerChildren } from "@/components/StaggerChildren";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with the Indiana Ball Hockey Association. Questions about leagues, sponsorship, or getting started? We're here to help.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Contact"
        title="Let's Talk Hockey"
        subtitle="Whether you're curious about the sport or ready to join a league, we've got answers. Reach out. The IBHA community is welcoming and ready to help."
        image={communityPhotos.team.src}
        imageAlt={communityPhotos.team.alt}
      />

      <Section>
        <SectionHeader
          eyebrow="Connect"
          title="How to Reach IBHA"
          description="We connect with players, sponsors, and fans through social media. Drop us a message. We respond to everyone."
          align="center"
          className="mx-auto"
        />
        <div className="flex justify-center">
          <SocialLinks size="lg" />
        </div>
        <StaggerChildren className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" staggerMs={60}>
          {contactConnectPhotos.map((photo) => (
            <div
              key={photo.src}
              className="group media-frame aspect-square bg-arena-elevated"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={
                  photo.fit === "contain"
                    ? "object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-105 sm:p-4"
                    : "object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                }
                sizes="(max-width: 640px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="media-frame-overlay opacity-0 group-hover:opacity-70" />
            </div>
          ))}
        </StaggerChildren>
      </Section>

      <Section id="partners" dark={false}>
        <SectionHeader
          eyebrow="Audiences"
          title="Who Are You?"
          description="Find the right way to connect based on what you're looking for."
          align="center"
          className="mx-auto"
        />
        <StaggerChildren className="grid gap-6 sm:grid-cols-2" staggerMs={100}>
          {contactAudiences.map((item) => (
            <article
              key={item.title}
              className="glass-card-interactive flex flex-col p-6"
            >
              <h3 className="font-display text-lg font-bold uppercase">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400 rounded"
              >
                {item.cta}
                <span aria-hidden="true">→</span>
                <span className="sr-only">(opens in new tab)</span>
              </Link>
            </article>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <StaggerChildren className="grid gap-8 lg:grid-cols-2" staggerMs={120}>
          <div className="glass-card p-8 ring-1 ring-gold/15 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/10">
            <h3 className="font-display text-xl font-bold uppercase">
              Ready to Play?
            </h3>
            <p className="mt-3 prose-body">
              Head to our league pages on Kreezee to register, view schedules,
              and see rosters.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href={externalLinks.ellenbergerLeague} external>
                Ellenberger League
              </Button>
              <Button
                href={externalLinks.rooftopLeague}
                external
                variant="secondary"
              >
                Rooftop League
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/45">
              Prefer a side-by-side view?{" "}
              <Link
                href="/leagues#register"
                className="font-medium text-rink-300 underline-offset-4 hover:text-gold hover:underline"
              >
                Join a league
              </Link>
            </p>
          </div>
          <div className="glass-card p-8 transition-all duration-300 hover:border-rink-400/25 hover:shadow-xl hover:shadow-rink-500/10">
            <h3 className="font-display text-xl font-bold uppercase">
              Official Gear
            </h3>
            <p className="mt-3 prose-body">
              Rep your team with official IBHA apparel and league swag from our
              partner store.
            </p>
            <Button
              href={externalLinks.store}
              external
              variant="secondary"
              className="mt-6"
            >
              Shop IBHA Store
            </Button>
          </div>
        </StaggerChildren>
      </Section>
    </>
  );
}
