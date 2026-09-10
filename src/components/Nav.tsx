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
  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-xl tracking-tight">
          Venkata Praneeth
        </a>
        <ul className="flex items-center gap-6 text-sm text-ink-soft">
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
      </nav>
    </header>
  );
}
