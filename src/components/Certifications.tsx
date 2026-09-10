import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-line py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl">Certifications</h2>

        {certifications.length > 0 ? (
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {certifications.map((certification) => (
              <li key={`${certification.title}-${certification.provider}`}>
                {certification.link ? (
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-1 py-5 transition-colors hover:text-teal sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="flex items-center gap-2 font-display text-xl">
                      {certification.title}
                      <span aria-hidden="true" className="text-base text-teal">
                        ↗
                      </span>
                    </span>
                    <span className="font-mono text-xs text-ink-soft">
                      {certification.provider}
                      {certification.year && ` · ${certification.year}`}
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="font-display text-xl">
                      {certification.title}
                    </span>
                    <span className="font-mono text-xs text-ink-soft">
                      {certification.provider}
                      {certification.year && ` · ${certification.year}`}
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 border-y border-line py-5 text-sm text-ink-soft">
            Certification details coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
