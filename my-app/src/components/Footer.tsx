import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const bookingUrl =
    process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/kvngbabstar/30min";

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_30%,#eff6ff_68%,#ffffff_100%)] px-4 pb-10 pt-28 text-slate-900 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.10),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(125,211,252,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_100%)]" />
      </div>
      <div className="pointer-events-none absolute -left-8 top-24 h-64 w-64 rounded-full bg-fuchsia-200/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-sky-200/28 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-t-[3rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(248,250,252,0.84)_100%)] px-6 pb-8 pt-8 shadow-[0_26px_90px_rgba(148,163,184,0.14)] backdrop-blur-xl sm:px-8 md:px-10 md:pb-10 md:pt-10 lg:px-12 lg:pb-12 lg:pt-12">
          <div className="mx-auto mb-10 max-w-3xl rounded-[2rem] border border-white/90 bg-white/76 px-5 py-6 text-left shadow-[0_14px_36px_rgba(148,163,184,0.12)] backdrop-blur-xl sm:px-7 sm:py-7 md:mb-14 md:px-10 md:py-9 md:text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Start a conversation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Let&apos;s shape your next website, product, or growth-focused digital experience.
            </h2>
            <p className="mx-0 mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:mx-auto">
              Reach out directly if you are planning a new build, refining an existing product, or looking for a reliable design and development partner.
            </p>
            <div className="mt-7 flex max-w-2xl flex-col items-stretch gap-3 md:mx-auto md:flex-row md:items-center md:justify-center">
              <a
                href="mailto:contact@codewithsage.com"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto sm:min-w-[190px]"
              >
                Email Codewithsage
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto sm:min-w-[170px]"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className="grid gap-12 rounded-[2.25rem] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(248,250,252,0.76)_100%)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md md:grid-cols-[1.2fr_0.8fr] md:p-10 lg:gap-16 lg:p-12">
            <div className="text-left">
              <div className="mb-5 flex items-center justify-start gap-3">
                <Image
                  src="https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20Nov%2021%2C%202025%2C%2005_45_10%20PM.png"
                  alt="Codewithsage Logo"
                  width={100}
                  height={100}
                  className="inline-block rounded-2xl bg-white p-2 shadow-[0_8px_30px_rgba(148,163,184,0.12)]"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                Building smart, beautiful digital products for tomorrow&apos;s businesses. Let&apos;s connect and create something amazing together.
              </p>
              <div className="mt-8 flex items-center justify-start gap-5">
                <a
                  href="https://www.instagram.com/codewithsage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/2348182006156"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contact@codewithsage.com"
                  aria-label="Email"
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  <FaEnvelope className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="md:justify-self-end">
              <div className="w-full max-w-[220px]">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Quick Links</div>
                <ul className="space-y-3 text-slate-700">
                  <li>
                    <Link href="/#services" className="transition hover:text-slate-900">Services</Link>
                  </li>
                  <li>
                    <Link href="/#pricing" className="transition hover:text-slate-900">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/#testimonials" className="transition hover:text-slate-900">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/about" className="transition hover:text-slate-900">About</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="transition hover:text-slate-900">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-left text-sm text-slate-500 md:text-center">
            <div className="mx-auto max-w-4xl border-t border-slate-200 pt-7">
              &copy; {new Date().getFullYear()} Codewithsage. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}