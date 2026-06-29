"use client";

import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
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
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-[80] bg-black/65 backdrop-blur-[3px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        key="panel"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ opacity: 0, y: 56, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.34, ease: [0.32, 0.72, 0, 1] }}
        style={{ maxWidth: "72rem" }}
        className={[
          "fixed z-[90] w-full bg-white",
          "shadow-[0_-28px_80px_rgba(0,0,0,0.32)]",
          "inset-x-0 bottom-0 max-h-[88dvh] overflow-y-auto",
          "rounded-t-[2rem]",
          "md:inset-x-auto md:left-1/2 md:-translate-x-1/2",
          "md:top-[6vh] md:bottom-[6vh] md:max-h-none",
          "md:w-[92vw] md:overflow-hidden md:rounded-[2rem]",
          "lg:top-[5vh] lg:bottom-[5vh] lg:w-[88vw]",
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:right-5 sm:top-5"
          aria-label="Close preview"
        >
          <X size={17} strokeWidth={2.5} />
        </button>

        <div className="flex flex-col lg:flex-row lg:h-full">
          {/* Image panel */}
          <div
            className={[
              "relative shrink-0 overflow-hidden",
              "h-44 w-full",
              "sm:h-52",
              "md:h-64",
              "lg:h-full lg:w-[52%]",
              "rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none",
              isPortrait ? "bg-[#0a100d]" : "bg-[#f1f5f9]",
            ].join(" ")}
          >
            <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 lg:p-7">
              <Image
                src={project.image}
                alt={project.title}
                fill={false}
                width={project.imageWidth ?? 1200}
                height={project.imageHeight ?? 800}
                unoptimized={project.unoptimized}
                sizes="(max-width:1024px) 100vw, 52vw"
                className={[
                  "h-auto max-h-full w-auto max-w-full rounded-lg",
                  isPortrait
                    ? "drop-shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
                    : "shadow-[0_6px_36px_rgba(15,23,42,0.16)]",
                ].join(" ")}
                priority
              />
            </div>
          </div>

          {/* Details panel */}
          <div className="flex flex-1 flex-col lg:overflow-y-auto">
            <div className="flex flex-col gap-4 p-5 sm:p-6 lg:flex-1 lg:p-8">
              <div>
                <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Project Preview
                </span>
                <h2 className="mt-2.5 text-xl font-black leading-snug tracking-tight text-[#161a2e] sm:text-2xl lg:text-3xl">
                  {project.title}
                </h2>
              </div>

              <p className="text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gradient-to-r from-blue-50 to-violet-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="sticky bottom-0 flex flex-col gap-2.5 border-t border-slate-100 bg-white p-4 sm:flex-row sm:p-5 lg:border-0 lg:px-8 lg:pb-8 lg:pt-2">
              {project.link ? (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-[1rem] bg-[#2d3bcf] px-5 py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(45,59,207,0.3)] transition hover:-translate-y-0.5 hover:bg-[#2330b6]"
                >
                  <ExternalLink size={14} strokeWidth={2.5} />
                  {project.link.label}
                </a>
              ) : (
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-[1rem] bg-[#2d3bcf] px-5 py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(45,59,207,0.3)] transition hover:-translate-y-0.5 hover:bg-[#2330b6]"
                >
                  Enquire About This Project
                </Link>
              )}
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-[1rem] border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 sm:flex-none"
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
