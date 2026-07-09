export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: "Oracle Certified Associate, Java SE 8 Programmer", issuer: "Oracle" },
  { name: "AWS Certified Cloud Practitioner", issuer: "AWS" },
  { name: "Prompt Engineering", issuer: "Coursera" },
  { name: "Advanced Data Analysis", issuer: "Coursera" },
  { name: "Trustworthy Generative AI", issuer: "Coursera" },
  { name: "AI Fluency", issuer: "Anthropic" },
];
