import fallbackData from "@/content/github-fallback.json";

export interface GithubStats {
  stars: number;
  language: string | null;
  updatedAt: string;
}

type FallbackEntry = { language: string; updatedAt: string; stars: number };
type FallbackMap = Record<string, FallbackEntry>;

async function fetchRepoStats(slug: string): Promise<GithubStats> {
  const fallback = (fallbackData as FallbackMap)[slug];

  try {
    const res = await fetch(`https://api.github.com/repos/rohithkatuku/${slug}`, {
      next: { revalidate: 43200 },
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status} for ${slug}`);
    }

    const data = await res.json();

    return {
      stars: data.stargazers_count ?? fallback?.stars ?? 0,
      language: data.language ?? fallback?.language ?? null,
      updatedAt: data.updated_at ?? fallback?.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return {
      stars: fallback?.stars ?? 0,
      language: fallback?.language ?? null,
      updatedAt: fallback?.updatedAt ?? new Date().toISOString(),
    };
  }
}

export async function getAllGithubStats(slugs: string[]): Promise<Record<string, GithubStats>> {
  const entries = await Promise.all(slugs.map(async (slug) => [slug, await fetchRepoStats(slug)] as const));
  return Object.fromEntries(entries);
}
