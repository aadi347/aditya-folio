import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import NanoHero from "./NewComponents/NanoHero";
import NanoAbout from "./NewComponents/NanoAbout";
import NanoPhilosophy from "./NewComponents/NanoPhilosophy";
import NanoWork from "./NewComponents/NanoWork";
import NanoProcess from "./NewComponents/NanoProcess";
// import NanoTeam from "./NewComponents/NanoTeam";

import NanoContact from "./NewComponents/NanoContact";
import CustomCursor from "./NewComponents/CustomCursor";
import NoiseOverlay from "./NewComponents/NoiseOverlay";

// Wrapper for the smooth fluid view-transition style parallax effect
const SectionWrapper = ({ children, index }) => {
  const { scrollY } = useScroll();

  // Calculate window height for scroll mapping (fallback to 800 for SSR)
  const [winHeight, setWinHeight] = useState(800);
  useEffect(() => {
    setWinHeight(window.innerHeight);
    const handleResize = () => setWinHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const start = index * winHeight;
  const end = (index + 1) * winHeight;

  // As the next section scrolls up over this one, this one moves up, scales down, and fades slightly.
  const y = useTransform(scrollY, [start, end], [0, -150]);
  const scale = useTransform(scrollY, [start, end], [1, 0.95]);
  const opacity = useTransform(scrollY, [start, end], [1, 0.3]);

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className="w-full h-full origin-top"
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listen to path changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    // Intercept history pushState/replaceState to make routing dynamic
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };
    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handleLocationChange();
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

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
          <SectionWrapper index={0}>
            <NanoHero />
          </SectionWrapper>
        </section>

        {/* Section 2: About */}
        <section className={`${sectionClass} z-[2]`}>
          <SectionWrapper index={1}>
            <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center">
              <div className="w-full">
                <NanoAbout />
              </div>
            </div>
          </SectionWrapper>
        </section>

        {/* Section 3: Philosophy */}
        <section className={`${sectionClass} z-[3]`}>
          <SectionWrapper index={2}>
            <div className="w-full h-full flex items-center">
              <NanoPhilosophy />
            </div>
          </SectionWrapper>
        </section>

        {/* Section 4: Work */}
        <section className={`${sectionClass} z-[4]`}>
          <SectionWrapper index={3}>
            <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center">
              <div className="w-full">
                <NanoWork />
              </div>
            </div>
          </SectionWrapper>
        </section>

        {/* Section 5: Process */}
        <section className={`${sectionClass} z-[5]`}>
          <SectionWrapper index={4}>
            <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center">
              <NanoProcess />
            </div>
          </SectionWrapper>
        </section>

        {/* Section 6: Team
        <section className={`${sectionClass} z-[6]`}>
          <SectionWrapper index={5}>
            <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center bg-[#FAF9F6]">
              <div className="w-full">
                <NanoTeam />
              </div>
            </div>
          </SectionWrapper>
        </section> */}

        {/* Section 7: Contact */}
        <section className={`${sectionClass} z-[7]`}>
          <SectionWrapper index={6}>
            <div className="w-full h-full overflow-y-auto no-scrollbar flex items-center">
              <div className="w-full">
                <NanoContact />
              </div>
            </div>
          </SectionWrapper>
        </section>
      </div>
    </main>
  );
};

export default App;
