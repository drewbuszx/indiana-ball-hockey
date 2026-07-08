import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/Section";
import { externalLinks } from "@/lib/content";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Shop official Indiana Ball Hockey Association apparel, team gear, and league swag at the IBHA store powered by Hagan Custom Sports.",
};

const products = [
  {
    title: "Team Apparel",
    description: "Jerseys, hoodies, and team-specific gear for IBHA leagues.",
  },
  {
    title: "League Swag",
    description: "Show your Ellenberger or Rooftop pride with official league merchandise.",
  },
  {
    title: "IBHA Brand Gear",
    description: "Association-branded apparel for players, fans, and supporters.",
  },
] as const;

export default function StorePage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Official Merch"
        title="Wear the Colors"
        subtitle="The IBHA store is open — shop team and league apparel, swag, and official Indiana Ball Hockey Association gear."
        primaryCta={{
          label: "Shop Now",
          href: externalLinks.store,
          external: true,
        }}
        image="/assets/logo-social.png"
        imageAlt="IBHA official merchandise"
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square max-w-md overflow-hidden rounded-2xl border border-white/10 bg-arena-elevated mx-auto lg:mx-0">
            <Image
              src="/assets/logo.png"
              alt="Indiana Ball Hockey Association official logo"
              fill
              className="object-contain p-12"
              sizes="(max-width: 768px) 100vw, 400px"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="IBHA Store"
              title="Official Gear & Apparel"
              description="Powered by Hagan Custom Sports — your source for authentic IBHA merchandise."
            />
            <p className="text-white/70 leading-relaxed">
              Whether you&apos;re suiting up for game night or repping IBHA off
              the rink, our official store has team apparel, league swag, and
              association gear ready to order.
            </p>
            <Button
              href={externalLinks.store}
              external
              size="lg"
              className="mt-8"
            >
              Visit the IBHA Store
            </Button>
            <p className="mt-4 text-xs text-white/40">
              You&apos;ll be redirected to hagancustomsports.com
            </p>
          </div>
        </div>
      </Section>

      <Section dark={false}>
        <SectionHeader
          eyebrow="Categories"
          title="What You'll Find"
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="glass-card p-6 text-center transition-all hover:border-gold/30"
            >
              <h3 className="font-display text-lg font-bold uppercase text-rink-300">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-white/65">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href={externalLinks.store} external variant="secondary">
            Browse All Products
          </Button>
        </div>
      </Section>
    </>
  );
}
