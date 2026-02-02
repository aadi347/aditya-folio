import React from "react";

const NoiseOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] h-full w-full overflow-hidden opacity-[0.035]">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      {/* Optional: Add a second layer for movement if using CSS animation on a background image, 
          but SVG filter is often efficient. 
          For the "animated" feel specified in the request, we can animate the baseFrequency or transform.
          Here we will use a CSS class to animate a background image approach which is often more performant for grain.
      */}
      <div className="absolute inset-0 h-[200%] w-[200%] animate-grain bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-[length:200px] opacity-100" />
    </div>
  );
};

// We will use a CSS-based grain for better performance animation than re-rendering SVG
// Updating the return to use the CSS method as primarily requested for "animated" feel.

const AnimatedNoise = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[50] mix-blend-overlay">
      <div
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      {/* Moving grain layer */}
      <div
        className="absolute top-[-50%] left-[-50%] h-[200%] w-[200%] animate-grain opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default AnimatedNoise;
