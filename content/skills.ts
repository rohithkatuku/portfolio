export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    items: [
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Anthropic Claude API",
      "Prompt Engineering",
      "Embeddings",
      "LLM Evaluation",
      "MLOps",
      "Anomaly Detection",
    ],
  },
  {
    category: "Backend & Data Engineering",
    items: ["Java", "Python", "Spring Boot", "Microservices", "REST APIs", "SQL", "JDBC", "ETL", "Batch Processing"],
  },
  {
    category: "AEM & Frontend",
    items: ["Adobe Experience Manager", "HTL", "Sightly", "Sling Models", "OSGi", "HTML", "CSS", "JavaScript", "AEM Workflows"],
  },
  {
    category: "DevOps & Engineering Practices",
    items: ["Maven", "Git", "Jenkins", "CI/CD", "GitHub Actions", "Version Control", "Testing", "Debugging", "Secure Coding"],
  },
];
