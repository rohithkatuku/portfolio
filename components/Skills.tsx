import { skillGroups } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="text-sm uppercase tracking-[0.2em] text-accent2">Skills</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-lg font-semibold text-slate-100">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-surface px-3 py-1 text-xs text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
