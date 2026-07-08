import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  withRinkLines?: boolean;
}

export function Section({
  id,
  children,
  className,
  dark = true,
  withRinkLines = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden section-pad",
        dark ? "bg-arena" : "bg-arena-surface",
        className,
      )}
    >
      {withRinkLines && <RinkLines />}
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="headline-lg text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          {description}
        </p>
      )}
    </div>
  );
}

function RinkLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <line
          x1="0"
          y1="200"
          x2="1440"
          y2="200"
          stroke="currentColor"
          strokeWidth="4"
          className="text-rink-300"
        />
        <circle
          cx="720"
          cy="200"
          r="80"
          stroke="currentColor"
          strokeWidth="3"
          className="text-rink-300"
        />
        <line
          x1="360"
          y1="0"
          x2="360"
          y2="400"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="12 8"
          className="text-rink-400"
        />
        <line
          x1="1080"
          y1="0"
          x2="1080"
          y2="400"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="12 8"
          className="text-rink-400"
        />
      </svg>
    </div>
  );
}
