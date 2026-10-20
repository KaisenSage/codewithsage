"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  DraftingCompass,
  Rocket,
  Wrench,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import AppearOnScroll from "@/components/AppearOnScroll";

const steps = [
  {
    icon: Compass,
    title: "Discover",
    description:
      "We learn about your business, customers, goals, and constraints before recommending what to build.",
    outcome: "A shared direction and clear scope",
  },
  {
    icon: DraftingCompass,
    title: "Design",
    description:
      "We map the experience and shape the visuals, so you can review the direction before development begins.",
    outcome: "A considered design to review",
  },
  {
    icon: Wrench,
    title: "Build",
    description:
      "We develop the experience in focused stages, sharing progress and checking important decisions with you.",
    outcome: "Working features and regular updates",
  },
  {
    icon: Rocket,
    title: "Launch & grow",
    description:
      "We test, prepare the launch, and agree practical next steps to support your product as your needs evolve.",
    outcome: "A live product and a clear handover",
  },
];

export default function HowWeWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#0b1224] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-blue-700/20 blur-[110px]"
      />
      <div className="mx-auto max-w-7xl">
        <AppearOnScroll className="grid gap-7 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12">
          <div>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Build momentum for
              <span className="block text-blue-200">your next stage of growth.</span>
            </h2>
          </div>

        </AppearOnScroll>

        <div className="relative mt-12 sm:mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-300/70 to-violet-300/30 lg:block"
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map(({ icon: Icon, ...step }, index) => (
              <motion.li
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.09,
                }}
                className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#101a32]/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-[#14203b] sm:p-6"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/25 bg-[#111d37] text-blue-200 shadow-[0_0_0_6px_rgba(11,18,36,0.9)] transition duration-300 group-hover:border-blue-300/60 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
                <div className="mt-6 flex items-start gap-2.5 border-t border-white/10 pt-4">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium leading-5 text-slate-200">
                    {step.outcome}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowDown
                    className="absolute -bottom-5 left-1/2 z-10 h-5 w-5 -translate-x-1/2 text-blue-300 sm:hidden"
                    aria-hidden="true"
                  />
                )}
              </motion.li>
            ))}
          </ol>
        </div>

        <AppearOnScroll className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:mt-12 sm:flex-row sm:p-6">
          <div>
            <p className="text-base font-semibold text-white">
              Ready to grow your business?
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              Let&apos;s talk about how a better digital experience can help
              you reach more customers and increase sales.
            </p>
          </div>
          <Link
            href="/get-started"
            className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 sm:w-auto"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AppearOnScroll>
      </div>
    </section>
  );
}
