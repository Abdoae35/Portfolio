"use client";

import { SKILLS } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[var(--accent)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  ),
  mobile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[var(--accent)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
    </svg>
  ),
  frameworks: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[var(--accent)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  ),
  auth: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[var(--accent)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  ),
  databases: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[var(--accent)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    </svg>
  ),
  tools: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[var(--accent)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m0 0a3 3 0 10-.766-1.208l-3.03 2.496m0 0l-3.5-3.5a1.5 1.5 0 010-2.121l4.95-4.95a1.5 1.5 0 012.12 0l3.5 3.5"
      />
    </svg>
  ),
};

/**
 * Skills section — grouped by category with SVG icons and hover-animated tags.
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
            The tools, frameworks, and state management solutions I reach for to ship reliable software.
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
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10">
          {CATEGORY_ICONS[group.icon]}
        </div>
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
