"use client";

import React from "react";
import { Brain, Network, Languages, Server, BarChart3, Activity, Cpu } from "lucide-react";

export default function SkillsMatrix() {
  const skillCategories = [
    {
      title: "Generative AI, LLMs & Agents",
      icon: Brain,
      color: "cyan",
      desc: "Autonomous agent workflows, high-precision retrieval architectures, and fine-tuned LLM reasoning.",
      skills: [
        { name: "RAG & Hybrid Search (FAISS + BM25)", level: "95%" },
        { name: "AI Agents (LangChain, LangGraph)", level: "90%" },
        { name: "Prompt Eng & Function Calling", level: "94%" },
        { name: "HuggingFace Transformers & Gemini", level: "92%" },
      ],
    },
    {
      title: "ML & Deep Learning",
      icon: Network,
      color: "blue",
      desc: "Custom neural architectures, transfer learning, regularization and optimization techniques.",
      skills: [
        { name: "PyTorch & TensorFlow / Keras", level: "95%" },
        { name: "CNNs, DNNs & EfficientNet", level: "92%" },
        { name: "MixUp, CutMix, RandAugment", level: "90%" },
        { name: "Scikit-learn, XGBoost, OneCycleLR", level: "96%" },
      ],
    },
    {
      title: "Arabic NLP & Dialect Processing",
      icon: Languages,
      color: "teal",
      desc: "Specialized Egyptian dialect normalization, sentiment classification, NER, and custom BERT models.",
      skills: [
        { name: "MARBERT & CAMEL-BERT", level: "96%" },
        { name: "Egyptian Dialect Normalizer", level: "98%" },
        { name: "Sentence-Transformers (MiniLM)", level: "92%" },
        { name: "spaCy, NLTK & SymSpell", level: "94%" },
      ],
    },
    {
      title: "Deployment & Software Engineering",
      icon: Server,
      color: "emerald",
      desc: "Production microservices, model serving, REST APIs, and containerized deployment.",
      badges: ["FastAPI", "Flask", "Streamlit", "Docker", "Git & GitHub", "OOP", "REST APIs", "Model Quantization"],
    },
    {
      title: "Data Engineering & Analytics",
      icon: BarChart3,
      color: "purple",
      desc: "Exploratory data analysis, outlier cleaning, SQL queries, and interactive executive dashboards.",
      badges: ["Python 3.11", "Pandas & NumPy", "SQL", "Power BI", "Matplotlib", "Seaborn", "IQR Outlier Removal", "Feature Engineering"],
    },
    {
      title: "Computer Vision & Signals",
      icon: Activity,
      color: "rose",
      desc: "1D biosignal arrhythmia processing, 2D spectrogram representations, and defect classification.",
      badges: ["ECG 1D/2D Signals", "OpenCV", "Defect Verification", "GeM Pooling", "Data Augmentation (3x)", "PyTorch Vision"],
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
          <Cpu className="w-3.5 h-3.5" />
          <span>COMPREHENSIVE COMPETENCY MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Technical <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">Ecosystem</span>
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-xl">
          Engineered across the full modern AI lifecycle: from exploratory data engineering and model training to LLM orchestration and containerized deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className="cyber-glass rounded-2xl p-6 border border-cyan-500/25 relative overflow-hidden group hover:border-cyan-400 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-4 group-hover:glow-cyan transition-all">
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-slate-300 text-xs mb-4 leading-relaxed">{cat.desc}</p>

              {cat.skills && (
                <div className="space-y-2 text-xs font-mono">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5"
                    >
                      <span className="text-slate-300">{s.name}</span>
                      <span className="text-cyan-400 font-bold">{s.level}</span>
                    </div>
                  ))}
                </div>
              )}

              {cat.badges && (
                <div className="flex flex-wrap gap-2 text-xs">
                  {cat.badges.map((b) => (
                    <span
                      key={b}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
