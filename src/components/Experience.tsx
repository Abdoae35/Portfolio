"use client";

import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Experience & Education section — displays work history, apprenticeship, education, and certifications.
 */
export default function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);

  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} mb-16 text-center`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Career Journey
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience &amp; Education
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            My professional background, key achievements, formal computer science education, and certifications.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Work Experience Column (7 cols) */}
          <div className="space-y-8 lg:col-span-7">
            <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2">
              <span className="text-[var(--accent)]">💼</span> Professional Experience
            </h3>

            <div className="relative border-l-2 border-[var(--border)] pl-6 space-y-10">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard key={exp.role + index} item={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Education & Certifications Column (5 cols) */}
          <div className="space-y-8 lg:col-span-5">
            {/* Education Card */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2">
                <span className="text-[var(--accent)]">🎓</span> Education
              </h3>
              <EducationCard />
            </div>

            {/* Certifications List */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2">
                <span className="text-[var(--accent)]">📜</span> Certifications
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, index) => (
                  <CertCard key={cert.title} cert={cert} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof EXPERIENCES)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} relative`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--background)]" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-lg font-bold text-[var(--foreground)]">
            {item.role}
          </h4>
          <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            {item.period}
          </span>
        </div>

        <p className="mt-1 text-sm font-medium text-[var(--muted)]">
          {item.company} &bull; <span className="text-[var(--foreground)]">{item.location}</span>
        </p>

        <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--accent)]">&bull;</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EducationCard() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6`}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-[var(--foreground)]">
          {EDUCATION.degree}
        </h4>
        <span className="text-xs font-semibold text-[var(--accent)]">
          {EDUCATION.gpa}
        </span>
      </div>
      <p className="mt-1 text-sm text-[var(--muted)]">
        {EDUCATION.institution} &bull; {EDUCATION.location}
      </p>
      <p className="mt-2 text-xs font-medium text-[var(--muted)]">
        {EDUCATION.period}
      </p>
    </div>
  );
}

function CertCard({
  cert,
  index,
}: {
  cert: (typeof CERTIFICATIONS)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div>
        <h5 className="text-sm font-bold text-[var(--foreground)]">
          {cert.title}
        </h5>
        <p className="text-xs text-[var(--muted)]">{cert.issuer}</p>
      </div>
      <span className="text-xs font-semibold text-[var(--accent)] whitespace-nowrap">
        {cert.year}
      </span>
    </div>
  );
}
