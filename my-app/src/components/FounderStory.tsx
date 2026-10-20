import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AppearOnScroll from "@/components/AppearOnScroll";

const FOUNDER_IMAGE =
  "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/Professional%20headshot%20with%20a%20confident%20smile%204.PNG";

export default function FounderStory() {
  return (
    <section
      id="founder"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <AppearOnScroll className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-5 -top-5 h-32 w-32 rounded-tl-[2rem] border-l-2 border-t-2 border-blue-200 sm:-left-7 sm:-top-7" />
          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-[0_28px_70px_rgba(15,23,42,0.14)]">
            <Image
              src={FOUNDER_IMAGE}
              alt="Babalola Abdallah, founder of Codewithsage"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent p-5 pt-20 sm:p-6 sm:pt-24">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Founder
              </p>
              <p className="mt-1 text-xl font-semibold text-white">
                Babalola Abdallah
              </p>
            </div>
          </div>
        </AppearOnScroll>

        <AppearOnScroll delay={0.12} className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-4xl lg:text-[3.25rem]">
            Hi, I&apos;m Babalola.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
            <p>
              I started Codewithsage to help ambitious people turn their ideas
              into digital experiences that make a real difference. I work
              closely with growing businesses to understand what they need and
              build solutions that serve their customers and move the business
              forward.
            </p>
            <p>
              For me, good technology should feel effortless to use, solve a
              meaningful problem, and create room for what comes next.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            Meet Codewithsage
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </AppearOnScroll>
      </div>
    </section>
  );
}
