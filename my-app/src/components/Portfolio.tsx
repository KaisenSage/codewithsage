"use client";

import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

// Cloudflare image links - UPDATED to R2 links as requested
const projects = [
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

// Background for the top/hero section only (Image 1)
const heroBgUrl =
  "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/christopher-gower-m_HRfLhgABo-unsplash.jpg";

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

      {/* HeroSection (background with bubble stat box overlay) */}
      <section
        className="relative flex flex-col items-center justify-center py-10 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Modern Bubble Container */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 md:p-12 shadow-2xl hover:shadow-3xl transition duration-300">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">
              Crafted with{" "}
              <span className="text-gray-800">Precision &amp; Passion</span>
            </h2>
            <p className="max-w-2xl text-center text-gray-600 drop-shadow-md">
              Explore our collection of successful projects that showcase our expertise in creating exceptional digital experiences across various industries and technologies.
            </p>
          </div>
        </div>

        {/* Bubble box group — centered and overlapping the bottom of the hero */}
        <div className="relative z-20 w-full max-w-5xl mt-8 -mb-8">
          <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-4">
            {/* Card 1 */}
            <div className="bg-white/95 rounded-2xl shadow-md px-10 py-6 flex flex-col items-center min-w-[220px]">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-600">50+</div>
              <div className="mt-2 text-gray-700 font-medium">Projects Completed</div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/95 rounded-2xl shadow-md px-10 py-6 flex flex-col items-center min-w-[220px]">
              <div className="text-3xl md:text-4xl font-extrabold text-purple-600">30+</div>
              <div className="mt-2 text-gray-700 font-medium">Happy Clients</div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/95 rounded-2xl shadow-md px-10 py-6 flex flex-col items-center min-w-[220px]">
              <div className="text-3xl md:text-4xl font-extrabold text-pink-600">100%</div>
              <div className="mt-2 text-gray-700 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                      bg-blue-600 text-white shadow hover:bg-blue-700 transition-all
                      focus:outline-none focus:ring-2 focus:ring-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-xs" />
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