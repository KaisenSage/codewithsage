"use client";
import { UserButton, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-white shadow-sm sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <Link href="/" className="font-bold text-lg text-blue-600">codewithsage</Link>
      </div>
      <div className="hidden md:flex gap-8 text-base font-medium text-gray-700">
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#pricing" className="hover:text-blue-600">Pricing</a>
        <a href="#audience" className="hover:text-blue-600">Who We Help</a>
        <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        {/* Update Contact to link to the /contact page */}
        <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
      </div>
      <div className="flex gap-3 items-center">
        {!isSignedIn && (
          <>
            <SignInButton aftersigninurl="/">
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
            <SignOutButton aftersignouturl="/">
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