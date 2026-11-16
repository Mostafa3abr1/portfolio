"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Terminal, Activity, ArrowRight } from "lucide-react";

const DIALECT_PRESETS = [
  {
    input: "السباكة عندي بايظة والحنفية بتسرب مية في المطبخ",
    label: "🚰 سباكة وتسريب حنفية",
    norm: "اصلاح سباكة وتسريب صنبور مياه بالمطبخ",
    intent: "Plumbing & Leak Repair (سباكة)",
    conf: "97.8% Similarity",
    price: "180 EGP – 260 EGP"
  },
  {
    input: "عايز ادهن ريسبشن وشين بلاستيك وسقف مصيص",
    label: "🎨 دهانات ونقاشة",
    norm: "طلاء صالة استقبال طبقتين دهان بلاستيك وتجديد سقف الجبس",
    intent: "Interior Painting (دهانات ونقاشة)",
    conf: "96.2% Similarity",
    price: "850 EGP – 1,400 EGP"
  },
  {
    input: "عندي قفلة في لوحة المفاتيح والكهرباء قطعت فجأة",
    label: "⚡ قفلة كهرباء",
    norm: "اصلاح ماس كهربائي وفحص القاطع الرئيسي باللوحة",
    intent: "Electrical Short Circuit (صيانة كهرباء)",
    conf: "98.5% Similarity",
    price: "220 EGP – 350 EGP"
  }
];

export default function AIPlayground() {
  // Dialect Simulator State
  const [inputText, setInputText] = useState(DIALECT_PRESETS[0].input);
  const [currentOutput, setCurrentOutput] = useState(DIALECT_PRESETS[0]);
  const [isProcessing, setIsProcessing] = useState(false);

  // ECG Simulator State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ecgMode, setEcgMode] = useState<"Normal" | "Arrhythmia" | "Tachycardia">("Normal");

  const runInference = (text: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      const match = DIALECT_PRESETS.find(p => p.input === text);
      if (match) {
        setCurrentOutput(match);
      } else {
        setCurrentOutput({
          input: text,
          label: "Custom",
          norm: `"${text.replace(/بايظة/g, "معطلة").replace(/مية/g, "مياه").replace(/عايز/g, "ارغب في")}"`,
          intent: "General Home Maintenance (عام)",
          conf: "91.2% FAISS Match",
          price: "200 EGP – 400 EGP"
        });
      }
      setIsProcessing(false);
    }, 250);
  };

  // ECG Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let x = 0;
    let lastY = canvas.height / 2;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      lastY = canvas.height / 2;
    };
    handleResize();

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const midY = h / 2;

      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(x, 0, 8, h);

      let step = x % (ecgMode === "Tachycardia" ? 45 : ecgMode === "Arrhythmia" ? 70 : 85);
      let waveY = midY;

      if (step === 20) waveY = midY - 6;
      else if (step === 28) waveY = midY + 4;
      else if (step === 32) waveY = midY - (ecgMode === "Arrhythmia" ? 48 : 40);
      else if (step === 36) waveY = midY + 18;
      else if (step === 50) waveY = midY - (ecgMode === "Arrhythmia" ? 16 : 10);

      ctx.strokeStyle = ecgMode === "Normal" ? "#00f2fe" : ecgMode === "Arrhythmia" ? "#fbbf24" : "#f43f5e";
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = ctx.strokeStyle;

      ctx.beginPath();
      ctx.moveTo(x === 0 ? 0 : x - 2, lastY);
      ctx.lineTo(x, waveY);
      ctx.stroke();

      lastY = waveY;
      x += 2;
      if (x > w) x = 0;

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [ecgMode]);

  return (
    <div>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>LIVE INTERACTIVE SIMULATORS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          AI Experience <span className="bg-gradient-to-r from-amber-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Playground</span>
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-xl">
          Test real simulated models inspired by Mostafa's flagship projects: Egyptian Arabic Dialect Normalization & RAG Search, and Real-Time ECG Biosignal Arrhythmia Classifier.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Simulator 1: Arabic NLP */}
        <div className="cyber-glass rounded-2xl p-6 border border-cyan-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400"></span>
                <h3 className="text-base font-bold text-white">Sal7ly Arabic NLP & RAG Engine</h3>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                MiniLM + MARBERT
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-3">
              Type or pick an Egyptian dialect request to see real-time slang normalization, intent classification, and estimated pricing bracket:
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {DIALECT_PRESETS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => {
                    setInputText(p.input);
                    runInference(p.input);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-all"
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                dir="rtl"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full bg-black/60 rounded-xl px-4 py-3 text-sm text-cyan-200 border border-cyan-500/30 focus:outline-none focus:border-cyan-400 font-sans"
              />
              <button
                onClick={() => runInference(inputText)}
                className="absolute left-2 top-2 px-3 py-1.5 rounded-lg bg-cyan-400 text-black text-xs font-bold hover:bg-cyan-300 transition-all"
              >
                Inference
              </button>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-black/50 border border-cyan-500/20 space-y-2.5 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-400 pb-1 border-b border-white/5">
                <span>PIPELINE STAGE</span>
                <span className="text-cyan-400 font-bold">LATENCY: ~48ms</span>
              </div>
              <div>
                <span className="text-slate-400">Normalized Egyptian Text:</span>
                <p className="text-cyan-300 text-xs mt-0.5 dir-rtl text-right font-sans">
                  {isProcessing ? "Processing tokenizer & MARBERT..." : currentOutput.norm}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <span className="text-slate-400">Intent & Domain:</span>
                  <p className="text-emerald-400 font-bold">{currentOutput.intent}</p>
                </div>
                <div>
                  <span className="text-slate-400">FAISS Match Conf:</span>
                  <p className="text-cyan-300 font-bold">{currentOutput.conf}</p>
                </div>
              </div>
              <div className="pt-1">
                <span className="text-slate-400">Predicted Price Bracket (85%+ Acc):</span>
                <p className="text-amber-300 font-bold">{currentOutput.price}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between font-mono">
            <span>Model: Sal7ly Dialect Pipeline</span>
            <span className="text-cyan-400">Sub-second Engine</span>
          </div>
        </div>

        {/* Simulator 2: ECG Arrhythmia */}
        <div className="cyber-glass rounded-2xl p-6 border border-cyan-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500 animate-pulse"></span>
                <h3 className="text-base font-bold text-white">ECG Arrhythmia CNN Classifier</h3>
              </div>
              <span className="text-[11px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">
                1D/2D CNN (PyTorch)
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-3">
              Real-time cardiac waveform analysis inspired by Mostafa's 90%+ accurate arrhythmia classifier across 5 cardiac conditions:
            </p>

            <div className="relative w-full h-32 bg-black/70 rounded-xl overflow-hidden border border-cyan-500/30 p-1">
              <canvas ref={canvasRef} className="w-full h-full block" />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-cyan-400 border border-cyan-500/30">
                Lead II • 250 Hz
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 text-xs">
              <span className="text-slate-400 font-mono">Simulate Rhythm:</span>
              <div className="flex gap-1.5 font-mono text-[11px]">
                {(["Normal", "Arrhythmia", "Tachycardia"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setEcgMode(mode)}
                    className={`px-2.5 py-1 rounded transition-all ${
                      ecgMode === mode
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                    }`}
                  >
                    {mode === "Normal" ? "Normal Sinus" : mode === "Arrhythmia" ? "Ventricular PAC" : "Tachycardia"}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3 p-3 rounded-xl bg-black/50 border border-cyan-500/20 grid grid-cols-3 gap-2 text-center font-mono text-xs">
              <div>
                <span className="text-slate-400 text-[10px]">PREDICTED CLASS</span>
                <div className={`font-bold mt-0.5 ${ecgMode === "Normal" ? "text-emerald-400" : ecgMode === "Arrhythmia" ? "text-amber-400" : "text-rose-400"}`}>
                  {ecgMode === "Normal" ? "Normal (NSR)" : ecgMode === "Arrhythmia" ? "Ventricular PAC" : "Sinus Tachycardia"}
                </div>
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">CONFIDENCE</span>
                <div className="text-cyan-300 font-bold mt-0.5">
                  {ecgMode === "Normal" ? "95.2%" : ecgMode === "Arrhythmia" ? "92.7%" : "96.4%"}
                </div>
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">HEART RATE</span>
                <div className="text-rose-400 font-bold mt-0.5">
                  {ecgMode === "Normal" ? "72 BPM" : ecgMode === "Arrhythmia" ? "88 BPM" : "124 BPM"}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between font-mono">
            <span>Model: PyTorch CNN Signal Pipeline</span>
            <span className="text-emerald-400">Validation: 91.3% Peak</span>
          </div>
        </div>

      </div>
    </div>
  );
}
