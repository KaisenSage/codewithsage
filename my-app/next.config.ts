import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http:",
              "style-src 'self' 'unsafe-inline' https: data:",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https:",
              "connect-src 'self' https: wss:",
              "form-action 'self' https:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
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
        hostname: "pub-b672d044d71842aeb4efd6d46.r2.dev",
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