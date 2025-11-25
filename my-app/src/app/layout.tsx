import "./globals.css";
import ClientRootWrapper from "@/components/RootClientWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Codewithsage — Build your dream website</title>

        {/* Favicons */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

        {/* Apple / iOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Codewithsage" />
        <meta name="application-name" content="Codewithsage" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Web app manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="manifest" href="/manifest.json" />

        {/* Android / PWA icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />

        {/* Safari pinned tab (mask) */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6366f1" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
      </head>

      <body className="min-h-screen flex flex-col">
        <ClientRootWrapper>{children}</ClientRootWrapper>
      </body>
    </html>
  );
}