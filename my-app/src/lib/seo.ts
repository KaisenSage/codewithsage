import type { Metadata } from "next";

const SITE_URL = "https://www.codewithsage.com";
const SITE_NAME = "Codewithsage";
const DEFAULT_OG_IMAGE = "/og-image.png";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const resolvedTitle = absoluteTitle ? { absolute: title } : title;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE };
