"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Zap, FolderGit2, Cpu, Briefcase, Sparkles, Mail, MessageSquare, Download } from "lucide-react";

interface NavbarProps {
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export default function Navbar({ currentSlide, onSelectSlide }: NavbarProps) {
  const navItems = [
    { label: "Overview", icon: Zap, index: 0 },
    { label: "Projects Showcase", icon: FolderGit2, index: 1 },
    { label: "AI Tech Matrix", icon: Cpu, index: 2 },
    { label: "Experience", icon: Briefcase, index: 3 },
    { label: "AI Playground", icon: Sparkles, index: 4 },
    { label: "Contact", icon: Mail, index: 5 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto cyber-glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl border border-cyan-500/20">
        
        {/* Brand */}
        <button onClick={() => onSelectSlide(0)} className="flex items-center gap-3 group text-left">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-400/50 p-0.5 group-hover:glow-cyan transition-all duration-300">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/mostafa-aber.jpg`}
              alt={PERSONAL_INFO.displayName}
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              {PERSONAL_INFO.displayName} <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            </span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-wider block">AI / ML ENGINEER</span>
          </div>
        </button>

        {/* Desktop Sliding Tab Selector */}
        <nav className="hidden lg:flex items-center gap-1 bg-black/40 p-1.5 rounded-xl border border-white/5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSlide === item.index;
            return (
              <button
                key={item.label}
                onClick={() => onSelectSlide(item.index)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 glow-cyan"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400" : ""}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cv.pdf`}
            download="Mostafa_Aber_CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all duration-300 flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Let's Talk
          </a>
        </div>
      </div>

      {/* Mobile Slide Pills Navigation */}
      <div className="lg:hidden mt-2 overflow-x-auto pb-1 flex items-center gap-2 px-2 scrollbar-none">
        {navItems.map((item) => {
          const isActive = currentSlide === item.index;
          return (
            <button
              key={item.label}
              onClick={() => onSelectSlide(item.index)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "bg-black/40 text-slate-400 border border-white/5"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
