import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { Section, SectionHeader } from "./Section";
import { StaggerChildren } from "./StaggerChildren";
import { leagues } from "@/lib/content";

interface RegisterSectionProps {
  /** When false, renders without the Section wrapper (for embedding). */
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
        eyebrow="Register"
        title="Ready to Play? Join a League"
        description="Pick your rink and register on Kreezee, IBHA's official league platform for rosters, schedules, and season sign-up."
        align="center"
        className="mx-auto"
      />
      <StaggerChildren className="grid gap-6 lg:grid-cols-2" staggerMs={100}>
        {leagues.map((league) => {
          const isRooftop = league.badge === "3v3";
          return (
            <article
              key={league.id}
              className="glass-card-interactive group relative flex flex-col overflow-hidden p-6 sm:p-8"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rink-400/50 to-transparent opacity-60"
                aria-hidden="true"
              />
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                  <Image
                    src={league.logo}
                    alt={`${league.name} crest`}
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="80px"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider ${
                      isRooftop
                        ? "bg-gold/20 text-gold"
                        : "bg-rink-500/20 text-rink-300"
                    }`}
                  >
                    {league.format}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase leading-tight sm:text-xl">
                    {league.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold">
                    {league.location}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 prose-muted">{league.description}</p>
              <p className="mt-3 text-sm text-white/50">
                Best for: {league.audience}
              </p>
              <div className="mt-6">
                <Button
                  href={league.href}
                  external
                  size="lg"
                  className="w-full"
                >
                  Register on Kreezee
                </Button>
              </div>
            </article>
          );
        })}
      </StaggerChildren>
      <p className="mx-auto mt-8 max-w-xl text-center text-sm text-white/45">
        Registration, payments, and schedules live on Kreezee. Questions before
        you sign up?{" "}
        <Link
          href="/contact"
          className="font-medium text-rink-300 underline-offset-4 transition-colors hover:text-gold hover:underline"
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
    <Section
      id="register"
      dark={dark}
      className={className}
      reveal={false}
    >
      {content}
    </Section>
  );
}
