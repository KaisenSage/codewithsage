import { Zap, Leaf, Crown, Check, Rocket } from "lucide-react";

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
          <ul className="mb-6 text-gray-700 text-left text-base space-y-2">
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Responsive Website Design</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Up to 5 Pages</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Basic SEO Setup</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Contact Form Integration</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Mobile Optimization</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />1 Month Support</li>
          </ul>
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
          <ul className="mb-6 text-gray-700 text-left text-base space-y-2">
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-600" />Everything in Starter</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-600" />Up to 15 Pages</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-600" />E-commerce Integration</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-600" />Advanced SEO</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-600" />Analytics Setup</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-600" />Social Media Integration</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-600" />3 Months Support</li>
          </ul>
          <a href="contact" className="w-full bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition text-center">
            Get Started
          </a>
        </div>

        {/* Enterprise */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center transition-transform hover:scale-105 group border">
          <Crown className="w-12 h-12 mb-4 text-yellow-600 group-hover:animate-bounce" />
          <h3 className="font-semibold text-2xl mb-2 text-gray-800">Enterprise</h3>
          <div className="text-3xl mb-4 text-blue-600 font-bold"></div>
          <ul className="mb-6 text-gray-700 text-left text-base space-y-2">
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Everything in Professional</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Unlimited Pages</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Custom Functionality</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Advanced Security</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Performance Optimization</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Third-party Integrations</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />6 Months Support</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Training &amp; Documentation</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600" />Priority Support</li>
          </ul>
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