"use client";

import { EDUCATION, PERSONAL, PROJECTS } from "@/data/portfolio";
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
                I&apos;m <strong className="text-[var(--foreground)]">{PERSONAL.name}</strong>, a final-year Computer Science student at {EDUCATION.institution}, based in {PERSONAL.location}.
              </p>
              <p>
                I build web and mobile applications with .NET, React, Node.js, and Flutter. My experience includes freelance development, an internship at InnoTech Egypt, and apprenticeships in full-stack web and Flutter development through DEPI.
              </p>
              <p>
                I also work on autonomous racing simulations with the Formula Student AI team, using Python, ROS, Gazebo, and RViz.
              </p>
            </div>

            {/* Key highlights / quick stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-8 sm:grid-cols-3 text-center">
              <div>
                <span className="block text-2xl font-bold text-[var(--accent)]">{EDUCATION.graduationYear}</span>
                <span className="text-xs text-[var(--muted)]">Graduation Year</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[var(--accent)]">{EDUCATION.gpa}</span>
                <span className="text-xs text-[var(--muted)]">Academic GPA</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-bold text-[var(--accent)]">{PROJECTS.length}</span>
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
