"use client";

import React from "react";
import { WORK_EXPERIENCE, PERSONAL_INFO } from "@/data/portfolioData";
import { Briefcase, Building, GraduationCap, ShieldCheck, Download } from "lucide-react";

export default function Experience() {
  return (
    <div>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
          <Briefcase className="w-3.5 h-3.5" />
          <span>PROFESSIONAL TRACK RECORD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Experience & <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-xl">
          Practical industry internships, intensive telecommunication AI fellowships, and academic foundations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Experience Column */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
            <Building className="w-4 h-4 text-cyan-400" /> Work Experience
          </h3>

          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.organization + exp.role}
              className="cyber-glass rounded-2xl p-6 border border-cyan-500/25 relative pl-8 group hover:border-cyan-400 transition-all"
            >
              <div className="absolute left-3 top-7 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-500/20"></div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {exp.role}
                </h4>
                <span className="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  {exp.period}
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400 mb-3">
                {exp.organization} • {exp.location}
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                {exp.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education & Ethos Column */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" /> Education
          </h3>

          <div className="cyber-glass rounded-2xl p-6 border border-cyan-500/25 relative overflow-hidden group hover:border-cyan-400 transition-all">
            <span className="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              {PERSONAL_INFO.education.period}
            </span>
            <h4 className="text-base font-bold text-white mt-2">
              {PERSONAL_INFO.education.degree}
            </h4>
            <div className="text-xs font-mono text-cyan-300 font-semibold mt-0.5">
              Artificial Intelligence Division
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1">
              {PERSONAL_INFO.education.university} • {PERSONAL_INFO.education.location}
            </div>
            <p className="text-slate-300 text-xs mt-4 leading-relaxed">
              Rigorous degree curriculum focused on intelligent systems, neural networks, computational mathematics, data structures & algorithms, computer vision, and NLP research.
            </p>
          </div>

          {/* Philosophy Card */}
          <div className="cyber-glass rounded-2xl p-6 border border-cyan-500/25 relative space-y-3">
            <div className="text-xs font-mono text-cyan-400 font-bold tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> ENGINEERING ETHOS
            </div>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              "I care about writing clean, scalable code and staying current with the fastest-moving field in tech — turning emerging AI techniques into practical tools that solve real problems."
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>— {PERSONAL_INFO.displayName}</span>
              <span className="text-cyan-400">AI Stack 2026</span>
            </div>
          </div>

          {/* Download Resume Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-black border border-cyan-500/30 flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white">Full Official Resume</div>
              <div className="text-xs text-slate-400 mt-0.5">Mostafa_Aber_CV.pdf (2 Pages)</div>
            </div>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cv.pdf`}
              download="Mostafa_Aber_CV.pdf"
              className="px-4 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Download
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
