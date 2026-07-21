"use client";

import { PROJECTS, type Project } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Individual project card with hover lift, tech tags, and highlight bullets.
 */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <article
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} card-hover group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 h-full ${
        project.isPlaceholder ? "border-dashed opacity-60" : ""
      }`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <div>
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[var(--accent)]">
              {project.tagline}
            </p>
          </div>

          {/* External links */}
          {!project.isPlaceholder && (
            <div className="flex shrink-0 gap-2">
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[var(--border)] p-2 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label={`View ${project.title} source code`}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[var(--border)] p-2 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label={`View ${project.title} live demo`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        {/* Technical highlights */}
        <ul className="mb-6 space-y-3">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-3 text-sm text-[var(--muted)]">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

/**
 * Projects section — the most prominent section of the portfolio.
 * Renders each project as a detailed card with staggered scroll reveals.
 */
export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);

  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""} mb-16 text-center`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Real-world applications I&apos;ve designed and built — spanning SaaS platforms, REST APIs, job platforms, and mobile apps.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className={index === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0 ? "md:col-span-2 md:max-w-2xl md:mx-auto w-full" : "w-full"}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
