import { Laptop, Smartphone, Zap, Shield, BarChart2, Headphones } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-16 sm:px-6 md:px-8 md:py-18 lg:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text sm:text-3xl lg:text-4xl">
        Our Services
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-8">
        <div className="group flex h-full min-h-[260px] flex-col items-center rounded-2xl bg-blue-50 p-6 text-center shadow-sm transition-transform hover:scale-[1.02] md:p-7">
          <Laptop className="mb-4 h-12 w-12 text-blue-600 group-hover:animate-bounce" />
          <h3 className="mb-2 text-lg font-semibold text-gray-800 md:text-xl">Custom Development</h3>
          <p className="text-gray-600">
            We build modern websites and scalable digital products that look great, load fast, and support your business as it grows.
          </p>
        </div>
        <div className="group flex h-full min-h-[260px] flex-col items-center rounded-2xl bg-blue-50 p-6 text-center shadow-sm transition-transform hover:scale-[1.02] md:p-7">
          <Smartphone className="mb-4 h-12 w-12 text-purple-600 group-hover:animate-bounce" />
          <h3 className="mb-2 text-lg font-semibold text-gray-800 md:text-xl">Android &amp; iOS Apps</h3>
          <p className="text-gray-600">
            Cross-platform mobile app experiences for Android and iOS with polished UI, intuitive flows, and production-ready performance.
          </p>
        </div>
        <div className="group flex h-full min-h-[260px] flex-col items-center rounded-2xl bg-blue-50 p-6 text-center shadow-sm transition-transform hover:scale-[1.02] md:p-7">
          <Zap className="mb-4 h-12 w-12 text-yellow-400 group-hover:animate-bounce" />
          <h3 className="mb-2 text-lg font-semibold text-gray-800 md:text-xl">Lightning Performance</h3>
          <p className="text-gray-600">
            Optimized for speed with advanced caching and modern technologies. Experience blazing-fast load times.
          </p>
        </div>
        <div className="group flex h-full min-h-[260px] flex-col items-center rounded-2xl bg-blue-50 p-6 text-center shadow-sm transition-transform hover:scale-[1.02] md:p-7">
          <Shield className="mb-4 h-12 w-12 text-red-500 group-hover:animate-bounce" />
          <h3 className="mb-2 text-lg font-semibold text-gray-800 md:text-xl">Enterprise Security</h3>
          <p className="text-gray-600">
            Industry-leading security practices and infrastructure for complete peace of mind.
          </p>
        </div>
        <div className="group flex h-full min-h-[260px] flex-col items-center rounded-2xl bg-blue-50 p-6 text-center shadow-sm transition-transform hover:scale-[1.02] md:p-7">
          <BarChart2 className="mb-4 h-12 w-12 text-green-600 group-hover:animate-bounce" />
          <h3 className="mb-2 text-lg font-semibold text-gray-800 md:text-xl">SEO Mastery</h3>
          <p className="text-gray-600">
            Search engine optimized from the ground up to maximize visibility and drive organic growth.
          </p>
        </div>
        <div className="group flex h-full min-h-[260px] flex-col items-center rounded-2xl bg-blue-50 p-6 text-center shadow-sm transition-transform hover:scale-[1.02] md:p-7">
          <Headphones className="mb-4 h-12 w-12 text-gray-500 group-hover:animate-bounce" />
          <h3 className="mb-2 text-lg font-semibold text-gray-800 md:text-xl">Premium Support</h3>
          <p className="text-gray-600">
            Dedicated support and maintenance to ensure your digital presence remains strong.
          </p>
        </div>
      </div>
    </section>
  );
}