import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<ComponentProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-arena hover:bg-gold-light focus-visible:ring-gold shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/35 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]",
  secondary:
    "border border-rink-400/60 bg-rink-500/10 text-white hover:bg-rink-500/30 hover:border-rink-300 focus-visible:ring-rink-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-rink-500/15 active:translate-y-0 active:scale-[0.98]",
  ghost:
    "text-rink-200 hover:text-white hover:bg-white/10 focus-visible:ring-rink-400 underline-offset-4 hover:underline hover:-translate-y-0.5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-arena",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...(props as Omit<ComponentProps<typeof Link>, "href" | "className">)}
      >
        {children}
        {external && <span className="sr-only">(opens in new tab)</span>}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
