"use client";
import { UserButton, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image"; // Only import if using <Image />

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-white shadow-sm sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg text-blue-600">
          {/* External logo from Cloudflare R2 */}
          <Image
            src="https://pub-b672d044d71842aeb4efd6d464298367.r2.dev/ChatGPT%20Image%20Sep%2017%2C%202025%20at%2009_07_12%20AM.png"
            alt="CodeWithSage Logo"
            width={88}
            height={88}
            className="inline-block scale-150"
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <div className="hidden md:flex gap-8 text-base font-medium text-gray-700">
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#pricing" className="hover:text-blue-600">Pricing</a>
        <a href="#audience" className="hover:text-blue-600">Who We Help</a>
        <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
      </div>
      <div className="flex gap-3 items-center">
        {!isSignedIn && (
          <>
            <SignInButton>
              <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:text-white font-semibold transition">
                Sign in
              </button>
            </SignInButton>
            <Link
              href="/get-started"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
            >
              Get Started
            </Link>
          </>
        )}
        {isSignedIn && (
          <>
            <SignOutButton>
              <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:text-white font-semibold transition">
                Sign Out
              </button>
            </SignOutButton>
            <UserButton />
          </>
        )}
      </div>
    </nav>
  );
}