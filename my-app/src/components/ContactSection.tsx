"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaCalendarAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xpwjgygv");
  const [loading, setLoading] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);

  const BOOKING_URL =
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://calendly.com/kvngbabstar/30min";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    await handleSubmit(e);
    setLoading(false);
  };

  const contactChannels = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "contact@codewithsage.com",
      href: "mailto:contact@codewithsage.com",
      accent: "from-fuchsia-500 to-violet-500",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+234-803-4248-841",
      href: "tel:+2348034248841",
      accent: "from-sky-500 to-cyan-400",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      value: "20 Olabisi Balogun, Ikosi-Ketu, Lagos, Nigeria",
      href: undefined,
      accent: "from-amber-400 to-orange-500",
    },
  ];

  const socialHandles = [
    { label: "Instagram", value: "@codewithsage", href: "https://www.instagram.com/codewithsage/" },
    { label: "WhatsApp", value: "+234 818 200 6156", href: "https://wa.me/2348182006156" },
    { label: "Email", value: "contact@codewithsage.com", href: "mailto:contact@codewithsage.com" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <div className="relative overflow-hidden bg-[#fcfbff] text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-fuchsia-200/50 blur-3xl" />
        <div className="absolute right-[-4rem] top-10 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute left-1/3 top-[26rem] h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute bottom-32 right-12 h-56 w-56 rounded-full bg-cyan-100/70 blur-3xl" />
      </div>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f9e8ff_0%,#ebe7ff_35%,#e0f2fe_100%)] px-4 pb-24 pt-10 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="relative max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.24em] text-violet-700 sm:text-xl">
              Contact us
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
              Let&apos;s plan the next move for your website or app.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              Tell us what you need, and we&apos;ll help you move forward with clarity.
            </p>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 text-white">
          <svg viewBox="0 0 1440 160" fill="currentColor" className="h-20 w-full md:h-28">
            <path d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,69.3C840,53,960,43,1080,58.7C1200,75,1320,117,1380,138.7L1440,160L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z" />
          </svg>
        </div>
      </section>

      <section className="relative -mt-6 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.aside
              className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_24px_80px_rgba(148,163,184,0.18)] backdrop-blur-xl sm:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-fuchsia-200/45 blur-3xl" />
              <div className="pointer-events-none absolute bottom-4 left-4 h-36 w-36 rounded-full bg-sky-200/45 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-700">
                  Get in touch
                </p>
                <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                  Reach out through the channel that works best for you.
                </h2>
                <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                  Share your goals, scope, or timeline. If you already have a brief, send it over and we will take it from there.
                </p>

                <div className="mt-8 space-y-4">
                  {contactChannels.map(({ icon: Icon, title, value, href, accent }) => (
                    <div
                      key={title}
                      className="rounded-[1.5rem] border border-slate-100 bg-white/90 p-4 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                            {title}
                          </p>
                          {href ? (
                            <a href={href} className="mt-1 block break-words text-base font-semibold text-slate-900 transition hover:text-violet-700">
                              {value}
                            </a>
                          ) : (
                            <p className="mt-1 break-words text-base font-semibold text-slate-900">{value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(245,247,255,0.94)_100%)] p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-lg font-semibold text-slate-950">
                    <FaCalendarAlt className="text-violet-600" />
                    Book a Call
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Book a free 15-minute consultation to discuss your project, timeline, and budget. Quick, clear, and no-pressure.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-900"
                  >
                    <FaCalendarAlt />
                    Book a Call
                  </a>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">
                    Prefer email? Reply to contact@codewithsage.com with your availability.
                  </p>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-slate-100 bg-white/90 p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">
                    Socials
                  </p>
                  <div className="mt-4 space-y-3">
                    {socialHandles.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-start gap-1 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm transition hover:border-violet-200 hover:bg-white sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="font-medium text-slate-600">{item.label}</span>
                        <span className="break-all font-semibold text-slate-900 sm:break-normal sm:text-right">{item.value}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_24px_80px_rgba(148,163,184,0.18)] backdrop-blur-xl sm:p-8 lg:p-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="pointer-events-none absolute -right-12 top-8 h-44 w-44 rounded-full bg-sky-200/50 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-fuchsia-200/40 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-700">
                  Send us a message
                </p>
                <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                  We usually reply with the next steps, scope questions, and timing.
                </h2>

                {state.succeeded && (
                  <div className="mt-8 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900 shadow-sm">
                    <div className="flex items-center gap-3 text-lg font-semibold">
                      <FaCheckCircle className="text-2xl" />
                      Your message has been sent.
                    </div>
                    <p className="mt-2 text-sm leading-6 text-emerald-800">
                      Thank you for contacting us. We will get back to you as soon as possible.
                    </p>
                  </div>
                )}

                {Array.isArray(state.errors) && state.errors.length > 0 && (
                  <div className="mt-6 rounded-[1.5rem] border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-700">
                    {state.errors.map((err, index) => (
                      <div key={index}>{err.message}</div>
                    ))}
                  </div>
                )}

                {!state.succeeded && (
                  <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="John Doe"
                        className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                        Phone number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="+234 123 456 7890"
                        className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-slate-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        placeholder="Project inquiry"
                        className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                      />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                        Your message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={6}
                        placeholder="Tell us about your goals, timeline, and what you need help with."
                        className="rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <div className="md:col-span-2 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                      <div className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
                        <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                          <input
                            type="checkbox"
                            name="newsletterOptIn"
                            checked={newsletterOptIn}
                            onChange={(event) => setNewsletterOptIn(event.target.checked)}
                            value={newsletterOptIn ? "yes" : "no"}
                            className="mt-1 h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                          />
                          <span>
                            I want occasional newsletters and updates about new services, launches, and useful web growth tips.
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className={`inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-900 lg:w-auto ${loading || state.submitting ? "cursor-not-allowed opacity-60" : ""}`}
                        disabled={loading || state.submitting}
                      >
                        <FaPaperPlane />
                        {loading || state.submitting ? "Sending..." : "Send message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          <motion.section
            className="mt-14 rounded-[2rem] border border-white/80 bg-white/90 px-5 py-10 shadow-[0_24px_80px_rgba(148,163,184,0.18)] backdrop-blur-xl sm:px-8 sm:py-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">
                    How long does a typical project take?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Project timelines vary based on complexity, but most websites take 2-6 weeks from start to finish.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">
                    Do you offer ongoing support?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Yes, we provide ongoing maintenance and support packages to keep your website running smoothly.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">
                    What is included in your pricing?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Our packages include design, development, testing, deployment, and initial training. Check our pricing page for details.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">
                    Can you work with my existing brand?
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Absolutely. We work with your existing brand guidelines or help you develop new ones.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}