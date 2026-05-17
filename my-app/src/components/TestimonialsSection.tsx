import { Heart, Quote, Sparkles } from "lucide-react";

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
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-amber-400"
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
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_46%,#fdf7ff_100%)] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5rem] top-12 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-[-4rem] top-28 h-64 w-64 rounded-full bg-fuchsia-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-violet-200/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-[0_10px_30px_rgba(148,163,184,0.12)] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Testimonials
          </div>
          <h2
            className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-transparent sm:text-5xl"
            style={{
              backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 52%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Real results from teams that needed their product presence to work harder.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Founders, product teams, and growing businesses trust Codewithsage to turn unclear digital experiences into polished, high-performing products.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/80 bg-white/70 px-6 py-5 text-center shadow-[0_18px_40px_rgba(148,163,184,0.12)] backdrop-blur-sm">
            <div className="text-3xl font-black tracking-[-0.04em] text-slate-900">5.0</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">Average satisfaction</div>
          </div>
          <div className="rounded-[1.75rem] border border-white/80 bg-white/70 px-6 py-5 text-center shadow-[0_18px_40px_rgba(148,163,184,0.12)] backdrop-blur-sm">
            <div className="text-3xl font-black tracking-[-0.04em] text-slate-900">250%</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">Engagement lift cited</div>
          </div>
          <div className="rounded-[1.75rem] border border-white/80 bg-white/70 px-6 py-5 text-center shadow-[0_18px_40px_rgba(148,163,184,0.12)] backdrop-blur-sm">
            <div className="text-3xl font-black tracking-[-0.04em] text-slate-900">End-to-end</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">Strategy to launch support</div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`group relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/90 bg-white/78 px-8 py-8 shadow-[0_24px_70px_rgba(148,163,184,0.14)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(99,102,241,0.18)] ${t.border}`}
          >
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
            <div className="pointer-events-none absolute -right-10 top-6 h-28 w-28 rounded-full bg-sky-100/70 blur-3xl transition duration-300 group-hover:bg-fuchsia-100/70" />

            <Stars />
            <div className="mb-6 flex items-center justify-between">
              <Quote className="h-9 w-9 text-blue-500/80" />
              <div className="rounded-full border border-rose-100 bg-rose-50/80 p-2 text-rose-300">
                <Heart className="h-5 w-5" strokeWidth={2} fill="none" />
              </div>
            </div>
            <div className="mb-8 text-lg italic leading-8 text-slate-700">{t.quote}</div>
            <div className="flex items-center mt-auto">
              <div
                className={`${t.color} mr-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-[0_16px_32px_rgba(99,102,241,0.18)]`}
              >
                {t.initials}
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900">{t.name}</span>
                <span className="block text-sm leading-6 text-slate-500">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}