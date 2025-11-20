// next.config.js
module.exports = {
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
    ],
  },
};