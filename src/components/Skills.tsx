"use client";

import { SKILLS } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Skills section — grouped by category with hover-animated tags.
 * Each category card reveals on scroll for a polished feel.
 */
export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);

  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} mb-16 text-center`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            The tools and frameworks I reach for to ship reliable software.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, index) => (
            <SkillGroup key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  group,
  index,
}: {
  group: (typeof SKILLS)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">
          {group.icon}
        </span>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          {group.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="skill-tag cursor-default rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm font-medium text-[var(--muted)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
