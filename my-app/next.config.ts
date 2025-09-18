import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "randomuser.me",
      "pub-323e019863a3440ba6f23aaf494422d3.r2.dev",
      "pub-b672d044d71842aeb4efd6d464298367.r2.dev", // ← ADD THIS LINE
    ],
  },
};

export default nextConfig;