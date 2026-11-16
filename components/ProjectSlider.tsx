"use client";

import React, { useState, useRef } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ArrowLeft, ArrowRight, ChevronRight, X, Sparkles, ExternalLink, Github } from "lucide-react";

interface ProjectSliderProps {
  onGoToPlayground: () => void;
}

export default function ProjectSlider({ onGoToPlayground }: ProjectSliderProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "nlp" | "cv" | "ml">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeFilter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const scrollSlider = (direction: number) => {
    if (trackRef.current) {
      const cardWidth = 420;
      trackRef.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Title & Controls Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTION-READY AI ARTIFACTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">AI Projects</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Slide horizontally to explore end-to-end Arabic NLP systems, hybrid RAG chatbots, and deep learning computer vision classifiers.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Filters */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5 text-xs font-mono">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === "all"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter("nlp")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === "nlp"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              NLP & RAG
            </button>
            <button
              onClick={() => setActiveFilter("cv")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === "cv"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Vision & Signal
            </button>
            <button
              onClick={() => setActiveFilter("ml")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === "ml"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Classic ML
            </button>
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollSlider(-1)}
              className="w-10 h-10 rounded-xl cyber-glass border border-cyan-500/30 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
              title="Slide Left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollSlider(1)}
              className="w-10 h-10 rounded-xl cyber-glass border border-cyan-500/30 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
              title="Slide Right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Cards Slider Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex-none w-[340px] sm:w-[420px] snap-center cyber-glass rounded-2xl p-6 border border-cyan-500/25 flex flex-col justify-between group hover:border-cyan-400 transition-all duration-300"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {project.categoryLabel}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{project.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                {project.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                {project.summary}
              </p>

              {/* Metrics Pill */}
              <div className="my-4 p-3 rounded-xl bg-black/40 border border-cyan-500/20 space-y-1.5">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex justify-between text-xs">
                    <span className="text-slate-400">{m.label}:</span>
                    <span className="font-mono text-cyan-300 font-semibold">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all flex items-center justify-center gap-2"
              >
                Deep Dive Architecture <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono mt-4 pt-2 border-t border-white/5">
        <div className="flex items-center gap-2">
          <span>&larr; Swipe or slide horizontally to browse all projects &rarr;</span>
        </div>
        <button
          onClick={onGoToPlayground}
          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
        >
          Test Models in AI Playground <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="cyber-glass rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-cyan-400/40 glow-cyan relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-black/50 text-slate-400 hover:text-white flex items-center justify-center border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {selectedProject.categoryLabel}
              </span>
              <span className="text-xs font-mono text-slate-400">{selectedProject.date}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>

            <div className="p-4 rounded-xl bg-black/60 border border-cyan-500/20 mb-4">
              <h4 className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                Architecture & Implementation
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.architecture}
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Technical Milestones
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                    <div className="text-[10px] text-slate-400">{m.label}</div>
                    <div className="text-cyan-300 font-bold mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technology Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <a
                href={selectedProject.github || "https://github.com/Mostafa3abrl"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl cyber-glass border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/10 flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" /> Repository
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-cyan-400 text-black text-xs font-bold hover:bg-cyan-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
