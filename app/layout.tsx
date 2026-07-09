import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rohith Katuku — AI Engineer",
  description:
    "AI engineer specializing in generative AI, RAG, and LLM evaluation frameworks, with a backend foundation in Java Spring Boot.",
  openGraph: {
    title: "Rohith Katuku — AI Engineer",
    description: "AI engineer specializing in generative AI, RAG, and LLM evaluation frameworks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
