"use client";

import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { SocialLinks } from "./SocialLinks";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <div
      id="mobile-nav"
      className={cn(
        "fixed inset-0 z-[55] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
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
          "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-arena-surface px-6 pb-8 pt-24 transition-transform duration-300 ease-out",
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
                className="animate-slide-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <Link
                  href={href}
                  onClick={onClose}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400",
                    active
                      ? "bg-rink-500/20 text-white"
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
          <Button href="/leagues" className="w-full">
            Join a League
          </Button>
        </div>
      </nav>
    </div>
  );
}
