export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h2 className="text-sm uppercase tracking-[0.2em] text-accent2">Contact</h2>
      <p className="mt-4 text-2xl font-semibold text-slate-100">Let&apos;s talk about AI engineering roles.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:rohithkatuku@gmail.com"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105 focus-visible:outline-accent"
        >
          Email Me
        </a>
        <a
          href="/resume.pdf"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-accent hover:text-accent focus-visible:outline-accent"
        >
          Download Resume
        </a>
      </div>
      <div className="mt-8 flex justify-center gap-6 text-sm text-muted">
        <a href="https://github.com/rohithkatuku" target="_blank" rel="noreferrer" className="hover:text-accent focus-visible:outline-accent">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rohithkatuku"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent focus-visible:outline-accent"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
