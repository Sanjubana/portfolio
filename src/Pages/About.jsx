import React, { memo } from "react";
import { FileText, Code2, Award, Globe, ArrowUpRight, Sparkles, GraduationCap, Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolioData } from "../data/portfolioData";

const Header = memo(() => (
  <div className="text-center lg:mb-12 mb-6 px-[5%]">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Getting To Know Me
    </div>
    <h2 
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent" 
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      About Me
    </h2>
    <p 
      className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      Turning ideas into intelligent, impactful digital experiences through clean architecture and machine learning.
    </p>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1000} className="relative group">
    <div className="relative z-10 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 transition-transform group-hover:rotate-6">
          <Icon className="w-7 h-7" />
        </div>
        <span className="text-3xl sm:text-4xl font-extrabold text-white">
          {value}
        </span>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold mb-1">
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-cyan-400/60 group-hover:text-cyan-300 transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  return (
    <div className="py-20 md:px-[10%] px-[5%] w-full bg-[#030014] relative overflow-hidden" id="About">
      {/* Background Neon Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Header />

      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-right">
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
              
              <div className="relative p-6 rounded-3xl bg-[#090724] border border-cyan-500/30 overflow-hidden shadow-2xl">
                {/* Tech Badge Top */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
                    <span className="text-xs font-mono text-cyan-300">SYSTEM.ACTIVE</span>
                  </div>
                  {/* <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    JECRC '27
                  </span> */}
                </div>

                {/* Avatar Display */}
                <div className="w-40 h-40 mx-auto rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 to-purple-600 mb-5 shadow-lg shadow-cyan-500/20">
                  <img
                    src="/sanju.jpeg"
                    alt={personal.name}
                    className="w-full h-full object-cover rounded-full bg-[#030014]"
                  />
                </div>

                {/* Info List */}
                <div className="text-center space-y-1 mb-5">
                  <h3 className="text-xl font-bold text-white">{personal.name}</h3>
                  <p className="text-xs text-cyan-400 font-medium">@{personal.nickname} • {personal.role}</p>
                  <p className="text-xs text-gray-400 flex items-center justify-center gap-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {personal.location}
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>B.Tech in Information Technology</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>CGPA: 8.5 / 10 at JECRC Foundation</span>
                  </div> */}
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>MERN Stack & Data Science Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Pitch */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                Crafting Scalable Code & Intelligent Algorithms
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light mb-4">
                I am a passionate <strong className="text-cyan-300 font-semibold">Full-Stack Developer</strong> currently pursuing my B.Tech in Information Technology at <strong className="text-white">JECRC, Jaipur</strong> (Expected 2027).I focus on the intersection of modern full-stack web architectures and data science.
              </p>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-light mb-6">
                Through my Data Science Internship at <strong className="text-indigo-300">Celebal Technologies</strong> and intensive MERN training at <strong className="text-purple-300">V Techno Hub</strong>, I have developed production-grade projects like <strong className="text-cyan-300">KIRSI</strong> (an agricultural empowerment platform) and <strong className="text-cyan-300">PolluSense</strong> (an IoT and AI-driven pollution forecaster).
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/25"
                >
                  <FileText className="w-4 h-4" /> Quick Resume View
                </button>
                <a
                  href="#Timeline"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm transition-all"
                >
                  <GraduationCap className="w-4 h-4" /> View Experience & Education
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={GraduationCap}
            color="from-cyan-500 to-blue-500"
            value="8.11"
            label="B.Tech CGPA"
            description="JECRC Foundation, IT Dept"
            animation="fade-up"
          />
          <StatCard
            icon={Code2}
            color="from-indigo-500 to-purple-500"
            value="3+"
            label="Featured Projects"
            description="KIRSI, PolluSense & Portal"
            animation="fade-up"
          />
          <StatCard
            icon={Briefcase}
            color="from-purple-500 to-pink-500"
            value="2"
            label="Industry Trainings"
            description="Celebal & V Techno Hub"
            animation="fade-up"
          />
          <StatCard
            icon={Award}
            color="from-teal-500 to-cyan-500"
            value="15+"
            label="Core Tech Skills"
            description="MERN, C++, Python, ML"
            animation="fade-up"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutPage;