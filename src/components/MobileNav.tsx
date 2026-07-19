"use client";

import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "./Button";
import { SocialLinks } from "./SocialLinks";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="mobile-nav"
      className={cn(
        "fixed inset-0 z-[55] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
      inert={open ? undefined : true}
    >
      <div
        className={cn(
          "absolute inset-0 bg-arena/80 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-arena-surface px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(6rem,env(safe-area-inset-top))] transition-transform duration-300 ease-out motion-safe:animate-none",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map(({ href, label }, i) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li
                key={href}
                className="motion-safe:animate-slide-in opacity-0"
                style={{
                  animationDelay: open ? `${i * 60 + 80}ms` : "0ms",
                  animationFillMode: "forwards",
                }}
              >
                <Link
                  href={href}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400",
                    active
                      ? "bg-rink-500/15 text-white ring-1 ring-rink-400/30"
                      : "text-white/70 hover:bg-white/5 hover:text-white",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="mb-4 text-sm text-white/50">Follow IBHA</p>
          <SocialLinks />
        </div>

        <div className="mt-auto pt-8">
          <Button
            href="/leagues#register"
            className="w-full"
            tabIndex={open ? 0 : -1}
            onClick={onClose}
          >
            Join a League
          </Button>
        </div>
      </nav>
    </div>
  );
}
