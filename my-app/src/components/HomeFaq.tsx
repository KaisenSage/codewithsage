const questions = [
  {
    question: "What does working with Codewithsage involve?",
    answer:
      "We start by understanding your goals, users, and constraints. From there, we agree on a useful direction, design and build the product, then test it before launch.",
  },
  {
    question: "Can you help shape an idea that is not fully defined yet?",
    answer:
      "Yes. An initial conversation helps clarify the problem, intended users, and what a sensible first version could include before committing to a build.",
  },
  {
    question: "Can you connect a website or app to existing tools and payments?",
    answer:
      "We can assess integrations with existing systems and payment providers during discovery. Feasibility depends on the provider, access, and requirements.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We test and prepare the product for deployment. Any ongoing maintenance or support needs can be discussed and agreed as part of the project scope.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Use the project enquiry form to share what you are planning. We will use that information to understand the goals and discuss a suitable next step.",
  },
];

export default function HomeFaq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#f4f7fc] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -right-28 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#101a32] p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:p-9 lg:p-10">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              Frequently asked
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="text-3xl font-semibold tracking-tight text-blue-200">
                05
              </span>
              <span className="text-xs font-medium uppercase leading-5 tracking-[0.12em] text-slate-400">
                common questions
                <br />
                answered
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {questions.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_6px_24px_rgba(15,23,42,0.035)] transition duration-300 open:border-blue-200 open:bg-white open:shadow-[0_16px_40px_rgba(37,99,235,0.09)] sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 rounded-sm text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 [&::-webkit-details-marker]:hidden">
                <span className="flex-1 text-sm font-semibold leading-6 text-slate-950 sm:text-base">
                  {question}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-xl font-light leading-none text-blue-700 transition duration-300 group-open:rotate-45 group-open:border-blue-600 group-open:bg-blue-600 group-open:text-white"
                >
                  +
                </span>
              </summary>
              <p className="ml-0 max-w-2xl border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600 sm:ml-9">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
