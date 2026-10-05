import React, { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink, Code2, Sparkles, BookOpen, Activity } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function GithubStats() {
  const { personal, projects } = portfolioData;
  const username = personal.nickname || "sanjubana";

  return (
    <section className="py-16 px-[5%] lg:px-[10%] relative overflow-hidden" id="Github">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center pb-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" /> Open Source & Activity
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            GitHub Showcase
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm mt-2">
            Explore my code repositories, open source projects, and ongoing technical development on GitHub.
          </p>
        </div>

        {/* GitHub Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all text-center flex flex-col items-center justify-center group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">@{username}</span>
            <span className="text-xs text-gray-400 mt-1">Official GitHub Profile</span>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300"
            >
              Visit Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-all text-center flex flex-col items-center justify-center group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">Full-Stack & ML</span>
            <span className="text-xs text-gray-400 mt-1">MERN • Python • C++</span>
            <span className="mt-3 text-xs text-indigo-400 font-medium">Active Codebase</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all text-center flex flex-col items-center justify-center group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">3+ Key Projects</span>
            <span className="text-xs text-gray-400 mt-1">KIRSI • PolluSense • Portal</span>
            <span className="mt-3 text-xs text-purple-400 font-medium">Production Ready</span>
          </div>
        </div>

        {/* Featured Pinned Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                  sanjubana/kirsi
                </h4>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                Public
              </span>
            </div>
            <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
              Farmer assistance platform providing pesticide guides, agricultural machinery assistance, and market price tracking.
            </p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" /> React / JS
                </span>
              </div>
              <a
                href="https://github.com/sanjubana/kirsi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-medium"
              >
                Code <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <h4 className="font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                  sanjubana/pollusense
                </h4>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                Public
              </span>
            </div>
            <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
              IoT and AI-based pollution monitoring system to collect environmental telemetry and forecast pollution trends with LSTM.
            </p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" /> Python / IoT
                </span>
              </div>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-xs font-medium"
              >
                Code <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
