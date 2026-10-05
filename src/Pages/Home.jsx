import React, { useState, useEffect, useCallback, memo } from "react";
import { Helmet } from "react-helmet-async";
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles, FileText, ArrowRight, Terminal } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolioData } from "../data/portfolioData";

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-cyan-500/30">
        <span className="bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-300 text-transparent bg-clip-text sm:text-sm text-[0.75rem] font-semibold flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3.5 h-3.5 mr-2 text-cyan-400 animate-pulse" />
          Available for Opportunities 
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <p className="text-cyan-400 font-mono text-sm sm:text-base flex items-center gap-2">
      <Terminal className="w-4 h-4 text-cyan-400" />
      <span>Hello, I am</span>
    </p>
    <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 blur-2xl opacity-40"></span>
        <span className="relative bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
          Sanjay
        </span>
      </span>{" "}
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-2xl opacity-40"></span>
        <span className="relative bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          Singh
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-sm border border-cyan-500/20 text-xs sm:text-sm text-cyan-200/90 hover:border-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 cursor-default">
    {tech}
  </div>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-2.5" aria-label={label}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2.5 flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 transition-colors" />
      </div>
    </button>
  </a>
));

const TYPING_SPEED = 90;
const ERASING_SPEED = 40;
const PAUSE_DURATION = 2200;
const WORDS = [
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "Data Science Enthusiast",
  "open-source Contributor"
];
const TECH_STACK = ["React.js", "Node.js", "Express.js", "MongoDB", "C++", "Python", "Tailwind CSS"];

const Home = ({ onOpenResume }) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { personal } = portfolioData;

  const SOCIAL_LINKS = [
    { icon: Github, link: personal.socials.github, label: "GitHub Profile" },
    { icon: Linkedin, link: personal.socials.linkedin, label: "LinkedIn Profile" },
    { icon: Instagram, link: personal.socials.instagram, label: "Instagram Profile" },
    { icon: Mail, link: personal.socials.emailLink, label: "Email Sanjay" }
  ];

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <>
      <Helmet>
        <title>{personal.name} — {personal.role}</title>
        <meta name="description" content={personal.bio} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://localhost:5173/" />
        <meta property="og:title" content={`${personal.name} — ${personal.role}`} />
        <meta property="og:description" content={personal.tagline} />
      </Helmet>

      <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] relative flex items-center" id="Home">
        {/* Background Cyberpunk Ambient Glows */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className={`relative z-10 w-full py-24 lg:py-0 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              
              {/* Left Column - Intro & Bio */}
              <div
                className="w-full lg:w-3/5 space-y-6 sm:space-y-7 text-left order-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <StatusBadge />
                <MainTitle />

                {/* Typing Effect */}
                <div className="h-9 flex items-center" data-aos="fade-up" data-aos-delay="800">
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                    {text}
                  </span>
                  <span className="w-1 h-7 bg-cyan-400 ml-1.5 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
                </div>

                {/* Tagline & Pitch */}
                <p
                  className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  {personal.tagline}
                </p>
                <p className="text-sm text-gray-400 max-w-xl font-light">
                  {personal.bio}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2.5 justify-start pt-1" data-aos="fade-up" data-aos-delay="1200">
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap gap-3.5 w-full justify-start pt-3" data-aos="fade-up" data-aos-delay="1400">
                  <a href="#Portofolio">
                    <button className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-semibold text-sm text-white flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/25">
                      <span>View Projects</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>

                  <button
                    onClick={onOpenResume}
                    className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-cyan-500/30 text-cyan-300 hover:text-white font-semibold text-sm flex items-center gap-2 hover:border-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/10"
                  >
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span>View Resume</span>
                  </button>

                  <a href="#Contact">
                    <button className="px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-gray-300 hover:text-white font-medium text-sm flex items-center gap-2 transition-all">
                      <Mail className="w-4 h-4 text-indigo-400" />
                      <span>Contact</span>
                    </button>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 justify-start pt-2" data-aos="fade-up" data-aos-delay="1600">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>

              {/* Right Column - Futuristic Interactive Avatar & Stats */}
              <div
                className="w-full lg:w-2/5 flex flex-col items-center justify-center order-2 relative"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="relative group">
                  {/* Glowing Animated Outer Rings */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-700 animate-pulse"></div>

                  {/* Avatar Container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-[#060419] border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(34,211,238,0.25)] flex items-center justify-center overflow-hidden">
                    <img
                      src="/sanju.jpeg"
                      alt={personal.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating Micro Badge - CGPA */}
                  {/* <div className="absolute -bottom-3 -right-2 px-4 py-2 rounded-2xl bg-[#0a0a25]/90 backdrop-blur-md border border-cyan-500/40 shadow-xl shadow-cyan-500/20 flex items-center gap-2 animate-float">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-semibold">JECRC B.Tech IT</p>
                      <p className="text-xs font-bold text-white">CGPA 8.1 / 10</p>
                    </div>
                  </div> */}

                  {/* Floating Micro Badge - Role */}
                  <div className="absolute -top-3 -left-3 px-4 py-2 rounded-2xl bg-[#0a0a25]/90 backdrop-blur-md border border-purple-500/40 shadow-xl shadow-purple-500/20 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]"></span>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-semibold">Specialization</p>
                      <p className="text-xs font-bold text-cyan-300">Full-Stack & Data Science</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;