import { PERSONAL, SOCIAL_LINKS } from "@/data/portfolio";

export default function Contact() {
  return <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="container contact-layout">
    <div><p className="section-kicker">Contact</p><h2 id="contact-title">Let&apos;s make<br />something useful.</h2></div>
    <div className="contact-copy"><p>Have a project, opportunity, or question in mind? I&apos;d be glad to hear from you.</p><a className="contact-email" href={`mailto:${PERSONAL.email}`}>{PERSONAL.email} <span aria-hidden="true">↗</span></a>
      <div className="contact-links">{SOCIAL_LINKS.filter((link) => link.label !== "Email").map((link) => <a key={link.label} href={link.href} download={link.download} target={link.download ? undefined : "_blank"} rel={link.download ? undefined : "noopener noreferrer"}>{link.label === "Resume" ? "Download CV" : link.label} <span aria-hidden="true">{link.download ? "↓" : "↗"}</span></a>)}</div>
    </div>
  </div></section>;
}
