import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Mail, Phone } from "lucide-react";
import AppearOnScroll from "@/components/AppearOnScroll";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const REMOTE_IMAGE =
  "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/carlos-muza-hpjSkU2UYSU-unsplash.jpg";

export const metadata = pageMetadata({
  title: "About",
  description: "Learn about Codewithsage: our mission, approach, and team.",
  path: "/about",
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Codewithsage",
  url: `${SITE_URL}/about`,
  description: "Learn about Codewithsage: our mission, approach, and team.",
  isPartOf: {
    "@type": "WebSite",
    name: "Codewithsage",
    url: SITE_URL,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={aboutJsonLd} />
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
              <AppearOnScroll className="text-white" amount={0.4}>
                <h1 className="mb-6 text-4xl leading-tight font-extrabold sm:text-5xl md:text-6xl">
                 About Codewithsage
                </h1>

                <p className="mb-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                  Codewithsage is a modern digital development brand founded by Babalola Abdallah, building clear, high-performing websites, web apps, backend systems, and AI-powered digital products for growth.
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
              </AppearOnScroll>

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
            <AppearOnScroll delay={0.04}>
            <article className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Our Mission</h3>
              <p className="text-sm text-gray-600">
                To help brands, creators, and businesses unlock modern technology — turning ideas into well-designed, high-performing digital products.
              </p>
            </article>
            </AppearOnScroll>

            <AppearOnScroll delay={0.1}>
            <article className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Our Approach</h3>
              <p className="text-sm text-gray-600">
                Design-first, performance-minded, and focused on measurable outcomes.
              </p>
            </article>
            </AppearOnScroll>

            <AppearOnScroll delay={0.16}>
            <article className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Values</h3>
              <p className="text-sm text-gray-600">Clarity, craftsmanship, and continuous improvement.</p>
            </article>
            </AppearOnScroll>
          </div>

          <AppearOnScroll delay={0.08}>
          <section className="mt-12 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <h4 className="mb-4 text-xl font-semibold text-gray-900">Quick facts</h4>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-extrabold text-gray-900">15+</p>
                <p className="text-sm text-gray-600">Production apps</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">4 yrs</p>
                <p className="text-sm text-gray-600">JavaScript & React Native</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">UX-first projects</p>
              </div>
            </div>
          </section>
          </AppearOnScroll>

          <AppearOnScroll delay={0.12}>
          <section className="mt-10 rounded-[1.5rem] border border-gray-100 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Founder Info</p>
                <h4 className="mt-2 text-2xl font-bold text-gray-900">Connect with Babalola Abdallah</h4>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
                  If you want to talk through a build, ask about process, or learn more about the founder behind Codewithsage, you can reach out directly through the channels below.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <a
                href="https://github.com/KaisenSage"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Github className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">GitHub</p>
                <p className="mt-2 text-base font-semibold text-slate-900 group-hover:text-blue-600">KaisenSage</p>
              </a>

              <a
                href="https://www.instagram.com/codewithsage/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white">
                  <Instagram className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Instagram</p>
                <p className="mt-2 text-base font-semibold text-slate-900 group-hover:text-pink-600">@codewithsage</p>
              </a>

              <a
                href="mailto:kvngbabstar@gmail.com"
                className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Email</p>
                <p className="mt-2 break-all text-base font-semibold text-slate-900 group-hover:text-blue-600">kvngbabstar@gmail.com</p>
              </a>

              <a
                href="tel:+2348034248841"
                className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Phone</p>
                <p className="mt-2 text-base font-semibold text-slate-900 group-hover:text-emerald-600">+234-803-4248-841</p>
              </a>
            </div>
          </section>
          </AppearOnScroll>
        </div>
      </section>
    </main>
  );
}