"use client";
import { useUser } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import {
  User,
  Palette,
  Code,
  Server,
  Smartphone,
  Search,
  Zap,
  RefreshCw,
  LifeBuoy,
} from "lucide-react";

type FeatureItem = {
  label: string;
  description: string;
  Icon: typeof Code;
  accent: string;
  softBg: string;
  mobilePosition: string;
  position: string;
  rotate: number;
  pointerX: number;
  pointerY: number;
  floatX: [number, number, number];
  floatY: [number, number, number];
  floatScale: [number, number, number];
  duration: number;
  delay: number;
};

type FeatureChipProps = {
  feature: FeatureItem;
  boardRef: React.RefObject<HTMLDivElement | null>;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  reduceMotion: boolean | null;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7 },
  },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

function FeatureChip({ feature, boardRef, pointerX, pointerY, reduceMotion }: FeatureChipProps) {
  const shiftX = useTransform(pointerX, [-1, 1], [feature.pointerX, -feature.pointerX]);
  const shiftY = useTransform(pointerY, [-1, 1], [feature.pointerY, -feature.pointerY]);
  const Icon = feature.Icon;

  return (
    <motion.button
      type="button"
      className={`relative md:absolute ${feature.mobilePosition} md:${feature.position} cursor-grab active:cursor-grabbing`}
      initial={{ opacity: 0, y: 24, rotate: feature.rotate - 6, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, rotate: feature.rotate, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      whileHover={{ y: -8, scale: 1.04 }}
      whileTap={{ scale: 1.03 }}
      drag
      dragConstraints={boardRef}
      dragElastic={0.16}
      dragMomentum={false}
      dragSnapToOrigin
      style={{ x: shiftX, y: shiftY }}
    >
      <motion.span
        animate={
          reduceMotion
            ? undefined
            : {
                x: feature.floatX,
                y: feature.floatY,
                scale: feature.floatScale,
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: feature.duration,
                delay: feature.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className={`flex w-full items-center gap-3 rounded-[1.4rem] border border-white/70 px-4 py-3 text-left text-slate-800 shadow-[0_18px_40px_rgba(76,93,122,0.14)] backdrop-blur-xl md:w-auto md:px-5 md:py-4 ${feature.softBg}`}
        style={{ rotate: `${feature.rotate}deg` }}
      >
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} text-white shadow-[0_10px_24px_rgba(99,102,241,0.22)]`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className="max-w-[180px] text-sm font-semibold leading-5 md:max-w-[210px] md:text-base">
          {feature.label}
        </span>
      </motion.span>
    </motion.button>
  );
}

export default function GetStartedPage() {
  const { isSignedIn, user } = useUser();
  const boardRef = useRef<HTMLDivElement>(null);
  const rawPointerX = useMotionValue(0);
  const rawPointerY = useMotionValue(0);
  const pointerX = useSpring(rawPointerX, { stiffness: 90, damping: 18, mass: 0.45 });
  const pointerY = useSpring(rawPointerY, { stiffness: 90, damping: 18, mass: 0.45 });
  const reduceMotion = useReducedMotion();

  // Feature list with dedicated icons (lucide-react)
  const features: FeatureItem[] = [
    {
      label: "Custom Web Development",
      description: "Bespoke websites and product experiences designed around your brand, workflow, and conversion goals.",
      Icon: Code,
      accent: "from-[#7557fa] to-[#5a6ffb]",
      softBg: "bg-white/78",
      mobilePosition: "",
      position: "left-[4%] top-[10%] md:left-[8%] md:top-[10%]",
      rotate: -8,
      pointerX: -18,
      pointerY: -12,
      floatX: [0, -6, 0],
      floatY: [0, -14, 0],
      floatScale: [1, 1.03, 1],
      duration: 5.6,
      delay: 0,
    },
    {
      label: "Responsive Design",
      description: "Interfaces that stay polished and intuitive across phones, tablets, and desktops without compromise.",
      Icon: Smartphone,
      accent: "from-[#3871e0] to-[#60a5fa]",
      softBg: "bg-[#f5f8ff]/90",
      mobilePosition: "",
      position: "right-[6%] top-[12%] md:right-[10%] md:top-[8%]",
      rotate: 9,
      pointerX: 18,
      pointerY: -10,
      floatX: [0, 8, 0],
      floatY: [0, -10, 0],
      floatScale: [1, 1.04, 1],
      duration: 6.2,
      delay: 0.7,
    },
    {
      label: "SEO Optimization",
      description: "Built-in technical SEO foundations to help your pages load fast, index well, and get discovered earlier.",
      Icon: Search,
      accent: "from-[#22c55e] to-[#16a34a]",
      softBg: "bg-[#f7fff8]/92",
      mobilePosition: "",
      position: "left-[2%] top-[44%] md:left-[10%] md:top-[38%]",
      rotate: -4,
      pointerX: -14,
      pointerY: 8,
      floatX: [0, -8, 0],
      floatY: [0, 10, 0],
      floatScale: [1, 1.02, 1],
      duration: 5,
      delay: 0.3,
    },
    {
      label: "Fast Loading Times",
      description: "Performance-focused builds tuned for speed, smooth interaction, and stronger user retention.",
      Icon: Zap,
      accent: "from-[#f59e0b] to-[#f97316]",
      softBg: "bg-[#fff9ef]/92",
      mobilePosition: "",
      position: "right-[2%] top-[42%] md:right-[8%] md:top-[34%]",
      rotate: -12,
      pointerX: 16,
      pointerY: 10,
      floatX: [0, 10, 0],
      floatY: [0, 12, 0],
      floatScale: [1, 1.03, 1],
      duration: 6.4,
      delay: 1.1,
    },
    {
      label: "Mobile-First Approach",
      description: "Layouts and flows designed from the smallest screen up so your product feels native everywhere.",
      Icon: Smartphone,
      accent: "from-[#ec4899] to-[#f472b6]",
      softBg: "bg-[#fff5fb]/92",
      mobilePosition: "",
      position: "left-[18%] bottom-[20%] md:left-[24%] md:bottom-[14%]",
      rotate: -16,
      pointerX: -10,
      pointerY: 16,
      floatX: [0, -10, 0],
      floatY: [0, 14, 0],
      floatScale: [1, 1.03, 1],
      duration: 5.8,
      delay: 1.5,
    },
    {
      label: "Modern Technologies",
      description: "A contemporary stack chosen for maintainability, scale, and smooth developer handoff over time.",
      Icon: Server,
      accent: "from-[#0f172a] to-[#334155]",
      softBg: "bg-[#f8fafc]/92",
      mobilePosition: "",
      position: "left-1/2 top-[24%] hidden -translate-x-1/2 md:flex",
      rotate: 6,
      pointerX: 0,
      pointerY: -18,
      floatX: [0, 0, 0],
      floatY: [0, -16, 0],
      floatScale: [1, 1.05, 1],
      duration: 6.8,
      delay: 0.4,
    },
    {
      label: "24/7 Support",
      description: "Clear communication and reliable support so launches, updates, and fixes never feel blocked.",
      Icon: LifeBuoy,
      accent: "from-[#06b6d4] to-[#3b82f6]",
      softBg: "bg-[#f2fbff]/92",
      mobilePosition: "",
      position: "left-[10%] bottom-[4%] md:left-[8%] md:bottom-[8%]",
      rotate: 4,
      pointerX: -12,
      pointerY: 12,
      floatX: [0, -7, 0],
      floatY: [0, 8, 0],
      floatScale: [1, 1.02, 1],
      duration: 5.3,
      delay: 0.9,
    },
    {
      label: "Regular Updates",
      description: "Ongoing improvements that keep your website or app current, stable, and aligned with growth goals.",
      Icon: RefreshCw,
      accent: "from-[#8b5cf6] to-[#6366f1]",
      softBg: "bg-[#f6f4ff]/92",
      mobilePosition: "",
      position: "right-[12%] bottom-[6%] md:right-[16%] md:bottom-[12%]",
      rotate: 12,
      pointerX: 10,
      pointerY: 14,
      floatX: [0, 9, 0],
      floatY: [0, 10, 0],
      floatScale: [1, 1.03, 1],
      duration: 6,
      delay: 1.3,
    },
  ];

  const handleBoardMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const nextY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    rawPointerX.set(nextX);
    rawPointerY.set(nextY);
  };

  const handleBoardLeave = () => {
    rawPointerX.set(0);
    rawPointerY.set(0);
  };

  // ✅ Signed-In Welcome Experience (no cloudflare background; original gradient)
  if (isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7fafd] via-[#eceafd] to-[#e0d7fa] px-6">
        <motion.div
          className="bg-white shadow-lg rounded-3xl p-10 max-w-2xl w-full flex flex-col items-center text-center hover:shadow-2xl transition"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {/* Welcome Text */}
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#7557fa] to-[#3871e0] bg-clip-text text-transparent animate-fadeIn">
            Welcome back, {user?.firstName || "User"}!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            You are already signed in. Let’s continue building something amazing.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/portfolio">
              <button className="bg-gradient-to-r from-[#7557fa] to-[#3871e0] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all">
                Explore Portfolio
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white border border-[#7557fa] text-[#7557fa] px-6 py-3 rounded-xl font-semibold hover:bg-[#f7fafd] hover:scale-105 hover:shadow-lg transition-all">
                Start a Project
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ✅ Default Get Started Page (no background image)
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7fafd] via-[#eceafd] to-[#e0d7fa]"
    >
      {/* Back to Home Button */}
     

      {/* Ready to Get Started section */}
      <motion.section
        className="relative w-full max-w-6xl px-6 pt-16 md:pt-24 lg:pt-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="pointer-events-none absolute inset-x-10 top-10 h-52 rounded-full bg-[radial-gradient(circle,rgba(117,87,250,0.12),transparent_62%)] blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.78)_0%,rgba(246,247,255,0.82)_46%,rgba(240,244,255,0.92)_100%)] px-6 py-8 shadow-[0_24px_80px_rgba(125,163,214,0.14)] backdrop-blur-sm md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute -left-10 top-8 h-40 w-40 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-fuchsia-200/28 blur-3xl" />

          <motion.div
            className="relative flex flex-col items-center text-center"
            variants={staggerGroup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div className="inline-flex items-center rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-sm" variants={fadeUp}>
              Get Started
            </motion.div>
            <motion.h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] text-slate-900 md:text-6xl" variants={fadeUp}>
              A clean three-step path from idea to launch.
            </motion.h1>
            <motion.p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl" variants={fadeUp}>
              Take the first step toward a powerful online presence with a guided process designed to move from planning to execution without friction.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-5 xl:gap-6"
            variants={staggerGroup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            <div className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#c7d2fe] to-transparent md:block" />

            <motion.div className="group relative flex min-h-[320px] flex-col rounded-[1.75rem] border border-white/85 bg-white/85 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(99,102,241,0.16)] md:p-7" variants={fadeUp}>
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[#7557fa] px-3 text-sm font-bold text-white shadow-md">
                  1
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F2FF] text-[#7557fa]">
                  <User className="h-6 w-6" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-slate-900">Create Your Account</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Start by creating your free account to unlock access to tailored digital solutions for your brand.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <SignUpButton>
                  <button className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#7557fa] to-[#5a6ffb] px-5 py-3 font-semibold text-white shadow-lg shadow-[#7557fa]/20 transition hover:brightness-105">
                    Sign Up Now
                  </button>
                </SignUpButton>
              </div>
            </motion.div>

            <motion.div className="group relative flex min-h-[320px] flex-col rounded-[1.75rem] border border-white/85 bg-white/85 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(99,102,241,0.16)] md:p-7" variants={fadeUp}>
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[#7557fa] px-3 text-sm font-bold text-white shadow-md">
                  2
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F2FF] text-[#7557fa]">
                  <Palette className="h-6 w-6" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-slate-900">Choose Your Design</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Browse our portfolio and select a design direction that matches your goals, audience, and brand personality.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <Link href="/portfolio">
                  <button className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#7557fa] to-[#5a6ffb] px-5 py-3 font-semibold text-white shadow-lg shadow-[#7557fa]/20 transition hover:brightness-105">
                    View Our Work
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div className="group relative flex min-h-[320px] flex-col rounded-[1.75rem] border border-white/85 bg-white/85 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(99,102,241,0.16)] md:p-7" variants={fadeUp}>
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[#7557fa] px-3 text-sm font-bold text-white shadow-md">
                  3
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F2FF] text-[#7557fa]">
                  <Code className="h-6 w-6" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-slate-900">Customize &amp; Build</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Collaborate with our team to refine the experience, personalize the details, and bring your vision to life.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <Link href="/contact">
                  <button className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#7557fa] to-[#5a6ffb] px-5 py-3 font-semibold text-white shadow-lg shadow-[#7557fa]/20 transition hover:brightness-105">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* What We Offer Section */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-0 mt-16 mb-10">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,#f7fafd_0%,#eef3ff_55%,#f8f2ff_100%)] p-8 shadow-[0_24px_80px_rgba(125,163,214,0.14)] md:p-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute left-0 top-8 h-48 w-48 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-12 h-56 w-56 rounded-full bg-fuchsia-200/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-sm">
                What We Offer
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-[-0.04em] text-slate-900">
                Interactive capabilities built to make your launch feel sharper.
              </h2>
            </motion.div>

            <motion.div
              ref={boardRef}
              className="relative flex min-h-[520px] flex-col gap-4 overflow-hidden rounded-[2rem] border border-white/80 bg-white/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm md:block md:min-h-[660px] md:p-0"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              onPointerMove={handleBoardMove}
              onPointerLeave={handleBoardLeave}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5),transparent_58%)]" />
              <div className="pointer-events-none absolute left-[16%] top-[20%] h-40 w-40 rounded-full bg-sky-200/35 blur-3xl" />
              <div className="pointer-events-none absolute right-[8%] top-[30%] h-44 w-44 rounded-full bg-violet-200/30 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[8%] left-[38%] h-40 w-40 rounded-full bg-fuchsia-200/28 blur-3xl" />

              {features.map((feature) => (
                <FeatureChip
                  key={feature.label}
                  feature={feature}
                  boardRef={boardRef}
                  pointerX={pointerX}
                  pointerY={pointerY}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#7557fa] to-[#3871e0] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#3871e0] hover:to-[#7557fa] hover:scale-105 hover:shadow-lg transition-all flex items-center gap-1">
                Start Your Project <span className="ml-1"></span>
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="bg-white border border-[#7557fa] text-[#7557fa] px-6 py-3 rounded-xl font-semibold hover:bg-[#f7fafd] hover:scale-105 hover:shadow-lg transition-all flex items-center gap-1">
                <svg width={16} height={16} fill="none" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7L8 5z" fill="#7557fa" />
                </svg>
                See Examples
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="w-full mt-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div
          className="relative overflow-hidden w-full bg-[linear-gradient(135deg,#183b8c_0%,#4a63d4_36%,#7557fa_68%,#8b5cf6_100%)] px-4 py-16 flex flex-col items-center justify-center"
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[8%] top-10 h-40 w-40 rounded-full bg-white/12 blur-3xl" />
            <div className="absolute right-[10%] top-6 h-48 w-48 rounded-full bg-cyan-300/18 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-fuchsia-300/16 blur-3xl" />
          </div>

          <motion.div
            className="relative mx-auto flex w-full max-w-5xl flex-col items-center rounded-[2rem] border border-white/14 bg-white/10 px-6 py-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-md md:px-10 md:py-12"
            variants={fadeUp}
          >
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/72 shadow-sm">
              Let&apos;s Build It Right
            </div>
            <motion.h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] text-white md:text-6xl" variants={fadeUp}>
              Ready to turn the next version of your digital presence into a real growth asset?
            </motion.h2>
            <motion.p className="mt-5 max-w-3xl text-lg leading-8 text-white/86 md:text-xl" variants={fadeUp}>
              Whether you need a polished website, a product refresh, or a full build from scratch, we can help you move from concept to a sharper launch with less guesswork.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-4 justify-center" variants={fadeUp}>
            <Link href="/get-started">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-[#7557fa] shadow-[0_16px_30px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-white/95 md:px-8 md:text-lg">
                Get Started Today <span className="ml-1 text-xl leading-none">+</span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/8 px-6 py-3.5 text-base font-bold text-white shadow-[0_12px_28px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:bg-white/14 md:px-8 md:text-lg">
                Talk to an Expert
              </button>
            </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}