import { experience } from "@/content/experience";

export default function Timeline() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-sm uppercase tracking-[0.2em] text-accent2">Experience</h2>
      <ol className="mt-8 space-y-10 border-l border-white/10 pl-6">
        {experience.map((entry, index) => (
          <li key={`${entry.org}-${entry.period}-${index}`} className="relative">
            <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-accent" />
            <p className="text-xs uppercase tracking-wide text-muted">
              {entry.period} · {entry.location}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-100">{entry.role}</h3>
            <p className="text-sm text-accent2">{entry.org}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
