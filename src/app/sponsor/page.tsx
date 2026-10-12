import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { SponsorshipForm } from "@/components/SponsorshipForm";
import { StaggerChildren } from "@/components/StaggerChildren";
import { communityPhotos, externalLinks } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import {
  sponsorshipDeadline,
  sponsorshipEmail,
  sponsorshipLevels,
  sponsorshipPayment,
} from "@/lib/sponsorship";

export const metadata: Metadata = pageMetadata({
  title: "Sponsor IBHA",
  description:
    "Partner with the Indiana Ball Hockey Association. Choose Hall of Famer, All-Star, or Rookie sponsorship and submit the 2027 form online.",
  path: "/sponsor",
});

export default function SponsorPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="2027 Season"
        title="Sponsor Indiana Ball Hockey"
        subtitle="Help grow accessible hockey across Indiana. Your support funds rink rentals, officials, and lower player dues while putting your brand in front of the IBHA community."
        primaryCta={{ label: "Fill Out the Form", href: "#sponsor-form" }}
        secondaryCta={{
          label: "Download PDF",
          href: externalLinks.sponsorshipForm,
          external: true,
        }}
        image={communityPhotos.trophies.src}
        imageAlt={communityPhotos.trophies.alt}
      />

      <Section>
        <SectionHeader
          eyebrow="Sponsorship Levels"
          title="Pick Your Tier"
          description="Every dollar helps grow the game. Sponsors are recognized at draft events and across IBHA social channels."
          align="center"
          className="mx-auto"
        />
        <StaggerChildren className="grid gap-4 lg:grid-cols-3" staggerMs={90}>
          {sponsorshipLevels.map((level) => (
            <article
              key={level.id}
              className="flex flex-col border border-white/10 bg-arena-elevated/70 p-6"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
                {level.tier}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-none">
                {level.name}
              </h3>
              <p className="mt-3 font-display text-3xl font-bold text-white">
                {level.amount}
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-white/65">
                {level.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button href="#sponsor-form" className="mt-6 w-full rounded-sm" size="sm">
                Select {level.name}
              </Button>
            </article>
          ))}
        </StaggerChildren>
      </Section>

      <Section dark={false} id="sponsor-form">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeader
              eyebrow="Apply Online"
              title="2027 Sponsorship Form"
              description={`Submit by ${sponsorshipDeadline}. We will confirm your level and send payment instructions.`}
            />
            <div className="space-y-4 border-l-2 border-gold/70 bg-arena/30 px-5 py-4 text-sm text-white/70">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href={`mailto:${sponsorshipEmail}`}
                  className="text-gold underline-offset-4 hover:underline"
                >
                  {sponsorshipEmail}
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Zelle:</span>{" "}
                {sponsorshipPayment.zelle}
              </p>
              <p>
                <span className="font-semibold text-white">Check payable to:</span>{" "}
                {sponsorshipPayment.checkPayableTo}
              </p>
              <p className="text-white/50">
                Prefer paper?{" "}
                <a
                  href={externalLinks.sponsorshipForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rink-300 underline-offset-4 hover:text-gold hover:underline"
                >
                  Download the PDF form
                </a>
                .
              </p>
            </div>
          </div>

          <div className="border border-white/10 bg-arena-elevated/50 p-5 sm:p-8">
            <SponsorshipForm />
          </div>
        </div>
      </Section>

      <Section className="!py-12 sm:!py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="headline-lg">Why Your Support Matters</h2>
          <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left text-sm leading-relaxed text-white/70 sm:text-base">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
              Every $1 helps us grow ball hockey in Indiana.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
              Sponsorships lower player costs and put more eyes on your business.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
              Funds cover rink rentals, officials, and keeping dues accessible.
            </li>
          </ul>
          <div className="mt-8">
            <Button href="/contact" variant="secondary" className="rounded-sm">
              Other Partnership Questions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
