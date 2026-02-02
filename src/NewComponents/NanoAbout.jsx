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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                Hey there, this is{" "}
                <span className="text-gray-400 italic">Aditya Kumar</span>.
              </h2>
              <p className="text-xl md:text-2xl font-serif text-gray-200/80 leading-relaxed max-w-3xl">
                I am passionate about creating websites that meet and exceed my
                clients' expectations, delivering high-quality results tailored
                to each need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-serif text-gray-400 leading-relaxed">
              <div className="space-y-6">
                <p>
                  <span className="text-white block mb-2 text-sm tracking-widest uppercase opacity-60">
                    The Story
                  </span>
                  Back in 2012, I got my first computer to play games. What
                  started as just the fun of enjoying games as a boy soon turned
                  into a curiosity to know what makes them so interesting. With
                  ideas of my own to improve the experience, I discovered my
                  passion to become a developer—to give the same joy to the
                  world that I experienced when I played my first game.
                </p>
                <p>
                  My goal is to provide every client with a positive and{" "}
                  <span className="text-white italic">
                    unforgettable experience
                  </span>
                  .
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-white block mb-2 text-sm tracking-widest uppercase opacity-60">
                    Tech Stack
                  </span>
                  <p className="mb-4">
                    My technical expertise includes JavaScript, Node.js,
                    Express.js, React.js, MongoDB, and PostgreSQL. I have
                    comprehensive experience in all stages of the development
                    cycle for modern, dynamic website designs.
                  </p>
                </div>

                <div>
                  <span className="text-white block mb-2 text-sm tracking-widest uppercase opacity-60">
                    Beyond Code
                  </span>
                  <p>
                    Outside of web development, I am an avid traveler exploring
                    different cultures and a{" "}
                    <span className="text-white italic">
                      skilled master chef
                    </span>{" "}
                    creative in cooking as in developing. I believe myself to be
                    a quick learner eager to work hard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NanoAbout;
