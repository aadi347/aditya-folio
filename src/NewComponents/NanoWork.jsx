import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Startup Bihar",
    category: "Bihar Startup Website",
    year: "2024-25",
    link: "https://startup.bihar.gov.in",
  },
  {
    title: "Buddha Samyak Darshan Museum",
    category: "Buddha Samyak Darshan Museum Experience & Ticket Booking System",
    year: "2025",
    link: "https://buddhasamyak.bihar.gov.in/",
  },
  {
    title: "BSFDFC Portal",
    category: "Bihar State Film Development and Finance Corporation",
    year: "2025-26",
    link: "https://biharfilm.web.app/",
  },
];

const NanoWork = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-white border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="text-xs font-serif tracking-widest uppercase text-gray-500">
              (002) Selected Works
            </span>
          </div>

          <div className="md:col-span-9 relative">
            <div className="space-y-0 relative z-20">
              {projects.map((project, index) => (
                <ProjectItem key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="block group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 group-hover:border-white/30 relative z-30 bg-[#0a0a0a]/50 hover:bg-[#0a0a0a]/80 backdrop-blur-[1px] transition-all duration-500">
        <div className="space-y-2">
          <h3 className="text-3xl md:text-5xl font-serif italic transition-all duration-300 group-hover:text-gray-200 group-hover:translate-x-4">
            {project.title}
          </h3>
          <p className="text-sm font-serif text-gray-500 uppercase tracking-widest group-hover:translate-x-4 transition-transform duration-300">
            {project.category} — {project.year}
          </p>
        </div>

        <div className="mt-6 md:mt-0 flex items-center gap-4 overflow-hidden">
          <span
            className={`text-sm font-serif transition-transform duration-500 ${isHovered ? "translate-x-0 opacity-100" : "translate-x-[20px] opacity-0"}`}
          >
            View Case Study
          </span>
          <ArrowUpRight
            className={`w-5 h-5 transition-transform duration-500 ${isHovered ? "rotate-45 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
    </a>
  );
};

export default NanoWork;
