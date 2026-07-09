import { projects } from "@/content/projects";
import { getAllGithubStats } from "@/lib/github";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const stats = await getAllGithubStats(projects.map((p) => p.slug));

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-sm uppercase tracking-[0.2em] text-accent2">Featured Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} stats={stats[project.slug]} />
        ))}
      </div>
    </section>
  );
}
