"use client";

import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-arena/95 backdrop-blur-xl shadow-xl shadow-black/25"
            : "bg-gradient-to-b from-arena/80 via-arena/50 to-transparent backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pb-1.5 pt-[max(0.375rem,env(safe-area-inset-top))] sm:px-8 sm:py-2.5 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-arena rounded-lg"
            aria-label="Indiana Ball Hockey Association Home"
          >
            <Image
              src="/assets/logo.png"
              alt=""
              width={180}
              height={72}
              className="h-16 w-auto transition-transform group-hover:scale-105 sm:h-[72px]"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map(({ href, label }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400",
                    active
                      ? "bg-rink-500/15 text-white ring-1 ring-rink-400/30"
                      : "text-white/70 hover:bg-white/5 hover:text-white",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <SocialLinks size="sm" />
            <Button href="/leagues#register" size="sm">
              Join a League
            </Button>
          </div>

          <button
            type="button"
            className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "h-0.5 w-5 bg-white transition-all duration-300",
                mobileOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-white transition-all duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-white transition-all duration-300",
                mobileOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
