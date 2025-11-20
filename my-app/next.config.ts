import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "randomuser.me",
      "pub-323e019863a3440ba6f23aaf494422d3.r2.dev",
      "pub-b672d044d71842aeb4efd6d464298367.r2.dev",
    ],
    // If you ever need to allow many subdomains or paths, use remotePatterns instead:
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "pub-b672d044d71842aeb4efd6d464298367.r2.dev",
    //     pathname: "/**",
    //   },
    // ],
  },
};

export default nextConfig;