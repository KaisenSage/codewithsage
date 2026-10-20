"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";

/* Indices of the three projects to feature on the homepage */
const FEATURED = [0, 1, 2] as const;
const featuredProjects = FEATURED.map((i) => projects[i]);
const MORE_PROJECTS = ["Tandem Finance", "Affadot Studios", "Nexus"];

export default function FeaturedWorks() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const openProject = useCallback((p: Project) => setActiveProject(p), []);
  const closeProject = useCallback(() => setActiveProject(null), []);

  return (
    <section id="work" className="relative overflow-hidden bg-[#080e20] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-start"
        >
          <Link
            href="/portfolio"
            className="group inline-flex self-start shrink-0 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-2.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition hover:border-white/24 hover:bg-white/10 hover:text-white"
          >
            View all projects
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* ── Cards grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <FeaturedCard
              key={project.title}
              project={project}
              index={idx}
              onOpen={openProject}
            />
          ))}
        </div>

        {/* ── Bottom CTA strip ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_28px_rgba(99,102,241,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(99,102,241,0.45)]"
          >
            Start your project
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeProject} />
      )}
    </section>
  );
}

export function MoreSelectedWorks() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const openProject = useCallback((p: Project) => setActiveProject(p), []);
  const closeProject = useCallback(() => setActiveProject(null), []);
  const moreProjects = projects.filter((project) =>
    MORE_PROJECTS.includes(project.shortTitle),
  );

  return (
    <section className="relative overflow-hidden bg-[#080e20] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute -right-24 top-0 h-[360px] w-[360px] rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            More ideas, built into real products.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project, idx) => (
            <FeaturedCard
              key={project.title}
              project={project}
              index={idx}
              onOpen={openProject}
            />
          ))}
        </div>
      </div>
      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeProject} />
      )}
    </section>
  );
}

/* ─── Individual project card ──────────────────────────────────────────── */
function FeaturedCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const isPortrait = !!project.unoptimized;

  return (
    <motion.button
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onClick={() => onOpen(project)}
      className="project-card-light group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/16 hover:bg-white/8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Image */}
      <div
        className={[
          "relative w-full shrink-0 overflow-hidden",
          isPortrait
            ? "flex h-64 items-start justify-center bg-[#0a100d] px-6 pt-5"
            : "h-52",
        ].join(" ")}
      >
        {isPortrait ? (
          <Image
            src={project.image}
            alt={project.title}
            width={project.imageWidth ?? 600}
            height={project.imageHeight ?? 800}
            unoptimized={project.unoptimized}
            className="h-full w-auto max-w-[180px] object-contain object-top drop-shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}

      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {project.category && (
          <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-blue-100">
            {project.category}
          </span>
        )}
        <h3 className="text-base font-bold leading-snug text-white">
          {project.shortTitle}
        </h3>
      </div>
    </motion.button>
  );
}
