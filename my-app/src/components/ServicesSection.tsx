import { Laptop, Smartphone, Zap, Shield, BarChart2, Headphones } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
        Our Services
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-blue-50 rounded-lg p-8 shadow flex flex-col items-center transition-transform hover:scale-105 group">
          <Laptop className="w-12 h-12 mb-4 text-blue-600 group-hover:animate-bounce" />
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Custom Development</h3>
          <p className="text-gray-600 text-center">
            Bespoke web solutions crafted with cutting-edge technologies like React, Node.js, and modern frameworks.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-8 shadow flex flex-col items-center transition-transform hover:scale-105 group">
          <Smartphone className="w-12 h-12 mb-4 text-purple-600 group-hover:animate-bounce" />
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Responsive Excellence</h3>
          <p className="text-gray-600 text-center">
            Mobile-first designs that provide flawless experiences across all devices and screen resolutions.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-8 shadow flex flex-col items-center transition-transform hover:scale-105 group">
          <Zap className="w-12 h-12 mb-4 text-yellow-400 group-hover:animate-bounce" />
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Lightning Performance</h3>
          <p className="text-gray-600 text-center">
            Optimized for speed with advanced caching and modern technologies. Experience blazing-fast load times.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-8 shadow flex flex-col items-center transition-transform hover:scale-105 group">
          <Shield className="w-12 h-12 mb-4 text-red-500 group-hover:animate-bounce" />
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Enterprise Security</h3>
          <p className="text-gray-600 text-center">
            Industry-leading security practices and infrastructure for complete peace of mind.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-8 shadow flex flex-col items-center transition-transform hover:scale-105 group">
          <BarChart2 className="w-12 h-12 mb-4 text-green-600 group-hover:animate-bounce" />
          <h3 className="font-semibold text-xl mb-2 text-gray-800">SEO Mastery</h3>
          <p className="text-gray-600 text-center">
            Search engine optimized from the ground up to maximize visibility and drive organic growth.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-8 shadow flex flex-col items-center transition-transform hover:scale-105 group">
          <Headphones className="w-12 h-12 mb-4 text-gray-500 group-hover:animate-bounce" />
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Premium Support</h3>
          <p className="text-gray-600 text-center">
            Dedicated support and maintenance to ensure your digital presence remains strong.
          </p>
        </div>
      </div>
    </section>
  );
}