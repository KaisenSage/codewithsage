"use client";
import { useUser } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  User,
  Palette,
  Code,
  Server,
  Smartphone,
  Search,
  Zap,
  RefreshCw,
  LifeBuoy,
} from "lucide-react";
import Image from "next/image";


export default function GetStartedPage() {
  const { isSignedIn, user } = useUser();

  const backgroundUrl =
    "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/carriza-maiquez-iAzRt1TTL0k-unsplash.jpg";

  // Feature list with dedicated icons (lucide-react)
  const features = [
    { label: "Custom Web Development", Icon: Code },
    { label: "Responsive Design", Icon: Smartphone },
    { label: "SEO Optimization", Icon: Search },
    { label: "Fast Loading Times", Icon: Zap },
    { label: "Mobile-First Approach", Icon: Smartphone },
    { label: "Modern Technologies", Icon: Server },
    { label: "24/7 Support", Icon: LifeBuoy },
    { label: "Regular Updates", Icon: RefreshCw },
  ];

  // ✅ Signed-In Welcome Experience (no cloudflare background; original gradient)
  if (isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7fafd] via-[#eceafd] to-[#e0d7fa] px-6">
        <div className="bg-white shadow-lg rounded-3xl p-10 max-w-2xl w-full flex flex-col items-center text-center hover:shadow-2xl transition">
          {/* Illustration */}
          <Image
            src={`https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/Welcome%20Back%2C%20User!.png`}
            alt="Welcome Illustration"
            width={260}
            height={200}
            className="mb-6"
          />

          {/* Welcome Text */}
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#7557fa] to-[#3871e0] bg-clip-text text-transparent animate-fadeIn">
            Welcome back, {user?.firstName || "User"}!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            You are already signed in. Let’s continue building something amazing.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/portfolio">
              <button className="bg-gradient-to-r from-[#7557fa] to-[#3871e0] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all">
                Explore Portfolio
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white border border-[#7557fa] text-[#7557fa] px-6 py-3 rounded-xl font-semibold hover:bg-[#f7fafd] hover:scale-105 hover:shadow-lg transition-all">
                Start a Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Default Get Started Page (cloudflare background applied here only, no overlay)
  return (
    <div
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      {/* Back to Home Button */}
     

      {/* Ready to Get Started section */}
      <div className="w-full flex flex-col items-center pt-16 md:pt-24 lg:pt-28">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
          <span className="text-white">Get Started?</span>
        </h1>
        <p className="text-lg md:text-xl text-center mb-10 text-gray-00 max-w-2xl">
          Take the first step toward a powerful online presence with our proven
          web development process.
        </p>
      </div>

      {/* Step cards */}
      <div className="w-full max-w-6xl mt-12 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
          {/* Step 1 */}
          <div className="relative bg-white rounded-2xl shadow-md flex flex-col items-center p-6 flex-1 min-w-[220px] mb-6 md:mb-0 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
            <span className="absolute -top-3 left-4 bg-[#7557fa] text-white font-bold rounded-full px-3 py-1 text-sm shadow-md">
              1
            </span>
            <div className="mb-3 flex items-center justify-center">
              <User className="w-9 h-9 text-[#7557fa] bg-[#F4F2FF] rounded-full p-1.5" />
            </div>
            <div className="font-bold text-lg mb-1 text-black text-center">
              Create Your Account
            </div>
            <div className="text-gray-500 text-center mb-4 text-sm">
              Start by creating your free account to unlock access to tailored
              digital solutions for your brand.
            </div>
            <SignUpButton>
              <button className="bg-gradient-to-r from-[#7557fa] to-[#5a6ffb] text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 w-full hover:scale-105 hover:shadow-lg transition-all">
                Sign Up Now
                <span className="ml-2"></span>
              </button>
            </SignUpButton>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-2xl shadow-md flex flex-col items-center p-6 flex-1 min-w-[220px] mb-6 md:mb-0 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
            <span className="absolute -top-3 left-4 bg-[#7557fa] text-white font-bold rounded-full px-3 py-1 text-sm shadow-md">
              2
            </span>
            <div className="mb-3 flex items-center justify-center">
              <Palette className="w-9 h-9 text-[#7557fa] bg-[#F4F2FF] rounded-full p-1.5" />
            </div>
            <div className="font-bold text-lg mb-1 text-black text-center">
              Choose Your Design
            </div>
            <div className="text-gray-500 text-center mb-4 text-sm">
              Browse our portfolio and select a design that matches your vision.
            </div>
            <Link href="/portfolio">
              <button className="bg-gradient-to-r from-[#7557fa] to-[#5a6ffb] text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 w-full hover:scale-105 hover:shadow-lg transition-all">
                View Our Work
                <span className="ml-2"></span>
              </button>
            </Link>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white rounded-2xl shadow-md flex flex-col items-center p-6 flex-1 min-w-[220px] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
            <span className="absolute -top-3 left-4 bg-[#7557fa] text-white font-bold rounded-full px-3 py-1 text-sm shadow-md">
              3
            </span>
            <div className="mb-3 flex items-center justify-center">
              <Code className="w-9 h-9 text-[#7557fa] bg-[#F4F2FF] rounded-full p-1.5" />
            </div>
            <div className="font-bold text-lg mb-1 text-black text-center">
              Customize &amp; Build
            </div>
            <div className="text-gray-500 text-center mb-4 text-sm">
              Collaborate with our team to personalize every detail and bring
              your vision to life.
            </div>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#7557fa] to-[#5a6ffb] text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 w-full hover:scale-105 hover:shadow-lg transition-all">
                Contact Us
                <span className="ml-2"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="w-full max-w-4xl mx-auto px-6 md:px-0 mt-16 mb-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#f7fafd] via-[#eceafd] to-[#e0d7fa] shadow-lg p-8 md:p-12 border border-[#eceafd]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#7557fa] to-[#3871e0] bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-700 mb-8 max-w-2xl">
              Unlock the full potential of your brand with our tailored digital
              solutions. We deliver modern, scalable, and high-performing
              websites designed to help you grow, engage your audience, and
              stand out online.
            </p>
          </div>
          {/* Features grid with lucide icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4 mt-2 mb-4">
            {features.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/80 hover:bg-[#f4f2ff] shadow-sm transition-all"
              >
                <Icon className="text-[#7557fa] w-7 h-7 shrink-0 p-1.5 bg-[#F4F2FF] rounded-full" />
                <span className="font-semibold text-gray-800 text-base md:text-lg">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#7557fa] to-[#3871e0] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#3871e0] hover:to-[#7557fa] hover:scale-105 hover:shadow-lg transition-all flex items-center gap-1">
                Start Your Project <span className="ml-1"></span>
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="bg-white border border-[#7557fa] text-[#7557fa] px-6 py-3 rounded-xl font-semibold hover:bg-[#f7fafd] hover:scale-105 hover:shadow-lg transition-all flex items-center gap-1">
                <svg width={16} height={16} fill="none" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7L8 5z" fill="#7557fa" />
                </svg>
                See Examples
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mt-20">
        <div className="w-full bg-gradient-to-r from-[#3871e0] via-[#7557fa] to-[#6f42c1] py-14 px-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl text-center text-white/90 mb-8 max-w-3xl">
            Join hundreds of satisfied clients who have already transformed
            their businesses with our web development services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-started">
              <button className="bg-white text-[#7557fa] px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold shadow hover:bg-gray-100 text-base md:text-lg transition flex items-center gap-2 hover:scale-105">
                Get Started Today <span className="ml-1"></span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold shadow bg-transparent hover:bg-white/10 text-base md:text-lg transition flex items-center gap-2 hover:scale-105">
                Talk to an Expert
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}