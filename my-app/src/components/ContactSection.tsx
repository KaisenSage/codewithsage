"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaArrowLeft } from "react-icons/fa";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formRef.current) return;

    // Collect form data
    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(
          errorData?.error ||
            "Failed to send message. Please check your details and try again."
        );
        setSent(false);
      } else {
        setSent(true);
        setError(null);
        formRef.current.reset();
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-white to-purple-50">
      <div className="w-full max-w-6xl mx-auto px-4 pt-8">
        {/* Modern Back to Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-900 shadow-sm transition mb-4 w-fit"
        >
          <FaArrowLeft className="text-blue-600" />
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Contact Info */}
          <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-purple-100 p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="bg-purple-500 text-white p-3 rounded-lg text-xl">
                <FaEnvelope />
              </span>
              <div>
                <div className="text-lg text-gray-700 font-semibold">Email</div>
                <div className="text-gray-700">codewithsage.com<br />support@codewithsage.com</div>
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
                  20 Ademola Oshinowo<br />
                  Ikosi-Ketu<br />
                  Lagos, Nigeria
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="md:w-2/3 p-8">
            <h2 className="text-2xl text-gray-700 font-bold mb-6">Send us a Message</h2>
            {sent && (
              <div className="mb-4 text-green-600 font-semibold">
                Your message has been sent!
              </div>
            )}
            {error && (
              <div className="mb-4 text-red-600 font-semibold">
                {error}
              </div>
            )}
            <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-2">
                <label htmlFor="name" className="font-medium mb-1 text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="email" className="font-medium mb-1 text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="phone" className="font-medium mb-1 text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+234 123 456 7890"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="subject" className="font-medium mb-1 text-gray-700">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Project Inquiry"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>
              <div className="flex flex-col md:col-span-2 mb-4">
                <label htmlFor="message" className="font-medium mb-1 text-gray-700">Message *</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition"
                  disabled={loading}
                >
                  <FaPaperPlane /> {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* FAQ Section - Improved Responsive Sizing and Layout */}
        <section className="w-full bg-[#f7fafd] py-12 px-2 mt-16 rounded-2xl">
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