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
            <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[var(--accent)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387M3.75 14.15a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m10.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v1.284m9 0A48.208 48.208 0 0012 6c-3.008 0-5.967.143-8.877.417"
                />
              </svg>
              Professional Experience
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
              <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[var(--accent)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147L12 14.634l7.74-4.487m-15.48 0L12 5.66l7.74 4.487m-15.48 0v4.487l7.74 4.487 7.74-4.487V10.15"
                  />
                </svg>
                Education
              </h3>
              <EducationCard />
            </div>

            {/* Certifications List */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[var(--accent)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                Certifications
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
