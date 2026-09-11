import { motion } from "motion/react";

const headlineLines = [
  "Software developer,",
  "building for web & mobile,",
  "obsessed with the details.",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section id="top" className="hero-stage relative overflow-hidden border-b border-line">
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-10"
      >
        <div className="sm:col-span-3">
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-6xl">
            {headlineLines.map((line) => (
              <motion.span key={line} variants={rise} className="block">
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-prose text-lg text-ink-soft"
          >
            I’m Venkata Praneeth, a software developer based in Hyderabad, India, specializing in modern web and mobile application development. 
            I have hands-on freelance experience as a frontend and full-stack developer, building responsive, reusable, and scalable applications.
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base"
          >
            <a href="#work" className="link-underline">
              See the work
            </a>
            <a href="#contact" className="link-underline">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div variants={rise} className="sm:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
            <img
              src="/profile.jpg"
              alt="Portrait of Venkata Praneeth"
              className="h-full w-full origin-center scale-105 object-cover grayscale transition-[filter,transform] duration-500 ease-out hover:scale-100 hover:grayscale-0"
            />

            {/* Curtain reveal: slides up and out of the way on page load */}
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-paper"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              style={{ transformOrigin: "bottom" }}
              transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1], delay: 0.5 }}
            />
          </div>

          <p className="mt-3 font-mono text-xs text-ink-soft">
            Based in — Hyderabad, IN
          </p>
          <p className="mt-3 font-mono text-xs text-ink-soft">Open to — new work</p>
        </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
