import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="w-full bg-[#030014] border-t border-white/5 py-8 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 space-y-3">
        <div className="flex items-center justify-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
            SS
          </span>
          <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-sm">
            {personal.name}
          </span>
        </div>

        <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
          <span>Engineered with passion</span>
          <span className="text-cyan-400">•</span>
          <span>Jaipur, India</span>
        </p>

        <p className="text-[11px] text-gray-500">
          © {currentYear} {personal.name} ({personal.nickname}). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;