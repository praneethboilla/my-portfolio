export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl">Get in touch</h2>
        <p className="mt-4 max-w-prose text-ink-soft">
          The best way to reach me is email. I'm slow on socials but I
          answer every message.
        </p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-lg">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=boillapraneeth10@gmail.com&su=Hello%20Praneeth&body=Hi%20Praneeth%2C%0A%0A"
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            Email
          </a>
          <a
            href="https://github.com/praneethboilla"
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/praneeth-boilla-833889219"
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-5xl px-6 font-mono text-xs text-ink-soft">
        © {new Date().getFullYear()} Praneeth Boilla.
      </footer>
    </section>
  );
}
