import React, { useState } from "react";
import { Layout, Server, Code2, Database, Cpu, Wrench, Sparkles, CheckCircle, Zap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const ICON_MAP = {
  Layout: Layout,
  Server: Server,
  Code2: Code2,
  Database: Database,
  Cpu: Cpu,
  Wrench: Wrench
};

export default function SkillsMatrix() {
  const { categories } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];
  const IconComponent = ICON_MAP[currentCategory.icon] || Sparkles;

  return (
    <section className="py-20 px-[5%] lg:px-[10%] relative overflow-hidden" id="Skills">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center pb-12" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Zap className="w-3.5 h-3.5" /> Technical Arsenal
        </div>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-3">
          Comprehensive stack across modern frontend frameworks, backend microservices, core algorithms, and machine learning.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        {categories.map((cat) => {
          const TabIcon = ICON_MAP[cat.icon] || Sparkles;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500/20 to-indigo-600/30 border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06]"
              }`}
            >
              <TabIcon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-gray-400"}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Skills Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 relative shadow-2xl shadow-cyan-500/5">
          {/* Subtle Top Glow line */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{currentCategory.name}</h3>
              <p className="text-xs text-gray-400">Proven competencies & tool proficiencies</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="group p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_#22d3ee]" />
                    <span className="font-semibold text-white text-sm group-hover:text-cyan-200 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                    {skill.level}
                  </span>
                </div>

                {/* Progress Indicator */}
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
