import Image from "next/image";
import Link from "next/link";
import { leagues } from "@/lib/content";
import { Button } from "./Button";
import { Section, SectionHeader } from "./Section";
import { StaggerChildren } from "./StaggerChildren";

interface RegisterSectionProps {
  wrapped?: boolean;
  dark?: boolean;
  className?: string;
}

export function RegisterSection({
  wrapped = true,
  dark = false,
  className,
}: RegisterSectionProps) {
  const content = (
    <>
      <SectionHeader
        eyebrow="Join a League"
        title="Ready to Play?"
        description="Open leagues register on Kreezee. Northwest Indiana is building now. Tell us you want in."
        align="center"
        className="mx-auto"
      />
      <StaggerChildren
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        staggerMs={90}
      >
        {leagues.map((league) => {
          const isOpen = league.status === "open";
          return (
            <article
              key={league.id}
              className="group relative flex flex-col overflow-hidden border border-white/10 bg-arena/50 p-5 transition-all duration-300 hover:border-gold/35 sm:p-6"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: league.accent }}
                aria-hidden="true"
              />
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                  <Image
                    src={league.logo}
                    alt=""
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="64px"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className="inline-block px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-arena"
                    style={{ backgroundColor: league.accent }}
                  >
                    {league.format}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase leading-tight">
                    {league.shortName}
                  </h3>
                  <p className="mt-1 text-sm text-white/55">{league.location}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65">
                {league.description}
              </p>
              <div className="mt-5">
                <Button
                  href={league.href}
                  external={isOpen}
                  size="md"
                  className="w-full rounded-sm"
                  variant={isOpen ? "primary" : "secondary"}
                >
                  {league.ctaLabel}
                </Button>
              </div>
            </article>
          );
        })}
      </StaggerChildren>
      <p className="mx-auto mt-8 max-w-xl text-center text-sm text-white/45">
        Questions before you sign up?{" "}
        <Link
          href="/contact"
          className="font-medium text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
        >
          Contact IBHA
        </Link>
        .
      </p>
    </>
  );

  if (!wrapped) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Section id="join" dark={dark} className={className} reveal={false}>
      {content}
    </Section>
  );
}
