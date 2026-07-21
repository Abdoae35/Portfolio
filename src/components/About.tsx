"use client";

import { EDUCATION, PERSONAL } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * About section — first-person summary based on Abdelrahman's resume.
 */
export default function About() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          {/* Section heading */}
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            About
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            A bit about me
          </h2>

          {/* Bio card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10">
            <div className="space-y-4 text-[var(--muted)] leading-relaxed text-base sm:text-lg">
              <p>
                I&apos;m <strong className="text-[var(--foreground)]">{PERSONAL.name}</strong>, a final-year Computer Science student based in {PERSONAL.location} with a {EDUCATION.gpa}. I am deeply passionate about software engineering and building solutions that automate manual processes and solve real-world problems.
              </p>
              <p>
                Over the past year, I&apos;ve delivered full-stack web applications for clients as a freelance software engineer on Mostaqel and Upwork, and honed my backend and full-stack capabilities with C#, ASP.NET Core, and SQL Server through the DEPI Training Program.
              </p>
              <p>
                My goal is to grow as a software engineer by joining an innovative technology team where I can contribute to impactful, high-scale products, solve challenging problems, and continuously level up my skills.
              </p>
            </div>

            {/* Key highlights / quick stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-8 sm:grid-cols-3 text-center">
              <div>
                <span className="block text-2xl font-bold text-[var(--accent)]">2027</span>
                <span className="text-xs text-[var(--muted)]">Graduation Year</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[var(--accent)]">3.4 / 4.0</span>
                <span className="text-xs text-[var(--muted)]">Academic GPA</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-bold text-[var(--accent)]">5+</span>
                <span className="text-xs text-[var(--muted)]">Major Projects Built</span>
              </div>
            </div>

            {/* Decorative accent line */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[var(--border)]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
                Let&apos;s build something great
              </span>
              <div className="h-px flex-1 bg-[var(--border)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
