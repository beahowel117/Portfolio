'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";

function AnimatedBackground() {
  useEffect(() => {
    // Create an animation for multiple elements (like circles)
    gsap.to(".circle", {
      x: "100vw",
      y: "100vh",
      rotation: 360,
      scale: 0.5,
      opacity: 0,
      repeat: -1,
      duration: 8,
      ease: "linear",
      stagger: 1,
    });
  }, []);

  return (
    <div className="animated-background">
      {/* Create several circle elements */}
      <div className="circle" style={{ position: "absolute", top: "20%", left: "20%" }}></div>
      <div className="circle" style={{ position: "absolute", top: "50%", left: "50%" }}></div>
      <div className="circle" style={{ position: "absolute", top: "80%", left: "70%" }}></div>
    </div>
  );
}

export default AnimatedBackground;
