export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Codewithsage — Build your dream website</title>

      {/* Favicons / fallbacks */}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Apple / PWA */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="codewithsage" />

      {/* Web app manifest */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Safari pinned tab (mask) */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6366f1" />

      {/* Theme color */}
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}