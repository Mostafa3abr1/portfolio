"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Sparkles, Github, Linkedin, Mail, MapPin, GraduationCap, Code2, Brain, Globe2 } from "lucide-react";

interface HeroProps {
  onExploreProjects: () => void;
  onTryPlayground: () => void;
}

const ROLES = [
  "AI / Machine Learning Engineer",
  "Arabic NLP & Dialect Specialist",
  "RAG & Autonomous Agent Architect",
  "Deep Learning & Computer Vision"
];

export default function Hero({ onExploreProjects, onTryPlayground }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 75);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((prev) => prev - 1), 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      timeout = setTimeout(() => {}, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[75vh]">
      
      {/* Left Column: Biography & AI Specialty */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full cyber-glass border border-cyan-400/30 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400 animate-ping"></span>
          <span>STATUS: OPEN FOR AI/ML ROLES & INNOVATION</span>
        </div>

        {/* Main Header */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-glow">
              {PERSONAL_INFO.displayName}
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-cyan-200/90 flex items-center gap-2">
            <span className="font-mono text-cyan-400 font-semibold">&gt;</span>
            <span className="font-mono text-sm sm:text-base border-r-2 border-cyan-400 pr-1">
              {ROLES[roleIndex].substring(0, charIndex)}
            </span>
          </p>
        </div>

        {/* Professional Summary */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
          {PERSONAL_INFO.summary}
        </p>

        {/* Core Specialization Pill */}
        <div className="p-4 rounded-xl cyber-glass border border-cyan-500/20 space-y-2 max-w-2xl">
          <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5" /> Core Specialization
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            Designing end-to-end Arabic NLP pipelines, LLM-powered conversational agents, and production-ready predictive models with <span className="text-cyan-300 font-medium">PyTorch, Transformers, LangChain, FAISS, BM25, and Gemini</span>.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-2xl">
          <div className="cyber-glass p-3 rounded-xl border border-cyan-500/20 text-center">
            <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300">85%+</div>
            <div className="text-[11px] text-slate-400 font-sans mt-0.5">Pricing Accuracy</div>
          </div>
          <div className="cyber-glass p-3 rounded-xl border border-cyan-500/20 text-center">
            <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300">&lt;800ms</div>
            <div className="text-[11px] text-slate-400 font-sans mt-0.5">Hybrid RAG Latency</div>
          </div>
          <div className="cyber-glass p-3 rounded-xl border border-cyan-500/20 text-center">
            <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300">95%</div>
            <div className="text-[11px] text-slate-400 font-sans mt-0.5">CNN Image Val Acc</div>
          </div>
          <div className="cyber-glass p-3 rounded-xl border border-cyan-500/20 text-center">
            <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300">10k+</div>
            <div className="text-[11px] text-slate-400 font-sans mt-0.5">ML Data Pipeline</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={onExploreProjects}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-blue-600 text-black hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 flex items-center gap-2"
          >
            Explore Projects <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onTryPlayground}
            className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm cyber-glass border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" /> Try AI Playground
          </button>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl cyber-glass border border-cyan-500/30 text-slate-300 hover:text-cyan-400 hover:glow-cyan flex items-center justify-center transition-all duration-300"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl cyber-glass border border-cyan-500/30 text-slate-300 hover:text-cyan-400 hover:glow-cyan flex items-center justify-center transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-11 h-11 rounded-xl cyber-glass border border-cyan-500/30 text-slate-300 hover:text-cyan-400 hover:glow-cyan flex items-center justify-center transition-all duration-300"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Right Column: Cyber Ring & Portrait Artwork */}
      <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
          
          {/* Animated Ambient Backlight Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow"></div>
          <div className="absolute inset-2 rounded-full border border-dashed border-cyan-400/40 animate-spin-reverse"></div>
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-600/20 to-blue-800/20 blur-xl"></div>
          
          {/* Exact Portrait Container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-cyan-400 p-1 glow-cyan-lg bg-[#070d1e] shadow-2xl z-10 group">
            <Image
              src="/mostafa-aber.jpg"
              alt={PERSONAL_INFO.displayName}
              width={320}
              height={320}
              priority
              className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Badges */}
          <div className="absolute -top-2 left-6 z-20 cyber-glass px-3 py-1.5 rounded-full border border-cyan-400/50 shadow-lg text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 animate-float">
            <Brain className="w-3.5 h-3.5 text-cyan-400" /> RAG & Agents
          </div>
          <div className="absolute -bottom-2 right-4 z-20 cyber-glass px-3 py-1.5 rounded-full border border-cyan-400/50 shadow-lg text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 animate-float" style={{ animationDelay: "2s" }}>
            <Globe2 className="w-3.5 h-3.5 text-cyan-400" /> Arabic NLP
          </div>
        </div>

        {/* Illuminated Nameplate Badge */}
        <div className="mt-6 w-full max-w-sm cyber-glass rounded-2xl p-4 border border-cyan-400/40 glow-cyan text-center relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"></div>
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            {PERSONAL_INFO.displayName}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="h-0.5 w-6 bg-cyan-400"></span>
            <p className="text-xs font-mono text-cyan-300 tracking-wider">AI / MACHINE LEARNING ENGINEER</p>
            <span className="h-0.5 w-6 bg-cyan-400"></span>
          </div>
          <div className="mt-2.5 pt-2 border-t border-cyan-500/20 flex items-center justify-around text-[11px] text-slate-300 font-mono">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-cyan-400" /> {PERSONAL_INFO.location}</span>
            <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3 text-cyan-400" /> B.Sc AI 2026</span>
          </div>
        </div>

      </div>

    </div>
  );
}
