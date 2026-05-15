"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Gem } from "lucide-react";

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
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20May%2012%2C%202026%20at%2007_21_42%20AM.png",
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
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_24px_80px_rgba(117,87,250,0.12)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Selected Work
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
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-gradient-to-r from-white to-violet-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-[0_12px_34px_rgba(124,58,237,0.14)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-600 shadow-sm">
                    <Gem className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  Case Study
                </span>
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
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="portfolio-grid" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={224}
                className="w-full h-56 object-cover"
              />
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
                    className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-slate-200 bg-slate-950 px-2 py-1.5 pr-4 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-950 hover:bg-blue-600 hover:shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-950 transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-700">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                    {project.link.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies We Master Section */}
      <section className="w-full bg-[#f7fafd] py-12 px-4 mt-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-3 mt-2 text-[#161a2e]">Technologies We Master</h2>
        <p className="text-center text-gray-500 mb-8 text-lg">
          We leverage cutting-edge technologies to deliver exceptional digital solutions
        </p>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {techs.map((tech) => (
            <div
              key={tech}
              className="bg-white shadow-md px-8 py-4 rounded-xl text-lg font-semibold text-[#161a2e] min-w-[160px] text-center"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Start Your Project Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#2d3bcf] via-[#7557fa] to-[#b16cea] flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg md:text-xl text-center text-white/90 mb-8 max-w-2xl">
          Let&apos;s transform your vision into a stunning digital reality that exceeds expectations
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link
            href="/#pricing"
            className="bg-white text-[#7557fa] px-8 py-3 rounded-xl font-bold shadow hover:bg-gray-100 text-base transition"
          >
            View Pricing Plans
          </Link>
          <Link
            href="/contact"
            className="bg-white text-[#2d3bcf] px-8 py-3 rounded-xl font-bold shadow hover:bg-gray-100 text-base transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}