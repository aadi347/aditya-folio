import React from "react";

const NanoContact = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
        <span className="text-xs font-serif tracking-widest uppercase text-gray-500">
          (004) Contact
        </span>

        <a
          href="mailto:aadi678a@gmail.com"
          className="text-6xl md:text-8xl font-serif italic hover:text-gray-300 transition-colors duration-500"
        >
          Let's Talk.
        </a>

        <div className="flex flex-col md:flex-row gap-8 md:gap-24 pt-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Email
            </span>
            <p className="font-serif text-lg">aadi678a@gmail.com</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Socials
            </span>
            <div className="flex gap-6 font-serif text-lg">
              <a
                href="https://www.linkedin.com/in/aditya-kumar-780709320/"
                className="hover:text-gray-400 underline decoration-white/20 underline-offset-4"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/aadi347"
                className="hover:text-gray-400 underline decoration-white/20 underline-offset-4"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/world_of_aadiie/"
                className="hover:text-gray-400 underline decoration-white/20 underline-offset-4"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@world_of_aadiiee"
                className="hover:text-gray-400 underline decoration-white/20 underline-offset-4"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Travel Section */}
        <div className="pt-16 max-w-2xl mx-auto space-y-4">
          <span className="text-sm uppercase tracking-widest text-gray-500 block">
            Beyond the Code
          </span>
          <p className="font-serif text-xs text-gray-300 italic leading-relaxed">
            "Outside of the digital realm, I am a global explorer seeking to
            understand the world's diverse narratives. My journeys across
            different cultures fuel my creativity, reminding me that the best
            design is often found in the unexpected corners of the globe."
          </p>
        </div>

        <div className="pt-14 w-full flex justify-between text-xs text-gray-600 font-serif uppercase tracking-wider">
          <span>Aditya Kumar © 2026</span>
          <span>Patna, India</span>
        </div>
      </div>
    </section>
  );
};

export default NanoContact;
