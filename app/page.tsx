"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectSlider from "@/components/ProjectSlider";
import SkillsMatrix from "@/components/SkillsMatrix";
import Experience from "@/components/Experience";
import AIPlayground from "@/components/AIPlayground";
import ContactModal from "@/components/ContactModal";
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight") handleNextSlide();
      if (e.key === "ArrowLeft") handlePrevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll to top on slide change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSlide]);

  return (
    <div className="relative min-h-screen">
      {/* Ambient Cyber Background Lights */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse-glow"></div>
      <div className="fixed bottom-[-10%] right-[15%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="fixed top-[45%] right-[-10%] w-[450px] h-[450px] bg-cyan-400/8 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Global Navbar */}
      <Navbar currentSlide={currentSlide} onSelectSlide={setCurrentSlide} />

      {/* Floating Slide Controller */}
      <aside className="fixed right-6 bottom-8 z-40 hidden sm:flex items-center gap-2 cyber-glass px-4 py-2.5 rounded-2xl border border-cyan-500/30 shadow-2xl">
        <button
          onClick={handlePrevSlide}
          className="w-9 h-9 rounded-xl bg-black/40 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all border border-white/5 hover:border-cyan-500/40"
          title="Previous Slide (Arrow Left)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="px-2 font-mono text-xs text-cyan-400 font-bold tracking-wider">
          <span>{String(currentSlide + 1).padStart(2, "0")}</span> / <span className="text-slate-500">06</span>
        </div>
        <button
          onClick={handleNextSlide}
          className="w-9 h-9 rounded-xl bg-black/40 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all border border-white/5 hover:border-cyan-500/40"
          title="Next Slide (Arrow Right)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="relative z-10 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="transition-all duration-500">
          {currentSlide === 0 && (
            <Hero
              onExploreProjects={() => setCurrentSlide(1)}
              onTryPlayground={() => setCurrentSlide(4)}
            />
          )}

          {currentSlide === 1 && (
            <ProjectSlider onGoToPlayground={() => setCurrentSlide(4)} />
          )}

          {currentSlide === 2 && <SkillsMatrix />}

          {currentSlide === 3 && <Experience />}

          {currentSlide === 4 && <AIPlayground />}

          {currentSlide === 5 && <ContactModal />}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 py-8 px-4 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>{PERSONAL_INFO.fullName} • {PERSONAL_INFO.title}</span>
          </div>
          <div>
            Built with Next.js 14, Tailwind CSS & Cyber Glow Aesthetics • 2026
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <Github className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400">
              <Mail className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
