import type { NextConfig } from "next";

const isProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  async headers() {
    const productionHosts = ["www.codewithsage.com", "codewithsage.com"] as const;

    return [
      ...(isProduction
        ? productionHosts.map((host) => ({
            source: "/:path*",
            has: [{ type: "host" as const, value: host }],
            headers: [{ key: "X-Robots-Tag", value: "index, follow" }],
          }))
        : []),
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "codewithsage.vercel.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-323e019863a3440ba6f23aaf494422d3.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-b672d044d71842aeb4efd6d464298367.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-b672d044d71842aeb4efd6d46.r2.dev", // <--- add this exact host from your runtime error
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-bd618a9723f54128a9dbd24698f83fba.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;