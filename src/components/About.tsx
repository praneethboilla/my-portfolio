const skills = [
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Java",
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 sm:grid-cols-5 sm:gap-8">
        <h2 className="font-display text-2xl sm:col-span-1">About</h2>

        <div className="sm:col-span-4">
          <p className="max-w-prose text-ink-soft">
            I got into software development through building applications and gradually found 
            a strong interest in frontend development and creating intuitive user experiences. 
            I enjoy turning designs into functional, reusable applications and solving practical problems across web and mobile platforms.
             I’m now looking for opportunities where I can contribute to real-world products, strengthen my full-stack skills, and continue growing as a developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 font-mono text-sm text-ink-soft">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-sm border border-line px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
