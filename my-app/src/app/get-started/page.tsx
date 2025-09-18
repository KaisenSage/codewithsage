"use client";
import { useUser } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { User, Palette, Code, CheckCircle2 } from "lucide-react";
import Image from "next/image"; // Added import

// Cloudflare R2 public image URLs
const CLOUD_IMAGE_BASE = "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/";

export default function GetStartedPage() {
  const { isSignedIn, user } = useUser();

  if (isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          Welcome, {user?.firstName || "User"}!
        </h1>
        <p className="text-lg text-gray-700 mb-8">You are already signed in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

      {/* Ready to Get Started section */}
      <div className="w-full flex flex-col items-center pt-16 pb-6 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
          Ready to <span className="text-[#7557fa]">Get Started?</span>
        </h1>
        <p className="text-lg md:text-xl text-center mb-10 text-gray-600 max-w-2xl">
          Take the first step toward a powerful online presence with our proven web development process.
        </p>
        <div className="w-full flex justify-center">
          <div className="relative rounded-2xl bg-[#f7fafd] flex flex-col md:flex-row items-center shadow p-6 max-w-2xl w-full hover:shadow-xl transition">
            <div className="flex flex-col justify-center flex-1 mb-4 md:mb-0 md:mr-4">
              <div className="text-2xl font-bold mb-2 text-gray-800">Ready to Get Started?</div>
              <div className="text-gray-600 mb-4">
                Contact us to discuss your project requirements.
              </div>
              <Link href="/contact">
                <button className="bg-[#222d3b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3b4366] hover:scale-105 transition-transform transition duration-150">
                  Get in Touch
                </button>
              </Link>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://www.cloudflare.com/products/r2/"
                target="_blank"
                rel="noopener noreferrer"
                title="View on Cloudflare"
                className="block transition-transform hover:scale-105"
              >
                <Image
                  src={`${CLOUD_IMAGE_BASE}samantha-borges-gXsJ9Ywb5as-unsplash.jpg`}
                  alt="Web development expert"
                  width={160} // equivalent to w-40
                  height={192} // equivalent to h-48
                  className="rounded-xl object-cover object-top transition-shadow hover:shadow-2xl"
                  style={{ background: "#eaeaea" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Step cards, Launch Your Site removed */}
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
              Start by creating your free account to unlock access to tailored digital solutions for your brand.
            </div>
            <SignUpButton aftersignupurl="/" aftersigninurl="/">
              <button className="bg-gradient-to-r from-[#7557fa] to-[#5a6ffb] text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 w-full hover:scale-105 hover:shadow-lg transition-all">
                Sign Up Now
                <span className="ml-2">&rarr;</span>
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
                <span className="ml-2">&rarr;</span>
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
              Collaborate with our team to personalize every detail and bring your vision to life.
            </div>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#7557fa] to-[#5a6ffb] text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 w-full hover:scale-105 hover:shadow-lg transition-all">
                Contact Us
                <span className="ml-2">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* What You'll Get */}
      <div className="w-full max-w-6xl mt-16 flex flex-col md:flex-row items-center justify-center gap-12 px-4">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What You'll Get
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            When you choose Pandaweb, you're not just getting a website – you're getting a complete digital solution designed to help your business thrive online.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8 text-black text-base">
            {[
              "Custom Web Development",
              "Responsive Design",
              "SEO Optimization",
              "Fast Loading Times",
              "Mobile-First Approach",
              "Modern Technologies",
              "24/7 Support",
              "Regular Updates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 group transition-all">
                <CheckCircle2 className="text-[#4CAF50] w-6 h-6 group-hover:scale-110 group-hover:text-green-600 transition-all" strokeWidth={2.4} fill="none" />
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#7557fa] to-[#5a6ffb] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#5a6ffb] hover:to-[#7557fa] hover:scale-105 hover:shadow-lg transition-all flex items-center gap-1">
                Start Your Project <span className="ml-1">&rarr;</span>
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="bg-white border border-[#7557fa] text-[#7557fa] px-6 py-3 rounded-lg font-semibold hover:bg-[#f7fafd] hover:scale-105 hover:shadow-lg transition-all flex items-center gap-1">
                <svg width={16} height={16} fill="none" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7L8 5z" fill="#7557fa"/>
                </svg>
                See Examples
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <a
            href="https://www.cloudflare.com/products/r2/"
            target="_blank"
            rel="noopener noreferrer"
            title="View on Cloudflare"
            className="block transition-transform hover:scale-105"
          >
            <Image
              src={`${CLOUD_IMAGE_BASE}andras-vas-Bd7gNnWJBkU-unsplash.jpg`}
              alt="Laptop and hands coding"
              width={448} // equivalent to max-w-md w-full
              height={300} // Approximate aspect ratio, adjust as needed
              className="rounded-2xl shadow-lg object-cover transition-shadow hover:shadow-2xl"
            />
          </a>
        </div>
      </div>

      {/* CTA Section from Image 4 */}
      <section className="w-full mt-20">
        <div className="w-full bg-gradient-to-r from-[#3871e0] via-[#7557fa] to-[#6f42c1] py-14 px-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl text-center text-white/90 mb-8 max-w-3xl">
            Join hundreds of satisfied clients who have already transformed their businesses with our web development services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-started">
              <button className="bg-white text-[#7557fa] px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold shadow hover:bg-gray-100 text-base md:text-lg transition flex items-center gap-2 hover:scale-105">
                Get Started Today <span className="ml-1">&rarr;</span>
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