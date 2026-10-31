import { PROJECTS, type Project } from "@/data/portfolio";

function ProjectLinks({ project }: { project: Project }) {
  return <div className="project-links">
    {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`}>Source code <span aria-hidden="true">↗</span></a>}
    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`}>Live demo <span aria-hidden="true">↗</span></a>}
  </div>;
}

function ProjectDetails({ project }: { project: Project }) {
  return <>
    <p className="project-description">{project.description}</p>
    <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
    <p className="project-stack"><span>Built with</span> {project.techStack.join("  /  ")}</p>
    <ProjectLinks project={project} />
  </>;
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading"><div><p className="section-kicker">Selected work</p><h2 id="projects-title">Projects with purpose.</h2></div><p>A selection of applications I&apos;ve built across web, backend, and mobile development.</p></div>
        <div className="featured-projects">
          {PROJECTS.slice(0, 2).map((project, index) => <article className={`featured-project feature-${index + 1}`} key={project.title}>
            <div className="feature-top"><span>{index === 0 ? "In development" : "Featured project"}</span><span aria-hidden="true">✳</span></div>
            <div className="feature-body"><p className="project-tagline">{project.tagline}</p><h3>{project.title}</h3><ProjectDetails project={project} /></div>
          </article>)}
        </div>
        <div className="more-projects-heading"><h3>More projects</h3><p>More of what I&apos;ve been working on.</p></div>
        <div className="project-list">
          {PROJECTS.slice(2).map((project) => <article key={project.title} className="project-row">
            <div><p className="project-tagline">{project.tagline}</p><h3>{project.title}</h3></div>
            <div><ProjectDetails project={project} /></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
