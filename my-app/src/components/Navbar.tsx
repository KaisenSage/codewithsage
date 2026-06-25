"use client";
import { useState } from "react";
import { UserButton, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#audience", label: "Who We Help" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-30 w-full bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-6 lg:px-8 lg:py-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-blue-600">
          <Image
            src="https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20Nov%2021%2C%202025%2C%2005_45_10%20PM.png"
            alt="CodeWithSage Logo"
            width={100}
            height={100}
            className="inline-block w-[88px] sm:w-[96px] lg:w-[104px]"
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-5 xl:gap-7 lg:text-sm xl:text-[15px] lg:font-medium lg:text-gray-700">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-blue-600 transition">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="whitespace-nowrap hover:text-blue-600 transition">
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Auth + CTAs Desktop */}
        <div className="hidden lg:flex gap-3 items-center">
          {!isSignedIn ? (
            <>
              <SignInButton>
                <button className="rounded-xl border border-blue-600 px-4 xl:px-6 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                  Sign in
                </button>
              </SignInButton>
              <Link
                href="/get-started"
                className="rounded-xl bg-blue-600 px-4 xl:px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <SignOutButton>
                <button className="rounded-xl border border-blue-600 px-4 xl:px-6 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                  Sign Out
                </button>
              </SignOutButton>
              <UserButton />
            </>
          )}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="flex items-center rounded-full border border-sky-100 bg-white/90 p-2 text-blue-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
          aria-label="Open Menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-slate-950/45 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[70] flex min-h-screen flex-col bg-[linear-gradient(180deg,rgba(7,11,31,0.96)_0%,rgba(9,17,42,0.98)_55%,rgba(10,22,52,1)_100%)] px-6 pb-10 pt-6 text-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(244,114,182,0.16),transparent_20%)]" />
        <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-blue-600">
            <Image
              src="https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20Nov%2021%2C%202025%2C%2005_45_10%20PM.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-[92px]"
              style={{ objectFit: "contain" }}
            />
          </Link>
          <button
            className="rounded-full border border-white/10 bg-white/10 p-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
            aria-label="Close Menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes size={22} />
          </button>
        </div>
        <nav className="relative flex flex-1 flex-col items-center justify-center gap-5 py-10 text-center text-xl font-medium text-white sm:text-2xl">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-6 py-2 tracking-[0.01em] text-white/92 transition hover:bg-white/10 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-6 py-2 tracking-[0.01em] text-white/92 transition hover:bg-white/10 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
        <div className="relative mx-auto flex w-full max-w-sm flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-white/8 p-4 backdrop-blur-md">
          {!isSignedIn ? (
            <>
              <SignInButton>
                <button className="w-full rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15">
                  Sign in
                </button>
              </SignInButton>
              <Link
                href="/get-started"
                className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:brightness-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <SignOutButton>
                <button className="w-full rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15">
                  Sign Out
                </button>
              </SignOutButton>
              <div className="mt-2 flex justify-center">
                <UserButton />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}