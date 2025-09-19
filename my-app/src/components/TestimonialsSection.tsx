import { Heart, Quote } from "lucide-react";

// Fresh testimonial data, new names, companies, and quotes
const testimonials = [
  {
    initials: "EN",
    color: "bg-gradient-to-br from-blue-400 to-cyan-400",
    name: "Esther Nwosu",
    role: "Product Manager, FinFlow",
    border: "border-t-4 border-blue-300",
    quote:
      '“Working with this team was a game-changer for our digital transformation. Our new website is fast, intuitive, and has improved customer engagement by 250% in just a few weeks.”',
    stars: 5,
  },
  {
    initials: "KA",
    color: "bg-gradient-to-br from-purple-400 to-pink-400",
    name: "Kelechi Adeyemi",
    role: "Operations Lead, KelMarket",
    border: "border-t-4 border-purple-300",
    quote:
      '“The attention to detail and communication throughout the project was excellent. We finally have a platform that reflects our brand and supports our rapid growth.”',
    stars: 5,
  },
  {
    initials: "TD",
    color: "bg-gradient-to-br from-green-400 to-emerald-400",
    name: "Tomiwa Daramola",
    role: "Founder, LearnSmart Africa",
    border: "border-t-4 border-green-300",
    quote:
      '“From the initial strategy sessions to launch, everything was seamless. Our learning portal is now easy to use and has helped us reach more students than ever before.”',
    stars: 5,
  },
];

function Stars() {
  return (
    <div className="flex mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <polygon points="10,1 12.59,6.93 19,7.63 14,12.1 15.18,18.44 10,15.27 4.82,18.44 6,12.1 1,7.63 7.41,6.93" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-blue-50">
      <h2
        className="
        max-w-4xl mx-auto text-3xl md:text-4xl font-extrabold mb-4 text-center
        bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent leading-snug
        "
        style={{
          // Ensure compatibility with all browsers
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Client Success Stories
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-center text-gray-600 mb-12">
        Discover how our premium web development solutions drive measurable business growth and lasting impact.
      </p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl shadow-lg px-8 py-8 flex flex-col justify-between min-h-[420px] ${t.border} border-b border-x border-white transition-transform hover:-translate-y-2`}
          >
            <Stars />
            <Quote className="w-8 h-8 text-blue-400 mb-4" />
            <div className="italic text-gray-700 text-lg leading-relaxed mb-8">{t.quote}</div>
            <div className="flex items-center mt-auto">
              <div
                className={`${t.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg mr-4`}
              >
                {t.initials}
              </div>
              <div>
                <span className="block font-bold text-gray-900 text-lg">{t.name}</span>
                <span className="block text-gray-500">{t.role}</span>
              </div>
              <Heart className="w-7 h-7 text-red-300 ml-auto" strokeWidth={2} fill="none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}