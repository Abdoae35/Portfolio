"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * About section — short, first-person bio.
 * Intentionally brief and human in tone.
 */
export default function About() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div
          ref={ref}
          className={`reveal ${isVisible ? "visible" : ""}`}
        >
          {/* Section heading */}
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            About
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            A bit about me
          </h2>

          {/* Bio card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10">
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                I&apos;m a final-year Computer Science student based in Cairo, Egypt, with
                roughly a year of hands-on freelance development experience. I&apos;ve spent
                that time building real products for real users — not just coursework
                projects.
              </p>
              <p>
                What drives me is the full arc of product development: from understanding
                what a client actually needs, through architecture decisions, all the way
                to shipping something polished that people rely on daily.
              </p>
              <p>
                Right now I&apos;m actively looking for a full-time software engineering
                role where I can keep growing, contribute to meaningful products, and work
                alongside people who care about craft as much as I do.
              </p>
            </div>

            {/* Decorative accent line */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[var(--border)]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
                Let&apos;s build something
              </span>
              <div className="h-px flex-1 bg-[var(--border)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
