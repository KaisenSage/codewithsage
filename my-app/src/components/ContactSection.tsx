"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function ContactSection() {
  // Formspree hook with your form ID
  const [state, handleSubmit] = useForm("xpwjgygv");
  const [loading, setLoading] = useState(false);

  // booking URL: use env var in production, fallback to the Calendly URL you provided
  const BOOKING_URL =
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://calendly.com/kvngbabstar/30min";

  // New background image (Cloudflare R2)
  const BG_IMAGE =
    "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/balazs-ketyi-_x335IZXxfc-unsplash.jpg";

  // Custom onSubmit that sets loading for button UX, then calls handleSubmit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    await handleSubmit(e);
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <section className="w-full">
        
      </section>

      {/* Background image (fill) */}
      <Image
        src={BG_IMAGE}
        alt="Contact background"
        fill
        priority
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* Subtle overlay to improve contrast */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 pt-8 relative z-10">
        {/* Modern Back to Home Button */}
        

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row bg-white/85 rounded-2xl shadow-lg overflow-hidden">
          {/* Contact Info */}
          <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-purple-100 p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="bg-purple-500 text-white p-3 rounded-lg text-xl">
                <FaEnvelope />
              </span>
              <div>
                <div className="text-lg text-gray-700 font-semibold">Email</div>
                <div className="text-gray-700">
                  codewithsage.com
                  <br />
                  contact@codewithsage.com
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-blue-500 text-white p-3 rounded-lg text-xl">
                <FaPhone />
              </span>
              <div>
                <div className="text-lg text-gray-700 font-semibold">Phone</div>
                <div className="text-gray-700">+234 8034248841</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-pink-500 text-white p-3 rounded-lg text-xl">
                <FaMapMarkerAlt />
              </span>
              <div>
                <div className="text-lg text-gray-700 font-semibold">Address</div>
                <div className="text-gray-700">
                  20 Olabisi Balogun
                  <br />
                  Ikosi-Ketu
                  <br />
                  Lagos, Nigeria
                </div>
              </div>
            </div>

            {/* Booking CTA - plain link opens in a new tab */}
            <div className="mt-4 p-4 bg-white rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600" />
                Book a Call
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Book a free 15-minute consultation to discuss your project,
                timeline, and budget. Quick, no-pressure chat.
              </p>

              <div className="mt-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition"
                  aria-label="Book a free 15 minute consult (opens in new tab)"
                >
                  <FaCalendarAlt />
                  Book a free 15‑min consult
                </a>
              </div>

              <div className="mt-3 text-xs text-gray-500">
                Prefer email? Reply to contact@codewithsage.com with your
                availability.
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 p-8 bg-gradient-to-br from-blue-50 to-purple-100 p-8 flex flex-col gap-6">
            <h2 className="text-2xl text-gray-700 font-bold mb-6">Send us a Message</h2>

            {state.succeeded && (
              <div className="mb-4 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 bg-gradient-to-r  text-white px-4 py-3 rounded-lg shadow-lg">
                  <FaCheckCircle className="text-2xl" />
                  <span className="font-semibold text-lg">Your message has been sent!</span>
                </div>
                <div className="mt-2 text-blue-700 text-base text-center">
                  Thank you for contacting us. We’ll get back to you as soon as
                  possible.
                </div>
              </div>
            )}

            {Array.isArray(state.errors) && state.errors.length > 0 && (
              <div className="mb-4 text-red-600 font-semibold">
                {state.errors.map((err, i) => (
                  <div key={i}>{err.message}</div>
                ))}
              </div>
            )}

            {!state.succeeded && (
              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col mb-2">
                  <label htmlFor="name" className="font-medium mb-1 text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div className="flex flex-col mb-2">
                  <label htmlFor="email" className="font-medium mb-1 text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="flex flex-col mb-2">
                  <label htmlFor="phone" className="font-medium mb-1 text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+234 123 456 7890"
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>

                <div className="flex flex-col mb-2">
                  <label htmlFor="subject" className="font-medium mb-1 text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder="Project Inquiry"
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <div className="flex flex-col md:col-span-2 mb-4">
                  <label htmlFor="message" className="font-medium mb-1 text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition ${loading || state.submitting ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                    disabled={loading || state.submitting}
                  >
                    <FaPaperPlane /> {loading || state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="w-full bg-white/90 py-12 px-2 mt-16 rounded-2xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl shadow border p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  How long does a typical project take?
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  Project timelines vary based on complexity, but most websites take 2–6 weeks from start to finish.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow border p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Do you offer ongoing support?
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  Yes, we provide ongoing maintenance and support packages to keep your website running smoothly.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow border p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  What is included in your pricing?
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  Our packages include design, development, testing, deployment, and initial training. Check our pricing page for details.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow border p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Can you work with my existing brand?
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  Absolutely! We work with your existing brand guidelines or help you develop new ones.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}