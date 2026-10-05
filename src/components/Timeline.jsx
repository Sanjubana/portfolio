import React, { useState } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Timeline() {
  const [filter, setFilter] = useState("all");
  const { timeline } = portfolioData;

  const filteredItems = timeline.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section className="py-20 px-[5%] lg:px-[10%] relative overflow-hidden" id="Timeline">
      {/* Background Neon Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center pb-12" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Career Roadmap
        </div>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          Experience & Education
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-3">
          My academic foundation in Information Technology and practical software development journey.
        </p>

        {/* Filter Controls */}
        <div className="inline-flex p-1 mt-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-lg text-xs font-medium transition-all ${
              filter === "all"
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25"
                : "text-gray-400 hover:text-white"
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setFilter("experience")}
            className={`px-5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              filter === "experience"
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" /> Experience
          </button>
          <button
            onClick={() => setFilter("education")}
            className={`px-5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              filter === "education"
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" /> Education
          </button>
        </div>
      </div>

      {/* Timeline Tree */}
      <div className="relative max-w-4xl mx-auto">
        {/* Glowing Center Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 transform md:-translate-x-1/2 opacity-30 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

        <div className="space-y-10">
          {filteredItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? "md:flex-row-reverse" : ""
                } group`}
                data-aos={isLeft ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Central Node Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 mt-1.5">
                  <div className="w-9 h-9 rounded-full bg-[#0a0a20] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/40 group-hover:scale-125 transition-transform duration-300">
                    {item.type === "experience" ? (
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                    )}
                  </div>
                </div>

                {/* Content Box */}
                <div className="ml-12 md:ml-0 md:w-[45%] w-[calc(100%-3rem)]">
                  <div className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group-hover:-translate-y-1">
                    {/* Corner Cyberpunk Glow Accent */}
                    <div className="absolute -top-px -right-px w-20 h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-tr-2xl pointer-events-none" />

                    {/* Top Tag & Period */}
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {item.badge}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400/90 flex items-center gap-1.5 mt-0.5">
                      {item.organization}
                      {item.location && (
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          • <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      )}
                    </p>

                    {/* Points list */}
                    <ul className="mt-3 space-y-1.5 text-xs text-gray-300/90 leading-relaxed">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
