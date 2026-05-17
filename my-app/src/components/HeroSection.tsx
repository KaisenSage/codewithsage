"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const REMOTE_BG =
  "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20May%2013%2C%202026%2C%2008_25_48%20AM.png";

const floatingPills = [
  {
    label: "AI Solutions",
    className: "left-[4%] top-[16%] flex sm:left-[6%] lg:left-[10%]",
    rotate: -8,
    pointerX: -16,
    pointerY: -10,
    duration: 5.2,
    delay: 0,
  },
  {
    label: "App Development",
    className: "left-[3%] top-[70%] flex sm:left-[8%] md:left-[10%] lg:left-[14%]",
    rotate: 4,
    pointerX: -14,
    pointerY: 12,
    duration: 4.8,
    delay: 0.6,
  },
  {
    label: "Website Development",
    className: "right-[4%] top-[18%] flex sm:right-[8%] lg:right-[14%]",
    rotate: 10,
    pointerX: 16,
    pointerY: -12,
    duration: 5.4,
    delay: 1,
  },
  {
    label: "Payment Integrations",
    className: "right-[3%] top-[62%] hidden sm:flex md:right-[6%] lg:right-[10%]",
    rotate: -12,
    pointerX: 14,
    pointerY: 10,
    duration: 5,
    delay: 1.4,
  },
  {
    label: "Chat Bot Integration",
    className: "left-[18%] bottom-[22%] hidden md:flex lg:left-[24%]",
    rotate: -18,
    pointerX: -10,
    pointerY: 16,
    duration: 5.6,
    delay: 0.8,
  },
  {
    label: "iOS Development",
    className: "right-[18%] bottom-[24%] hidden md:flex lg:right-[22%]",
    rotate: 14,
    pointerX: 10,
    pointerY: 14,
    duration: 4.6,
    delay: 1.8,
  },
  {
    label: "Android Development",
    className: "left-1/2 top-[10%] hidden -translate-x-1/2 md:flex xl:top-[16%]",
    rotate: -6,
    pointerX: 0,
    pointerY: -16,
    duration: 5.8,
    delay: 1.2,
  },
];

type FloatingPillProps = {
  pill: (typeof floatingPills)[number];
  pointerX: ReturnType<typeof useSpring>;
  pointerY: ReturnType<typeof useSpring>;
  reduceMotion: boolean | null;
};

function FloatingPill({ pill, pointerX, pointerY, reduceMotion }: FloatingPillProps) {
  const shiftX = useTransform(pointerX, [-1, 1], [pill.pointerX, -pill.pointerX]);
  const shiftY = useTransform(pointerY, [-1, 1], [pill.pointerY, -pill.pointerY]);

  return (
    <motion.div
      className={`absolute ${pill.className}`}
      initial={{ opacity: 0, y: 18 }}
      animate={
        reduceMotion
          ? { opacity: 0.85 }
          : { opacity: [0.52, 1, 0.52], scale: [1, 1.04, 1] }
      }
      transition={
        reduceMotion
          ? { duration: 0.2 }
          : {
              duration: pill.duration,
              delay: pill.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      style={{ x: shiftX, y: shiftY }}
    >
      <motion.span
        animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: pill.duration,
                delay: pill.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        style={{ rotate: `${pill.rotate}deg` }}
        className="inline-flex whitespace-nowrap rounded-full border border-white/45 bg-white/24 px-4 py-2.5 text-[11px] font-semibold tracking-[0.02em] text-white shadow-[0_16px_38px_rgba(12,20,40,0.24)] backdrop-blur-md sm:px-4.5 sm:text-xs lg:px-5 lg:py-2.5 lg:text-sm"
      >
        {pill.label}
      </motion.span>
    </motion.div>
  );
}

export default function HeroSection() {
  const rawPointerX = useMotionValue(0);
  const rawPointerY = useMotionValue(0);
  const pointerX = useSpring(rawPointerX, { stiffness: 90, damping: 18, mass: 0.45 });
  const pointerY = useSpring(rawPointerY, { stiffness: 90, damping: 18, mass: 0.45 });
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const nextY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    rawPointerX.set(nextX);
    rawPointerY.set(nextY);
  };

  const handlePointerLeave = () => {
    rawPointerX.set(0);
    rawPointerY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[52vh] flex-col items-center justify-center overflow-hidden px-4 py-14 text-center sm:min-h-[60vh] sm:px-6 sm:py-16 md:min-h-[66vh] md:px-8 md:py-18 lg:min-h-[88vh] lg:px-10 lg:py-24 xl:min-h-screen"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Background image (Next/Image with fill for best performance) */}
      <Image
        src={REMOTE_BG}
        alt="Workspace background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_top] brightness-105 saturate-105 sm:object-[58%_top] md:object-[center_18%] md:brightness-110 md:saturate-110 lg:scale-[1.03] lg:object-[center_20%] xl:scale-[1.08]"
      />

      {/* Optional dark overlay so text is readable (increased opacity to dim background) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_38%),linear-gradient(180deg,rgba(8,15,33,0.08)_0%,rgba(8,15,33,0.22)_52%,rgba(8,15,33,0.5)_100%)]" />

      <div className="pointer-events-none absolute inset-0 z-10">
        {floatingPills.map((pill) => (
          <FloatingPill
            key={pill.label}
            pill={pill}
            pointerX={pointerX}
            pointerY={pointerY}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      {/* Content (z-10 to sit above image & overlay) */}
      <div className="relative z-20 mx-auto flex w-full max-w-4xl items-center justify-center pt-14 sm:pt-18 md:pt-20 lg:pt-28">
        <div className="flex w-full flex-col items-center">
          {/* Action Buttons */}
          <div className="mt-8 flex w-full max-w-xl flex-col items-center gap-4 sm:mt-10 md:mt-12 md:max-w-none md:flex-row md:justify-center">
            <Link
              href="/get-started"
              className="inline-flex w-auto items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow transition duration-200 hover:scale-105 sm:px-6 sm:py-3.5 sm:text-base md:px-9 md:py-4 md:text-lg"
            >
              <svg className="w-6 h-6 mr-2 text-gray-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Launch Your Project
              <span className="ml-2 text-xl"></span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex w-auto items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow transition duration-200 hover:scale-105 sm:px-6 sm:py-3.5 sm:text-base md:px-9 md:py-4 md:text-lg"
            >
              <svg className="w-6 h-6 mr-2 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Explore Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}