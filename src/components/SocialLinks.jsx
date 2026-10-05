import React, { useEffect } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Mail,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { portfolioData } from "../data/portfolioData";

export default function SocialLinks() {
  const { personal } = portfolioData;

  const socialLinks = [
    {
      name: "LinkedIn",
      displayName: "LinkedIn",
      subText: "sanjaysingh20",
      icon: Linkedin,
      url: personal.socials.linkedin,
      color: "#0A66C2",
      gradient: "from-[#0A66C2] to-[#0077B5]",
      isPrimary: true,
    },
    {
      name: "GitHub",
      displayName: "GitHub",
      subText: `@${personal.nickname}`,
      icon: Github,
      url: personal.socials.github,
      color: "#22d3ee",
      gradient: "from-[#0891b2] to-[#06b6d4]",
    },
    {
      name: "Instagram",
      displayName: "Instagram",
      subText: "@sanjubana_20",
      icon: Instagram,
      url: personal.socials.instagram,
      color: "#E4405F",
      gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
    },
    {
      name: "Email",
      displayName: "Email",
      subText: personal.email,
      icon: Mail,
      url: personal.socials.emailLink,
      color: "#8b5cf6",
      gradient: "from-[#6366f1] to-[#a855f7]",
    },
  ];

  const linkedIn = socialLinks[0];
  const otherLinks = socialLinks.slice(1);

  useEffect(() => {
    AOS.init({
      offset: 10,
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-2xl p-6 py-8 backdrop-blur-xl border border-white/10">
      <h3
        className="text-lg font-bold text-white mb-5 flex items-center gap-2"
        data-aos="fade-down" 
      >
        <span className="inline-block w-6 h-1 bg-cyan-400 rounded-full"></span>
        Connect Directly
      </h3>

      <div className="flex flex-col gap-3">
        {/* LinkedIn - Primary Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-3.5 rounded-xl 
                     bg-white/[0.03] border border-white/10 overflow-hidden
                     hover:border-cyan-500/40 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100" 
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300
                       bg-gradient-to-r ${linkedIn.gradient}`}
          />

          <div className="relative flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#0A66C2]">
              <linkedIn.icon className="w-5 h-5 text-cyan-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-tight leading-none group-hover:text-cyan-200 transition-colors">
                {linkedIn.displayName}
              </span>
              <span className="text-xs text-gray-400 mt-1">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
        </a>

        {/* Other Links */}
        <div className="grid grid-cols-1 gap-2.5">
          {otherLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-3 rounded-xl 
                               bg-white/[0.02] border border-white/5 overflow-hidden
                               hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay={200 + index * 100} 
            >
              <div className="relative flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <link.icon className="w-4 h-4 text-cyan-400" />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {link.displayName}
                  </span>
                  <span className="text-[11px] text-gray-400 truncate">
                    {link.subText}
                  </span>
                </div>
              </div>

              <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-300 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}