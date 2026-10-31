import { PERSONAL } from "@/data/portfolio";

export default function Footer() {
  return <footer className="footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} {PERSONAL.name}</p><p>Software engineer · Egypt</p><a href="#hero">Back to top ↑</a></div></footer>;
}
