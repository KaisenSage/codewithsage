export default function Head() {
  return (
    <>
      <title>Codewithsage — Build your dream website</title>

      {/* Favicons (cache-busted) */}
      <link rel="icon" href="/favicon.ico?v=2" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
      <link rel="icon" sizes="96x96" href="/favicon-96x96.png?v=2" />
      <link rel="icon" sizes="32x32" href="/favicon-32x32.png?v=2" />
      <link rel="icon" sizes="16x16" href="/favicon-16x16.png?v=2" />

      {/* Apple / iOS */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />

      {/* Web app manifest */}
      <link rel="manifest" href="/site.webmanifest?v=2" />

      {/* Android / PWA icons */}
      <link rel="icon" sizes="192x192" href="/web-app-manifest-192x192.png?v=2" />
      <link rel="icon" sizes="512x512" href="/web-app-manifest-512x512.png?v=2" />

      {/* Theme color */}
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph / Social preview */}
      <meta property="og:title" content="Codewithsage — Build your dream website" />
      <meta property="og:description" content="Building smart, beautiful digital products for tomorrow’s businesses." />
      <meta property="og:image" content="https://codewithsage.com/og-image.png" />
      <meta property="og:url" content="https://codewithsage.com" />
      <meta property="og:type" content="website" />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Codewithsage" />
      <meta name="twitter:description" content="Building smart, beautiful digital products for tomorrow’s businesses." />
      <meta name="twitter:image" content="https://codewithsage.com/og-image.png" />
    </>
  );
}