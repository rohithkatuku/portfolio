export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent2">AI Engineer &amp; Software Engineer</p>
        <h1 className="text-4xl font-bold text-slate-50 sm:text-6xl">Rohith Katuku</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          I build practical AI systems, from RAG pipelines to the backend software that makes them work in production.

        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105 focus-visible:outline-accent"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-accent hover:text-accent focus-visible:outline-accent"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
