/**
 * Minimal footer with copyright and a subtle back-to-top link.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-[var(--muted)]">
          &copy; {year} Abdelrahman. Built with Next.js &amp; Tailwind CSS.
        </p>

        <a
          href="#hero"
          className="text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          aria-label="Back to top"
        >
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
