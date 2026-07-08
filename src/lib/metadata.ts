import type { Metadata } from "next";
import { siteConfig } from "./content";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: "/assets/logo-social.png",
          width: 1500,
          height: 750,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.shortName}`,
      description,
      images: ["/assets/logo-social.png"],
    },
  };
}
