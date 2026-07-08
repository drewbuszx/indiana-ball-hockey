import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import { externalLinks, communityPhotos, contactConnectPhotos } from "@/lib/content";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Indiana Ball Hockey Association. Questions about leagues, sponsorship, or getting started? We're here to help.",
};

const audiences = [
  {
    title: "New Players",
    description:
      "Curious about ball hockey? Ask us anything — we'll help you find the right league and get on the rink.",
    cta: "Message on Facebook",
    href: "https://www.facebook.com/IndianaBallHockey",
  },
  {
    title: "Current Players",
    description:
      "League questions, schedule info, or community updates — connect with IBHA on social for the latest.",
    cta: "Follow on Instagram",
    href: "https://www.instagram.com/indianaballhockey",
  },
  {
    title: "Sponsors & Partners",
    description:
      "Help us build Indiana's ball hockey future. We're actively seeking sponsors, partners, and donors for our year-round facility vision.",
    cta: "Reach Out",
    href: "https://www.facebook.com/IndianaBallHockey",
  },
  {
    title: "Parents & Youth",
    description:
      "Interested in youth programming? Connect with us — we're working to expand opportunities for the next generation of players.",
    cta: "Contact via Social",
    href: "https://www.facebook.com/IndianaBallHockey",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Contact"
        title="Let's Talk Hockey"
        subtitle="Whether you're curious about the sport or ready to join a league, we've got answers. Reach out — the IBHA community is welcoming and ready to help."
        image={communityPhotos.team.src}
        imageAlt={communityPhotos.team.alt}
      />

      <Section>
        <SectionHeader
          eyebrow="Connect"
          title="How to Reach IBHA"
          description="We connect with players, sponsors, and fans through social media. Drop us a message — we respond to everyone."
          align="center"
          className="mx-auto"
        />
        <div className="flex justify-center">
          <SocialLinks size="lg" />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="https://www.facebook.com/IndianaBallHockey" external>
            Facebook
          </Button>
          <Button
            href="https://www.instagram.com/indianaballhockey"
            external
            variant="secondary"
          >
            Instagram
          </Button>
          <Button
            href="https://youtube.com/@indianaballhockey"
            external
            variant="secondary"
          >
            YouTube
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {contactConnectPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-arena-elevated"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={
                  photo.fit === "contain"
                    ? "object-contain p-4"
                    : "object-cover"
                }
                sizes="(max-width: 640px) 50vw, 25vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section id="partners" dark={false}>
        <SectionHeader
          eyebrow="Audiences"
          title="Who Are You?"
          description="Find the right way to connect based on what you're looking for."
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="glass-card flex flex-col p-6 transition-all hover:border-gold/30"
            >
              <h3 className="font-display text-lg font-bold uppercase">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-semibold text-gold hover:text-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400 rounded"
              >
                {item.cta} →
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-bold uppercase">
              Ready to Play?
            </h3>
            <p className="mt-3 text-white/70">
              Head straight to our league pages on Kreezee to register, view
              schedules, and see rosters.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href={externalLinks.ellenbergerLeague} external>
                Ellenberger League
              </Button>
              <Button href={externalLinks.rooftopLeague} external variant="secondary">
                Rooftop League
              </Button>
            </div>
          </div>
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-bold uppercase">
              Official Gear
            </h3>
            <p className="mt-3 text-white/70">
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
        </div>
      </Section>
    </>
  );
}
