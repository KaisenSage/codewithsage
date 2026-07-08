"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";

const fadeUp = {
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7 },
};

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

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const openProject = useCallback((p: Project) => setActiveProject(p), []);
  const closeProject = useCallback(() => setActiveProject(null), []);

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

      {/* Projects Grid */}
      <section id="portfolio-grid" className="max-w-6xl mx-auto px-4 py-10 pt-6 sm:pt-8">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-center text-4xl font-black tracking-tight text-[#161a2e] sm:text-5xl">
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
              onClick={() => openProject(project)}
              className="group cursor-pointer bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(45,59,207,0.18)]"
            >
              {/* Image with hover overlay */}
              <div
                className={`relative ${
                  project.imageContainerClass
                    ? "flex h-80 sm:h-[22rem] w-full items-start justify-center overflow-hidden bg-[#0a100d] px-3 pt-3 sm:px-4 sm:pt-4"
                    : "relative h-56 w-full overflow-hidden"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.imageWidth ?? 600}
                  height={project.imageHeight ?? 224}
                  unoptimized={project.unoptimized}
                  className={
                    project.imageClass ??
                    "h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  }
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#161a2e]/0 transition-all duration-300 group-hover:bg-[#161a2e]/50">
                  <span className="flex scale-75 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#161a2e] opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xl font-bold text-gray-900 mb-2">{project.title}</div>
                <p className="text-gray-500 mb-4 flex-1 text-sm leading-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-medium">
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>
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

      {/* Project Preview Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeProject} />
      )}
    </div>
  );
}