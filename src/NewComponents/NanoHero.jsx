import React from "react";
import { motion } from "framer-motion";

const NanoHero = () => {
  return (
    <section className="h-full flex flex-col md:flex-row items-center bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Content Side (Left) */}
      {/* Removed h-full to let flex box define height, enabling true vertical centering via parent items-center */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-20 z-10 w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-6 max-w-2xl"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-white/20"></span>
            <span className="text-xs font-serif tracking-[0.2em] uppercase text-gray-500">
              Portfolio 2026
            </span>
          </div>

          <h1 className="text-7xl md:text-[9rem] font-serif leading-[0.85] tracking-tight mix-blend-difference">
            Tailoring <br />
            <span className="italic pl-4 text-gray-200">Websites</span>
          </h1>

          <p className="max-w-md text-lg md:text-xl font-serif text-gray-400 italic leading-relaxed pt-8 border-l border-white/10 pl-6 ml-2">
            "Simplicity is the ultimate sophistication." <br />
            Crafting minimal, enterprise-grade digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Image Side (Right) */}
      <div className="absolute inset-0 md:static md:w-1/2 h-full flex items-center justify-center md:items-end md:justify-end overflow-hidden">
        {/* Minimal Grayscale Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          {/* Gradient Mask for seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 md:via-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />

          {/* The Image */}
          <img
            src="/aditya.jpg"
            alt="Aditya Kumar"
            className="w-full h-full object-cover object-center grayscale contrast-[1.1] opacity-40 md:opacity-60 hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
        </motion.div>
      </div>

      {/* Decorative Year */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block mix-blend-difference">
        <span className="font-serif text-[12rem] leading-none text-white/5 font-bold tracking-tighter">
          26
        </span>
      </div>
    </section>
  );
};

export default NanoHero;
