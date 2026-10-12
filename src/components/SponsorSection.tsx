import { externalLinks, socialLinks, sponsorHighlights } from "@/lib/content";
import { Button } from "./Button";
import { Section, SectionHeader } from "./Section";
import { StaggerChildren } from "./StaggerChildren";

export function SponsorSection() {
  return (
    <Section id="sponsors" dark={false}>
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <SectionHeader
            eyebrow="Partner With IBHA"
            title="Put Your Brand on Indiana Ball Hockey"
            description="Sponsorship fuels rinks, jerseys, and the next generation of Hoosier players. Align with IBHA across Ellenberger, Rooftop, and Northwest Indiana."
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button href="/sponsor" size="lg" className="rounded-sm">
              2027 Sponsorship Form
            </Button>
            <Button href={externalLinks.sponsorshipForm} external variant="secondary">
              Download PDF
            </Button>
            <Button href={socialLinks.facebook} external variant="ghost">
              Talk With Us
            </Button>
          </div>
        </div>

        <StaggerChildren className="space-y-3" staggerMs={80}>
          {sponsorHighlights.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-gold bg-arena/40 px-5 py-4"
            >
              <h3 className="font-display text-base font-bold uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </Section>
  );
}
