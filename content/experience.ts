export interface ExperienceEntry {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "AI Developer Volunteer",
    org: "University of Central Missouri",
    location: "Remote",
    period: "Nov 2025 – Present",
    bullets: [
      "Established retrieval-augmented generation pipelines improving data grounding accuracy by over 30% for research applications.",
      "Constructed automated evaluation frameworks enabling 40% faster model output comparisons across multiple LLM configurations.",
      "Developed generative AI prototypes enhancing departmental workflows, reducing manual effort by 25% while ensuring usability for non-technical users.",
    ],
  },
  {
    role: "Software Engineer – AEM Developer",
    org: "Virtusa",
    location: "Telangana, India",
    period: "Jun 2023 – May 2024",
    bullets: [
      "Enhanced reusable AEM components, decreasing content authoring support tickets by 35% through improved configurability and documentation.",
      "Orchestrated backend integration using Sling Models and OSGi services, improving API response times by 20%.",
      "Optimized page load performance by reducing backend calls and tuning caching, achieving a 15% faster user experience.",
      "Administered editable templates and page policies enabling 50% more autonomous content authoring without developer intervention.",
      "Resolved publishing defects through systematic log analysis, cutting incident resolution time by 30% and enhancing system reliability.",
    ],
  },
  {
    role: "Software Engineer – Backend, Data & Automation",
    org: "Virtusa",
    location: "Telangana, India",
    period: "Jun 2022 – Jun 2023",
    bullets: [
      "Automated data workflows for financial reporting, reducing manual processing time by 40% with end-to-end ETL scripting and batch jobs.",
      "Streamlined data validation and reconciliation, improving transaction accuracy and audit traceability by 25% under compliance requirements.",
      "Integrated REST APIs with error logging and retry mechanisms, elevating system fault tolerance and reducing silent failures by 35%.",
      "Strengthened exception handling and monitoring protocols, decreasing batch job failures and accelerating issue resolution by 30%.",
    ],
  },
  {
    role: "Associate Software Engineer",
    org: "Virtusa",
    location: "Telangana, India",
    period: "Jun 2021 – Jun 2022",
    bullets: [
      "Engineered RESTful APIs with layered architecture, enhancing maintainability and reducing service dependency risks by 30% in a complex financial system.",
      "Refined SQL queries using JDBC, improving data retrieval efficiency and accuracy by 25% for critical banking transactions.",
      "Administered Maven build processes across multiple environments, ensuring consistent deployments and reducing integration issues by 20%.",
      "Collaborated on defect resolution cycles, cutting defect turnaround time by 35% through precise root cause analysis and targeted fixes.",
    ],
  },
];
