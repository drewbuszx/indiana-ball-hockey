import {
  brandAssets,
  externalLinks,
  leagues,
  navLinks,
  registerPath,
  siteConfig,
} from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

const linkClass =
  "text-sm text-white/60 transition-all duration-200 hover:translate-x-0.5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-arena to-navy-deep">
      <div className="speed-stripe h-1 w-full" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={`${siteConfig.name} Home`}
            >
              <Image
                src={brandAssets.logo}
                alt={siteConfig.name}
                width={180}
                height={60}
                className="h-11 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 max-w-md prose-muted">{siteConfig.description}</p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className={linkClass}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Leagues & Shop</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={registerPath} className={linkClass}>
                  Join a League
                </Link>
              </li>
              {leagues.map((league) => (
                <li key={league.id}>
                  {league.status === "open" ? (
                    <a
                      href={league.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {league.shortName}
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  ) : (
                    <Link href={league.href} className={linkClass}>
                      {league.shortName}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a
                  href={externalLinks.store}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Official IBHA Store
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
              <li>
                <Link href="/sponsor" className={linkClass}>
                  2027 Sponsorship Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Indiana, USA</p>
        </div>
      </div>
    </footer>
  );
}
