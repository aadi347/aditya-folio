import React from "react";
import { motion } from "framer-motion";

const NanoAbout = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Label */}
          <div className="md:col-span-3">
            <span className="text-xs font-serif tracking-widest uppercase text-gray-500">
              (001) About
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9 space-y-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-serif leading-tight"
            >
              I am a developer focused on{" "}
              <span className="italic text-gray-400">simplicity</span> and{" "}
              <span className="italic text-gray-400">function</span>. My work
              strips away the unnecessary to reveal the essential.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-serif text-gray-300 leading-relaxed">
              <p>
                In a digital landscape often cluttered with noise, I strive for
                silence. My approach to development is rooted in the belief that
                the most effective solutions are often the simplest ones. I
                build scalable, robust applications that prioritize user
                experience without compromising on performance.
              </p>
              <p>
                With a background in modern web technologies and a keen eye for
                aesthetic detail, I collaborate with clients to transform
                complex requirements into clean, intuitive interfaces. Every
                line of code is deliberate; every pixel has a purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NanoAbout;
