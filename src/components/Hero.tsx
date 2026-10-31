import { PERSONAL, RESUME_URL } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="hero container" aria-labelledby="hero-title">
      <div className="hero-main">
        <p className="hero-intro"><span className="status-dot" /> {PERSONAL.location} <span aria-hidden="true">/</span> Software engineer</p>
        <h1 id="hero-title">Abdelrahman<br /><span>A. Elsheref</span></h1>
        <p className="hero-description">I build web and mobile applications with .NET, React, Node.js, and Flutter. I&apos;m a final-year computer science student interested in solving practical problems through thoughtful software.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
          <a className="button button-outline" href={RESUME_URL} download="Abdelrahman-Elsheref-CV.pdf">Download CV <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="#contact">Get in touch</a>
        </div>
      </div>
      <aside className="hero-note" aria-label="A little about my work">
        <div className="note-label">A little about my work</div>
        <p>From backend systems to mobile interfaces, I enjoy building the pieces that make software useful.</p>
        <div className="note-footer"><span>Currently</span><strong>Studying &amp; building</strong></div>
      </aside>
      <div className="hero-bottom"><span>Selected work &amp; experience</span><span>Scroll to explore ↓</span></div>
    </section>
  );
}
