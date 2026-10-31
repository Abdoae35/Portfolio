import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return <section id="skills" className="section skills-section" aria-labelledby="skills-title"><div className="container">
    <div className="section-heading"><div><p className="section-kicker">Toolkit</p><h2 id="skills-title">Tools of the trade.</h2></div><p>Technologies and concepts I&apos;ve used across projects, training, and team work.</p></div>
    <div className="skills-grid">{SKILLS.map((group) => <div className="skill-group" key={group.category}><h3>{group.category}</h3><p>{group.skills.join("  /  ")}</p></div>)}</div>
  </div></section>;
}
