import React from "react";
import { motion } from "framer-motion";

const interests = [
  {
    title: "The Vision",
    category: "Perspective",
    img: "/20250520_130631.jpg",
  },
  {
    title: "The Journey",
    category: "Travel",
    img: "/20250626_163116.jpg",
  },
  {
    title: "The Craft",
    category: "Passion",
    img: "/20251016_125823.jpg",
  },
  {
    title: "The Moment",
    category: "Life",
    img: "/20250319_080451.png",
  },
  {
    title: "The Memory",
    category: "Timeless",
    img: "/20250517_160703.png",
  },
  {
    title: "The Story",
    category: "Narrative",
    img: "/20250519_103428.png",
  },
  {
    title: "The Detail",
    category: "Focus",
    img: "/20250518_152106(1).png",
  },
  {
    title: "The Focus",
    category: "Focus",
    img: "/gallery.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const NanoPhilosophy = () => {
  return (
    <section className="h-full w-full bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-center py-20 relative">
      <div className="absolute top-10 left-6 md:left-20 z-10 mix-blend-difference">
        <span className="text-xs font-serif tracking-widest uppercase text-gray-400">
          (001.5) Life Beyond Code
        </span>
      </div>

      <div className="w-full h-[60vh] md:h-[70vh] flex items-center overflow-x-auto no-scrollbar px-6 md:px-20 gap-4 md:gap-8 snap-x snap-mandatory">
        {interests.map((item, index) => (
          <motion.div
            key={index}
            className="relative min-w-[85vw] md:min-w-[30vw] h-full flex-shrink-0 group overflow-hidden border border-white/10 snap-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Image Container */}
            <div className="absolute inset-0 w-full h-full bg-gray-900">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

            {/* Content Labels */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col">
              <motion.span variants={textVariants} className="block text-xs font-serif tracking-[0.2em] text-[#22d3ee] uppercase mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </motion.span>
              <motion.h3 variants={textVariants} className="text-3xl md:text-4xl font-serif italic text-white/90 group-hover:text-white transition-colors">
                {item.title}
              </motion.h3>
            </div>

            {/* Hover visual cue */}
            <div className="absolute top-4 right-4 text-xs font-serif text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              0{index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NanoPhilosophy;
