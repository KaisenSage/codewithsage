"use client";

import Image from "next/image";
import Link from "next/link";

const REMOTE_BG =
  "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/daniel-korpai-pKRNxEguRgM-unsplash.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center py-24 px-6 sm:px-8"
    >
      {/* Background image (Next/Image with fill for best performance) */}
      <Image
        src={REMOTE_BG}
        alt="Workspace background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Optional dark overlay so text is readable (increased opacity to dim background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent pointer-events-none" />

      {/* Content (z-10 to sit above image & overlay) */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-white leading-snug">
          Build Your Dream Website with Codewithsage
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 mb-8">
          We create stunning, fast, and secure websites that help you grow your business online.
          From design to deployment, we have got you covered.
        </p>

        <div className="flex flex-col items-center w-full">
          {/* Stats */}
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="bg-white/95 rounded-2xl shadow-md px-10 py-6 flex flex-col items-center min-w-[220px]">
              <span className="text-3xl font-bold text-blue-600 mb-1">50+</span>
              <span className="text-lg font-medium text-gray-700">Projects Delivered</span>
            </div>
            <div className="bg-white/95 rounded-2xl shadow-md px-10 py-6 flex flex-col items-center min-w-[220px]">
              <span className="text-3xl font-bold text-purple-600 mb-1">100%</span>
              <span className="text-lg font-medium text-gray-700">Client Satisfaction</span>
            </div>
            <div className="bg-white/95 rounded-2xl shadow-md px-10 py-6 flex flex-col items-center min-w-[220px]">
              <span className="text-3xl font-bold text-pink-600 mb-1">24/7</span>
              <span className="text-lg font-medium text-gray-700">Premium Support</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/get-started"
              className="flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-pink-500 rounded-full shadow transition hover:scale-105 duration-200"
            >
              <svg className="w-6 h-6 mr-2 text-gray-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Launch Your Project
              <span className="ml-2 text-xl"></span>
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center justify-center px-10 py-4 text-lg font-semibold text-gray-900 bg-white border border-gray-300 rounded-full shadow transition hover:scale-105 duration-200"
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