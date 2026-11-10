"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const isPortrait = !!project.unoptimized;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-[80] bg-[#030611]/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        key="panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.shortTitle} project overview`}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.98 }}
        transition={{ duration: 0.34, ease: [0.32, 0.72, 0, 1] }}
        style={{ maxWidth: "78rem" }}
        className="fixed inset-x-0 bottom-0 z-[90] max-h-[92dvh] w-full overflow-y-auto rounded-t-[1.75rem] border border-white/10 bg-[#080e20] text-white shadow-[0_-28px_90px_rgba(0,0,0,0.5)] md:inset-x-auto md:left-1/2 md:top-1/2 md:bottom-auto md:h-[min(78dvh,48rem)] md:max-h-[88dvh] md:w-[92vw] md:-translate-x-1/2 md:-translate-y-1/2 md:overflow-hidden md:rounded-[1.75rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#080e20]/70 text-white/80 backdrop-blur-md transition hover:border-white/30 hover:bg-[#111a31] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 sm:right-5 sm:top-5"
          aria-label="Close project overview"
        >
          <X size={18} strokeWidth={2} />
        </button>

        <div className="flex flex-col md:h-full md:flex-row">
          <div
            className={[
              "relative isolate h-[34dvh] min-h-56 max-h-[25rem] shrink-0 overflow-hidden md:h-auto md:max-h-none md:min-h-0 md:w-[61%]",
              isPortrait
                ? "bg-[#0a100d]"
                : project.imageFit === "contain"
                  ? "bg-[#f1f5f9]"
                  : "bg-[#0c1428]",
            ].join(" ")}
          >
            <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-28 -right-12 h-72 w-72 rounded-full bg-violet-500/15 blur-[100px]" />
            <Image
              src={project.image}
              alt={`${project.shortTitle} project preview`}
              fill
              unoptimized={project.unoptimized}
              sizes="(max-width: 768px) 100vw, 61vw"
              className={[
                "relative z-[1]",
                project.imageFit === "cover"
                  ? "object-cover"
                  : "object-contain p-3 sm:p-6 md:p-8",
                isPortrait ? "object-top" : "object-center",
              ].join(" ")}
              priority
            />
            <div className="absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-[#080e20]/35 to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 z-[3] inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#080e20]/70 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md sm:bottom-5 sm:left-5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
              {project.category ?? "Project"}
            </div>
          </div>

          <div className="relative flex min-h-0 flex-1 flex-col md:w-[39%] md:overflow-y-auto">
            <div className="flex-1 px-6 pb-7 pt-7 sm:px-8 sm:pt-9 md:px-9 md:pb-8 md:pt-12 lg:px-11">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300">
                Project overview
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.65rem]">
                {project.shortTitle}
              </h2>
              <div className="mt-5 h-px w-12 bg-gradient-to-r from-blue-400 to-violet-400" />
              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-[15px] sm:leading-7">
                {project.description}
              </p>
            </div>

            <div className="sticky bottom-0 border-t border-white/10 bg-[#080e20]/95 p-5 backdrop-blur-xl sm:flex sm:items-center sm:gap-3 sm:px-8 md:static md:px-9 md:pb-9 lg:px-11">
              {project.link ? (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#10182c] transition hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-[#080e20] sm:flex-1"
                >
                  {project.link.label}
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
              ) : (
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#10182c] transition hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-[#080e20] sm:flex-1"
                >
                  Discuss a similar project
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </Link>
              )}
              <button
                onClick={onClose}
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-slate-400 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
