import { externalLinks, navLinks, siteConfig } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

const externalLinkClass =
  "text-sm text-white/60 transition-all duration-200 hover:text-white hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400 rounded";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-arena to-arena-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rink-400"
              aria-label={`${siteConfig.name} Home`}
            >
              <Image
                src="/assets/logo.png"
                alt={siteConfig.name}
                width={140}
                height={56}
                className="h-12 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 max-w-md prose-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={externalLinkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Leagues & Shop</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/leagues#register" className={externalLinkClass}>
                  Join a League
                </Link>
              </li>
              <li>
                <a
                  href={externalLinks.ellenbergerLeague}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  Ellenberger League
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={externalLinks.rooftopLeague}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  Indy Rooftop League
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={externalLinks.store}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  Official IBHA Store
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Indianapolis, Indiana</p>
        </div>
      </div>
    </footer>
  );
}
