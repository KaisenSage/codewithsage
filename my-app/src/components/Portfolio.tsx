"use client";

import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image"; // Added import

// Cloudflare image links - UPDATED to R2 links as requested
const projects = [
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
    link: { url: "/projects/mealplan", label: "View Project" },
  },
  {
    title: "VirtualR - VR App Development Tools",
    description:
      "Built scalable backend services with Node.js to support project saving, loading, and collaboration.",
    stack: ["React", "TypeScript", "Node.js", "Three.js"],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/appshunter-io-gh3ZYeUZyYU-unsplash.jpg",
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fafd] via-[#eceafd] to-[#e0d7fa]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 pt-8 pb-2 bg-transparent">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium bg-[#e3eeff] shadow text-[#295be7] text-base hover:shadow-md transition"
          style={{ fontWeight: 500 }}
        >
          <FaArrowLeft className="text-lg text-[#295be7]" />
          <span className="leading-tight text-sm">Back to Home</span>
        </Link>
        {/* Portfolio Bubble */}
        <div className="flex-1 flex justify-center">
          <span className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold shadow text-xl select-none">
            Our Portfolio
          </span>
        </div>
        <div className="w-32" /> {/* spacer for symmetry */}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center py-10 md:py-20 px-4">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#161a2e] via-[#7557fa] to-[#2d3bcf] bg-clip-text text-transparent transition-all duration-700 ease-in-out">
          Crafted with{" "}
          <span className="bg-gradient-to-br from-[#7557fa] to-[#2d3bcf] bg-clip-text text-transparent transition-colors duration-700 ease-in-out">
            Precision &amp; Passion
          </span>
        </h2>
        <p className="max-w-2xl text-center text-lg md:text-xl text-gray-600 mb-10">
          Explore our collection of successful projects that showcase our expertise in creating exceptional digital experiences across various industries and technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-blue-600 transition-all duration-500">50+</span>
            <span className="text-gray-500 text-lg md:text-base font-medium">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-purple-600 transition-all duration-500">30+</span>
            <span className="text-gray-500 text-lg md:text-base font-medium">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-blue-500 transition-all duration-500">100%</span>
            <span className="text-gray-500 text-lg md:text-base font-medium">Client Satisfaction</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center mb-12">
        </div>
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
                {/* Only show the button for the AI MealPlan App */}
                {idx === 0 && (
                  <Link
                    href={project.link.url}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                      bg-blue-600 text-white shadow hover:bg-blue-700 transition-all
                      focus:outline-none focus:ring-2 focus:ring-blue-500"
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