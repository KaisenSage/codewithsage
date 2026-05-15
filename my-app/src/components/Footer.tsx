import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#f9fdff] via-[#eef7ff] to-[#e8f0ff] px-4 pb-6 pt-24 text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 md:h-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(125,211,252,0.28),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(147,197,253,0.22),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(224,242,254,0.72)_52%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute left-[8%] top-8 h-24 w-24 rounded-full bg-white/65 blur-2xl" />
        <div className="absolute right-[12%] top-5 h-28 w-28 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute inset-x-6 bottom-3 h-16 rounded-[999px] bg-white/35 blur-2xl" />
        <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-200/90 to-transparent" />
      </div>

      <div className="pointer-events-none absolute left-0 top-28 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-300/18 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-[0_24px_80px_rgba(125,163,214,0.18)] backdrop-blur-md md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20Nov%2021%2C%202025%2C%2005_45_10%20PM.png"
                alt="Sagecorp Logo"
                width={100}
                height={100}
                className="inline-block"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Building smart, beautiful digital products for tomorrow&apos;s businesses. Let&apos;s connect and create something amazing together.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/codewithsage/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-2xl border border-sky-100 bg-white p-3 text-sky-700 shadow-lg shadow-sky-100/70 transition hover:-translate-y-1 hover:bg-sky-50"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/2348182006156"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-2xl border border-sky-100 bg-white p-3 text-emerald-600 shadow-lg shadow-sky-100/70 transition hover:-translate-y-1 hover:bg-emerald-50"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@codewithsage.com"
                aria-label="Email"
                className="rounded-2xl border border-sky-100 bg-white p-3 text-rose-500 shadow-lg shadow-sky-100/70 transition hover:-translate-y-1 hover:bg-rose-50"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:justify-items-end">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Quick Links</div>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <Link href="/#services" className="transition hover:text-sky-700">Services</Link>
                </li>
                <li>
                  <Link href="/#pricing" className="transition hover:text-sky-700">Pricing</Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="transition hover:text-sky-700">Testimonials</Link>
                </li>
                <li>
                  <Link href="/about" className="transition hover:text-sky-700">About</Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-sky-700">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Contact</div>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="mailto:contact@codewithsage.com" className="transition hover:text-sky-700">
                    contact@codewithsage.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2348182006156" className="transition hover:text-sky-700">
                    +234 818 200 6156
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 max-w-6xl border-t border-sky-100 pt-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Sagecorp. All rights reserved.
      </div>
    </footer>
  );
}