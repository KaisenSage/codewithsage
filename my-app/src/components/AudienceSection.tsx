import { BriefcaseBusiness, UserCog, Globe } from "lucide-react";

export default function AudienceSection() {
  return (
    <section id="audience" className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Who We Help</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col items-center transition-transform hover:scale-105 group">
          <BriefcaseBusiness className="w-12 h-12 mb-4 text-blue-600 group-hover:animate-bounce" />
          <h3 className="font-semibold text-xl mb-2 text-black">Small Businesses</h3>
          <p className="text-gray-600 text-center">
            From startups to established companies, we help you build an online presence that stands out.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col items-center transition-transform hover:scale-105 group">
          <UserCog className="w-12 h-12 mb-4 text-purple-600 group-hover:animate-spin" />
          <h3 className="font-semibold text-xl mb-2 text-black">Entrepreneurs</h3>
          <p className="text-gray-600 text-center">
            We empower solo founders and creators to showcase their products or portfolios professionally.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col items-center transition-transform hover:scale-105 group">
          <Globe className="w-12 h-12 mb-4 text-green-600 group-hover:animate-bounce" />
          <h3 className="font-semibold text-xl mb-2 text-black">Organizations</h3>
          <p className="text-gray-600 text-center">
            Non-profits, educational groups, and more—our solutions are tailored for your mission and goals.
          </p>
        </div>
      </div>
    </section>
  );
}