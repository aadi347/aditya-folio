import React from "react";

const NanoPhilosophy = () => {
  return (
    <section className="min-w-[100vw] h-screen flex flex-col justify-center px-6 md:px-20 bg-[#0a0a0a] text-white border-r border-white/5 relative">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <span className="text-xs font-serif tracking-[0.3em] uppercase text-gray-500">
          (001.5) Philosophy
        </span>

        <h2 className="text-4xl md:text-6xl font-serif leading-tight">
          "Design is not just what it looks like and feels like. <br />
          <span className="italic text-gray-400">Design is how it works.</span>"
        </h2>

        <div className="w-px h-24 bg-white/20 mx-auto"></div>

        <p className="max-w-2xl mx-auto text-lg md:text-xl font-serif text-gray-300 leading-relaxed">
          We believe in the power of subtraction. By removing the non-essential,
          we amplify the significant. Our work exists at the intersection of
          stark minimalism and robust engineering, creating digital artifacts
          that are as functional as they are beautiful.
        </p>
      </div>
    </section>
  );
};

export default NanoPhilosophy;
