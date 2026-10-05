import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { toSlug } from "../utils/slug";

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available yet.");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available.");
    }
  };

  return (
    <div className="group relative w-full h-full flex flex-col">
      {/* Outer Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />

      <div className="relative overflow-hidden rounded-2xl bg-[#090820] backdrop-blur-xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full p-5 shadow-xl">
        <div>
          {/* Project Image Banner */}
          <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-black/40">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090820] via-transparent to-transparent opacity-60" />
          </div>

          {/* Project Info */}
          <div className="mt-4 space-y-2">
            <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-colors">
              {Title}
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {Description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between gap-2">
          {ProjectLink ? (
            <a
              href={ProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLiveDemo}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-gray-500 text-xs">In Development</span>
          )}

          {id ? (
            <Link
              to={`/project/${toSlug(Title)}`}
              onClick={handleDetails}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/15 to-purple-500/15 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-md shadow-cyan-500/10"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <span className="text-gray-500 text-xs">Details</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
