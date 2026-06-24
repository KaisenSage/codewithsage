"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7 },
};

// Cloudflare image links - UPDATED to R2 links as requested
const projects = [
  {
    title: "Triple A African Foods - Food Delivery App",
    description:
      "A modern food delivery app concept focused on authentic Nigerian cuisine, designed with a clean dark UI and intuitive user experience. The app streamlines meal discovery, ordering, and real-time tracking through a visually engaging mobile flow.",
    stack: [
      "Mobile App ",
      "Android",
      "iOS",
      "React Native",
      "Flutter",
      "Order Tracking",
      "Dark UI",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20Jun%2024%2C%202026%2C%2008_52_37%20AM.png",
    link: null,
  },
  {
    title: "toréa Fashion Commerce Platform",
    description:
      "A modern Nigeria-first fashion commerce platform built with Next.js, Clerk, Prisma, and Paystack. Seamless shopping, beautiful UI, and robust backend for a premium digital retail experience.",
    stack: [
      "Next.js",
      "TypeScript",
      "Clerk Auth",
      "Prisma ORM",
      "Paystack Integration",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    image:
      "https://pub-bd618a9723f54128a9dbd24698f83fba.r2.dev/Screenshot%202026-03-23%20at%2014.12.40.png",
    link: {
      url: "https://www.toréa.com",
      label: "View Project",
    },
  },
  {
    title: "Tillr Commerce Engine",
    description:
      "A connected commerce platform for cafés, restaurants, and retail stores. Tillr unifies menus, catalogs, orders, payments, branch rules, real-time operations, and team access in one dashboard built for fast-moving businesses.",
    stack: [
      "Commerce Platform",
      "Catalog Management",
      "Multi-branch Operations",
      "QR Ordering",
      "Payments",
      "Real-time Orders",
      "Role-based Access",
    ],
    image: "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/IMG_5760.PNG",
    unoptimized: true,
    imageWidth: 1122,
    imageHeight: 1402,
    imageContainerClass:
      "relative flex h-80 sm:h-[22rem] w-full items-start justify-center overflow-hidden bg-[#0a100d] px-3 pt-3 sm:px-4 sm:pt-4",
    imageClass: "h-full w-auto max-w-[min(100%,300px)] object-contain object-top drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]",
    link: null,
  },
  {
    title: "Cinematography — Client Portfolio",
    description:
      "A dedicated cinematography & showreel portfolio website showcasing high-resolution stills and motion previews for a professional cinematographer. Clean, immersive layout optimized for visuals and storytelling.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lightbox / Gallery",
      "Vimeo / YouTube embeds",
      "Accessibility-first components",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/Screenshot%202025-11-20%20at%2012.55.32.png",
    link: {
      url: "https://ay-faisal.vercel.app/",
      label: "View Project",
    },
  },
  {
    title: "AI Powered MealPlan App",
    description:
      "Built a full-stack AI-powered web application that generates personalized weekly meal plans based on user preferences and dietary goals.",
    stack: [
      "Next.js",
      "TypeScript",
      "Clerk Auth",
      "PostgreSQL",
      "Prisma ORM",
      "React Query",
      "TailwindCSS",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/Screenshot%202025-07-07%20at%2020.07.18.png",
    link: { url: "https://mealplan-zeta.vercel.app/", label: "View Project" },
  },
  {
    title: "VirtualR - VR App Development Tools",
    description:
      "Built scalable backend services with Node.js to support project saving, loading, and collaboration.",
    stack: ["React", "TypeScript", "Node.js", "Three.js"],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/appshunter-io-gh3ZYeUZyYU-unsplash.jpg",
    link: {
      url: "https://virtual-r-seven.vercel.app/",
      label: "View Project",
    },
  },
  {
    title: "Nexus Clothing Brand",
    description:
      "Modern E-commerce platform for Nexus clothing brand featuring sleek product showcases, seamless shopping experience, and responsive design optimized for fashion retail.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "E-commerce Integration",
    ],
    image:
      "https://pub-b672d044d71842aeb4efd6d464298367.r2.dev/Screenshot%202026-01-01%20at%2019.10.06.png",
    link: null,
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/roberto-cortese-ejhjSZKTeeg-unsplash.jpg",
    link: null,
  },
  {
    title: "AirBnB App",
    description:
      "Full-stack AirBnB platform to practice scalable web development using the MVC architecture.",
    stack: [
      "Python",
      "Flask",
      "MySQL",
      "HTML/CSS",
      "JavaScript",
      "jQuery",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/oberon-copeland-veryinformed-com-zq0K6AVDtu8-unsplash.jpg",
    link: null,
  },
  {
    title: "Landing Pages",
    description:
     "High-converting, fast-loading landing pages built with Next.js and TypeScript. Optimized for SEO and Core Web Vitals, styled with Tailwind CSS, and enhanced with lightweight animations and serverless lead-capture endpoints.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion (or CSS animations)",
      "SEO tooling (next-seo, sitemap generation)",
      "Analytics (GA4, Plausible or Fathom)",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/team-nocoloco-IMuwMQV92zA-unsplash.jpg",
    link: null,
  },
  
];

const techs = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Next.js",
  "Vue.js",
  "GraphQL",
];

const techAccents = [
  "from-sky-100 via-white to-blue-100",
  "from-violet-100 via-white to-fuchsia-100",
  "from-cyan-100 via-white to-blue-100",
  "from-amber-100 via-white to-orange-100",
  "from-indigo-100 via-white to-sky-100",
  "from-emerald-100 via-white to-teal-100",
  "from-slate-100 via-white to-zinc-100",
  "from-orange-100 via-white to-rose-100",
  "from-fuchsia-100 via-white to-violet-100",
  "from-blue-100 via-white to-cyan-100",
  "from-emerald-100 via-white to-lime-100",
  "from-pink-100 via-white to-violet-100",
];

const featuredProject = projects[1];

const portfolioCategories = [
  "E-commerce",
  "Mobile Apps",
  "Web Apps",
  "Landing Pages",
  "Brand Sites",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fafd] via-[#eceafd] to-[#e0d7fa]">
      {/* Navbar */}
      <nav className="relative px-4 sm:px-6 pt-4 sm:pt-6 pb-2 bg-transparent">
        {/* Centered Portfolio Bubble */}
        <div className="flex justify-center">
          <span className="inline-block px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold shadow text-sm sm:text-xl select-none">
            Our Portfolio
          </span>
        </div>
      </nav>

      {/* HeroSection */}
      <section className="relative px-4 pb-8 pt-6 sm:px-6 sm:pb-10 lg:px-8">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={{ once: true, amount: 0.2 }}
          transition={fadeUp.transition}
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_24px_80px_rgba(117,87,250,0.12)] backdrop-blur-md sm:p-8 lg:p-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Featured Builds
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-[#161a2e] sm:text-5xl lg:text-6xl">
                Digital products designed to look sharp, move fast, and drive results.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                From e-commerce platforms to mobile apps and conversion-focused websites, this work reflects a balance of product thinking, clean execution, and performance-first engineering.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {portfolioCategories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {featuredProject.link && (
                  <Link
                    href={featuredProject.link.url}
                    className="inline-flex items-center justify-center rounded-full bg-[#2d3bcf] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-[#2330b6]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Featured Project
                  </Link>
                )}
                <a
                  href="#portfolio-grid"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
                >
                  Browse All Projects
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Featured Project
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-[#161a2e] sm:text-3xl">
                    {featuredProject.title}
                  </h2>
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {featuredProject.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  width={1200}
                  height={760}
                  priority
                  unoptimized={featuredProject.unoptimized}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section id="portfolio-grid" className="max-w-6xl mx-auto px-4 py-10">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="flex flex-col items-center mb-12"
        >
          <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 shadow-sm">
            Selected Projects
          </span>
          <h2 className="mt-5 text-center text-4xl font-black tracking-tight text-[#161a2e] sm:text-5xl">
            Work built to perform beyond the mockup.
          </h2>
          <p className="mt-4 max-w-2xl text-center text-base leading-7 text-slate-600 sm:text-lg">
            A mix of product builds, brand experiences, and full-stack systems designed with clarity, speed, and business impact in mind.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={
                  project.imageContainerClass ??
                  "relative h-56 w-full overflow-hidden"
                }
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.imageWidth ?? 600}
                  height={project.imageHeight ?? 224}
                  unoptimized={project.unoptimized}
                  className={
                    project.imageClass ?? "h-56 w-full object-cover"
                  }
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xl font-bold text-gray-900 mb-2">{project.title}</div>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Show link button if available */}
                {project.link && (
                  <Link
                    href={project.link.url}
                    className="group relative inline-flex w-fit items-center overflow-hidden rounded-[1.2rem] border border-slate-200/80 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_55%,#2563eb_100%)] px-2 py-2 pr-4 text-white shadow-[0_18px_36px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/80 hover:shadow-[0_22px_46px_rgba(59,130,246,0.28)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.02)_0%,rgba(96,165,250,0.12)_48%,rgba(168,85,247,0.18)_100%)] opacity-80" />
                    <span className="pointer-events-none absolute inset-y-0 left-[-22%] w-20 -skew-x-12 bg-white/20 opacity-0 blur-xl transition-all duration-500 group-hover:left-[112%] group-hover:opacity-100" />
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-[0.95rem] border border-white/25 bg-white/95 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-50 group-hover:text-blue-700">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.2} />
                    </span>
                    <span className="relative ml-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
                        <span>{project.link.label}</span>
                        <span className="h-px w-0 bg-white/80 transition-all duration-300 group-hover:w-5" />
                    </span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies We Master Section */}
      <section className="mt-12 px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.45),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(216,180,254,0.35),_transparent_24%),linear-gradient(145deg,rgba(255,255,255,0.88),rgba(243,247,255,0.95))] p-6 shadow-[0_24px_90px_rgba(117,87,250,0.12)] backdrop-blur-md sm:p-8 lg:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 shadow-sm">
              Built With Precision
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#161a2e] sm:text-5xl">
              Technologies We Master
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              We combine proven engineering tools and modern product frameworks to build fast, scalable, and polished digital experiences.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute inset-x-10 top-8 h-24 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-8 h-28 w-28 rounded-full bg-fuchsia-200/30 blur-3xl" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {techs.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 22, rotate: index % 2 === 0 ? -4 : 4, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: index * 0.05 }}
                  animate={{ y: [0, index % 2 === 0 ? -10 : -14, 0], rotate: [0, index % 3 === 0 ? 1.2 : -1.2, 0] }}
                  className="h-full"
                >
                  <motion.div
                    transition={{ duration: 4.8 + (index % 4) * 0.45, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
                    className={`group h-full rounded-[1.4rem] border border-white/80 bg-gradient-to-br ${techAccents[index % techAccents.length]} p-[1px] shadow-[0_18px_40px_rgba(64,82,120,0.12)]`}
                  >
                    <div className="flex h-full min-h-[96px] flex-col justify-center rounded-[1.32rem] bg-white/88 px-4 py-4 backdrop-blur-sm transition duration-300 group-hover:bg-white group-hover:shadow-[0_20px_46px_rgba(59,130,246,0.12)]">
                      <p className="text-xl font-black tracking-tight text-[#161a2e] sm:text-2xl">
                        {tech}
                      </p>
                      <div className="mt-3 h-1.5 w-14 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-400 opacity-80" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Ready to Start Your Project Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-white/25 bg-[linear-gradient(135deg,#2130b8_0%,#5b49e6_42%,#8c4ce5_100%)] px-6 py-12 shadow-[0_28px_90px_rgba(84,72,204,0.32)] sm:px-8 sm:py-14 lg:px-12"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-8 top-8 h-36 w-36 rounded-full bg-white/16 blur-3xl" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-fuchsia-200/20 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm">
              Let&apos;s Build
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Turn your idea into a polished digital product with strong design, clean engineering, and a build process focused on real business results.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#pricing"
                className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-bold text-[#4b43d2] shadow-[0_18px_40px_rgba(18,24,65,0.2)] transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                View Pricing Plans
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-white/28 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/16"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}