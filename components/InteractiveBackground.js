"use client"
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const InteractiveBackground = (isHome) => {
  console.log({isHome})
  const particlesInit = async (main) => {
    await loadSlim(main); // Loads the tsParticles library
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 50 },
          size:  isHome ? {value: 2} : {value: 1 },
          move: { enable: true, speed: 1 },
          color: { value: "#ffffff" },
          shape: {type: "star"}
        },
        // background: { color: { value: "#002D62" } },
        background: { color: { value: "#1a1a1a" } }
      }}
    />
  );
};

export default InteractiveBackground;
