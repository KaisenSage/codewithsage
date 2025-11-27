import Image from "next/image";
import Link from "next/link";

const REMOTE_IMAGE =
  "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/carlos-muza-hpjSkU2UYSU-unsplash.jpg";

export const metadata = {
  title: "About — Codewithsage",
  description: "Learn about Codewithsage: our mission, approach, and team.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero with background image + overlay and text on top */}
      <header className="relative h-[56vh] md:h-[64vh] lg:h-[72vh] w-full">
        <Image
          src={REMOTE_IMAGE}
          alt="Office workspace background"
          fill
          priority
          // Keep full-bleed (cover) but bias the focal point to the left on md+ screens
          className="object-cover object-center md:object-left"
        />

        {/* Dark gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

        {/* Content on top of the background */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-6 w-full">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Large white headline and supporting text */}
              <div className="text-white">
                <h1 className="mb-6 text-4xl leading-tight font-extrabold sm:text-5xl md:text-6xl">
                 About Codewithsage
                </h1>

                <p className="mb-4 max-w-xl text-lg text-white/90">
                  Codewithsage is a modern digital development brand led by  Babalola Abdallah — a full-stack engineer specializing in clean interfaces, scalable backend systems, and AI-powered web applications.
                </p>

               

                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="group">
                    <span
                      role="button"
                      className="inline-flex items-center rounded-lg bg-white/95 px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-white/40"
                    >
                      Contact Us
                    </span>
                  </Link>

                  <Link href="/get-started" className="group">
                    <span
                      role="button"
                      className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                      Get Started
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right: Secondary short paragraph — on small screens this stacks under */}
              <div className="text-white/90">
                <p className="mb-4">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content area on white background */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Our Mission</h3>
              <p className="text-sm text-gray-600">
                To help brands, creators, and businesses unlock modern technology — turning ideas into well-designed, high-performing digital products.
              </p>
            </article>

            <article className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Our Approach</h3>
              <p className="text-sm text-gray-600">
                Design-first, performance-minded, and focused on measurable outcomes.
              </p>
            </article>

            <article className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Values</h3>
              <p className="text-sm text-gray-600">Clarity, craftsmanship, and continuous improvement.</p>
            </article>
          </div>

          <section className="mt-12 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <h4 className="mb-4 text-xl font-semibold text-gray-900">Quick facts</h4>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-extrabold text-gray-900">15+</p>
                <p className="text-sm text-gray-600">Production apps</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">4 yrs</p>
                <p className="text-sm text-gray-600">JavaScript & ReactNative</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">UX-first projects</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}