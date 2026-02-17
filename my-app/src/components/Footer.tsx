import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-50 to-white border-t border-blue-100 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Brand + Description */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-2">
            {/* Logo added here */}
            <Image
              src="https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20Nov%2021%2C%202025%2C%2005_45_10%20PM.png"
              alt="Sagecorp Logo"
              width={100}
              height={100}
              className="inline-block"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-gray-600 max-w-sm">
            Building smart, beautiful digital products for tomorrow&apos;s businesses. Let&apos;s connect and create something amazing together.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/codewithsage/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-xl p-2 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 shadow hover:scale-105 transition"
            >
              <FaInstagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://wa.me/2348182006156"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-xl p-2 bg-gradient-to-br from-green-400 to-teal-400 shadow hover:scale-105 transition"
            >
              <FaWhatsapp className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:contact@codewithsage.com"
              aria-label="Email"
              className="rounded-xl p-2 bg-gradient-to-br from-pink-400 to-red-400 shadow hover:scale-105 transition"
            >
              <FaEnvelope className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
        {/* Quick links */}
        <div className="flex-1 flex flex-col md:items-end gap-3">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <div className="font-semibold text-blue-900 mb-2">Quick Links</div>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <a href="#services" className="hover:text-blue-700 transition">Services</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-blue-700 transition">Pricing</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-blue-700 transition">Testimonials</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-700 transition">About</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-700 transition">Contact</a>
                </li>
              </ul>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-blue-100 text-center text-sm text-gray-500">
        &copy; 2026 Sagecorp. All rights reserved.
      </div>
    </footer>
  );
}