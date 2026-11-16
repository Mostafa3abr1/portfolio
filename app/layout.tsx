import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Mostafa Aber | AI & Machine Learning Engineer",
  description: "Portfolio of Mostafa Aber - AI Engineer specializing in Arabic NLP, LLM-powered RAG systems, Autonomous Agents, and Computer Vision.",
  keywords: ["AI Engineer", "Machine Learning", "Mostafa Aber", "Arabic NLP", "RAG", "Generative AI", "PyTorch", "Egypt AI Engineer"],
  authors: [{ name: "Mostafa Aber" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} ${mono.variable} font-sans antialiased selection:bg-cyan-500 selection:text-black min-h-screen bg-[#030712] text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
