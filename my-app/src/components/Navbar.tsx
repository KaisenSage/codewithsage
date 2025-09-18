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
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#audience", label: "Who We Help" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full px-4 sm:px-8 py-4 flex items-center justify-between bg-white shadow-sm sticky top-0 z-30">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-lg text-blue-600">
        <Image
          src="https://pub-b672d044d71842aeb4efd6d464298367.r2.dev/ChatGPT%20Image%20Sep%2017%2C%202025%20at%2009_07_12%20AM.png"
          alt="CodeWithSage Logo"
          width={100}
          height={100}
          className="inline-block"
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-base font-medium text-gray-700">
        {navLinks.map((link) =>
          link.href.startsWith("/") ? (
            <Link key={link.href} href={link.href} className="hover:text-blue-600 transition">
              {link.label}
            </Link>
          ) : (
            <a key={link.href} href={link.href} className="hover:text-blue-600 transition">
              {link.label}
            </a>
          )
        )}
      </div>

      {/* Auth + CTAs Desktop */}
      <div className="hidden md:flex gap-3 items-center">
        {!isSignedIn ? (
          <>
            <SignInButton>
              <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition">
                Sign in
              </button>
            </SignInButton>
            <Link href="/get-started">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
          </>
        ) : (
          <>
            <SignOutButton>
              <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition">
                Sign Out
              </button>
            </SignOutButton>
            <UserButton />
          </>
        )}
      </div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center p-2 text-blue-600 focus:outline-none"
        aria-label="Open Menu"
        onClick={() => setMobileMenuOpen(true)}
      >
        <FaBars size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 w-3/4 max-w-xs h-full bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-blue-600">
            <Image
              src="https://pub-b672d044d71842aeb4efd6d464298367.r2.dev/ChatGPT%20Image%20Sep%2017%2C%202025%20at%2009_07_12%20AM.png"
              alt="Logo"
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </Link>
          <button
            className="p-2 text-blue-600 focus:outline-none"
            aria-label="Close Menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes size={22} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-6 py-6 font-medium text-gray-700">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
        <div className="px-6 pb-6 flex flex-col gap-2">
          {!isSignedIn ? (
            <>
              <SignInButton>
                <button className="w-full px-6 py-2 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition">
                  Sign in
                </button>
              </SignInButton>
              <Link href="/get-started">
                <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                  Get Started
                </button>
              </Link>
            </>
          ) : (
            <>
              <SignOutButton>
                <button className="w-full px-6 py-2 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition">
                  Sign Out
                </button>
              </SignOutButton>
              <div className="flex justify-center mt-2">
                <UserButton />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}