import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading"><div><p className="section-kicker">Background</p><h2 id="experience-title">Learning by building.</h2></div><p>Work, training, and the teams that have shaped how I approach software.</p></div>
        <div className="experience-layout">
          <div>
            <h3 className="column-heading">Experience &amp; training</h3>
            <div className="experience-list">{EXPERIENCES.map((item) => <article className="experience-item" key={`${item.role}-${item.company}`}>
              <div className="experience-meta"><span>{item.period}</span><span>{item.type}</span></div>
              <div><h4>{item.role}</h4><p className="experience-company">{item.company} <span> / {item.location}</span></p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
            </article>)}</div>
          </div>
          <aside className="credentials">
            <div className="credential-block"><h3 className="column-heading">Education</h3><h4>{EDUCATION.institution}</h4><p>{EDUCATION.degree}</p><p>{EDUCATION.location}</p><p>{EDUCATION.period}<br />GPA: {EDUCATION.gpa}</p></div>
            <div className="credential-block"><h3 className="column-heading">Certifications</h3><ul className="cert-list">{CERTIFICATIONS.map((cert) => <li key={cert.title}><div><h4>{cert.title}</h4><p>{cert.issuer}</p></div><span>{cert.year}</span></li>)}</ul></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
