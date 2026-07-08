import type { ReactNode } from "react";
import { Zap, Leaf, Crown, Check, Rocket } from "lucide-react";

const accentStyles = {
  blue: {
    ring: "from-blue-500 via-indigo-500 to-blue-600",
    check: "text-blue-600",
    list: "border-blue-100/80",
  },
  purple: {
    ring: "from-purple-500 via-violet-500 to-fuchsia-500",
    check: "text-purple-600",
    list: "border-purple-100/80",
  },
} as const;

function PlanFeature({
  children,
  variant = "blue",
}: {
  children: ReactNode;
  variant?: keyof typeof accentStyles;
}) {
  const accent = accentStyles[variant];
  const shadow =
    variant === "purple"
      ? "shadow-[0_2px_8px_rgba(139,92,246,0.14)]"
      : "shadow-[0_2px_8px_rgba(59,130,246,0.14)]";

  return (
    <li className="group/feature flex items-start gap-3.5">
      <span
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br p-[1.5px] ${shadow} ${accent.ring}`}
      >
        <span className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <Check
            size={13}
            strokeWidth={2.5}
            className={accent.check}
            aria-hidden="true"
          />
        </span>
      </span>
      <span className="pt-0.5 text-[0.9375rem] leading-6 text-slate-600 transition-colors group-hover/feature:text-slate-800">
        {children}
      </span>
    </li>
  );
}

function PlanFeatures({
  variant = "blue",
  children,
}: {
  variant?: keyof typeof accentStyles;
  children: ReactNode;
}) {
  return (
    <ul
      className={`mb-6 w-full space-y-3.5 border-t pt-6 text-left ${accentStyles[variant].list}`}
    >
      {children}
    </ul>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
        Choose Your Perfect Plan
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center transition-transform hover:scale-105 group border">
          <Zap className="w-12 h-12 mb-4 text-yellow-400 group-hover:animate-bounce" />
          <h3 className="font-semibold text-2xl mb-2 text-gray-800">Starter</h3>
          <div className="text-3xl mb-4 text-blue-600 font-bold"></div>
          <PlanFeatures>
            <PlanFeature>Responsive Website Design</PlanFeature>
            <PlanFeature>Up to 5 Pages</PlanFeature>
            <PlanFeature>Basic SEO Setup</PlanFeature>
            <PlanFeature>Contact Form Integration</PlanFeature>
            <PlanFeature>Mobile Optimization</PlanFeature>
            <PlanFeature>1 Month Support</PlanFeature>
          </PlanFeatures>
          <a href="contact" className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-center">
            Get Started
          </a>
        </div>

        {/* Professional */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center transition-transform hover:scale-105 group border-2 border-purple-500 relative">
          <Leaf className="w-12 h-12 mb-4 text-green-600 group-hover:animate-bounce" />
          <span className="absolute top-4 right-4 bg-purple-200 text-purple-800 text-xs px-3 py-1 rounded-full font-bold">Most Popular</span>
          <h3 className="font-semibold text-2xl mb-2 text-gray-800">Professional</h3>
          <div className="text-3xl mb-4 text-purple-600 font-bold"></div>
          <PlanFeatures variant="purple">
            <PlanFeature variant="purple">Everything in Starter</PlanFeature>
            <PlanFeature variant="purple">Up to 15 Pages</PlanFeature>
            <PlanFeature variant="purple">E-commerce Integration</PlanFeature>
            <PlanFeature variant="purple">Advanced SEO</PlanFeature>
            <PlanFeature variant="purple">Analytics Setup</PlanFeature>
            <PlanFeature variant="purple">Social Media Integration</PlanFeature>
            <PlanFeature variant="purple">3 Months Support</PlanFeature>
          </PlanFeatures>
          <a href="contact" className="w-full bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition text-center">
            Get Started
          </a>
        </div>

        {/* Enterprise */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center transition-transform hover:scale-105 group border">
          <Crown className="w-12 h-12 mb-4 text-yellow-600 group-hover:animate-bounce" />
          <h3 className="font-semibold text-2xl mb-2 text-gray-800">Enterprise</h3>
          <div className="text-3xl mb-4 text-blue-600 font-bold"></div>
          <PlanFeatures>
            <PlanFeature>Everything in Professional</PlanFeature>
            <PlanFeature>Unlimited Pages</PlanFeature>
            <PlanFeature>Custom Functionality</PlanFeature>
            <PlanFeature>Advanced Security</PlanFeature>
            <PlanFeature>Performance Optimization</PlanFeature>
            <PlanFeature>Third-party Integrations</PlanFeature>
            <PlanFeature>6 Months Support</PlanFeature>
            <PlanFeature>Training &amp; Documentation</PlanFeature>
            <PlanFeature>Priority Support</PlanFeature>
          </PlanFeatures>
          <a href="contact" className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-center">
            Contact Us
          </a>
        </div>
      </div>

      {/* Custom Solution Banner */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 rounded-2xl p-10 flex flex-col items-center shadow-lg text-white text-center">
          <Rocket className="w-16 h-16 mb-4 text-yellow-300 animate-bounce" />
          <h3 className="text-3xl font-extrabold mb-2">Need Something Custom?</h3>
          <p className="text-lg mb-6 max-w-2xl">
            Every business is unique. Let&apos;s discuss your specific requirements and create a tailored solution that perfectly fits your needs and budget.
          </p>
          <a
            href="contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold text-lg shadow hover:bg-gray-100 transition"
          >
            Custom Solution
          </a>
        </div>
      </div>
    </section>
  );
}