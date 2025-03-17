'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import InteractiveBackground from "@/components/InteractiveBackground";
import ViewWorkButton from "@/components/ViewWorkButton";
import ParticlesBackground from "@/components/ParticlesBackground";


function Home() {
  // Create refs for the elements you want to animate
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    // Define the GSAP animations
    const tl = gsap.timeline();

    tl.fromTo(
      h1Ref.current,
      { opacity: 0, y: -20 }, // Initial state
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Final state
    ).fromTo(
      h2Ref.current,
      { opacity: 0, y: -20 }, // Initial state
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }, // Final state
      "<" // Start at the same time as the previous animation
    );
  }, []);

  return (
    <section className="intro">
      <InteractiveBackground isHome />
      {/* <ParticlesBackground /> */}
        <main
          style={{
            position: "relative",
            zIndex: 3, // Ensure this is above the background and overlay
            color: "white",
            textAlign: "center",
            marginTop: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h1 ref={h1Ref}>Hello, I'm <span className="sparkly-text">Beth</span></h1>
          <h2 ref={h2Ref}>I'm a Software Engineer.</h2>
          <ViewWorkButton />
        </main>
      </section >

  );
}

export default Home;
