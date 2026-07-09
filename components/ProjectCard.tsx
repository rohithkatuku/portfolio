"use client";

import { useRef } from "react";
import type { Project } from "@/content/projects";
import type { GithubStats } from "@/lib/github";

export default function ProjectCard({ project, stats }: { project: Project; stats?: GithubStats }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  }

  return (
    <div style={{ perspective: "800px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-2xl border border-white/10 bg-surface p-6 transition-transform duration-150 ease-out will-change-transform active:scale-95"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
          {stats?.language && (
            <span className="shrink-0 rounded-full bg-white/5 px-2 py-1 text-xs text-muted">{stats.language}</span>
          )}
        </div>
        <p className="mt-2 text-sm text-accent2">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-2 py-1 text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>
        {project.highlight && <p className="mt-4 text-xs font-medium text-accent">{project.highlight}</p>}
        <div className="mt-6 flex gap-4 text-sm">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-accent hover:underline focus-visible:outline-accent"
          >
            View Repo →
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-accent2 hover:underline focus-visible:outline-accent"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
