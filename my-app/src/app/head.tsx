export default function Head() {
  return (
    <>
      <title>Codewithsage — Build your dream website</title>

      {/* Favicons */}
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* Apple / iOS */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Apple web app title (iOS home screen) */}
      <meta name="apple-mobile-web-app-title" content="Codewithsage" />

      {/* Web app manifest */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Android / PWA icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />

      {/* Safari pinned tab (mask) */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6366f1" />

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