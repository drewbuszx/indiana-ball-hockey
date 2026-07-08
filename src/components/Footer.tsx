import { externalLinks, navLinks, siteConfig } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-arena-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo.png"
                alt={siteConfig.name}
                width={140}
                height={56}
                className="h-12 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400 rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Leagues & Shop
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={externalLinks.ellenbergerLeague}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Ellenberger League
                </a>
              </li>
              <li>
                <a
                  href={externalLinks.rooftopLeague}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Indy Rooftop League
                </a>
              </li>
              <li>
                <a
                  href={externalLinks.store}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Official IBHA Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Indianapolis, Indiana
          </p>
        </div>
      </div>
    </footer>
  );
}
