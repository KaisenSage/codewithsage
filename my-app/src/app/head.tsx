export default function Head() {
  return (
    <>
      <title>Codewithsage — Build your dream website</title>

      {/* Favicons (versioned filenames to force client refresh) */}
      <link rel="icon" href="/favicon-v3.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon-v3.svg" />
      <link rel="icon" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" sizes="32x32" href="/favicon-32x32-v3.png" />
      <link rel="icon" sizes="16x16" href="/favicon-16x16-v3.png" />

      {/* Apple / iOS */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-v3.png" />

      {/* Web app manifest */}
      <link rel="manifest" href="/site.webmanifest?v=3" />

      {/* Android / PWA icons (explicit versioned files) */}
      <link rel="icon" sizes="192x192" href="/web-app-manifest-192x192-v3.png" />
      <link rel="icon" sizes="512x512" href="/web-app-manifest-512x512-v3.png" />

      {/* Safari pinned tab (mask) */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />

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