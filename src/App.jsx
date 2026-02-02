import React, { useRef, useState, useEffect } from "react";
import NanoHero from "./NewComponents/NanoHero";
import NanoAbout from "./NewComponents/NanoAbout";
import NanoPhilosophy from "./NewComponents/NanoPhilosophy";
import NanoWork from "./NewComponents/NanoWork";
import NanoProcess from "./NewComponents/NanoProcess";

import NanoContact from "./NewComponents/NanoContact";
import CustomCursor from "./NewComponents/CustomCursor";
import NoiseOverlay from "./NewComponents/NoiseOverlay";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Window resize listener to detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Section styling for the sticky effect
  // sticky: Stick to the top
  // top-0: Position at the top
  // h-screen: Full viewport height to cover the previous section completely
  // w-full: Full width
  // bg-[#0a0a0a]: Ensure opacity so it covers the content behind
  const sectionClass =
    "sticky top-0 h-screen w-full bg-[#0a0a0a] flex items-center justify-center border-b border-white/5 overflow-hidden";

  return (
    <main
      className={`bg-[#0a0a0a] text-white selection:bg-white/20 min-h-screen ${isMobile ? "cursor-auto" : "cursor-none"}`}
    >
      {/* Show Custom Cursor only on Desktop */}
      {!isMobile && <CustomCursor />}
      <NoiseOverlay />

      {/* 
        Stacking Layout Implementation:
        We act as a normal vertical scrolling page.
        Each section is 'sticky' at the top.
        As you scroll down, the next section slides UP (native scroll) and sticks at top:0,
        covering the previous one because it appears later in the DOM (higher stacking context).
      */}

      <div className="flex flex-col relative">
        {/* Section 1: Hero */}
        <section className={`${sectionClass} z-[1] border-b-0`}>
          <div className="w-full h-full">
            <NanoHero />
          </div>
        </section>

        {/* Section 2: About */}
        <section className={`${sectionClass} z-[2]`}>
          <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center">
            <div className="w-full">
              <NanoAbout />
            </div>
          </div>
        </section>

        {/* Section 3: Philosophy */}
        <section className={`${sectionClass} z-[3]`}>
          <div className="w-full h-full flex items-center">
            <NanoPhilosophy />
          </div>
        </section>

        {/* Section 4: Work */}
        <section className={`${sectionClass} z-[4]`}>
          <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center">
            <div className="w-full">
              <NanoWork />
            </div>
          </div>
        </section>

        {/* Section 5: Process */}
        <section className={`${sectionClass} z-[5]`}>
          <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center">
            <NanoProcess />
          </div>
        </section>

        {/* Section 7: Contact */}
        <section className={`${sectionClass} z-[7]`}>
          <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center">
            <div className="w-full">
              <NanoContact />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
