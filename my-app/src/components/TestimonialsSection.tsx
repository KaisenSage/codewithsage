"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { portfolioTestimonials } from "@/data/testimonials";

const SLIDE_MS = 4500;
const count = portfolioTestimonials.length;

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-[15px] sm:w-[15px]" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const tick = 50;
    const step = tick / SLIDE_MS;

    const timer = window.setInterval(() => {
      setProgress((p) => {
        if (p + step >= 1) {
          setIndex((i) => (i + 1) % count);
          return 0;
        }
        return p + step;
      });
    }, tick);

    return () => window.clearInterval(timer);
  }, [reduceMotion, index]);

  const slide = portfolioTestimonials[index];
  const isPortrait = !!slide.project.unoptimized;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_48%,#f5f0ff_100%)] px-4 py-14 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute -right-16 top-32 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center sm:mb-10 lg:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-gradient-to-r from-white via-blue-50/80 to-violet-50/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700 shadow-[0_4px_20px_rgba(59,130,246,0.12)] ring-1 ring-blue-100/80 backdrop-blur-sm sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.24em]">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex h-full w-full rounded-full bg-gradient-to-br from-blue-500 to-violet-500" />
            </span>
            Client Stories
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-black tracking-tight text-slate-900 sm:mt-5 sm:text-4xl">
            Feedback from the products we&apos;ve shipped.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm font-medium text-slate-500 sm:mt-3 sm:text-lg">
            Real projects. Real results.
          </p>
        </motion.div>

        <div
          aria-roledescription="carousel"
          aria-label="Portfolio testimonials"
        >
          <div className="overflow-hidden rounded-2xl border border-white/90 bg-white/80 shadow-[0_28px_80px_rgba(99,102,241,0.12)] backdrop-blur-sm sm:rounded-[2rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduceMotion ? 0 : -28 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                className="grid lg:grid-cols-[1fr_1.05fr]"
                aria-live="polite"
              >
                {/* Project preview */}
                <div
                  className={[
                    "relative h-[132px] shrink-0 overflow-hidden sm:h-auto sm:min-h-[280px] lg:min-h-[420px]",
                    isPortrait ? "bg-[#0a100d]" : "bg-slate-100",
                  ].join(" ")}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-8">
                    <Image
                      src={slide.project.image}
                      alt={slide.project.title}
                      width={slide.project.imageWidth ?? 900}
                      height={slide.project.imageHeight ?? 600}
                      unoptimized={slide.project.unoptimized}
                      className={
                        isPortrait
                          ? "h-full w-auto max-h-[118px] max-w-[96px] object-contain object-top drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)] sm:max-h-[320px] sm:max-w-[220px] lg:max-h-[380px] lg:max-w-[260px]"
                          : "h-auto max-h-[118px] w-auto max-w-[92%] rounded-lg object-contain shadow-[0_8px_28px_rgba(15,23,42,0.12)] sm:max-h-full sm:max-w-full sm:rounded-xl sm:shadow-[0_16px_48px_rgba(15,23,42,0.14)]"
                      }
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Quote panel */}
                <div className="flex flex-col justify-between p-4 sm:p-8 lg:p-10">
                  <div>
                    <StarRow />

                    <p className="mt-2.5 text-[0.9375rem] leading-6 text-slate-700 sm:mt-6 sm:text-xl sm:leading-9">
                      {slide.quote}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-slate-100 pt-3.5 sm:mt-8 sm:pt-6">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="mt-0.5 h-8 w-0.5 shrink-0 rounded-full bg-gradient-to-b from-[#2d3bcf] to-violet-500 sm:mt-1 sm:h-10 sm:w-1" />
                      <div>
                        <p className="text-sm font-bold text-slate-900 sm:text-lg">
                          {slide.clientName}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{slide.clientRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Passive progress dots — visual only, no controls */}
          <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6">
            {portfolioTestimonials.map((t, i) => (
              <div
                key={t.project.title}
                aria-hidden={i !== index}
                className="relative h-1.5 overflow-hidden rounded-full bg-slate-200 transition-all duration-300"
                style={{ width: i === index ? "2rem" : "0.375rem" }}
              >
                {i === index && (
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-[#2d3bcf] transition-[width] duration-75 ease-linear"
                    style={{ width: `${reduceMotion ? 100 : progress * 100}%` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
