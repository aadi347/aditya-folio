import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const borderVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const NanoProcess = () => {
  const techStack = [
    {
      num: "01",
      title: "Frontend Architecture",
      desc: "HTML, CSS, JavaScript, jQuery, EJS, React.js, Tailwind CSS, Framer Motion. Crafting responsive, high-fidelity interfaces with pixel-perfect precision.",
    },
    {
      num: "02",
      title: "Backend Systems",
      desc: "Node.js, Express.js,  Building robust, scalable RESTful APIs and microservices that handle complex business logic.",
    },
    {
      num: "03",
      title: "Data & Storage",
      desc: "PostgreSQL, MongoDB, Prisma ORM, MySQL. Designing efficient schemas and ensuring data integrity at scale.",
    },
  ];

  return (
    <section className="min-w-[100vw] h-screen flex flex-col justify-center px-6 md:px-20 bg-[#0a0a0a] text-white border-r border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-20">
          <span className="text-xs font-serif tracking-[0.3em] uppercase text-gray-500">
            (002.5) Engineering
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">
            The Technical <span className="italic text-gray-400">Doctrine</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techStack.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="space-y-4 pt-8 group transition-colors duration-500 relative"
            >
              {/* Animated Top Border */}
              <motion.div 
                variants={borderVariants}
                className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white/40 transition-colors duration-500 origin-left"
              />

              <span className="text-xs font-serif text-gray-500 block">
                / {item.num}
              </span>
              <h3 className="text-2xl font-serif italic text-white group-hover:text-gray-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 font-serif leading-relaxed pr-4">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NanoProcess;
