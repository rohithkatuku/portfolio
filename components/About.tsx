export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-sm uppercase tracking-[0.2em] text-accent2">About</h2>
      <p className="mt-4 text-xl leading-relaxed text-slate-200">
        I&apos;m an AI engineer specializing in generative AI, retrieval-augmented generation, and LLM evaluation
        frameworks, with a backend foundation in Java Spring Boot microservices and API integration built across
        three years in regulated financial environments. I care about production-ready AI: reproducible,
        observable, and usable by people who aren&apos;t ML experts.
      </p>
      <p className="mt-4 text-slate-400">
        Outside of work, I&apos;m building <span className="text-slate-200">DEADZONE 2D</span>, a full-stack 2D
        battle royale game in C#/MonoGame, just for the fun of shipping something end to end.
      </p>
    </section>
  );
}
