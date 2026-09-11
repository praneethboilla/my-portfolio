import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { GithubMark } from "../util/customIcons/GithubMark";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const sortedProjects = [...projects].sort(
    (firstProject, secondProject) =>
      Number(secondProject.year) - Number(firstProject.year),
  );
  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 3);

  return (
    <section id="work" className="border-t border-line py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl">Selected work</h2>

        <ul className="mt-8 divide-y divide-line border-y border-line">
          <AnimatePresence initial={false}>
            {visibleProjects.map((project) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative"
              >
                <motion.a
                  href={project.link ?? project.repo}
                  target="_blank"
                  rel="noreferrer"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="relative flex flex-col gap-2 py-6 pl-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <motion.span
                    aria-hidden
                    variants={{
                      rest: { scaleY: 0, backgroundColor: "transparent" },
                      hover: { scaleY: 1, backgroundColor: "rgb(var(--color-teal))" },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 top-0 h-full w-[3px] origin-top"
                  />

                  <motion.div
                    variants={{ rest: { x: 0 }, hover: { x: 3 } }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="sm:max-w-md"
                  >
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-xl">{project.title}</h3>
                      <span className="font-mono text-xs text-ink-soft">
                        {project.year}
                      </span>
                      {project.link ? (
                        <ExternalLink
                          aria-label="Open live project"
                          size={15}
                          strokeWidth={1.7}
                          className="ml-1 shrink-0 text-teal"
                        />
                      ) : project.repo ? (
                        <GithubMark />
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-ink-soft">
                      {project.description}
                    </p>
                  </motion.div>

                  <div className="flex flex-wrap gap-2 font-mono text-xs text-ink-soft sm:justify-end">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </motion.a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {projects.length > 3 && (
          <motion.button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
            className="link-underline mt-6 text-sm font-medium text-teal font-mono"
          >
            {showAll ? "Less projects" : "More projects"}
          </motion.button>
        )}
      </div>
    </section>
  );
}
