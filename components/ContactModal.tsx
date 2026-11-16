"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, MessageSquare, Linkedin, Github, Send, FileText } from "lucide-react";

export default function ContactModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("AI / ML Engineer Role");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${topic} - from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nContact: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`);

    setIsSent(true);
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
          <Mail className="w-3.5 h-3.5" />
          <span>GET IN TOUCH DIRECTLY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Let's Build <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">Next-Gen AI</span>
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-xl">
          Interested in collaborating on AI/ML engineering, LLM Agent systems, Arabic NLP, or production vision models? Connect through any channel below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Links */}
        <div className="lg:col-span-5 space-y-4">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-glass rounded-2xl p-5 border border-cyan-500/25 flex items-center gap-4 group hover:border-emerald-400 hover:glow-cyan transition-all block"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/40 text-emerald-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-emerald-400 font-semibold">INSTANT CHAT / WHATSAPP</div>
              <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                {PERSONAL_INFO.phone}
              </div>
              <div className="text-[11px] text-slate-400">Available for fast responses</div>
            </div>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="cyber-glass rounded-2xl p-5 border border-cyan-500/25 flex items-center gap-4 group hover:border-cyan-400 hover:glow-cyan transition-all block"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 font-semibold">DIRECT INQUIRIES</div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.email}
              </div>
              <div className="text-[11px] text-slate-400">Send an email anytime</div>
            </div>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-glass rounded-2xl p-5 border border-cyan-500/25 flex items-center gap-4 group hover:border-blue-400 hover:glow-cyan transition-all block"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/40 text-blue-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-blue-400 font-semibold">PROFESSIONAL NETWORK</div>
              <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                linkedin.com/in/mostafa-abr
              </div>
              <div className="text-[11px] text-slate-400">Connect & view recommendations</div>
            </div>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-glass rounded-2xl p-5 border border-cyan-500/25 flex items-center gap-4 group hover:border-cyan-400 hover:glow-cyan transition-all block"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 text-slate-200 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-300 font-semibold">SOURCE CODE REPOSITORIES</div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                github.com/Mostafa3abrl
              </div>
              <div className="text-[11px] text-slate-400">Explore open source AI repos</div>
            </div>
          </a>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 cyber-glass rounded-2xl p-6 sm:p-8 border border-cyan-500/30 relative">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Send className="w-4 h-4 text-cyan-400" /> Dispatch a Message
          </h3>
          <p className="text-slate-300 text-xs mb-6">
            Fill in the details below to generate a pre-formatted message directly to Mostafa:
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Sarah Jenkins"
                  className="w-full bg-black/60 rounded-xl px-4 py-2.5 text-sm text-slate-200 border border-white/10 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">YOUR EMAIL OR PHONE</label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@company.ai / +1..."
                  className="w-full bg-black/60 rounded-xl px-4 py-2.5 text-sm text-slate-200 border border-white/10 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">PROJECT / TOPIC OF INTEREST</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-black/60 rounded-xl px-4 py-2.5 text-sm text-slate-200 border border-white/10 focus:border-cyan-400 focus:outline-none"
              >
                <option value="AI / ML Engineer Role">AI / Machine Learning Engineer Job Opportunity</option>
                <option value="Generative AI & LLM Agents">Generative AI, RAG & LLM Agents Project</option>
                <option value="Arabic NLP Pipeline">Arabic NLP & Dialect Normalization</option>
                <option value="Computer Vision / Deep Learning">Computer Vision / Signal Processing</option>
                <option value="Consulting & General Collaboration">Consulting & Research Collaboration</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">YOUR MESSAGE</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Mostafa, I reviewed your work on Sal7ly and would love to discuss..."
                className="w-full bg-black/60 rounded-xl px-4 py-2.5 text-sm text-slate-200 border border-white/10 focus:border-cyan-400 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold text-xs hover:shadow-lg hover:shadow-cyan-400/30 transition-all flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" /> Send Direct Message
              </button>
              <a
                href="/cv.pdf"
                download="Mostafa_Aber_CV.pdf"
                className="px-5 py-3 rounded-xl cyber-glass border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/10 transition-all flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5" /> Download CV (PDF)
              </a>
            </div>

            {isSent && (
              <div className="text-xs font-mono text-emerald-400 pt-2">
                ✓ Message prepared! Opening your email client...
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
