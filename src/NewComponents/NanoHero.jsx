import React from "react";
import { motion } from "framer-motion";

const NanoHero = () => {
  return (
    <section className="h-full flex flex-col md:flex-row items-center bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Content Side (Left) */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-20 z-10 w-full md:w-1/2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          className="space-y-6 max-w-2xl"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-white/20"></span>
            <span className="text-xs font-serif tracking-[0.2em] uppercase text-gray-500">
              Portfolio 2026
            </span>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-7xl md:text-[9rem] font-serif leading-[0.85] tracking-tight mix-blend-difference"
          >
            Tailoring <br />
            <span className="italic pl-4 text-gray-200">Websites</span>
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 } }
            }}
            className="max-w-md text-lg md:text-xl font-serif text-gray-400 italic leading-relaxed pt-8 border-l border-white/10 pl-6 ml-2"
          >
            "Simplicity is the ultimate sophistication." <br />
            Crafting minimal, enterprise-grade digital experiences.
          </motion.p>
        </motion.div>
      </div>

      {/* Image Side (Right) */}
      <div className="absolute inset-0 md:static md:w-1/2 h-full flex items-center justify-center md:items-end md:justify-end overflow-hidden">
        {/* Minimal Grayscale Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
          style={{ viewTransitionName: 'hero-image' }}
        >
          {/* The Images Container for Multiple Exposure Effect */}
          <div className="absolute inset-0 w-full h-full">
            {/* Echo 3 (Furthest Back) */}
            <motion.img
              src="/aditya_hero.jpg"
              alt=""
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: "-9%", opacity: 0.15 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-[1.15] mix-blend-lighten"
            />
            
            {/* Echo 2 (Middle) */}
            <motion.img
              src="/aditya_hero.jpg"
              alt=""
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: "-6%", opacity: 0.25 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-[1.15] mix-blend-lighten"
            />
            
            {/* Echo 1 (Closest) */}
            <motion.img
              src="/aditya_hero.jpg"
              alt=""
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: "-3%", opacity: 0.35 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-[1.15] mix-blend-lighten"
            />

            {/* Main Image */}
            <img
              src="/aditya_hero.jpg"
              alt="Aditya Kumar"
              className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-[1.15] opacity-45 md:opacity-65 relative z-10"
            />
          </div>

          {/* Gradient Masks for seamless blend (moved after images with z-20 to ensure it covers shifted edges) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-20 md:via-[#0a0a0a]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-20 pointer-events-none" />
        </motion.div>
      </div>

      {/* Decorative Year */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="absolute bottom-10 right-10 z-20 hidden md:block mix-blend-difference"
      >
        <span className="font-serif text-[12rem] leading-none text-white/5 font-bold tracking-tighter">
          26
        </span>
      </motion.div>
    </section>
  );
};

export default NanoHero;
