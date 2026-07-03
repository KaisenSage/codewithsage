import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/signin", "/api/"],
      },
    ],
    sitemap: "https://www.codewithsage.com/sitemap.xml",
    host: "https://www.codewithsage.com",
  };
}
