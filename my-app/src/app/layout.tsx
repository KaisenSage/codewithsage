import "./globals.css";
import ClientRootWrapper from "@/components/RootClientWrapper";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codewithsage.com"),
  applicationName: "Codewithsage",
  title: {
    default: "Codewithsage - Build your dream website",
    template: "%s | Codewithsage",
  },
  description:
    "Building smart, beautiful digital products for tomorrow's businesses.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "shortcut icon", url: "/favicon.ico" },
      { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.codewithsage.com",
    title: "Codewithsage - Build your dream website",
    description:
      "Building smart, beautiful digital products for tomorrow's businesses.",
    siteName: "Codewithsage",
    images: [
      {
        url: "/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codewithsage - Build your dream website",
    description:
      "Building smart, beautiful digital products for tomorrow's businesses.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ClientRootWrapper>{children}</ClientRootWrapper>
      </body>
    </html>
  );
}