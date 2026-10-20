import Link from "next/link";
import {
  ArrowRight,
  CloudUpload,
  LayoutDashboard,
  ListChecks,
  PenTool,
  Search,
  TrendingUp,
} from "lucide-react";
import AppearOnScroll from "@/components/AppearOnScroll";

const services = [
  {
    icon: PenTool,
    title: "Design that earns attention",
    description:
      "A considered brand experience and clear customer journey, shaped around what your audience needs to take action.",
  },
  {
    icon: ListChecks,
    title: "Build, with you in the loop",
    description:
      "Thoughtful implementation, regular progress updates, and clear milestones—so you always know what is happening.",
  },
  {
    icon: CloudUpload,
    title: "Launch without the guesswork",
    description:
      "Hosting, deployment, and a careful handover to help your new site or product get off to a confident start.",
  },
  {
    icon: Search,
    title: "A stronger foundation for search",
    description:
      "Technical SEO and performance fundamentals that help search engines understand your site and customers find you.",
  },
  {
    icon: LayoutDashboard,
    title: "The tools your business needs",
    description:
      "From reusable components and dashboards to integrations and custom web apps, built around the way you work.",
  },
  {
    icon: TrendingUp,
    title: "Ready for your next stage",
    description:
      "Create smoother paths from discovery to enquiry or purchase, with a foundation that can grow with your business.",
  },
];

export default function WhyCodewithsage() {
  return (
    <section
      id="approach"
      className="relative isolate overflow-hidden bg-[#f5f7fc] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-blue-200/45 blur-[100px]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <AppearOnScroll className="max-w-2xl">
            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.65rem]">
              Make your next
              <span className="block bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                move count.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Your website should do more than look good. We design and build
              digital experiences that make it easier for customers to
              understand your value, trust your business, and take the next
              step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-700 px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(29,78,216,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                Talk about your project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#process"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                See how we work
              </a>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={0.12} amount={0.2}>
            <div className="relative mx-auto max-w-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-300/30 via-violet-200/20 to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-4 shadow-[0_32px_90px_rgba(30,41,80,0.16)] sm:p-6">
                <div className="rounded-2xl bg-[#101a32] p-5 text-white sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mt-2 max-w-xs text-xl font-semibold leading-snug sm:text-2xl">
                        From first impression to next step.
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-blue-200">
                      <TrendingUp className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.06] p-3 sm:p-4">
                    <svg
                      viewBox="0 0 480 116"
                      fill="none"
                      role="img"
                      aria-label="Illustration of a customer journey moving toward a clear call to action"
                      className="h-auto w-full"
                    >
                      <defs>
                        <linearGradient id="journey-line" x1="16" y1="94" x2="464" y2="20" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#60A5FA" />
                          <stop offset="1" stopColor="#C4B5FD" />
                        </linearGradient>
                        <linearGradient id="journey-fill" x1="240" y1="14" x2="240" y2="108" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#818CF8" stopOpacity=".28" />
                          <stop offset="1" stopColor="#818CF8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M8 84C66 82 76 68 125 72C179 77 183 43 239 52C296 61 322 34 365 39C408 44 423 20 472 15V108H8V84Z" fill="url(#journey-fill)" />
                      <path d="M8 84C66 82 76 68 125 72C179 77 183 43 239 52C296 61 322 34 365 39C408 44 423 20 472 15" stroke="url(#journey-line)" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="125" cy="72" r="5" fill="#BFDBFE" />
                      <circle cx="239" cy="52" r="5" fill="#A5B4FC" />
                      <circle cx="365" cy="39" r="5" fill="#C4B5FD" />
                      <circle cx="472" cy="15" r="6" fill="#E0E7FF" />
                      <path d="M8 104H472" stroke="white" strokeOpacity=".12" strokeDasharray="3 7" />
                    </svg>
                    <div className="mt-1 flex justify-between text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[10px]">
                      <span>Discover</span>
                      <span>Understand</span>
                      <span>Trust</span>
                      <span>Take action</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["Design", "Build", "Launch"].map((phase) => (
                      <div
                        key={phase}
                        className="rounded-xl border border-white/10 bg-white/[0.06] p-3"
                      >
                        <p className="text-xs font-semibold text-white sm:text-sm">
                          {phase}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-5 -right-3 -z-10 h-24 w-24 rounded-full border border-blue-300/50 sm:-right-7" />
            </div>
          </AppearOnScroll>
        </div>

        <div className="mt-20 sm:mt-24 lg:mt-28">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, description }, index) => (
              <AppearOnScroll
                key={title}
                delay={0.05 * index}
                amount={0.15}
                className="h-full"
              >
                <article className="group h-full rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_6px_24px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_42px_rgba(37,99,235,0.10)] sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700 transition duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="mt-5 text-base font-semibold tracking-tight text-slate-950">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </article>
              </AppearOnScroll>
            ))}
          </div>
          <AppearOnScroll className="mt-8 flex justify-center">
            <Link
              href="/get-started"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 text-sm font-semibold text-blue-800 transition hover:border-blue-600 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
            >
              Tell us what you&apos;re building
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AppearOnScroll>
        </div>
      </div>
    </section>
  );
}
