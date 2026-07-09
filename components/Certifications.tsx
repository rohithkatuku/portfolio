import { certifications } from "@/content/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="text-sm uppercase tracking-[0.2em] text-accent2">Certifications</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.name} className="rounded-xl border border-white/10 bg-surface px-5 py-4">
            <p className="text-sm font-medium text-slate-100">{cert.name}</p>
            <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
