import React from "react";
import { X, Download, FileText, Briefcase, GraduationCap, Award, CheckCircle2, Mail, MapPin, ExternalLink, Printer } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, skills, timeline, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0a0a1f] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Resume Overview
                <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  ATS Optimized
                </span>
              </h3>
              <p className="text-xs text-gray-400">Sanjay Singh — Full-Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs border border-white/10 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Print / PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-gray-300 text-sm">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-wide">{personal.name}</h2>
              <p className="text-cyan-400 font-medium text-sm mt-0.5">{personal.role}</p>
              <p className="text-xs text-gray-400 mt-2 flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personal.location}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-indigo-400" /> {personal.email}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs border border-cyan-500/30 flex items-center gap-1.5 transition-all"
              >
                GitHub Profile <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30 flex items-center gap-1.5 transition-all"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-2">Professional Summary</h4>
            <p className="text-gray-300 leading-relaxed text-sm bg-white/[0.02] p-4 rounded-xl border border-white/5">
              {personal.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" /> Education
            </h4>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h5 className="font-semibold text-white">Jaipur Engineering College and Research Centre (JECRC), Jaipur</h5>
                  <span className="text-xs text-cyan-400 font-medium">2023 – Expected 2027</span>
                </div>
                <p className="text-xs text-indigo-300 mt-0.5">B.Tech in Information Technology • <strong className="text-white">CGPA: 8.5 / 10</strong></p>
                <p className="text-xs text-gray-400 mt-2">
                  Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++/Java), DBMS, Computer Networks, Machine Learning.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs text-gray-400">Higher Secondary (12th)</span>
                  <p className="font-semibold text-white text-sm">76.8% (PCM Stream)</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs text-gray-400">Secondary School (10th)</span>
                  <p className="font-semibold text-white text-sm">82.0%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Practical Training */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" /> Experience & Training
            </h4>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h5 className="font-semibold text-white">Data Science Intern — Celebal Technologies</h5>
                  <span className="text-xs text-cyan-400 font-medium">Jaipur, India</span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-gray-400 list-disc list-inside">
                  <li>Worked on real-world data science and machine learning tasks using Python and Pandas.</li>
                  <li>Applied predictive modeling algorithms and exploratory data analysis across diverse datasets.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h5 className="font-semibold text-white">MERN Stack Development Training — V Techno Hub</h5>
                  <span className="text-xs text-purple-400 font-medium">Jaipur, India</span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-gray-400 list-disc list-inside">
                  <li>Gained practical experience designing full-stack web applications with React, Node.js, Express, and MongoDB.</li>
                  <li>Engineered secure REST APIs and modern responsive component interfaces.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" /> Key Projects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-semibold text-white text-sm">{proj.Title}</h5>
                    {proj.Link && (
                      <a href={proj.Link} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-2">{proj.Description}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.TechStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-2">Technical Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-cyan-300 font-medium">Frontend & Web:</span>
                <p className="text-gray-400 mt-1">React.js, JavaScript (ES6+), HTML5, CSS3, Vite, Tailwind CSS, React Router</p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-cyan-300 font-medium">Backend & Databases:</span>
                <p className="text-gray-400 mt-1">Node.js, Express.js, MongoDB, MySQL, REST APIs, MERN Architecture</p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-cyan-300 font-medium">Programming & AI/ML:</span>
                <p className="text-gray-400 mt-1">C++, Python, Java, Machine Learning, Random Forest, LSTM, Pandas, Kaggle</p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-cyan-300 font-medium">Tools & Cloud:</span>
                <p className="text-gray-400 mt-1">Git, GitHub, VS Code, Postman, AWS Basics, CI/CD Basics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <span className="text-xs text-gray-500">Contact: sanjaysingh.it27@gmail.com</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-xs hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" /> Download / Save PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
