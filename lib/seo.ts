import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { allSeoKeywords } from "@/data/seo-keywords";

type SeoInput = {
  title?: string;
  rawTitle?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  rawTitle,
  description = siteConfig.description,
  path = "/",
  image = "/opengraph-image",
  keywords,
  noIndex = false
}: SeoInput = {}): Metadata {
  const pageTitle = rawTitle ?? (title ? `${title} | ${siteConfig.name}` : siteConfig.name);
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);
  const metadataKeywords = keywords
    ? Array.from(new Set([...keywords, ...allSeoKeywords]))
    : allSeoKeywords;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Physiotherapy, sports rehabilitation, athletic training",
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg"
    },
    keywords: metadataKeywords,
    alternates: {
      canonical
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage]
    },
    robots: noIndex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
          }
        }
  };
}
