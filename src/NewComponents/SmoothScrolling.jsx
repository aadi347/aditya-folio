// components/SmoothScrolling.jsx
"use client"; // For Next.js App Router

import { ReactLenis } from "lenis/dist/lenis-react.mjs";

function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 0.1, // Linear interpolation intensity (0-1)
    duration: 1.5, // Scroll duration in seconds
    smoothTouch: false, // Enable smooth scroll for touch devices
    smooth: true, // Enable smooth scrolling
    direction: "vertical", // Scroll direction
    gestureDirection: "vertical", // Gesture direction
    mouseMultiplier: 1, // Mouse wheel sensitivity
    touchMultiplier: 2, // Touch sensitivity
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
