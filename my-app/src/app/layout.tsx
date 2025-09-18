"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import "./globals.css";
import Image from "next/image"; // Added import

// Instagram icon styled after the provided image
const InstagramIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-6 h-6"
    aria-hidden="true"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="insta-gradient"
        x1="0" y1="0"
        x2="64" y2="64"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fd5" />
        <stop offset="0.5" stopColor="#ff543e" />
        <stop offset="1" stopColor="#833ab4" />
      </linearGradient>
    </defs>
    <rect
      x="8" y="8" width="48" height="48" rx="16"
      fill="url(#insta-gradient)"
    />
    <g>
      <rect
        x="20" y="20" width="24" height="24" rx="8"
        stroke="#fff"
        strokeWidth="2.5"
        fill="none"
      />
      <circle
        cx="32"
        cy="32"
        r="6"
        stroke="#fff"
        strokeWidth="2.5"
        fill="none"
      />
      <circle
        cx="41"
        cy="23"
        r="2"
        fill="#fff"
      />
    </g>
  </svg>
);

const WhatsappIcon = () => (
  <svg aria-label="WhatsApp" viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect width="24" height="24" rx="7" fill="url(#wa-gradient)" />
    <defs>
      <linearGradient id="wa-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#43e97b" />
        <stop offset="1" stopColor="#38f9d7" />
      </linearGradient>
    </defs>
    <path
      d="M12 5C8.14 5 5 8.14 5 12c0 1.25.37 2.41 1 3.39L5 19l3.74-1c.96.61 2.1.96 3.26.96 3.86 0 7-3.14 7-7s-3.14-7-7-7zm0 12.06c-.97 0-1.92-.26-2.75-.74l-.2-.12-2.22.59.59-2.16-.13-.2A5.91 5.91 0 0 1 6.06 12c0-3.28 2.66-5.94 5.94-5.94 3.28 0 5.94 2.66 5.94 5.94 0 3.28-2.66 5.94-5.94 5.94zm3.34-4.38c-.18-.09-1.1-.54-1.28-.6-.17-.06-.29-.09-.4.09-.12.18-.46.6-.56.72-.1.12-.2.13-.38.04-.18-.09-.77-.28-1.46-.9-.54-.48-.9-1.07-1.01-1.25-.11-.18-.01-.27.08-.36.08-.08.18-.21.26-.31.09-.1.12-.17.18-.29.06-.12.03-.22-.01-.31-.05-.09-.4-.96-.55-1.31-.14-.35-.3-.3-.4-.31-.1-.01-.22-.01-.34-.01s-.31.04-.47.2c-.16.16-.62.61-.62 1.48 0 .87.64 1.72.73 1.84.09.12 1.25 1.91 3.04 2.6.42.14.75.23 1.01.29.43.09.82.08 1.12.05.34-.03 1.1-.45 1.26-.88.16-.43.16-.8.11-.88-.05-.08-.16-.12-.34-.2z"
      fill="#fff"
    />
  </svg>
);

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-50 to-white border-t border-blue-100 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Brand + Description */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-2">
            {/* Logo added here */}
            <Image
              src="https://pub-b672d044d71842aeb4efd6d464298367.r2.dev/ChatGPT%20Image%20Sep%2018%2C%202025%20at%2004_35_06%20PM.png"
              alt="Sagecorp Logo"
              width={100}
              height={100}
              className="inline-block"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-gray-600 max-w-sm">
            Building smart, beautiful digital products for tomorrow’s businesses. Let’s connect and create something amazing together.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-xl p-2 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 shadow hover:scale-105 transition"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/2349000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-xl p-2 bg-gradient-to-br from-green-400 to-teal-400 shadow hover:scale-105 transition"
            >
              <WhatsappIcon />
            </a>
            <a
              href="mailto:hello@codewithsage.com"
              aria-label="Email"
              className="rounded-xl p-2 bg-gradient-to-br from-pink-400 to-red-400 shadow hover:scale-105 transition"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
        {/* Quick links */}
        <div className="flex-1 flex flex-col md:items-end gap-3">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <div className="font-semibold text-blue-900 mb-2">Quick Links</div>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <a href="services" className="hover:text-blue-700 transition">Services</a>
                </li>
                <li>
                  <a href="pricing" className="hover:text-blue-700 transition">Pricing</a>
                </li>
                <li>
                  <a href="testimonials" className="hover:text-blue-700 transition">Testimonials</a>
                </li>
                <li>
                  <a href="contact" className="hover:text-blue-700 transition">Contact</a>
                </li>
              </ul>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-blue-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Sagecorp. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <main className="flex-1 flex flex-col">{children}</main>
          {/* Show footer on all pages except homepage */}
          {pathname !== "/" && <Footer />}
        </body>
      </html>
    </ClerkProvider>
  );
}