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

export default function ContactSection() {
  // Formspree hook with your form ID
  const [state, handleSubmit] = useForm("xpwjgygv");
  const [loading, setLoading] = useState(false);

  // booking URL: use env var in production, fallback to the Calendly URL you provided
  const BOOKING_URL =
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://calendly.com/kvngbabstar/30min";

  // Custom onSubmit that sets loading for button UX, then calls handleSubmit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    await handleSubmit(e);
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#f9fdff] via-[#eef7ff] to-[#e8f0ff]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 md:h-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(125,211,252,0.28),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(147,197,253,0.22),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(224,242,254,0.72)_52%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute left-[8%] top-8 h-24 w-24 rounded-full bg-white/65 blur-2xl" />
        <div className="absolute right-[12%] top-5 h-28 w-28 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute inset-x-6 bottom-3 h-16 rounded-[999px] bg-white/35 blur-2xl" />
      </div>
      <div className="pointer-events-none absolute left-0 top-28 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-300/18 blur-3xl" />
      <section className="w-full">
        
      </section>

      <div className="w-full max-w-6xl mx-auto px-4 pt-8 relative z-10">
        {/* Modern Back to Home Button */}
        

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Contact Us
        </h1>

        <div className="flex flex-col overflow-hidden rounded-2xl bg-white/80 shadow-[0_24px_70px_rgba(99,102,241,0.12)] backdrop-blur-sm md:flex-row">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 bg-gradient-to-br from-[#f8fbff] via-[#edf6ff] to-[#fdf2f8] p-8 md:w-1/3">
            <div className="flex items-start gap-4">
              <span className="rounded-lg bg-rose-500 p-3 text-xl text-white shadow-sm">
                <FaEnvelope />
              </span>
              <div>
                <div className="text-lg text-gray-700 font-semibold">Email</div>
                <div className="text-gray-700">
                  contact@codewithsage.com
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="rounded-lg bg-sky-500 p-3 text-xl text-white shadow-sm">
                <FaPhone />
              </span>
              <div>
                <div className="text-lg text-gray-700 font-semibold">Phone</div>
                <div className="text-gray-700">+234-803-4248-841</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="rounded-lg bg-amber-500 p-3 text-xl text-white shadow-sm">
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
            <div className="mt-4 rounded-lg border border-white/70 bg-white/90 p-4 shadow-sm">
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 py-3 font-semibold text-white shadow-lg shadow-slate-300 transition hover:from-slate-950 hover:via-slate-900 hover:to-sky-800"
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
          <div className="flex flex-col gap-6 bg-gradient-to-br from-white via-[#f8fbff] to-[#f3f7ff] p-8 md:w-2/3">
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
                    className={`flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 py-3 font-semibold text-white shadow-lg shadow-slate-300 transition hover:from-slate-950 hover:via-slate-900 hover:to-sky-800 ${loading || state.submitting ? "cursor-not-allowed opacity-60" : ""
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
        <section className="relative z-10 mt-16 w-full rounded-2xl bg-white/90 px-2 py-12 shadow-[0_20px_60px_rgba(148,163,184,0.12)]">
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