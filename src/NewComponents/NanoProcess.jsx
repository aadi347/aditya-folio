import React from "react";

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
    {
      num: "04",
      title: "DevOps & Cloud",
      desc: "Docker, AWS, Nginx. Automating deployment pipelines and optimizing server infrastructure for performance.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((item, idx) => (
            <div
              key={idx}
              className="space-y-4 border-t border-white/10 pt-8 group hover:border-white/40 transition-colors duration-500"
            >
              <span className="text-xs font-serif text-gray-500 block">
                / {item.num}
              </span>
              <h3 className="text-2xl font-serif italic text-white group-hover:text-gray-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 font-serif leading-relaxed pr-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NanoProcess;
