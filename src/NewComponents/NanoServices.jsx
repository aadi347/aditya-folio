import React from "react";

const services = [
  {
    name: "Discovery & Architecture",
    desc: "Translating abstract ideas into concrete technical blueprints. Planning scalable schemas and robust system flows before a single line of code is written.",
  },
  {
    name: "Full Stack Engineering",
    desc: "End-to-end development using modern frameworks. Seamlessly integrating responsive frontends with powerful, logic-driven backends.",
  },
  {
    name: "API & Data Integration",
    desc: "Architecting efficient RESTful APIs and database structures. Ensuring secure, high-speed data flow between the server and client.",
  },
  {
    name: "Production & Deployment",
    desc: "Taking the product from local environment to global availability. Configuring cloud infrastructure, CI/CD pipelines, and ensuring 99.9% uptime.",
  },
];

const NanoServices = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="text-xs font-serif tracking-widest uppercase text-gray-500">
              (003) Scope of Work
            </span>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {services.map((service, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="text-2xl font-serif italic text-gray-200">
                    0{idx + 1}. {service.name}
                  </h4>
                  <p className="text-gray-400 font-serif leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NanoServices;
