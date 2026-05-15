"use client";

import Image from "next/image";
import Link from "next/link";

const REMOTE_BG =
  "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20May%2013%2C%202026%2C%2008_25_48%20AM.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[52vh] flex-col items-center justify-center overflow-hidden px-4 py-14 text-center sm:min-h-[60vh] sm:px-6 sm:py-16 md:min-h-[66vh] md:px-8 md:py-18 lg:min-h-[88vh] lg:px-10 lg:py-24 xl:min-h-screen"
    >
      {/* Background image (Next/Image with fill for best performance) */}
      <Image
        src={REMOTE_BG}
        alt="Workspace background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_top] brightness-105 saturate-105 sm:object-[58%_top] md:object-[center_18%] md:brightness-110 md:saturate-110 lg:scale-[1.03] lg:object-[center_20%] xl:scale-[1.08]"
      />

      {/* Optional dark overlay so text is readable (increased opacity to dim background) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_38%),linear-gradient(180deg,rgba(8,15,33,0.08)_0%,rgba(8,15,33,0.22)_52%,rgba(8,15,33,0.5)_100%)]" />

      {/* Content (z-10 to sit above image & overlay) */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl items-center justify-center pt-14 sm:pt-18 md:pt-20 lg:pt-28">
        <div className="flex w-full flex-col items-center">
          {/* Action Buttons */}
          <div className="mt-8 flex w-full max-w-xl flex-col items-center gap-4 sm:mt-10 md:mt-12 md:max-w-none md:flex-row md:justify-center">
            <Link
              href="/get-started"
              className="inline-flex w-auto items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow transition duration-200 hover:scale-105 sm:px-6 sm:py-3.5 sm:text-base md:px-9 md:py-4 md:text-lg"
            >
              <svg className="w-6 h-6 mr-2 text-gray-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Launch Your Project
              <span className="ml-2 text-xl"></span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex w-auto items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow transition duration-200 hover:scale-105 sm:px-6 sm:py-3.5 sm:text-base md:px-9 md:py-4 md:text-lg"
            >
              <svg className="w-6 h-6 mr-2 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Explore Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}