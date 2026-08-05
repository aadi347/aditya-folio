import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const projects = [
  {
    title: "Startup Bihar",
    category: "Government Portal for Department of Industries, Govt of Bihar",
    year: "2024-25",
    link: "https://startup.bihar.gov.in",
    role: "Frontend Developer",
    techStack: ["React", "Tailwind CSS", "CSS", "JavaScript", "JQuery"],
    challenges:
      "Architected a scalable portal to handle thousands of startup registrations and funding applications. Focused on data security, streamlined approval workflows, and an intuitive user interface for both administrators and applicants.",
  },
  {
    title: "Buddha Museum",
    category: "Ticket Booking",
    year: "2025",
    link: "https://buddhasamyak.bihar.gov.in/",
    role: "Lead Frontend Developer",
    techStack: ["React.js", "Tailwind Css", "CSS", "JavaScript"],
    challenges:
      "Built a high-performance ticket booking engine capable of handling concurrent transactions with zero downtime. Integrated virtual museum tours with a minimal, immersive aesthetic.",
  },
  {
    title: "BSFDFC Portal",
    category: "Single window NOC & Shooting Permission",
    year: "2025-26",
    link: "https://film.bihar.gov.in/",
    role: "Lead Backend Developer",
    techStack: ["Node.js", "Express", "MySQL", "Prisma ORM", "REST APIs"],
    challenges:
      "Designed a dynamic, media-rich portal to showcase Bihar's film industry initiatives. Optimized large image and video assets for fast loading and created cinematic scroll animations.",
  },
  {
    title: "Know My India",
    category: "Data Visualization",
    year: "2026",
    link: "https://knowmyindia-rho.vercel.app/",
    role: "Full Stack Engineer",
    techStack: ["React", "Tailwind CSS", "D3.js"],
    challenges:
      "Created complex data visualizations in a minimal dark-mode aesthetic. Focused on performance and rendering large datasets seamlessly in the browser.",
  },
  {
    title: "Telemetry",
    category: "ISS Tracker",
    year: "2026",
    link: "https://telemetry-pi-swart.vercel.app/",
    role: "Full Stack Engineer",
    techStack: [
      "Cesium.js",
      "React",
      "Tailwind Css",
      "CSS",
      "JavaScript",
      "JQuery",
    ],
    challenges:
      "Developed a seamless headless checkout experience with high conversions. Implemented edge caching for instant product page loads.",
  },
];

const bentoClasses = [
  "md:col-span-2 md:row-span-2", // 0: Large
  "md:col-span-1 md:row-span-1", // 1: Top Right
  "md:col-span-1 md:row-span-1", // 2: Middle Right
  "md:col-span-2 md:row-span-1", // 3: Bottom Left Wide
  "md:col-span-1 md:row-span-1", // 4: Bottom Right
];

const NanoWork = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-white border-t border-white/10 relative z-10 w-full min-h-screen">
      <div className="max-w-7xl mx-auto relative h-full flex flex-col justify-center">
        <div className="mb-12">
          <span className="text-xs font-serif tracking-widest uppercase text-gray-500">
            (002) Selected Works
          </span>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(250px,auto)] md:auto-rows-[minmax(220px,1fr)] gap-4 md:gap-6 relative z-20"
        >
          {projects.map((project, index) => (
            <BentoItem
              key={index}
              project={project}
              spanClass={bentoClasses[index]}
              index={index}
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

const BentoItem = ({ project, spanClass, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLarge = index === 0;

  return (
    <motion.a
      variants={itemVariants}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className={`group relative overflow-hidden bg-[#0a0a0a]/50 border border-white/10 hover:border-white/30 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:bg-[#111111] text-left cursor-pointer ${spanClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ viewTransitionName: `project-card-${index}` }}
    >
      {/* Background Gradient Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Top Header */}
      <div className="flex justify-between items-start w-full relative z-10">
        <span className="text-xs font-serif tracking-widest uppercase text-gray-500">
          {project.year}
        </span>
        <div className="overflow-hidden">
          <ArrowUpRight
            className={`w-5 h-5 text-gray-400 transition-transform duration-500 ${isHovered ? "rotate-45 scale-110 text-white" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 mt-12 md:mt-0 space-y-2 w-full">
        <h3
          className={`${isLarge ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"} font-serif italic transition-all duration-300 group-hover:text-gray-200`}
        >
          {project.title}
        </h3>
        <p className="text-xs md:text-sm font-serif text-gray-500 uppercase tracking-widest">
          {project.category}
        </p>
      </div>
    </motion.a>
  );
};

export default NanoWork;
