import { useState } from "react";
import { motion } from "motion/react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

interface NavProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Nav({ isDark, onToggleTheme }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-y-5 px-6 py-5">
        <a href="#top" className="font-display text-lg tracking-tight sm:text-xl">
          Venkata Praneeth
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-8 w-8 items-center justify-center text-lg text-teal sm:hidden"
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
        <ul className="hidden items-center gap-6 text-sm text-ink-soft sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                initial="rest"
                animate="rest"
                className="relative inline-block transition-colors hover:text-ink"
              >
                {link.label}
                <motion.span
                  aria-hidden
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 h-px w-full origin-left bg-ink"
                />
              </motion.a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-pressed={isDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-6 w-6 shrink-0 items-center justify-center text-sm text-teal transition-transform hover:scale-105"
            >
              <span aria-hidden="true" className="text-base">
                {isDark ? "☀" : "☾"}
              </span>
            </button>
          </li>
        </ul>
        <ul
          id="mobile-navigation"
          className={`${menuOpen ? "flex" : "hidden"} basis-full flex-col gap-4 border-t border-line pt-5 text-sm text-ink-soft sm:hidden`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-1 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-pressed={isDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex items-center gap-2 py-1 text-teal"
            >
              <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
              {isDark ? "Light mode" : "Dark mode"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
