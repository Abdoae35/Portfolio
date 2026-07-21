"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data/portfolio";

/**
 * Fixed top navigation bar with smooth-scroll links and mobile hamburger menu.
 * Becomes translucent with a backdrop blur after the user scrolls past the hero.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-[#09090b]/80 border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Primary navigation"
      >
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
        >
          Abdelrahman<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
