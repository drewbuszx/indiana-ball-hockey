import { FadeIn } from "./FadeIn";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  quote?: string;
}

interface TimelineProps {
  events: readonly TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-rink-400 via-rink-500/50 to-transparent sm:left-1/2 sm:-translate-x-px"
        aria-hidden="true"
      />

      <ol className="space-y-10 sm:space-y-12">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;
          const yearBadge =
            event.year.replace(/[^0-9].*$/, "").slice(-2) ||
            event.year.slice(0, 3);

          return (
            <li
              key={`${event.year}-${event.title}`}
              className="relative grid gap-4 sm:grid-cols-2 sm:gap-12"
            >
              <div
                className={`flex items-start gap-4 sm:col-span-1 ${
                  isEven
                    ? "sm:col-start-1 sm:flex-row-reverse sm:text-right"
                    : "sm:col-start-2"
                }`}
              >
                <div
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-rink-400 bg-arena font-display text-xs font-bold text-rink-300 shadow-lg shadow-rink-500/20 ring-4 ring-rink-500/10 sm:absolute sm:left-1/2 sm:-translate-x-1/2"
                  aria-hidden="true"
                >
                  {yearBadge}
                </div>
                <FadeIn delay={index * 80} className="min-w-0 flex-1">
                  <div
                    className={`glass-card p-5 transition-all duration-300 hover:border-rink-400/25 sm:p-6 ${
                      isEven ? "sm:pr-12" : "sm:pl-12"
                    }`}
                  >
                    <time
                      dateTime={event.year}
                      className="eyebrow block text-gold"
                    >
                      {event.year}
                    </time>
                    <h3 className="mt-2 font-display text-xl font-bold uppercase">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {event.description}
                    </p>
                    {event.quote && (
                      <blockquote className="mt-3 border-l-2 border-gold/50 pl-4 text-sm italic text-white/60">
                        &ldquo;{event.quote}&rdquo;
                      </blockquote>
                    )}
                  </div>
                </FadeIn>
              </div>

              <div
                className={`hidden sm:block ${
                  isEven ? "sm:col-start-2" : "sm:col-start-1 sm:row-start-1"
                }`}
                aria-hidden="true"
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
