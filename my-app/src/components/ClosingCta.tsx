import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ClosingCta() {
  return (
    <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Start a conversation
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Have a problem worth solving?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Tell us what you are working toward. We can explore the requirements
            and discuss a practical next step together.
          </p>
        </div>
        <Link
          href="/get-started"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Start a project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
