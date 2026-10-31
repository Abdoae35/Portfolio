"use client";

import { useRef } from "react";
import { NAV_LINKS } from "@/data/portfolio";

export default function Navbar() {
  const menu = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => { if (menu.current) menu.current.open = false; };

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary navigation">
        <a className="brand" href="#hero" onClick={closeMenu} aria-label="Abdelrahman Elsheref, back to top">
          <span className="brand-mark" aria-hidden="true">ae</span>
          <span>Abdelrahman Elsheref</span>
        </a>
        <div className="desktop-nav">
          {NAV_LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <details ref={menu} className="mobile-nav" onKeyDown={(event) => {
          if (event.key === "Escape" && menu.current?.open) {
            closeMenu();
            menu.current.querySelector("summary")?.focus();
          }
        }}>
          <summary aria-label="Toggle navigation menu"><span>Menu</span><span aria-hidden="true" className="menu-icon"><i /><i /></span></summary>
          <div className="mobile-nav-links">
            {NAV_LINKS.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          </div>
        </details>
      </nav>
    </header>
  );
}
