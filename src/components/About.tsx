import { EDUCATION, PERSONAL } from "@/data/portfolio";

export default function About() {
  return <section id="about" className="section about-section" aria-labelledby="about-title"><div className="container about-layout">
    <div><p className="section-kicker">Beyond the code</p><h2 id="about-title">A little more<br />about me.</h2></div>
    <div className="about-copy"><p>I&apos;m {PERSONAL.name}, a final-year Computer Science student at {EDUCATION.institution}, based in {PERSONAL.location}.</p><p>My experience includes freelance development, an internship at InnoTech Egypt, and apprenticeships in full-stack web and Flutter development through DEPI.</p><p>I also work on autonomous racing simulations with the Formula Student AI team, using Python, ROS, Gazebo, and RViz. I enjoy learning alongside others and turning ideas into working software.</p></div>
  </div></section>;
}
